import {
  AutocompleteInput,
  ChipField,
  Create,
  Datagrid,
  DateField,
  DateTimeInput,
  Edit,
  FilterLiveSearch,
  List,
  ReferenceField,
  ReferenceInput,
  RichTextField,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput
} from "react-admin";
import {RichTextInput} from 'ra-input-rich-text';
import {task_sx, user_sx} from "../../components/commonStyles";
import {dateParser} from "../../components/MyDate/CustomDate";


export const TaskStatusInput = (props: any) => (
  <ReferenceInput {...props} source="status" reference="classifiers/task_status" >
      <AutocompleteInput {...props} source="id" optionText="name" label='Status' sx={user_sx} />
  </ReferenceInput>
);

export const TaskPriorityInput = (props: any) => (
  <ReferenceInput {...props} source="priority" reference="classifiers/task_priority" >
      <AutocompleteInput {...props} source="id" optionText="name" label='Priority' />
  </ReferenceInput>
);


const TaskPanel = (props: any) => (
  <SimpleShowLayout {...props}>
    <RichTextField {...props} source="description" sx={{whiteSpace: 'pre-wrap'}}/>
    <ChipField source="priority"/>
    <DateField source="create_date"  showTime={true}/>
    <DateField source="expiration_date" showTime={true}/>
  </SimpleShowLayout>
)

export const TaskList = (props: any) => {
  const taskFilters = [
    <ReferenceInput source="teacher_id" reference="users/role/teachers" >
      <AutocompleteInput
        optionText={customOptionText}
        filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: `teacher` })}
         sx={{...task_sx, color: 'red'}}
      />
    </ReferenceInput>,
    <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers" >
      <AutocompleteInput
        optionText={(record: { id: any; }) => `${record.id}`}
        filterToQuery={(searchText: any) => ({ id: `${searchText}` })}
         sx={task_sx}
      />
    </ReferenceInput>,
    <ReferenceInput source="student_id" reference="users/role/students">
      <AutocompleteInput
        optionText={customOptionText}
        filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: ['student', 'student_leader', 'student_leader_assistant'] })}
        sx={{...task_sx, color: 'red'}}
      />
    </ReferenceInput>,
    <FilterLiveSearch source='tile' label={"Name"} />,
    <FilterLiveSearch source="description"  label={"Description"}/>,
    <FilterLiveSearch source="type" label={"Task type"} />,
    <TaskStatusInput {...props} sx={task_sx} />,
    <TaskPriorityInput {...props} sx={task_sx} />,
    <DateTimeInput source="create_date" label={"Create date"} parse={dateParser} />,
    <DateTimeInput source="deadline_date" label={"Deadline date"} parse={dateParser} />,
    <DateTimeInput source="completion_date" label={"Completion date"} parse={dateParser} />
  ];
  return (
    <List filters={taskFilters}>
      <Datagrid rowClick="edit" expand={<TaskPanel/>} >
        <TextField source="id"/>
        <ReferenceField source="teacher_id" reference="teachers" >
          <ReferenceField source="user_id" reference="users/role/teachers">
            <TextField source="email"/>
          </ReferenceField>
        </ReferenceField>
        <ReferenceField source="student_id" reference="users/role/students" link={(record, reference) => `/students/${record.student_id}/show`}>
          <TextField source="email"/>
        </ReferenceField>
        <ReferenceField source="study_group_cipher_id" reference="study_group_ciphers" >
          <ChipField source="id"/>
        </ReferenceField>
        <TextField source="title"/>
        <ChipField source="status"/>
        <DateField source="create_date" label={"Create date"} showTime={true}/>,
        <DateField source="expiration_date" label={"Expiration date"} showTime={true}/>,
      </Datagrid>
    </List>
  )};

export const customOptionText = (record: { email: any; role: any; }) => `${record.email}, ${record.role}`

export const TaskEdit = (props: any) => (
    <Edit {...props} redirect="list">
      <SimpleForm>
        <ReferenceField source="teacher_id" reference="teachers" >
          <ReferenceInput source="user_id" reference="users/role/teachers" >
            <AutocompleteInput
              optionText={customOptionText}
              filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: `teachers` })}
              sx={{task_sx}}
            />
          </ReferenceInput>
        </ReferenceField>

        <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers" >
          <AutocompleteInput
            optionText={(record: { id: any; }) => `${record.id}`}
            filterToQuery={(searchText: any) => ({ id: `${searchText}` })}
             sx={task_sx}
          />
        </ReferenceInput>
        <ReferenceInput source="student_id" reference="users/role/students">
          <AutocompleteInput
            optionText={customOptionText}
            filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: ['student', 'student_leader', 'student_leader_assistant'] })}
            sx={{...task_sx, color: 'red'}}
          />
        </ReferenceInput>
        <TextInput source="title" sx={task_sx} />
        <RichTextInput source="description" sx={task_sx} />
        <TaskStatusInput {...props} sx={task_sx} />
        <TaskPriorityInput {...props} sx={task_sx} />
        <DateTimeInput source="create_date" parse={dateParser} sx={task_sx} disabled/>
        <DateTimeInput source="deadline_date" parse={dateParser} sx={task_sx} />
        <DateTimeInput source="completion_date" parse={dateParser} sx={task_sx} />
      </SimpleForm>
    </Edit>
);

export const TaskCreate = (props: any) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <ReferenceInput source="teacher_id" reference="users/role/teachers" >
          <AutocompleteInput
            optionText={customOptionText}
            filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: `teachers` })}
             sx={task_sx}
          />
        </ReferenceInput>
        <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers" >
          <AutocompleteInput
            optionText={(record: { id: any; }) => `${record.id}`}
            filterToQuery={(searchText: any) => ({ id: `${searchText}` })}
             sx={task_sx}
          />
        </ReferenceInput>
        <ReferenceInput source="student_id" reference="users/role/students">
          <AutocompleteInput
            optionText={customOptionText}
            filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: ['student', 'student_leader', 'student_leader_assistant'] })}
            sx={task_sx}
          />
        </ReferenceInput>
        <TextInput source="title" sx={task_sx} />
        <RichTextInput source="description" sx={task_sx} />
        <TaskStatusInput {...props} sx={task_sx} />
        <TaskPriorityInput {...props} sx={task_sx} />
        <DateTimeInput source="expiration_date" parse={dateParser} sx={task_sx} />
      </SimpleForm>
    </Create>
  );
}
