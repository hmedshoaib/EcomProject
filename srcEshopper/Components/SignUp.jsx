import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addUser, getUser } from "../Store/ActionCreators/UserActionCreator"
import { useDispatch, useSelector } from 'react-redux'

export default function SignUp() {

    var [data, setdata] = useState({
        name: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        cpassword: ""
    })

    var users = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    useEffect(() => {
        dispatch(getUser())
    }, [])

    function postData(e) {
        e.preventDefault()
        if (data.password === data.cpassword) {
            var d = users.find((item) => item.username === data.username)
            if (d)
                alert(`UserName Already Taken!!!`)
            else {
                var item = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    addressline1: "",
                    addressline2: "",
                    addressline3: "",
                    city: "",
                    state: "",
                    pin: "",
                    pic: "",
                    role: "User",
                }
                dispatch(addUser(item))
                navigate("/login")
            }

        }
        else
            alert(`Password & cPassword doesn't matched`)
    }

    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <h1 className="mb-0 bread">SignUp Us</h1>
                            <div className="container-fluid p-3">
                                <div className="w-100 m-auto">
                                    <form action="" className='Ahmed1' onSubmit={postData}>
                                        <div className="row">
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='name' required id='name' placeholder='Enter  name : ' className='form-control' onChange={getData} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='username' required id='username' placeholder='Enter  Username : ' className='form-control' onChange={getData} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="phone" name='phone' required id='phone' placeholder='Enter  phone : ' className='form-control' onChange={getData} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="email" name='email' required id='email' placeholder='Enter  Email : ' className='form-control' onChange={getData} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="password" name='password' required id='password' placeholder='Enter  password : ' className='form-control' onChange={getData} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="password" name='cpassword' required id='cpassword' placeholder='Enter  Cpassword : ' className='form-control' onChange={getData} />
                                            </div>
                                        </div>
                                        <div className="mybtn mt-4">
                                            <button type='submit' className='btn btn-primary w-100' style={{ fontSize: "15px", fontWeight: "600", width: "95%" }} >SignUp</button>
                                        </div>
                                        <div className="">
                                            <Link to="/login" className='text-dark'>Already User?Login to your Account</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
