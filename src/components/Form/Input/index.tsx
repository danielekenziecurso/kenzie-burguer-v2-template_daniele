// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

export interface IInputprops{
  label: string;
  type: "text" | "email" | "password" | "confirmPassword";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({label, type, register, error}: IInputprops) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    {error ? <StyledParagraph fontColor='red'>{error.message}</StyledParagraph> : null}
  </fieldset>
);

export default Input;
