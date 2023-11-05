import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../Store/ActionCreators/ProductActionCreator';
import { getCart, addCart } from "../Store/ActionCreators/CartActionCreator"
import { getWishlist, addWishlist } from "../Store/ActionCreators/WishlistActionCreator"

export default function SingleProductPage() {
  var [qty, setqty] = useState(1)
  var [p, setp] = useState({
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: ""
  })
  var product = useSelector((state) => state.ProductStateData)
  var cart = useSelector((state) => state.CartStateData)
  var wishlist = useSelector((state) => state.WishlistStateData)
  var { id } = useParams()
  var dispatch = useDispatch()
  var navigate = useNavigate()

  function getAPIData() {
    dispatch(getProduct())
    dispatch(getWishlist())
    dispatch(getCart())
    var data = product.find((item) => item.id === Number(id))
    if (data)
      setp(data)
  }

  function addTocart() {
    var d = cart.find((item) => item.productid === Number(id) && item.userid === localStorage.getItem("userid"))
    if (d) {
      navigate("/cart")
    }
    else {
      var item = {
        productid: p.id,
        userid: localStorage.getItem("userid"),
        name: p.name,
        color: p.color,
        size: p.size,
        price: p.finalprice,
        qty: qty,
        totalprice: p.finalprice * qty,
        pic: p.pic1
      }
      dispatch(addCart(item))
      navigate("/cart")
    }
  }

  function addTowishlist() {
    var d = wishlist.find((item) => item.productid === Number(id) && item.userid === localStorage.getItem("userid"))
    if (d) {
      navigate("/profile")
    }
    else {
      var item = {
        productid: p.id,
        userid: localStorage.getItem("userid"),
        name: p.name,
        color: p.color,
        size: p.size,
        price: p.finalprice,
        pic: p.pic1
      }
      dispatch(addWishlist(item))
      navigate("/profile")
    }
  }

  useEffect(() => {
    getAPIData()
  }, [product.length])


  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={`/assets/product_img/${p.pic1}`} className="d-block w-100 float-right" height="450\0px" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`/assets/product_img/${p.pic2}`} className="d-block w-100 float-right" height="450px" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`/assets/product_img/${p.pic3}`} className="d-block w-100 float-right" height="450px" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`/assets/product_img/${p.pic4}`} className="d-block w-100 float-right" height="450px" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only bg ">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6  pl-md-5">
              <h3>{p.name}</h3>
              <div className="rating d-flex">
                <p className="text-left mr-4">
                  <Link to="#" className="mr-2">5.0</Link>
                  <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                  <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                  <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                  <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                  <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                </p>
                <p className="text-left mr-4">
                  <Link to="#" className="mr-2" style={{ color: "#000" }}>100 <span style={{ color: "#bbb" }}>Rating</span></Link>
                </p>
                <p className="text-left">
                  <Link to="#" className="mr-2" style={{ color: "#000" }}>500 <span style={{ color: "#bbb" }}>Sold</span></Link>
                </p>
              </div>
              <p className="price"><span>&#8377;{p.finalprice}</span></p>
              <div className="row">
                <div className="col-12">
                  <div className='d-flex admin-home '>
                    <div className='px-3 w-50'>Category</div>
                    <div>{p.maincategory}/{p.subcategory}</div>
                  </div>
                  <div className='d-flex admin-home '>
                    <div className='px-3 w-50'>Brand</div>
                    <div>{p.brand}</div>
                  </div>
                  <div className='d-flex admin-home '>
                    <div className='px-3 w-50'>Price</div>
                    <div>&#8377;<sup><del>{p.baseprice}</del></sup> {p.finalprice}&nbsp;&nbsp;&nbsp;{p.discount}% Off</div>
                  </div>
                  <div className='d-flex admin-home '>
                    <div className='px-3 w-50'>Color</div>
                    <div>{p.color}</div>
                  </div>
                  <div className='d-flex admin-home '>
                    <div className='px-3 w-50'>Size</div>
                    <div>{p.size}</div>
                  </div>
                  <div className='d-flex admin-home '>
                    <div className='px-3 w-50'>Description</div>
                    <div>{p.description}</div>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex m-1">
                  <span className="input-group-btn mr-2">
                    <button type="button" className="quantity-left-minus btn" data-type="minus" style={{ marginTop: "10px" }} data-field="" onClick={() => {
                      if (qty > 1)
                        setqty(qty - 1)
                    }}>
                      <i className="ion-ios-remove"></i>
                    </button>
                  </span>
                  {/* <input type="text" id="qty" name="qty" className="quantity form-control" style={{ border: "none", marginLeft: "60px" }} value={qty} /> */}
                  <p className='form-control ' style={{ border: "none", marginLeft: "60px",marginTop:"5px" }}>{qty}</p>
                  <span className="input-group-btn ml-2">
                    <button type="button" className="quantity-right-plus btn" data-type="plus" style={{ marginTop: "10px" }} data-field="" onClick={() => { setqty(qty + 1) }}>
                      <i className="ion-ios-add"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <button onClick={addTocart} className="btn w-50  mybtn1">Add to Cart</button>
                <button onClick={addTowishlist} className="btn w-50 mybtn2 mybtn1 " >Add to Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
