import { createContext, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';
import { api } from '../../services/api';
// eslint-disable-next-line import/order
import { ICartContext, IDefaultProviderPropsCart, IproductsValue } from './@typesCart';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderPropsCart) => {
  const [products, setProducts] = useState<IproductsValue[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<IproductsValue[]>(
    []
  );
  const [currentSale, setCurrentSale] = useState<IproductsValue[]>([]);
  const [formValue, setFormValue] = useState('');
  const [modal, setModal] = useState(false);

  const searchProducts = () => {
    const text = formValue.toLocaleLowerCase();
    const items = products.filter(
      (product: { name: string; category: string }) =>
        product.name.toLocaleLowerCase().includes(text) ||
        product.category.toLocaleLowerCase().includes(text)
    );

    if (!formValue.length) {
      setFilteredProducts([]);
    }
    setFilteredProducts(items);
  };

  const handleClick = (idProduct: number) => {
    const productClick = products.find(
      (burguer: { id: number }) => burguer.id === idProduct
    );
    const verification = currentSale.find(
      (burguer) => burguer.id === idProduct
    );
    if (!verification) {
      setCurrentSale([...currentSale, productClick as IproductsValue]);
      toast.success('Produto adicionado com sucesso!');
    } else {
      toast.error('Itens já está no carrinho!');
    }
  };

  const removeProductsCarrinho = (burguerId: number) => {
    const newProductsRemove = currentSale.filter(
      (burguer) => burguer.id !== burguerId
    );
    setCurrentSale(newProductsRemove);
  };

  const removeProductsTodos = () => {
    setCurrentSale([]);
    console.log("oi")
  };

  const valueReduce = currentSale.reduce(
    (acumulador, currentSaleAtual) => acumulador + currentSaleAtual.price * 1,
    0
  );

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    async function renderProducts() {
      try {
        setLoading(true);
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        toast.success('Conta criada com sucesso!');
      } catch (error) {
        toast.error('Ops! Algo deu errado.');
      } finally {
        setLoading(false);
      }
  }
    renderProducts();
  }, []);
  return(
  <CartContext.Provider 
   value={{loading, setLoading, products, modal, setModal, filteredProducts, currentSale, setFormValue, handleClick, searchProducts, removeProductsCarrinho, removeProductsTodos, valueReduce}}>{children}</CartContext.Provider>
  );
};