import {SelectInput, SelectInputProps} from "react-admin";

const TaskPriorityInput = (props: SelectInputProps) => {

  const choices = [
    { id: 'high', name: 'high' },
    { id: 'medium', name: 'medium' },
    { id: 'low', name: 'low' },
  ];
  return (
    <SelectInput
      label="Task Priority"
      {...props}
      choices={choices}
    />
  );
};
export default TaskPriorityInput;
