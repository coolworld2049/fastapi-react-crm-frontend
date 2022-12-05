
import {InputProps, SelectInput, useInput} from 'react-admin';

const RoleInput = (props: InputProps) => {
  const {
    field,
    fieldState: { isTouched, error },
    formState: { isSubmitted }
  } = useInput(props);
  const choices = [
    { id: 'manager', name: 'manager' },
    { id: 'ranker', name: 'ranker' },
    { id: 'client', name: 'client' },
  ];
  return (
    <SelectInput
      label="User Role"
      {...field}
      {...props}
      choices={choices}
    />
  );
};
export default RoleInput;

