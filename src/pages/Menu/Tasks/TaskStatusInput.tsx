import {SelectInput, SelectInputProps} from "react-admin";

const TaskStatusInput = (props: SelectInputProps) => {

  const choices = [
        { id: 'unassigned', name: 'unassigned' },
        { id: 'pending', name: 'pending' },
        { id: 'accepted', name: 'accepted' },
        { id: 'started', name: 'started' },
        { id: 'completed', name: 'completed' },
  ];
  return (
    <SelectInput
      label="Task Status"
      {...props}
      choices={choices}
    />
  );
};
export default TaskStatusInput;
