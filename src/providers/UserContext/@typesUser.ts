export interface IDefaultProviderProps {
  children: React.ReactNode;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValue {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ILoginFormValue {
  email: string;
  password: string;
}
export interface IUserContext {
  loading: boolean;
  user: IUser | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (data: IRegisterFormValue) => Promise<void>;
  userLogin: (data: ILoginFormValue) => Promise<void>;
  userLogout: () => void;
}
