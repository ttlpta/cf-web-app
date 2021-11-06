import * as yup from 'yup';

import Form from '../Form/Form';
import Input from '../Form/Input';
import Select from '../Form/Select';

export default function ProfileForm() {
  const ProfileFormSchema = yup.object().shape({
    first_name: yup.string().required('Firstname is required'),
    last_name: yup.string().required('Lastname is required'),
  });
  return (
    <div>
      <Form schema={ProfileFormSchema}>
        <Input name="first_name" label="First name" />
        <Input name="last_name" label="Last name" />
        <Input name="display_name" label="Display name" />
        <Input name="dob" label="DOB" type="date" />
        <Select
          name="sex"
          label="Sex"
          options={[
            { value: 1, label: 'Male' },
            { value: 0, label: 'Female' },
          ]}
        />
        <Input name="bio" label="Bio" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
