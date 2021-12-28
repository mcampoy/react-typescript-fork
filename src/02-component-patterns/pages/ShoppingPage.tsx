import { ProductCard } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

        <ProductCard
          key={product.id}
          className="bg-dark text-white"
          product={ product }
          initialValues={{
            count: 3,
            maxCount: 10
          }}
        >
          {
            ({
              reset,
              increaseBy,
              count,
              maxCount,
              isMaxCountReached
            }) => (
              <>
                <ProductCard.Image
                  className="custom-image"
                  // style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2' }}
                />
                <ProductCard.Title className="text-white text-bold" />
                <ProductCard.Buttons className="custom-buttons" />

                <button onClick={ reset }>Reset</button>
                <button onClick={ () => increaseBy(-2) }>-2</button>
                {
                  !isMaxCountReached &&
                <button onClick={ () => increaseBy(2) }>+2</button>
                }
                <span>{ count } - { maxCount } </span>
              </>
            )
          }
       </ProductCard>
    </div>
  )
}

export default ShoppingPage
