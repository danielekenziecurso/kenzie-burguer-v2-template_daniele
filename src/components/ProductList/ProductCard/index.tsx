import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CardContext/CartContext';
import { IProps } from '..';

const ProductCard = ({burguer}: IProps) => {
  const { handleClick } = useContext(CartContext);
  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={burguer.img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {burguer.name}
        </StyledTitle>
        <StyledParagraph className='category'>{burguer.category}</StyledParagraph>
        <StyledParagraph className='price'>R$ {burguer.price.toFixed(2)}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => handleClick(burguer.id)}>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;