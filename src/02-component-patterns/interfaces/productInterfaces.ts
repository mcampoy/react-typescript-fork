import { Props as ProductButtons} from "../components/ProductButtons";
import { Props as ProductCardProps} from "../components/ProductCard";
import { Props as ProductCardTitle} from "../components/ProductTitle";
import { Props as ProductImage} from "../components/ProductImage";


export interface Product {
  id: string;
  img?: string;
  title: string;
  count?: number
};

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductContextProps {
  counter: number,
  maxCount?: number;
  product: Product,

  increaseBy: (value: number) => void,
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Buttons: (Props: ProductButtons) => JSX.Element;
  Image:   (Props: ProductImage) => JSX.Element,
  Title:   (Props: ProductCardTitle) => JSX.Element,
}

export interface onChangeArgs {
  count: number;
  product: Product;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
