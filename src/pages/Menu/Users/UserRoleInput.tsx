
import {SelectInput, SelectInputProps} from 'react-admin';

const UserRoleInput = (props: SelectInputProps) => {

  const choices = [
    { id: 'admin_base', name: 'admin' },
    { id: 'manager_base', name: 'manager' },
    { id: 'ranker_base', name: 'ranker' },
    { id: 'client_base', name: 'client' },
  ];
  return (
    <SelectInput
      label="User Role"
      {...props}
      choices={choices}
      optionValue={"id"}
    />
  );
};
export default UserRoleInput;

