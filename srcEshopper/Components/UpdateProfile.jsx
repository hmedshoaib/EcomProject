import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser, updateUser } from "../Store/ActionCreators/UserActionCreator"
import { useDispatch, useSelector } from 'react-redux'

export default function Updateprofile() {

    var [data, setdata] = useState({
        name: "",
        pic: "",
        phone: "",
        email: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        city: "",
        state: "",
        pin: "",
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


    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0].name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }



    function postData(e) {
        e.preventDefault()
        var item = {
            id: localStorage.getItem("userid"),
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
            addressline1: data.addressline1,
            addressline2: data.addressline2,
            addressline3: data.addressline3,
            city: data.city,
            state: data.state,
            pin: data.pin,
            pic: data.pic,
            role: data.role,
        }
        dispatch(updateUser(item))
        if (data.role === "Admin")
            navigate("/admin_home")
        else
            navigate("/profile")

    }

    useEffect(() => {
        dispatch(getUser())
        var d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d)
            setdata(d)
    }, [users.length])

    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <h1 className="mb-0 bread">Update_Profile_Section</h1>
                            <div className="container-fluid p-3">
                                <div className="w-100 m-auto">
                                    <form action="" className='Ahmed1' onSubmit={postData}>
                                        <div className="row">
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='name' required id='name' placeholder='Enter  name : ' className='form-control' onChange={getData} value={data.name} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="file" name='pic' required id='pic' className='form-control' onChange={getFile} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="phone" name='phone' required id='phone' placeholder='Enter  phone : ' className='form-control' onChange={getData} value={data.phone} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="email" name='email' required id='email' placeholder='Enter  Email : ' className='form-control' onChange={getData} value={data.email} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='addressline1' required id='addressline1' placeholder='Enter  House,Floor,or Building Num : ' className='form-control' onChange={getData} value={data.addressline1} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='addressline2' required id='addressline2' placeholder='Enter  Street Number or Near By : ' className='form-control' onChange={getData} value={data.addressline2} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='addressline3' required id='addressline3' placeholder='Enter  Village or Locality : ' className='form-control' onChange={getData} value={data.addressline3} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='city' required id='city' placeholder='Enter  Your City : ' className='form-control' onChange={getData} value={data.city} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='state' required id='state' placeholder='Enter Your State: ' className='form-control' onChange={getData} value={data.state} />
                                            </div>
                                            <div className='col-md-6 col-12 '>
                                                <input type="text" name='pin' required id='pin' placeholder='Enter  Your Pin Code : ' className='form-control' onChange={getData} value={data.pin} />
                                            </div>
                                        </div>
                                        <div className="mybtn mt-4">
                                            <button type='submit' className='btn btn-primary w-100' style={{ fontSize: "15px", fontWeight: "600", width: "95%" }} >Update</button>
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
