import {
  AutocompleteInput, ChipField,
  Create,
  Datagrid,
  List, ReferenceField, ReferenceManyField, ReferenceOneField, TextField
} from 'react-admin';
import { Edit, ReferenceInput, SimpleForm } from 'react-admin';

export const PanelStudyDiscipline = () => (
    <ReferenceManyField  source="discipline_id"
                         reference="study_group_discipline"
                         target="discipline_id">
      <TextField source="discipline_id" />
    </ReferenceManyField>
);

export const PanelStudyGroupStudent = (props: any) => (
    <ReferenceManyField  source="study_group_cipher_id"
                       reference="students"
                       target="study_group_cipher_id">
    <Datagrid bulkActionButtons={false}>
        <ReferenceField source="id"
                          reference="users/role/students"
                          link={(record, reference) => `/users/${record.id}/show`}>
          <TextField source="email" />
          <ReferenceOneField reference="users/role/students" target="id">
            <ChipField source="role" />
          </ReferenceOneField>
        </ReferenceField>
      </Datagrid>
    </ReferenceManyField>
);

export const StudyGroupList = () => (
    <List>
        <Datagrid rowClick="edit" expand={PanelStudyGroupStudent} expandSingle>
            <TextField source="id" />
            <ReferenceField source="study_group_cipher_id" reference="study_group_ciphers">
              <TextField source="id" />
            </ReferenceField>
        </Datagrid>
    </List>
);


export const StudyGroupEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers">
              <AutocompleteInput source="id" optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="discipline_id" reference="disciplines">
              <AutocompleteInput source="id" optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const StudyGroupCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers">
              <AutocompleteInput source="id" optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="discipline_id" reference="disciplines">
              <AutocompleteInput source="id" optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
