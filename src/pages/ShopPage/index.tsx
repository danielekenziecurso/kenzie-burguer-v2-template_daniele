import { useContext} from 'react';
import { StyledShopPage } from './style';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/CardContext/CartContext';
import CartModal from '../../components/CartModal';

const ShopPage = () => {
  const {modal} = useContext(CartContext)
  return(
    <>
  <StyledShopPage>
    <Header/>
    <main>
    {modal ? <CartModal/> : null}
      <StyledContainer containerWidth={1300}>
        <ProductList />
      </StyledContainer>
    </main>
  </StyledShopPage>;
  </>
  )
};
export default ShopPage;