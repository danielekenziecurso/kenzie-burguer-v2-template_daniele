import React from 'react';
import { CartProvider } from './CardContext/CartContext';
import { IDefaultProviderProps } from './UserContext/@typesUser';
import { UserProvider } from './UserContext/UserContext';

const Providers = ({ children }: IDefaultProviderProps) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
);

export default Providers;
