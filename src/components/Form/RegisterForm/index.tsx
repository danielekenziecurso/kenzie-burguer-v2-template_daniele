import { useContext } from 'react';
// eslint-disable-next-line import/no-unresolved
import { SubmitHandler } from 'react-hook-form/dist/types/form';
import { useForm } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValue } from '../../../providers/UserContext/@typesUser';
import Input from '../Input';
import { UserContext } from '../../../providers/UserContext/UserContext';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValue>();
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValue> = (data) => {
    userRegister(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Seu nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />

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

      <Input
        label='Confirmar Senha'
        type='confirmPassword'
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />

      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
