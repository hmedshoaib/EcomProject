import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, getCart, updateCart } from "../Store/ActionCreators/CartActionCreator"

export default function Cart() {
    var [cart, setcart] = useState(0)
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState([])
    var carts = useSelector((state) => state.CartStateData)
    var dispatch = useDispatch()



    function getAPIData() {
        dispatch(getCart())
        var data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
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

    function update(id, op) {
        var item = carts.find((item) => item.id === id)
        if (op === "dec" && item.qty === 1)
            return
        else if (op === "dec") {
            item.qty = item.qty - 1
            item.totalprice = item.totalprice - item.price
        }
        else {
            item.qty = item.qty + 1
            item.totalprice = item.totalprice + item.price
        }
        dispatch(updateCart(item))
        getAPIData()
    }


    function deleteItem(id) {
        dispatch(deleteCart({ id: id }))
        getAPIData()
    }


    useEffect(() => {
        getAPIData()
    }, [carts.length])


    return (
        <>
            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="cart-list">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>Product</th>
                                            <th>color</th>
                                            <th>Size</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts.map((item, index) => {
                                                return <tr key={index} className="text-center">
                                                    <td className="product-remove" onClick={() => deleteItem(item.id)}><a><span className="ion-ios-close"></span></a></td>
                                                    <td className="image-prod"><div className="img rounded" style={{ backgroundImage: `url('assets/product_img/${item.pic}')` }}></div></td>
                                                    <td className="product-name">
                                                        <h3>{item.name}</h3>
                                                    </td>
                                                    <td className="">
                                                        <p>{item.color}</p>
                                                    </td>
                                                    <td className="">
                                                        <p className=''>{item.size}</p>
                                                    </td>
                                                    <td className="">
                                                        <p className=''>&#8377;&nbsp;{item.price}</p>
                                                    </td>
                                                    <td className="quantity">
                                                        <div className="input-group mb-4">

                                                            <span className="input-group-btn mr-2">
                                                                <button type="button" className="quantity-left-minus btn ml-5" data-type="minus" style={{ marginTop: "" }} data-field="" onClick={() => update(item.id, "dec")}>
                                                                    <i className="ion-ios-remove"></i>
                                                                </button>
                                                            </span>
                                                            <p className='mt-3'>{item.qty}</p>
                                                            <span className="input-group-btn ml-2">
                                                                <button type="button" className="quantity-right-plus btn" data-type="plus" style={{ marginTop: "" }} data-field="" onClick={() => update(item.id, "inc")}>
                                                                    <i className="ion-ios-add"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="">
                                                        <p className='mb-4'>&#8377;{item.totalprice}</p>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Total</span>
                                    <span>&#8377;{total}</span>
                                </p>
                                <p className="d-flex">
                                    <span>Shipping</span>
                                    <span>&#8377;{shipping}</span>
                                </p>
                                <hr />
                                <p className="d-flex">
                                    <span>Final Amount</span>
                                    <span>&#8377;{final}</span>
                                </p>
                            </div>
                            <p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
