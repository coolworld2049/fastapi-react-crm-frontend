import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const TaskStudentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="points" />
            <TextField source="comment" />
            <TextField source="feedback" />
            <TextField source="grade" />
            <DateField source="deadline_date" />
            <DateField source="start_date" />
            <DateField source="completion_date" />
            <TextField source="id" />
        </Datagrid>
    </List>
);


export const TaskStudentEdit = () => (
    <Edit>
        <SimpleForm>
            <DateInput source="points" />
            <TextInput source="comment" />
            <TextInput source="feedback" />
            <TextInput source="grade" />
            <DateInput source="deadline_date" />
            <DateInput source="start_date" />
            <DateInput source="completion_date" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);
