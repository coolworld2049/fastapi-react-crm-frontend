import {
  AutocompleteInput, ChipField,
  Datagrid,
  List, ReferenceField,
  ReferenceInput,
  TextField,
  TextInput
} from 'react-admin';
import { Edit, SimpleForm } from 'react-admin';

export const TypedDisciplineList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="discipline_id" reference="disciplines">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="campus_id" reference="campuses">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="classroom_number" />
      <ChipField source="type" />
    </Datagrid>
  </List>
);


export const TypedDisciplineEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="discipline_id" reference="disciplines">
        <AutocompleteInput
          source="title"
          optionValue="id"
          optionText={(record: { title: any; }) => `${record.title}`}
          filterToQuery={(searchText: any) => ({ title: `${searchText}` })}
        />
      </ReferenceInput>
      <ReferenceInput source="campus_id" reference="campuses">
        <AutocompleteInput
          source="id"
          optionValue="id"
          optionText={(record: { id: any; }) => `${record.id}`}
          filterToQuery={(searchText: any) => ({ id: `${searchText}` })}
        />
      </ReferenceInput>
      <TextInput source="classroom_number" />
      <TextInput source="type" />
    </SimpleForm>
  </Edit>
);
