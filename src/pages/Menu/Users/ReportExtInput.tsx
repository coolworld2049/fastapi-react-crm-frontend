import {SelectInput, SelectInputProps} from "react-admin";

const ReportExtInput = (props: SelectInputProps) => {
  const choices = [
    { id: 'csv', name: 'csv' },
    { id: 'json', name: 'json' },
  ];
  return (
    <SelectInput
      label="File extension"
      {...props}
      choices={choices}
    />
  );
};
export default ReportExtInput;
