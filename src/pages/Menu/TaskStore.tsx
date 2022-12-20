import {
  AutocompleteInput, Datagrid, List,
  ReferenceField, SimpleShowLayout,
  TextField,
  UrlField, WithRecord
} from 'react-admin';
import {Edit, ReferenceInput, SimpleForm, TextInput} from 'react-admin';

const TaskStorePanel = (props: any) => (
  <SimpleShowLayout {...props}>
    <TextField source="filename"/>
    <WithRecord label="Size" render={(record) => <span>{formatBytes(record.size)}</span>} />
    <TextField source="media_type" />
  </SimpleShowLayout>
)

function formatBytes(a: number, b = 2) {
  if (!+a) return "0 Bytes";
  const c = 0 > b ? 0 : b, d = Math.floor(Math.log(a) / Math.log(1024));
  return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]}`
}


export const TaskStoreList = () => {
  return (
    <List>
      <Datagrid rowClick="edit" expand={TaskStorePanel}>
        <ReferenceField source="task_id" reference="tasks" link="show">
          <TextField source="title"/>
          <TextField source="study_group_cipher_id"/>
          <TextField source="student_id"/>
        </ReferenceField>
        <UrlField source="url"/>
        <TextField source="size" label={"Size (bytes)"}/>
      </Datagrid>
    </List>
  )
};


export const TaskStoreEdit = () => (
    <Edit>
        <SimpleForm >
            <ReferenceInput source="task_id" reference="tasks" >
              <AutocompleteInput optionText="id" optionValue="id" disabled />
            </ReferenceInput>
            <TextInput source="url" />
            <TextInput source="filename" />
        </SimpleForm>
    </Edit>
);
