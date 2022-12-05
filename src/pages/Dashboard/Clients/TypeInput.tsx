import {InputProps, SelectInput, useInput} from 'react-admin';

const TypeInput = (props: InputProps) => {
  const {
    field,
    fieldState: { isTouched, error },
    formState: { isSubmitted }
  } = useInput(props);
  const choices = [
    { id: 'current', name: 'current' },
    { id: 'potential', name: 'potential' },
  ];
  return (
    <SelectInput
      label="Client Type"
      {...field}
      {...props}
      choices={choices}
    />
  );
};
export default TypeInput;

