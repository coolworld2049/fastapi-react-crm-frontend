import {
  Datagrid, Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  ChipField, ReferenceField, Show, SimpleShowLayout
} from "react-admin";
import TypeInput from "./TypeInput";

export const ClientShow = (props: any) => {

  return (
    <Show {...props} filters={[]}>
      <SimpleShowLayout>
        <ReferenceField source="id" reference="users/role/client_base">
          <TextField source="email"/>
        </ReferenceField>
        <ReferenceField source="company_id" reference="companies">
          <TextField source="name"/>
        </ReferenceField>
        <ChipField source="type"/>
      </SimpleShowLayout>
    </Show>
  )
};

export const ClientList = (props: any) => {

  return (
    <List {...props} filters={[]}>
      <Datagrid rowClick="show">
        <ReferenceField source="id" reference="users/role/client_base" link="show">
          <TextField source="email"/>
        </ReferenceField>
        <ReferenceField source="company_id" reference="companies" link="show">
          <TextField source="name"/>
        </ReferenceField>
        <ChipField source="type"/>
        <EditButton/>
      </Datagrid>
    </List>
  )
};

export const ClientEdit = (props: any) => {

  return (
    <Edit {...props} filters={[]} redirect="list">
      <SimpleForm>
        <ReferenceField source="id" reference="users/role/client_base" link="show">
          <TextInput source="email" disabled/>
        </ReferenceField>
        <ReferenceField source="company_id" reference="companies" link="show">
          <TextInput source="name" disabled/>
        </ReferenceField>
        <TypeInput source="type"/>
      </SimpleForm>
    </Edit>
  )
};

