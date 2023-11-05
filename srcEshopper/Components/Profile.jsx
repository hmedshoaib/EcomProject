import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser } from "../Store/ActionCreators/UserActionCreator"
import { deleteWishlist, getWishlist } from "../Store/ActionCreators/WishlistActionCreator"
import { getCheckout } from "../Store/ActionCreators/CheckoutActionCreator"
import { useDispatch, useSelector } from 'react-redux'
import BuyerProfile from './BuyerProfile'

export default function Profile() {

  var users = useSelector((state) => state.UserStateData)
  var [user, setuser] = useState({})
  var wishlists = useSelector((state) => state.WishlistStateData)
  var [wishlist, setwishlist] = useState([])
  var checkout = useSelector((state) => state.CheckoutStateData)
  var [orders, setorders] = useState([])
  var dispatch = useDispatch()
  var navigate = useNavigate()

  function deleteItem(id) {
    dispatch(deleteWishlist({ id: id }))
    getAPIData()
  }


  function getAPIData() {
    dispatch(getUser())
    dispatch(getWishlist())
    dispatch(getCheckout())
    var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
    if (data)
      setuser(data)

    data = wishlists.filter((item) => item.userid === localStorage.getItem("userid")) //Find se bhi kam ho ja rha hai
    if (data)
      setwishlist(data)


    data = checkout.filter((item) => item.userid === localStorage.getItem("userid")) //Find se bhi kam ho ja rha hai
    if (data)
      setorders(data)
  }

  useEffect(() => {
    getAPIData()
  }, [users.length, wishlists.length, checkout.length])

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-4">
            {
              user.pic ?
                <img src={`/assets/product_img/${user.pic}`} height="440px" width="95%" ></img> :
                <img src={`/assets/images/noImg.png`} height="440px" width="95%" alt='noImg' ></img>
            }


          </div>
          <div className="col-md-6 mt-3">
            <BuyerProfile user={user} />
          </div>
        </div>
        <hr />
        <h3 className='text-center'>Wishlist_Section</h3>
        <div className="row">
          <div className="col-md-12 ">
            <div className="cart-list">
              <table className="table">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>color</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    wishlist.map((item, index) => {
                      return <tr key={index} className="text-center">
                        <td className="image-prod"><div className="img rounded" style={{ backgroundImage: `url('assets/product_img/${item.pic}')` }}></div></td>
                        <td className="product-name">
                          <h3 className="mt-3">{item.name}</h3>
                        </td>
                        <td className="">
                          <p className="mt-3">{item.color}</p>
                        </td>
                        <td className="">
                          <p className='mt-3'>{item.size}</p>
                        </td>
                        <td className="">
                          <p className='mt-3'>&#8377;&nbsp;{item.price}</p>
                        </td>
                        <td className="product-remove"><a href={`/s_p_page/${item.productid}`} ><span className="ion-ios-cart" onClick={() => deleteItem(item.id)}></span></a></td>
                        <td className="product-remove" onClick={() => deleteItem(item.id)}><a href="#"><span className="ion-ios-close"></span></a></td>

                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h3 className='text-center'>Order_History_Section</h3>
        {
          orders.map((item, index) => {
            return <div className="row" key={index}>
              <div className="col-lg-4">
                <table className='mytable1 mt-5'>
                  <tbody>
                    <tr>
                      <th>Order Id</th>
                      <td>{item.id}</td>
                    </tr>
                    <tr>
                      <th>Payment Mode</th>
                      <td>{item.paymentmode}</td>
                    </tr>
                    <tr>
                      <th>Payment Status</th>
                      <td>{item.paymentstatus}</td>
                    </tr>
                    <tr>
                      <th>Order Status</th>
                      <td>{item.orderstatus}</td>
                    </tr>
                    <tr>
                      <th>Total Amount</th>
                      <td>&#8377;{item.totalAmount}</td>
                    </tr>
                    <tr>
                      <th>Shipping Amount</th>
                      <td>&#8377;{item.shippingAmount}</td>
                    </tr>
                    <tr>
                      <th>Final Amount</th>
                      <td>&#8377;{item.finalAmount}</td>
                    </tr>
                    <tr>
                      <th>Data</th>
                      <td>{item.time}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="">
                      <table className="mytable">
                        <thead className="thead-primary">
                          <tr className="text-center">
                            <th>&nbsp;</th>
                            <th>Product</th>
                            <th>color</th>
                            <th>Size</th>
                            {/* <th>Price</th> */}
                            <th>Qty</th>
                            <th>Total</th>
                            <th>&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            item.producs.map((item, index) => {
                              return <tr key={index} className="text-center">
                                <td className="image-prod"><div className="img rounded"><img src={`/assets/product_img/${item.pic}`} height="45px" width="45px"></img></div></td>
                                <td className="product-name">
                                  <h5 className="mt-3">{item.name}</h5>
                                </td>
                                <td className="">
                                  <p className="mt-3">{item.color}</p>
                                </td>
                                <td className="">
                                  <p className='mt-3'>{item.size}</p>
                                </td>
                                <td className="">
                                  <p className='mt-3'>{item.qty}</p>
                                </td>
                                <td className="">
                                  <p className='mt-3'>&#8377;{item.totalprice}</p>
                                </td>
                              </tr>
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}
