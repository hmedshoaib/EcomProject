import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../Store/ActionCreators/ProductActionCreator';
import { getMaincategory } from '../Store/ActionCreators/MainCategoryActionCreators';
import { getSubcategory } from '../Store/ActionCreators/SubCategoryActionCreator';
import { getBrand } from '../Store/ActionCreators/BrandActionCreator';

export default function Shop() {
    var { maincat } = useParams()
    var [mc, setmc] = useState("All")
    var [sb, setsb] = useState("All")
    var [br, setbr] = useState("All")
    var [min, setmin] = useState(1)
    var [max, setmax] = useState(1000)
    var [shopproduct, setshopproduct] = useState([])
    var product = useSelector((state) => state.ProductStateData)
    product.sort((x, y) => y.id - x.id)
    var maincategory = useSelector((state) => state.MainCategoryStateData)
    var subcategory = useSelector((state) => state.SubCategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)

    var dispatch = useDispatch()

    function getSelected(mc, sb, br) {
        if (mc === 'All' && sb === "All" && br === "All")
            setshopproduct(product)
        else if (mc !== 'All' && sb === "All" && br === "All")
            setshopproduct(product.filter((item) => item.maincategory === mc))
        else if (mc === 'All' && sb !== "All" && br === "All")
            setshopproduct(product.filter((item) => item.subcategory === sb))
        else if (mc === 'All' && sb === "All" && br !== "All")
            setshopproduct(product.filter((item) => item.brand === br))
        else if (mc !== 'All' && sb !== "All" && br === "All")
            setshopproduct(product.filter((item) => item.maincategory === mc && item.subcategory === sb))
        else if (mc !== 'All' && sb === "All" && br !== "All")
            setshopproduct(product.filter((item) => item.maincategory === mc && item.brand === br))
        else if (mc === 'All' && sb !== "All" && br !== "All")
            setshopproduct(product.filter((item) => item.subcategory === sb && item.brand === br))
        else
            setshopproduct(product.filter((item) => item.maincategory === mc && item.subcategory === sb && item.brand === br))
    }

    function getFilter(input) {
        if (input.mc) {
            setmc(input.mc)
            getSelected(input.mc, sb, br)
        }

        else if (input.sb) {
            setsb(input.sb)
            getSelected(mc, input.sb, br)
        }

        else {
            setbr(input.br)
            getSelected(mc, sb, input.br)
        }
    }

    function getPriceFilterData(min, max) {
        setshopproduct(product.filter((item) => item.finalprice >= min && item.finalprice <= max))
    }

    function getPriceFilter(e) {
        if (e.target.name === "min") {
            setmin(e.target.value)
            getPriceFilterData(e.target.value, max)
        }
        else {
            setmax(e.target.value)
            getPriceFilterData(min, e.target.value)

        }
    }

    function getAPIData() {
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        setshopproduct(product)
        if (maincat === "All")
            setshopproduct(product)
        else
            setshopproduct(product.filter((item) => item.maincategory === maincat))

    }

    useEffect(() => {
        getAPIData()

    }, [maincategory.length, subcategory.length, brand.length])

    return (
        <>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-10 order-md-last">
                            <div className="row">

                                {
                                    shopproduct.map((item, index) => {
                                        return <div key={index} className="col-sm-12 col-md-12 col-lg-4  d-flex">
                                            <div className="product d-flex flex-column">
                                                <Link target='_blank' to={`/assets/product_img/${item.pic1}`} className="img-prod"><img className="img-fluid" src={`/assets/product_img/${item.pic1}`} style={{ width: "100%", height: "300px" }} alt="Colorlib Template" />
                                                    <span className="status">{item.discount}% Off</span>
                                                    <div className="overlay"></div>
                                                </Link>
                                                <div className="text py-3 pb-4 px-3">
                                                    <div className="d-flex">
                                                        <div className="cat">
                                                            <span>Lifestyle</span>
                                                        </div>
                                                        <div className="rating">
                                                            <p className="text-right mb-0">
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h3><Link to={`/s_p_page/${item.id}`}>{item.name}</Link></h3>
                                                    <div className="pricing">
                                                        <p className="price"><span className="mr-2 price-dc">&#8377;{item.baseprice}</span><span className="price-sale">&#8377;{item.finalprice}</span></p>
                                                    </div>
                                                    <p className="bottom-area d-flex px-3">
                                                        <Link to={`/s_p_page/${item.id}`} className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></Link>
                                                        {/* <Link to="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></Link> */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><Link to="#">&lt;</Link></li>
                                            <li className="active"><span>1</span></li>
                                            <li><Link to="#">2</Link></li>
                                            <li><Link to="#">3</Link></li>
                                            <li><Link to="#">4</Link></li>
                                            <li><Link to="#">5</Link></li>
                                            <li><Link to="#">&gt;</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <div className="sidebar">
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Categories</h2>
                                    <div className="fancy-collapse-panel">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Maincategory
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        <li><button className='btn btn-light' onClick={() => getFilter({ mc: "All" })}>All</button></li>
                                                        {
                                                            maincategory.map((item, index) => {
                                                                return <li key={index}><button className='btn btn-light' onClick={() => getFilter({ mc: item.name })}>{item.name}</button></li>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingTwo">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Subcategory
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                    <div className="panel-body">
                                                        <li><button className='btn btn-light' onClick={() => getFilter({ sb: "All" })}>All</button></li>
                                                        {
                                                            subcategory.map((item, index) => {
                                                                return <li key={index}><button className='btn btn-light' onClick={() => getFilter({ sb: item.name })}>{item.name}</button></li>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingThree">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Brand
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <div className="panel-body">
                                                        <li><button className='btn btn-light' onClick={() => getFilter({ br: "All" })}>All</button></li>
                                                        {
                                                            brand.map((item, index) => {
                                                                return <li key={index}><button className='btn btn-light' onClick={() => getFilter({ br: item.name })}>{item.name}</button></li>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Price Range</h2>
                                    <form method="post" className="colorlib-form-2">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price from:</label>
                                                    <div className="form-field">
                                                        <input type="number" name='min' id='min' value={min} onChange={getPriceFilter} className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price to:</label>
                                                    <div className="form-field">
                                                        <input type="number" name='max' id='max' value={max} onChange={getPriceFilter} className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
