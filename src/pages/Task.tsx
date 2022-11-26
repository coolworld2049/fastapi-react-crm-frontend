import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  AutocompleteInput, ReferenceInput
} from "react-admin";

export const TaskList = (props: any) => (
  <List {...props} filters={[]}>
    <Datagrid>
      <TextField source="client_id" />
      <TextField source="author_id" />
      <TextField source="executor_id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="type" />
      <TextField source="priority" />
      <TextField source="create_date" />
      <TextField source="deadline_date" />
      <TextField source="completion_date" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TaskEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="value" />
    </SimpleForm>
  </Edit>
);

export const TaskCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="users" reference="users">
        <AutocompleteInput optionText="id" />
      </ReferenceInput>
      <TextInput source="author_id" />
      <TextInput source="executor_id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="type" />
      <TextInput source="priority" />
      <TextInput source="create_date" />
      <TextInput source="deadline_date" />
      <TextInput source="completion_date" />
    </SimpleForm>
  </Create>
);
