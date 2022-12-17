import {
  AutocompleteInput,
  ChipField,
  Datagrid,
  Edit,
  List,
  ReferenceField,
  ReferenceInput,
  ReferenceManyField,
  SimpleForm,
  TextField,
  TextInput
} from 'react-admin';

export const TypedDisciplineList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="discipline_id" reference="disciplines">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="campus_id" reference="campuses">
        <ChipField source="id" />
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
export const PanelTypedDisciplineCampus = (props: any) => (
  <ReferenceManyField source="discipline_id" reference="typed_disciplines" target="discipline_id">
    <Datagrid bulkActionButtons={false}>
      <ReferenceField label="Detailed Discipline" source="discipline_id" reference="disciplines"
                      link={(record, reference) => `/typed_disciplines/${record.id}/show`}>
        <TextField source="title"/>
      </ReferenceField>
      <TextField source="type"/>
      <TextField source="classroom_number"/>
      <TextField source="campus_id"/>
    </Datagrid>
  </ReferenceManyField>
);
