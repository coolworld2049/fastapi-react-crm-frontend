import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  Edit,
  EmailField,
  List,
  SimpleForm,
  TextField,
  TextInput,
  PasswordInput,
  ChipField,
  AutocompleteInput,
  ReferenceInput,
  FilterLiveSearch, required, NumberInput,
} from "react-admin";
import {user_sx} from "../../components/commonStyles";



export const filterToQueryCompany = (searchText: any) => ({ name: `${searchText}` });

export const UserRoleInput = (props: any) => (
  <ReferenceInput {...props} source="role" reference="classifiers/user_role" >
      <AutocompleteInput {...props} source="id" label='Role' />
  </ReferenceInput>
);

/*
const exporter = (users: any) => {
    const usersForExport = users.map((user: any) => {
        // const { backlinks, author, ...postForExport } = user; // omit backlinks and author
        // postForExport.author_name = user.author.name; // add a field
        return user;
    });
    jsonExport(usersForExport, {
        headers: ['id', 'email', 'username', 'role'] // order fields in the export
    }, (err: any, csv: any) => {
        downloadCSV(csv, 'users'); // download as 'posts.csv` file
    });
};
*/
export const UserList = (props: any) => {

  const userFilters = [
    <FilterLiveSearch source="full_name" label={"Full Name"}  />,
    <FilterLiveSearch source="username" label={"Username"}  />,
    <FilterLiveSearch source="phone" label={"Phone"}  />,
    <FilterLiveSearch source="email" label={"Email"}  />,
    <UserRoleInput/>
  ];
  return (
    <List filters={userFilters} >
      <Datagrid rowClick="edit">
        <TextField source="id"/>
        <TextField source="full_name"/>
        <TextField source="username"/>
        <ChipField  source="role"/>
        <EmailField source="email"/>
        <TextField source="age"/>
        <TextField source="phone"/>
        <BooleanField source="is_active"/>
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
      <ReferenceInput source="role" reference="classifiers/user_role" sx={user_sx} >
          <AutocompleteInput source="id" label='Role' sx={user_sx} />
      </ReferenceInput>
      <TextInput source="email" sx={user_sx} />
      <TextInput source="full_name" sx={user_sx} />
      <NumberInput source="age" min={14} max={100}/>
      <TextInput source="phone" sx={user_sx} />
      <UserRoleInput/>
      <BooleanInput {...props} source="is_active"  defaultValue={true} sx={user_sx} />
    </SimpleForm>
  </Edit>
);


export const UserCreate = (props: any) => {
  return (
    <Create redirect="list">
      <SimpleForm mode="onBlur" reValidateMode="onBlur">
        <TextInput source="email" sx={user_sx} validate={required()} />
        <PasswordInput source="password" sx={user_sx} validate={required()} />
        <UserRoleInput validate={required()} />
        <TextInput source="username" sx={user_sx} validate={required()} />
        <TextInput source="full_name" sx={user_sx} />
        <NumberInput source="age" min={14} max={100}/>
        <TextInput source="phone" sx={user_sx} />
      </SimpleForm>
    </Create>
  );
}
