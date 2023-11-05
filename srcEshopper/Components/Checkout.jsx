import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from "../Store/ActionCreators/UserActionCreator"
import { deleteCart, getCart } from "../Store/ActionCreators/CartActionCreator"
import { addCheckout } from "../Store/ActionCreators/CheckoutActionCreator"

import BuyerProfile from './BuyerProfile'

export default function Checkout() {

    var users = useSelector((state) => state.UserStateData)
    var carts = useSelector((state) => state.CartStateData)
    var [user, setuser] = useState({})
    var [cart, setcart] = useState([])
    var [mode, setmode] = useState("COD")
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState(0)

    var dispatch = useDispatch()
    var navigate = useNavigate()


    function placeAnorder() {
        var item = {
            userid: localStorage.getItem("userid"),
            paymentmode: mode,
            orderstatus: "order placed",
            paymentstatus: "pending",
            time: new Date(),
            totalAmount: total,
            shippingAmount: shipping,
            finalAmount: final,
            producs: cart
        }
        dispatch(addCheckout(item))
        for (let item of cart) {
            dispatch(deleteCart({ id: item.id }))
        }
        navigate("/confirmation_page")
    }

    function getData(e) {
        setmode(e.target.value)
    }


    function getAPIData() {
        dispatch(getUser())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)
        dispatch(getCart())
        data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
        if (data) {
            setcart(data)
            var total = 0
            var shipping = 0
            var final = 0
            for (let item of data) {
                total = total + item.totalprice
            }
            if (total > 0 && total <= 1000)
                shipping = 150
            final = total + shipping
            settotal(total)
            setshipping(shipping)
            setfinal(final)
        }
    }

    useEffect(() => {
        getAPIData()
    }, [users.length, carts.length,])

    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <BuyerProfile user={user} />

                        </div>
                        <div className="col-md-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="">
                                        <h5 className='bg text-center text-light'>Cart_Details</h5>

                                        <table className="mytable">
                                            <thead className="">
                                                <tr className="text-center">
                                                    <th>&nbsp;</th>
                                                    <th>Product</th>
                                                    <th>color</th>
                                                    <th>Size</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cart.map((item, index) => {
                                                        return <tr key={index} className="text-center">
                                                            <td className="image-prod"><div className="img rounded"><img src={`/assets/product_img/${item.pic}`} height="50px" width="50%"></img></div></td>
                                                            <td className="product-name">
                                                                <h6>{item.name}</h6>
                                                            </td>
                                                            <td className="">
                                                                <p className='mt-2'>{item.color}</p>
                                                            </td>
                                                            <td className="">
                                                                <p className='mt-2'>{item.size}</p>
                                                            </td>
                                                            <td className="">
                                                                <p className='mt-2'>&#8377;&nbsp;{item.price}</p>
                                                            </td>
                                                            <td className="">
                                                                <p className='mt-2'>{item.qty}</p>
                                                            </td>
                                                            <td className="">
                                                                <p className='mb-2'>&#8377;{item.totalprice}</p>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-detail cart-total bg-light p-3" style={{ height: "250px" }}>
                                <h3 className="billing-heading">Cart Total</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span>&#8377;{total}</span>
                                </p>
                                <p className="d-flex">
                                    <span>Delivery</span>
                                    <span>&#8377;{shipping}</span>
                                </p>

                                <hr />
                                <p className="d-flex total-price">
                                    <span>Total</span>
                                    <span>&#8377;{final}</span>
                                </p>
                            </div>
                            <div className="cart-detail bg-light p-3 p-md-4 mt-2 " style={{ height: "230px" }} >
                                <h3 className="billing-heading">Payment Method</h3>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" name="mode" onChange={getData} className="mr-2" value='NetBanking' />Net Banking/Card/UPI</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" name="mode" onChange={getData} className="mr-2" value='COD' checked /> Cash On Delivery</label>
                                        </div>
                                    </div>
                                </div>
                                <p><button className="btn btn-primary py-3 px-4" onClick={placeAnorder}>Place an order</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
