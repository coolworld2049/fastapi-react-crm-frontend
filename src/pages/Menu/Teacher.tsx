import {
  AutocompleteInput,
  Datagrid, List,
  ReferenceField, ReferenceManyField, SimpleShowLayout,
  TextField
} from 'react-admin';
import { Edit, ReferenceInput, SimpleForm } from 'react-admin';

export const PanelTeacherDiscipline = (props: any) => (
  <ReferenceManyField  source="id"
                       reference="teacher_study_group_disciplines"
                       target="id">
    <Datagrid bulkActionButtons={false}>
      <ReferenceManyField  source="id"
                           reference="teachers"
                           target="id">
        <ReferenceField source="id" reference="disciplines">
            <TextField source="title" />
        </ReferenceField>
      </ReferenceManyField>
    </Datagrid>
  </ReferenceManyField>
);


export const TeacherList = () => (
  <List>
    <Datagrid rowClick="edit" expand={PanelTeacherDiscipline} expandSingle>
      <TextField source="id" />
      <ReferenceField source="user_id" reference="users/role/teachers">
        <TextField source="email" />
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
        <ReferenceInput source="discipline_typed_id" reference="disciplines">
          <AutocompleteInput source="title" optionText="title" optionValue="id"/>
        </ReferenceInput>
      </SimpleForm>
    </Edit>
);
