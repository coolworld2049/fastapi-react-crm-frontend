import {AutocompleteInput, ChipField, Datagrid, List, ReferenceField, SimpleShowLayout, TextField} from 'react-admin';
import { Edit, ReferenceInput, SimpleForm } from 'react-admin';


export const StudentList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="id" reference="users/role/students">
        <TextField source="email" />
      </ReferenceField>
      <ReferenceField source="study_group_cipher_id" reference="study_group_ciphers">
        <ChipField source="id" />
      </ReferenceField>
    </Datagrid>
  </List>
);

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
