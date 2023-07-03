import { useDispatch } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Main() {
  const data = useSelector((state) => state.productData)
  console.warn(`Data in main Component from saga`, data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList()
    )
  }, [])
  return (
    <>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty To Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div key={item.id} className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>Brand : {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove To Cart</button>
            </div>
          </div>)
        }
      </div>
    </>
  );
}

export default Main;
