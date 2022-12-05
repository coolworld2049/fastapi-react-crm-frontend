import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  AutocompleteInput, ReferenceInput, DateTimeInput, ReferenceField, ChipField, Show, SimpleShowLayout
} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
import TaskPriorityInput from "./TaskPriorityInput";

export const TaskShow = (props: any) => (
  <Show {...props} filters={[]}>
    <SimpleShowLayout>
      <ReferenceField source="client_id" reference="users" link="show">
        <ChipField source="full_name" />
      </ReferenceField>
      <ReferenceField source="author_id" reference="users" link="show">
        <ChipField  source="full_name" />
      </ReferenceField>
      <ReferenceField source="executor_id" reference="users" link="show">
        <ChipField  source="full_name" />
      </ReferenceField>
      <TextField source="name" />
      <TextField source="description" />
      <ChipField  source="type" defaultValue='phone call'/>
      <ChipField  source="priority" />
      <TextField source="create_date" />
      <TextField source="deadline_date" />
      <TextField source="completion_date" />
    </SimpleShowLayout>
  </Show>
);

export const TaskList = (props: any) => (
  <List {...props} filters={[]}>
    <Datagrid>
      <ReferenceField source="client_id" reference="users" link="show">
        <ChipField source="full_name" />
      </ReferenceField>
      <ReferenceField source="author_id" reference="users" link="show">
        <ChipField  source="full_name" />
      </ReferenceField>
      <ReferenceField source="executor_id" reference="users" link="show">
        <ChipField  source="full_name" />
      </ReferenceField>
      <TextField source="name" />
      <TextField source="description" />
      <ChipField  source="type" defaultValue='phone call'/>
      <ChipField  source="priority" />
      <TextField source="create_date" />
      <TextField source="deadline_date" />
      <TextField source="completion_date" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TaskEdit = (props: any) => (
    <Edit {...props} redirect="list">
      <SimpleForm>
        <ReferenceInput source="users" reference="users">
          <AutocompleteInput optionText="email" optionValue='id'/>
        </ReferenceInput>
        <ReferenceInput source="users" reference="users">
          <AutocompleteInput optionText="email" optionValue='author_id'/>
        </ReferenceInput>
        <ReferenceInput source="users" reference="users">
          <AutocompleteInput optionText="email" optionValue='executor_id'/>
        </ReferenceInput>
        <TextInput source="name"/>
        <RichTextInput source="description"/>
        <TextInput source="type" />
        <TaskPriorityInput source="priority"/>
        <DateTimeInput source="create_date" />
        <DateTimeInput source="deadline_date" />
        <DateTimeInput source="completion_date"/>
      </SimpleForm>
    </Edit>
);

export const TaskCreate = (props: any) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <ReferenceInput source="client_id" reference="users/role/client_base">
          <AutocompleteInput optionText="email"/>
        </ReferenceInput>
        <ReferenceInput source="author_id" reference="users/role/manager_base">
          <AutocompleteInput optionText="email"/>
        </ReferenceInput>
        <ReferenceInput source="executor_id" reference="users/employees">
          <AutocompleteInput optionText="email"/>
        </ReferenceInput>
        <TextInput source="name"/>
        <RichTextInput source="description"/>
        <TextInput source="type"/>
        <TaskPriorityInput source="priority"/>
        <DateTimeInput source="create_date"/>
        <DateTimeInput source="deadline_date"/>
      </SimpleForm>
    </Create>
  );
}
