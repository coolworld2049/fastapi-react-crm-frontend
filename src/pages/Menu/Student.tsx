import {
  AutocompleteInput,
  ChipField,
  Datagrid,
  Edit,
  List,
  ReferenceField,
  ReferenceInput,
  ReferenceManyField, SimpleForm,
  SimpleShowLayout,
  TextField
} from 'react-admin';
import {PanelTypedDisciplineCampus} from "./TypedDiscipline";


export const PanelStudentDiscipline = (props: any) => (
  <ReferenceManyField  source="study_group_cipher_id"
                       reference="study_group_disciplines"
                       target="study_group_cipher_id">
    <Datagrid bulkActionButtons={false}
              expand={PanelTypedDisciplineCampus({
                source: 'discipline_id', reference: 'typed_disciplines', target: 'discipline_id'
              })}
              expandSingle>
      <ReferenceManyField source="discipline_id"
                          reference="typed_disciplines"
                          target="discipline_id" >
        <ReferenceField source="discipline_id"
                        reference="disciplines"
                        link={(record, reference) => `/disciplines/${record.discipline_id}/show`}>
          <TextField source="title" />
        </ReferenceField>
      </ReferenceManyField>
    </Datagrid>
  </ReferenceManyField>
);
export const StudentList = () => {
  return (
    <List>
      <Datagrid rowClick="edit" expand={PanelStudentDiscipline} expandSingle>
        <ReferenceField source="id"
                        reference="users/role/students"
                        link={(record, reference) => `/students/${record.id}/show`}>
          <TextField source="email"/>
          <ChipField source="role"/>
        </ReferenceField>
        <ReferenceField source="study_group_cipher_id" reference="study_group_ciphers">
          <ChipField source="id"/>
        </ReferenceField>
      </Datagrid>
    </List>
  )
};

export const StudentEdit = () => (
  <Edit>
    <SimpleShowLayout>
      <ReferenceField source="id" reference="users/role/students">
        <TextField source="email" />
      </ReferenceField>
    </SimpleShowLayout>
    <SimpleForm>
      <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers" >
        <AutocompleteInput source="id" optionText="id"/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
