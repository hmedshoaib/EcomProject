import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/productAction';
const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch()
    console.warn(`Redux data in header:`, result);
    return (
        <div className="header">
            <Link to="/"><h2 className='Logo1'>E-com</h2></Link>
            <div className='search-box'>
                <input type="text" name="" id="" placeholder='Enter your prodcut' onChange={(event) => dispatch(searchProduct(event.target.value))} />
            </div>
            <Link to="/cart">
                <div className="cart_div">
                    <span>{result.length}</span>
                    <img src={require('../assets/cart.png')} alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Header