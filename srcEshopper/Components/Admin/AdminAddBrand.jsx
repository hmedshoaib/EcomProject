import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { useNavigate } from 'react-router-dom'
import { addBrand, getBrand } from "../../Store/ActionCreators/BrandActionCreator"
import { useSelector, useDispatch } from 'react-redux'
export default function AdminAddBrand() {
    var [name, setname] = useState("")
    var brand = useSelector((state) => state.BrandStateData)
    var navigate = useNavigate()
    var dispatch = useDispatch()

    function getData(e) {
        setname(e.target.value)
    }

    function postData(e) {
        e.preventDefault()
        // alert(`Name :   ${name}`)
        var item = brand.find((item) => item.name === name)
        if (item)
            alert(`Brand name is already exit`)
        else {
            dispatch(addBrand({ name: name }))
            navigate("/admin_b")
        }
    }
    useEffect(() => {
        dispatch(getBrand())
    }, [])
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg text-center text-light'>Brand</h5>
                        <form onSubmit={postData}>
                            <div className="mb-3 p-3 Ahmed">
                                <label htmlFor="">Name</label>
                                <input type="text" name='name' id='name' required placeholder='Enter MainCategory Name :' className='form-control Ahmed' onChange={getData} />
                            </div>
                            <div className="mybtn ml-5">
                                <button type='submit' className='btn btn-primary' style={{ fontSize: "15px", fontWeight: "600", width: "95%" }} >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


