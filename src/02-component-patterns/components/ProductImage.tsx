import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';


export const ProductImage = ({ img = '' }) => {
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
    <img className={styles.productImg} src={ productImg } alt="Product" />
  )
};