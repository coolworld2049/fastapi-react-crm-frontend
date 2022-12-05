import {InputProps, useInput} from "react-admin";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const TaskPriorityInput = (props: InputProps) => {
  const {
    field,
    fieldState: { isTouched, error },
    formState: { isSubmitted }
  } = useInput(props);

  return (
    <Select
      label="Task Priority"
      {...field}
    >
      <MenuItem value="high">high</MenuItem>
      <MenuItem value="medium">medium</MenuItem>
      <MenuItem value="low">low</MenuItem>
    </Select>
  );
};
export default TaskPriorityInput;
