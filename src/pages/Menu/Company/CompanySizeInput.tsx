import {SelectInput, SelectInputProps} from "react-admin";

const CompanySizeInput = (props: SelectInputProps) => {
  const choices = [
    { id: 'individual', name: 'individual' },
    { id: 'small', name: 'small' },
    { id: 'medium', name: 'medium' },
    { id: 'big', name: 'big' },
    { id: 'huge', name: 'huge' },
  ];
  return (
    <SelectInput
      label="Company Size"
      {...props}
      choices={choices}
    />
  );
};
export default CompanySizeInput;
