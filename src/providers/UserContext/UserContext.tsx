import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IDefaultProviderProps, ILoginFormValue, IRegisterFormValue, IUser, IUserContext } from './@typesUser';
import { api } from '../../services/api';
// eslint-disable-next-line import/order
import { toast } from 'react-toastify';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  // const token = localStorage.getItem('accessToken');

  // const userLoad = async () => {
  //   if(token){
  //       try {
  //           const response = await api.get('/products', {
  //               headers: {
  //                   Authorization: `Bearer${token}`,
  //                 },
  //           } );
  //           setUser(response.data);
  //           navigate('/shop');
            
  //       } catch (error) {
  //         toast.error('Ops! Algo deu errado.');
  //       }
  //   }

  // }

  // useEffect(() => {
  //   userLoad()
  // }, [])

  const userRegister = async (data: IRegisterFormValue) => {
    try {
      setLoading(true);
      const response = await api.post('/users', data);
      setUser(response.data.user);
      toast.success('Conta criada com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error('Ops! Algo deu errado.');
    }
    finally{
        setLoading(false);
    }
  };

  const userLogin = async (data: ILoginFormValue) => {
    try {
      setLoading(true);
      const response = await api.post('/login', data);
      setUser(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem('accessUser', JSON.stringify(response.data.user));
      toast.success('Conta criada com sucesso!');
      navigate('/shop');
    } catch (error) {
      toast.error('Ops! Algo deu errado.');
    }
    finally{
        setLoading(false);
    }
  };
  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessUser');
    navigate('/');
  };

  return <UserContext.Provider value={{loading, setLoading, user, userRegister, userLogin, userLogout}}>{children}</UserContext.Provider>;
};
