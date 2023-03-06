import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';

import { CartContext } from '../../../providers/CardContext/CartContext';

const CartProductList = () =>{
  const {currentSale, valueReduce, removeProductsTodos} = useContext(CartContext)
return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
  {currentSale.length > 0 && (
  <StyledCartProductList>
  <ul>
    {currentSale.map((items) => 
     <CartProductCard
     key={items.id}
     burguer={items}
     />
    )}
    </ul>
    <div className='totalBox'>
      <StyledParagraph>
        <strong>Total</strong>
      </StyledParagraph>
      <StyledParagraph className='total'>R$ {valueReduce.toFixed(2)}</StyledParagraph>
    </div>
    <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={() => removeProductsTodos()}>
      Remover todos
    </StyledButton>
  </StyledCartProductList>
  )}
  </>
);
}

export default CartProductList;