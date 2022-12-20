import {Create, Datagrid, List, required, TextField} from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const StudyGroupCipherList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
        </Datagrid>
    </List>
);


export const StudyGroupCipherEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);

export const StudyGroupCipherCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" validate={required()}/>
        </SimpleForm>
    </Create>
);
