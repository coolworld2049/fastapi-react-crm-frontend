import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  DateTimeInput, DateField, ChipField, SimpleShowLayout, Show
} from "react-admin";
import CompanySizeInput from "./CompanySizeInput";

export const CompanyShow = (props: any) => (
  <Show {...props} filters={[]}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ChipField source="sector"/>
      <ChipField source="size" />
      <TextField source="city" />
      <TextField source="address" />
      <TextField source="website" />
      <DateField source="create_date" />
    </SimpleShowLayout>
  </Show>
);


export const CompanyList = (props: any) => (
  <List {...props} filters={[]}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ChipField source="sector"/>
      <ChipField source="size" />
      <TextField source="city" />
      <TextField source="address" />
      <TextField source="website" />
      <DateField source="create_date" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CompanyEdit = (props: any) => (
    <Edit {...props} redirect="list">
      <SimpleForm>
        <TextInput source="id" disabled/>
        <TextInput source="name" />
        <TextInput source="sector"/>
        <CompanySizeInput source="size"/>
        <TextInput source="city" />
        <TextInput source="address" />
        <TextInput source="website" />
        <DateTimeInput source="create_date" />
      </SimpleForm>
    </Edit>
);

export const CompanyCreate = (props: any) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <TextInput source="id" disabled/>
        <TextInput source="name" />
        <TextInput source="sector"/>
        <CompanySizeInput source="size"/>
        <TextInput source="city" />
        <TextInput source="address" />
        <TextInput source="website" />
        <DateTimeInput source="create_date" />
      </SimpleForm>
    </Create>
  );
}
