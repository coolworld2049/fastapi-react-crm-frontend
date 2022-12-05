import {InputProps, SelectInput, useInput} from "react-admin";

const CompanySizeInput = (props: InputProps) => {
  const {
    field,
    fieldState: { isTouched, error },
    formState: { isSubmitted }
  } = useInput(props);
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
      {...field}
      {...props}
      choices={choices}
    />
  );
};
export default CompanySizeInput;
