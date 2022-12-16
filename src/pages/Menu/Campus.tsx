import {ChipField, Create, Datagrid, List, TextField} from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CampusList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ChipField source="id" />
      <TextField source="address" />
    </Datagrid>
  </List>
);

export const CampusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="address" />
    </SimpleForm>
  </Edit>
);

export const CampusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="address" />
    </SimpleForm>
  </Create>
);
