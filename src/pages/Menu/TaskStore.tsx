import {AutocompleteInput, Datagrid, List, NumberField, ReferenceField, TextField, UrlField} from 'react-admin';
import { Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const TaskStoreList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="task_id" reference="tasks" link="show">
              <TextField source="id" />
            </ReferenceField>
            <UrlField source="url" />
            <NumberField source="size" />
            <TextField source="filename" />
            <TextField source="media_type" />
            <TextField source="id" />
        </Datagrid>
    </List>
);


export const TaskStoreEdit = () => (
    <Edit>
        <SimpleForm >
            <ReferenceInput source="task_id" reference="tasks">
              <AutocompleteInput optionText="id" optionValue="id"disabled/>
            </ReferenceInput>
            <TextInput source="url" />
            <NumberInput source="size" />
            <TextInput source="filename" />
            <TextInput source="media_type" />
        </SimpleForm>
    </Edit>
);
