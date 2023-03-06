import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/CardContext/CartContext';

const SearchForm = () => {
  const {setFormValue, searchProducts} = useContext(CartContext);

  return(
  <StyledSearchForm>
    <input type='text' placeholder='Digitar pesquisa'  onChange={(event) => setFormValue(event.target.value)}/>
    <StyledButton type='button' $buttonSize='medium' $buttonStyle='green' onClick={() => searchProducts()} >
      <MdSearch />
    </StyledButton>
  </StyledSearchForm>
);
}

export default SearchForm;
