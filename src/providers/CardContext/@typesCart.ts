export interface IDefaultProviderPropsCart {
  children: React.ReactNode;
}
export interface IproductsValue {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface ICartContext {
  loading: boolean;
  filteredProducts: IproductsValue[];
  currentSale: IproductsValue[];
  setFormValue: React.Dispatch<React.SetStateAction<string>>;
  searchProducts: () => void;
  handleClick: (idProduct: number) => void;
  removeProductsCarrinho: (burguerId: number) => void;
  removeProductsTodos: () => void;
  valueReduce: number;
  products: IproductsValue[];
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
