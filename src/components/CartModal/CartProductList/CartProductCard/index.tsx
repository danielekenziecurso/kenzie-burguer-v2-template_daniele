import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/CardContext/CartContext';
import { IProps } from '../../../ProductList';

const CartProductCard = ({burguer}: IProps) => {
  const {removeProductsCarrinho} = useContext(CartContext);

  return (
  <StyledCartProductCard>
    <div className='imageBox'>
      <img src={burguer.img} alt='Hamburguer' />
    </div>
    <div className='contentBox'>
      <StyledTitle tag='h3' $fontSize='three'>
      {burguer.name}
      </StyledTitle>
      <button type='button' aria-label='Remover' onClick={() => removeProductsCarrinho(burguer.id)} >
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>
);
}
export default CartProductCard;