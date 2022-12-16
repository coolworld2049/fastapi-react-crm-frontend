import {AutocompleteInput, ChipField, Create, Datagrid, List, ReferenceInput, TextField} from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const AssessmentInput = (props: any) => (
  <ReferenceInput {...props} source="assessment" reference="classifiers/type_assessment" >
      <AutocompleteInput {...props} source="id" label='Assessment' />
  </ReferenceInput>
);

export const DisciplineList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ChipField source="assessment" />
    </Datagrid>
  </List>
);

export const DisciplineEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <AssessmentInput source="assessment" />
    </SimpleForm>
  </Edit>
);

export const DisciplineCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <AssessmentInput source="assessment" />
    </SimpleForm>
  </Create>
);
