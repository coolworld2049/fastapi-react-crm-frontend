import {SelectInput, SelectInputProps} from 'react-admin';

const ClientTypeInput = (props: SelectInputProps) => {

  const choices = [
    { id: 'current', name: 'current' },
    { id: 'potential', name: 'potential' },
    { id: "null", name: 'not set' },
  ];
  return (
    <SelectInput
      label="Client Type"
      {...props}
      choices={choices}
    />
  );
};
export default ClientTypeInput;

