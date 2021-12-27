import { ProductCard } from '../components';
import { products } from '../data/products';
import useShoppingCart from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

const ShoppingPage = () => {

  // const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

  const {shoppingCart, onProductCartChange} = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

    {
      products.map(product => (
        <ProductCard
          key={product.id}
          className="bg-dark text-white"
          onChange={ onProductCartChange }
          product={ product }
          value={shoppingCart[product.id]?.count || 0}
        >
          <ProductCard.Image
            className="custom-image"
            // style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2' }}
          />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
       </ProductCard>
      ))
    }

      </div>


      <div className="shopping-cart">
    {
      Object.entries(shoppingCart).map(([key, prod]) => (
        <ProductCard
            key={key}
            className="bg-dark text-white"
            onChange={ onProductCartChange }
            product={ prod }
            style={{ width: '100px'}}
            value={prod.count}
        >
          <ProductCard.Image
            className="custom-image"
            // style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2' }}
          />
          <ProductCard.Buttons
            className="custom-buttons"
            style={{ display: 'flex', justifyContent: 'center'}}
          />
        </ProductCard>
      ))
    }
      </div>
    </div>
  )
}

export default ShoppingPage
