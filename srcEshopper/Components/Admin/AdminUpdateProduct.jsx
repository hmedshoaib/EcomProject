import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { useNavigate, useParams } from 'react-router-dom'
import { updateProduct, getProduct } from "../../Store/ActionCreators/ProductActionCreator"
import { getMaincategory } from "../../Store/ActionCreators/MainCategoryActionCreators"
import { getSubcategory } from "../../Store/ActionCreators/SubCategoryActionCreator"
import { getBrand } from "../../Store/ActionCreators/BrandActionCreator"
import { useSelector, useDispatch } from 'react-redux'
export default function AdminUpdateProduct() {
    var [data, setdata] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        baseprice: 0,
        discount: 0,
        finalprice: 0,
        stock: "In Stock",
        description: "This is sample product",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    var { id } = useParams()
    var product = useSelector((state) => state.ProductStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var maincategory = useSelector((state) => state.MainCategoryStateData)
    var subcategory = useSelector((state) => state.SubCategoryStateData)
    var navigate = useNavigate()
    var dispatch = useDispatch()

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
        var b_price = parseInt(data.baseprice)
        var d_price = parseInt(data.discount)
        var f_price = parseInt(b_price - b_price * d_price / 100)
        var m = data.maincategory
        var s = data.subcategory
        var b = data.brand

        if (m === "")
            m = maincategory[0].name    //Agr category select nhi krte hain to bydefoult select ho jayenga 

        if (s === "")
            s = subcategory[0].name         //Agr category select nhi krte hain to bydefoult select ho jayenga 

        if (b === "")
            b = brand[0].name           //Agr category select nhi krte hain to bydefoult select ho jayenga 

        var item = {
            id: id,
            name: data.name,
            maincategory: m,
            subcategory: s,
            brand: b,
            color: data.color,
            size: data.size,
            baseprice: b_price,
            discount: d_price,
            finalprice: f_price,
            stock: data.stock,
            description: data.description,
            pic1: data.pic1,
            pic2: data.pic2,
            pic3: data.pic3,
            pic4: data.pic4,
        }
        dispatch(updateProduct(item))
        navigate("/admin_product")
    }
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getBrand())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        var item = product.find((item) => item.id === Number(id))
        if (item)
            setdata(product.find((item) => item.id === Number(id)))
    }, [])
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg text-center text-light'>Product</h5>
                        <form onSubmit={postData}>
                            <div className="mb-3 p-3 Ahmed">
                                <label htmlFor="">Name</label>
                                <input type="text" name='name' id='name' required placeholder='Enter MainCategory Name :' className='form-control Ahmed' onChange={getData} value={data.name} />
                            </div>
                            <div className="row  p-3">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="">MainCategory</label>
                                    <select name="maincategory" id="maincategory" onChange={getData} className='form-control'>
                                        {
                                            maincategory.map((item, index) => {
                                                return <option key={index} value={item.name} selected={item.name === data.maincategory}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="">SubCategory</label>
                                    <select name="subcategory" id="subcategory" onChange={getData} className='form-control' >
                                        {
                                            subcategory.map((item, index) => {
                                                return <option key={index} value={item.name} selected={item.name === data.subcategory}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="">Brand</label>
                                    <select name="brand" id="brand" onChange={getData} className='form-control'>
                                        {
                                            brand.map((item, index) => {
                                                return <option key={index} value={item.name} selected={item.name === data.brand}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="">Stock</label>
                                    <select name="stock" id="stock" onChange={getData} className='form-control'>
                                        <option value="instock" selected={"In Stock" === data.stock}>In Stock</option>
                                        <option value="outofstock" selected={"Out of stock" === data.stock}>Out of stock</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="color">Color</label>
                                    <input type="text" name='color' id='color' placeholder='Enter Color : ' onChange={getData} className='form-control' value={data.color} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="size">Size</label>
                                    <input type="text" name='size' id='size' placeholder='Enter Size : ' onChange={getData} className='form-control' value={data.size} />
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="baseprice">Base Price</label>
                                    <input type="number" name='baseprice' id='baseprice' placeholder='Enter Base Price : ' onChange={getData} className='form-control' value={data.baseprice} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="discount">Discount</label>
                                    <input type="number" name='discount' id='discount' placeholder='Enter Discount : ' onChange={getData} className='form-control' value={data.discount} />
                                </div>
                            </div>
                            <div className="p-3">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" cols="30" rows="3" className='form-control' onChange={getData} value={data.description}></textarea>
                            </div>
                            <div className="row mb-3 p-3">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="pic1">Pic1:</label>
                                    <input type="file" name='pic1' id='pic1' onChange={getFile} className='form-control inputsty' />
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="pic2">Pic2:</label>
                                    <input type="file" name='pic2' id='pic2' onChange={getFile} className='form-control inputsty' />
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="pic3">Pic3:</label>
                                    <input type="file" name='pic3' id='pic3' onChange={getFile} className='form-control inputsty' />
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="pic4">Pic4:</label>
                                    <input type="file" name='pic4' id='pic4' onChange={getFile} className='form-control inputsty' />
                                </div>
                            </div>
                            <div className="mybtn ml-5">
                                <button type='submit' className='btn btn-primary' style={{ fontSize: "15px", fontWeight: "600", width: "95%" }} >Updata</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}


