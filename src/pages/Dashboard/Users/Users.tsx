import {
  BooleanField,
  BooleanInput, Create,
  Datagrid, DateTimeInput,
  Edit,
  EditButton,
  EmailField,
  List,
  SimpleForm,
  TextField,
  TextInput,
  PasswordInput,
  DateField, ChipField, ReferenceField, AutocompleteInput, ReferenceInput, SimpleShowLayout, Show
} from "react-admin";
import RoleInput from "./RoleInput";
import TypeInput from "../Clients/TypeInput";


export const UserShow = (props: any) => {
  return (
    <Show {...props} filters={[]}>
      <SimpleShowLayout>
        <TextField source="id"/>
        <TextField source="full_name"/>
        <TextField source="username"/>
        <ChipField  source="role"/>
        <EmailField source="email"/>
        <TextField source="phone"/>
        <BooleanField source="is_active"/>
        <BooleanField source="is_superuser"/>
        <ReferenceField source="company_id" reference="companies">
          <TextField source="name" label='Company' />
        </ReferenceField>
        <ChipField  source="type"/>
        <DateField source="create_date"/>
      </SimpleShowLayout>
    </Show>
  )
};


export const UserList = (props: any) => {

  return (
    <List {...props} filters={[]}>
      <Datagrid rowClick="show">
        <TextField source="id"/>
        <TextField source="full_name"/>
        <TextField source="username"/>
        <ChipField  source="role"/>
        <EmailField source="email"/>
        <TextField source="phone"/>
        <BooleanField source="is_active"/>
        <BooleanField source="is_superuser"/>
        <ReferenceField source="company_id" reference="companies" link="show">
          <TextField source="name" label='Company' />
        </ReferenceField>
        <ChipField  source="type"/>
        <DateField source="create_date"/>
        <EditButton/>
      </Datagrid>
    </List>
  )
};

export const UserEdit = (props: any) => (
  <Edit {...props} redirect="list">
    <SimpleForm>
      <TextInput source="id" disabled/>
      <TextInput source="full_name" />
      <TextInput source="username" />
      <RoleInput source="role"/>
      <TextInput source="email"  />
      <TextInput source="phone" />
      <ReferenceField source="company_id" reference="companies">
        <TextInput source="name" label='Company' disabled/>
      </ReferenceField>
      <TypeInput source="type"/>
      <BooleanInput {...props} source="is_active"  defaultValue={true}/>
      <BooleanInput {...props} source="is_superuser"  />
      <DateTimeInput source="create_date" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props: any) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <TextInput source="email"/>
        <PasswordInput source="password"/>
        <TextInput source="full_name"/>
        <TextInput source="username" />
        <RoleInput source="role"/>
        <TextInput source="phone" />
        <ReferenceInput source="company_id" reference="companies">
          <AutocompleteInput source="name" optionValue="id" label='Company'/>
        </ReferenceInput>
        <TypeInput source="type"/>
        <BooleanInput {...props} source="is_active" defaultValue={true}/>
        <DateTimeInput source="create_date"/>
      </SimpleForm>
    </Create>
  );
}
