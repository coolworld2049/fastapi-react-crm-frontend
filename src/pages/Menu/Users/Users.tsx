import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  DateTimeInput,
  Edit,
  EditButton,
  EmailField,
  List,
  SimpleForm,
  TextField,
  TextInput,
  PasswordInput,
  DateField,
  ChipField,
  ReferenceField,
  AutocompleteInput,
  ReferenceInput,
  FilterLiveSearch,
} from "react-admin";
import UserRoleInput from "./UserRoleInput";
import ClientTypeInput from "../Clients/ClientTypeInput";
import {user_sx} from "../../../components/commonStyles";


export const filterToQueryCompany = (searchText: any) => ({ name: `${searchText}` });

export const UserList = (props: any) => {

  const userFilters = [
    <FilterLiveSearch source="full_name" label={"Full Name"}  />,
    <FilterLiveSearch source="username" label={"Username"}  />,
    <FilterLiveSearch source="phone" label={"Phone"}  />,
    <FilterLiveSearch source="email" label={"Email"}  />,
    <ClientTypeInput {...props} source="type" label={"Client type"} />,
    <UserRoleInput {...props} source="role"/>,
    <ReferenceInput source="company_id" reference="companies">
      <AutocompleteInput source="name" optionValue="id" label='Company' filterToQuery={filterToQueryCompany} />
    </ReferenceInput>
  ];
  return (
    <List {...props} filters={userFilters}>
      <Datagrid
        {...props}
        rowClick="show"
        
      >
        <TextField source="id"/>
        <TextField source="full_name"/>
        <TextField source="username"/>
        <ChipField  source="role"/>
        <EmailField source="email"/>
        <TextField source="phone"/>
        <BooleanField source="is_active"/>
        <ReferenceField source="company_id" reference="companies" link="show">
          <TextField source="name" label='Company' />
        </ReferenceField>
        <ChipField source="type"/>
        <DateField source="create_date" showTime={true}/>
        <EditButton/>
      </Datagrid>
    </List>
  )
};

export const UserEdit = (props: any) => (
  <Edit {...props} redirect="list">
    <SimpleForm>
      <TextInput source="id" disabled sx={user_sx} />
      <TextInput source="full_name" sx={user_sx}  />
      <TextInput source="username" sx={user_sx}  />
      <UserRoleInput {...props} source="role" sx={user_sx} />
      <TextInput source="email" sx={user_sx} />
      <TextInput source="phone" sx={user_sx} />
      <ReferenceField source="company_id" reference="companies" sx={user_sx} >
        <TextInput source="name" label='Company' disabled sx={user_sx} />
      </ReferenceField>
      <ClientTypeInput {...props} source="type" sx={user_sx} />
      <BooleanInput {...props} source="is_active"  defaultValue={true} sx={user_sx} />
      <BooleanInput {...props} source="is_superuser" sx={user_sx} />
    </SimpleForm>
  </Edit>
);


export const UserCreate = (props: any) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <TextInput source="email" sx={user_sx} />
        <PasswordInput source="password" sx={user_sx} />
        <TextInput source="full_name" sx={user_sx} />
        <TextInput source="username" sx={user_sx} />
        <UserRoleInput {...props} source="role" sx={user_sx} />
        <TextInput source="phone" sx={user_sx} />
        <ReferenceInput source="company_id" reference="companies" sx={user_sx} >
          <AutocompleteInput
            source="name"
            optionValue="id"
            label='Company' sx={user_sx}
            filterToQuery={filterToQueryCompany}
          />
        </ReferenceInput>
        <ClientTypeInput {...props} source="type" sx={user_sx} />
        <BooleanInput {...props} source="is_active" defaultValue={true} sx={user_sx} />
      </SimpleForm>
    </Create>
  );
}
