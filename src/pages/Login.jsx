import * as yup from 'yup';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import useAuth from '../hooks/useAuth';

import { useLoginMutation } from '../services/AuthService';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const [login, { isLoading }] = useLoginMutation();
  const { hasLogin } = useAuth();
  const handleSubmit = (data, form) => {
    login(data)
      .unwrap()
      .then((res) => {
        alert('Login success');
        localStorage.setItem('@FCAccessToken', res.data.access_token);
        const { from } =
          location.state && location.state.from.pathname !== '/logout'
            ? location.state
            : {
                from: { pathname: '/' },
              };
        history.replace(from);
        form.target.reset();
      })
      .catch((err) => {
        console.log({ err });
        alert(`Login fail:${err.result}`);
      });
  };

  const LoginSchema = yup.object().shape({
    login_id: yup.string().required('Login ID is required'),
    password: yup.string().required('Password is required'),
  });

  return hasLogin() ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <Form onSubmit={handleSubmit} schema={LoginSchema} loading={isLoading}>
      <Input name="login_id" label="Login ID" />
      <Input name="password" label="Password" />
      <button type="submit">Submit</button>
    </Form>
  );
}
