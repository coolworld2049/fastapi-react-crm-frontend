import {AutocompleteInput, ChipField, Create, Datagrid, List, ReferenceField, TextField} from 'react-admin';
import { Edit, ReferenceInput, SimpleForm } from 'react-admin';


export const Study_groupList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="study_group_cipher_id" reference="study_group_ciphers">
              <ChipField source="id" />
            </ReferenceField>
            <ReferenceField source="discipline_id" reference="disciplines">
              <TextField source="title" />
            </ReferenceField>
        </Datagrid>
    </List>
);


export const Study_groupEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers">
              <AutocompleteInput source="id" optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="discipline_id" reference="disciplines">
              <AutocompleteInput source="id" optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const Study_groupCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers">
              <AutocompleteInput source="id" optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="discipline_id" reference="disciplines">
              <AutocompleteInput source="id" optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
