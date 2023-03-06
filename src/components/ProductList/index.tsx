/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/CardContext/CartContext';
import { IproductsValue } from '../../providers/CardContext/@typesCart';


export interface IProps{
  burguer?: IproductsValue | any;
}

const ProductList = () => {
  const {
    loading,
    products,
    filteredProducts,
  } = useContext(CartContext);

  return (
    <StyledProductList>
      {loading ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <>
        {
         products.map((items) => (
            <ProductCard
            key={uuidv4()}
            burguer={items}
            />
          ))}
        </>
      )

        
      }
    </StyledProductList>
  );
};

export default ProductList;
