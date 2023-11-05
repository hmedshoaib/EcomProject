import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { useNavigate } from 'react-router-dom'
import { addSubcategory, getSubcategory } from "../../Store/ActionCreators/SubCategoryActionCreator"
import { useSelector, useDispatch } from 'react-redux'
export default function AdminAddSubcategory() {
    var [name, setname] = useState("")
    var subcategory = useSelector((state) => state.SubCategoryStateData)
    var navigate = useNavigate()
    var dispatch = useDispatch()

    function getData(e) {
        setname(e.target.value)
    }

    function postData(e) {
        e.preventDefault()
        // alert(`Name :   ${name}`)
        var item = subcategory.find((item) => item.name === name)
        if (item)
            alert(`Subcategory name is already exit`)
        else {
            dispatch(addSubcategory({ name: name }))
            navigate("/admin_sub_c")
        }
    }
    useEffect(() => {
        dispatch(getSubcategory())
    }, [])
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg text-center text-light'>SubCategory</h5>
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


