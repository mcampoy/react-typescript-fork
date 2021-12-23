import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let productImg: string;

  if(img) {
    productImg = img;
  } else if (product.img) {
    productImg = product.img;
  } else {
    productImg = noImage;
  }

  return (
    <img
      className={`${className} ${styles.productImg}`}
      style={style}
      src={ productImg }
      alt="Product" 
    />
  )
};