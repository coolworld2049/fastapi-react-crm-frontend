import {
  AutocompleteInput,
  ChipField,
  Create,
  Datagrid,
  DateField,
  DateTimeInput,
  Edit,
  EditButton,
  FilterLiveSearch,
  List,
  ReferenceField,
  ReferenceInput,
  RichTextField,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput
} from "react-admin";
import {RichTextInput} from 'ra-input-rich-text';
import TaskPriorityInput from "./TaskPriorityInput";
import TaskStatusInput from "./TaskStatusInput";
import {task_sx} from "../../../components/commonStyles";
import {dateParser} from "../../../components/MyDate/CustomDate";

export const TaskShow = (props: any) => (
  <Show {...props} filters={[]}>
    <SimpleShowLayout>
      <ReferenceField source="client_id" reference="users" link="show">
        <ChipField source="full_name" />
      </ReferenceField>
      <ReferenceField source="author_id" reference="users" link="show">
        <ChipField  source="full_name" />
      </ReferenceField>
      <ReferenceField source="executor_id" reference="users" link="show">
        <ChipField  source="full_name" />
      </ReferenceField>
      <TextField source="name" />
      <TextField source="description" />
      <ChipField source="type"/>
      <ChipField source="priority" />
      <ChipField source="status" />
      <DateField source="create_date" showTime={true} />
      <DateField source="deadline_date" showTime={true} />
      <DateField source="completion_date" showTime={true} />
      </SimpleShowLayout>
  </Show>
);

const TaskPanel = (props: any) => (
  <SimpleShowLayout {...props}>
    <RichTextField source="description" sx={{width: 500}}/>
    <DateField source="create_date"  showTime={true}/>
    <DateField source="deadline_date"  showTime={true}/>
    <DateField source="completion_date" emptyText="not set" showTime={true}/>
  </SimpleShowLayout>
)

export const filterToQuery = (searchText: any) => ({ email: `${searchText}` });

export const TaskList = (props: any) => {
  const taskFilters = [
    <ReferenceInput source="client_id" reference="users/role/client_base" >
      <AutocompleteInput
        optionText="email"
        filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: `client_base` })}
      />
    </ReferenceInput>,
    <ReferenceInput source="author_id" reference="users/role/manager_base" >
      <AutocompleteInput
        optionText="email"
        filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: `manager_base` })}
      />
    </ReferenceInput>,
    <ReferenceInput source="executor_id" reference="users/role/employees" >
      <AutocompleteInput
        optionText="email"
        filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: ['manager_base', 'ranker_base'] })} />
    </ReferenceInput>,
    <FilterLiveSearch source="name" label={"Name"} />,
    <FilterLiveSearch source="description"  label={"Description"}/>,
    <FilterLiveSearch source="type" label={"Task type"} />,
    <TaskPriorityInput {...props} source="priority" label={"Name"} />,
    <TaskStatusInput {...props} source="status"  label={"Status"} />,
    <DateTimeInput source="create_date" label={"Create date"} parse={dateParser} />,
    <DateTimeInput source="deadline_date" label={"Deadline date"} parse={dateParser} />,
    <DateTimeInput source="completion_date" label={"Completion date"} parse={dateParser} />
  ];
  return (
    <List {...props} filters={taskFilters}>
      <Datagrid rowClick="show" expand={<TaskPanel/>} expandSingle  >
        <TextField source="id"/>
        <ReferenceField source="client_id" reference="users/role/client_base" link="show">
          <ChipField source="email"/>
        </ReferenceField>
        <ReferenceField source="author_id" reference="users/role/manager_base" link="show">
          <ChipField source="email"/>
        </ReferenceField>
        <ReferenceField source="executor_id" reference="users/role/employees" link="show">
          <ChipField source="email"/>
        </ReferenceField>
        <TextField source="name"/>
        <ChipField source="type"/>
        <ChipField source="priority"/>
        <ChipField source="status"/>
        <DateField source="create_date" label={"Create date"} showTime={true}/>,
        <EditButton/>
      </Datagrid>
    </List>
  )};

export const customOptionText = (record: { email: any; role: any; }) => `${record.email}, ${record.role}`

export const TaskEdit = (props: any) => (
    <Edit {...props} redirect="list">
      <SimpleForm>
        <ReferenceInput source="users" reference="users/role/employees">
          <AutocompleteInput optionText={customOptionText}
                             optionValue='executor_id'
                             filterToQuery={filterToQuery}  sx={task_sx}/>
        </ReferenceInput>
        <TextInput source="name" sx={task_sx} />
        <RichTextInput  source="description" sx={task_sx} />
        <TextInput source="type"  sx={task_sx}/>
        <TaskPriorityInput {...props} source="priority" sx={task_sx} />
        <TaskStatusInput {...props} source="status" sx={task_sx} />
        <DateTimeInput source="create_date" parse={dateParser} sx={task_sx} />
        <DateTimeInput source="deadline_date" parse={dateParser} sx={task_sx} />
        <DateTimeInput source="completion_date" parse={dateParser} sx={task_sx} />
      </SimpleForm>
    </Edit>
);

export const TaskCreate = (props: any) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <ReferenceInput source="client_id" reference="users/role/client_base">
          <AutocompleteInput optionText={customOptionText}
                             filterToQuery={filterToQuery}
                             sx={task_sx}/>
        </ReferenceInput>
        <ReferenceInput source="author_id" reference="users/role/manager_base">
          <AutocompleteInput optionText={customOptionText}
                             filterToQuery={filterToQuery}
                             sx={task_sx}/>
        </ReferenceInput>
        <ReferenceInput source="executor_id" reference="users/role/employees">
          <AutocompleteInput optionText={customOptionText}
                             filterToQuery={filterToQuery}
                             sx={task_sx}/>
        </ReferenceInput>
        <TextInput source="name" sx={task_sx} />
        <RichTextInput source="description" sx={task_sx} />
        <TextInput source="type" sx={task_sx} />
        <TaskPriorityInput {...props} source="priority" sx={task_sx} />
        <TaskStatusInput {...props} source="status"  sx={task_sx} />
        <DateTimeInput source="create_date" parse={dateParser} sx={task_sx} />
        <DateTimeInput source="deadline_date" parse={dateParser} sx={task_sx} />
        <DateTimeInput source="completion_date" parse={dateParser} sx={task_sx} />
      </SimpleForm>
    </Create>
  );
}
