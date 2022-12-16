import {
  AutocompleteInput,
  ChipField,
  Datagrid, List,
  ReferenceField,
  SimpleShowLayout,
  TextField
} from 'react-admin';
import { Edit, ReferenceInput, SimpleForm } from 'react-admin';

const TeacherPanel = (props: any) => (
  <SimpleShowLayout {...props}>
    <ReferenceField source="discipline_id" reference="disciplines">
      <ChipField source="title" />
    </ReferenceField>
  </SimpleShowLayout>
)


export const TeacherList = () => (
    <List>
      <Datagrid rowClick="edit" expand={TeacherPanel} expandSingle>
        <TextField source="id" />
        <ReferenceField source="user_id" reference="users/role/teachers">
          <TextField source="email" />
        </ReferenceField>
        <ReferenceField source="discipline_id" reference="disciplines">
          <ChipField source="title" />
        </ReferenceField>
      </Datagrid>
    </List>
);


export const TeacherEdit = () => (
    <Edit>
      <SimpleShowLayout>
          <TextField source="id" label={"Teacher"} />
      </SimpleShowLayout>
      <SimpleForm>
        <ReferenceInput source="user_id" reference="users/role/teachers">
          <TextField source="email" />
        </ReferenceInput>
        <ReferenceInput source="discipline_id" reference="disciplines">
          <AutocompleteInput source="title" optionText="title" optionValue="id"/>
        </ReferenceInput>
      </SimpleForm>
    </Edit>
);
