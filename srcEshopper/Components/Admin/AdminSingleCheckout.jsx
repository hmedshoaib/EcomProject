import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getCheckout, updateCheckout } from '../../Store/ActionCreators/CheckoutActionCreator';
import { getUser } from '../../Store/ActionCreators/UserActionCreator';
import { useState } from 'react';



export default function AdminSingleCheckout() {
    var checkouts = useSelector((state) => state.CheckoutStateData)
    var users = useSelector((state) => state.UserStateData)
    var [user, setuser] = useState({})
    var [data, setdata] = useState({})
    var [orderstatus, setorderstatus] = useState("")
    var [paymentstatus, setpaymentstatus] = useState({})
    var { id } = useParams()
    var dispatch = useDispatch()


    function getAPIData() {
        dispatch(getCheckout())
        dispatch(getUser())
        var d = checkouts.find((item) => item.id === Number(id))
        if (d) {
            setdata(d)
            setorderstatus(d.paymentmode)
            setpaymentstatus(d.paymentstatus)
        }
        d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d) {
            setuser(d)

        }

    }
    function update() {
        dispatch(updateCheckout({ ...data, paymentstatus: paymentstatus, orderstatus: orderstatus }))
        setdata((old) => {
            return {
                ...old,
                ["orderstatus"]: orderstatus,
                ['paymentstatus']: paymentstatus
            }
        })
    }

    function getData(e) {
        if (e.target.name === "orderstatus")
            setorderstatus(e.target.value)
        else
            setpaymentstatus(e.target.value)

    }

    useEffect(() => {
        getAPIData()
    }, [checkouts.length, users.length])
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg text-center'><Link to="#" className='text-light'>Single_Checkout</Link></h5>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                ID
                            </div>
                            <div className="w-50 p-3 border">
                                {data.id}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                User
                            </div>
                            <div className="w-50 p-3 border">
                                <table className='mytable'>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>
                                                <ul style={{ listStyle: "none" }}>
                                                    <li>{user.addressline1}</li>
                                                    <li>{user.addressline2}</li>
                                                    <li>{user.addressline3}</li>
                                                    <li>{user.city}</li>
                                                    <li>{user.state}</li>
                                                    <li>{user.pin}</li>

                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Payment Mode
                            </div>
                            <div className="w-50 p-3 border">
                                {data.paymentmode}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Order Status
                            </div>
                            <div className="w-50 p-3 border">
                                {data.orderstatus}
                                {
                                    data.orderstatus !== "Delivered" ?
                                        <select name='orderstatus' className='form-control' onChange={getData}>
                                            <option value="Order Placed">Order Placed</option>
                                            <option value="Packed">Packed</option>
                                            <option value="Ready To Ship">Ready To Ship</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Out for Delivery">Out for Delivery</option>
                                            <option value="Delivered">Delivered</option>
                                        </select> : ""
                                }
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Payment Status
                            </div>
                            <div className="w-50 p-3 border">
                                {data.paymentstatus}
                                {
                                    data.paymentstatus !== "Done" ?
                                        <select name='paymentstatus' onChange={getData} className='form-control'>
                                            <option value="Pending">Pending</option>
                                            <option value="Done">Done</option>
                                        </select> : ""
                                }
                            </div>
                        </div>


                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Shipping Amount
                            </div>
                            <div className="w-50 p-3 border">
                                &#8377;{data.shippingAmount}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Total Amount
                            </div>
                            <div className="w-50 p-3 border">
                                &#8377;{data.totalAmount}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Final Amount
                            </div>
                            <div className="w-50 p-3 border">
                                &#8377;{data.finalAmount}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Date
                            </div>
                            <div className="w-50 p-3 border">
                                {data.time}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-100 p-3 border">
                                {
                                    data.orderstatus !== "Delivered" || data.paymentstatus !== "Done" ?
                                        <button className='btn btn-primary w-100' onClick={update}>Update</button> :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="">
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
                                                    data.producs && data.producs.map((item, index) => {
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
                </div>
            </div>

        </>
    )
}

