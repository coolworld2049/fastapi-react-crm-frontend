import {InputProps, useInput} from "react-admin";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const ReportExtInput = (props: InputProps) => {
  const {
    field,
    fieldState: { isTouched, error },
    formState: { isSubmitted }
  } = useInput(props);
  return (
    <Select
      label="Ext"
      {...field}
    >
      <MenuItem value="csv">csv</MenuItem>
      <MenuItem value="json">json</MenuItem>
    </Select>
  );
};
export default ReportExtInput;
