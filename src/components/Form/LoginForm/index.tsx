import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginFormValue } from '../../../providers/UserContext/@typesUser';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValue>();

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormValue> = (data) => {
    userLogin(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Seu email'
        type='email'
        register={register('email')}
        error={errors.email}
      />

      <Input
        label='Sua senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />

      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
