import { createContext, ReactElement, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/productInterfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement [];
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: ({ count: number, product: Product }: onChangeArgs) => void;
  value?: number
};

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
console.log(value);
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={ `${styles.productCard} ${className}` }
        style={ style }
      >
        {children}
      </div>
    </Provider>
  )
}

export default ProductCard;
