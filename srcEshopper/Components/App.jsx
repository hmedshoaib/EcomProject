import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import Cart from './Cart'
import Checkout from './Checkout'
import SingleProductPage from './SingleProductPage'
import AdminHome from './Admin/AdminHome'
import AdminMaincategory from './Admin/AdminMaincategory'
import AdminAddMaincategory from './Admin/AdminAddMaincategor'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategor'
import AdminSubcategory from './Admin/AdminSubcategory'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategor'
import AdminAddSubcategory from './Admin/AdminAddSubcategor'
import AdminBrand from './Admin/AdminBrand'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'
import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'
import Profile from './Profile'
import Login from './Login'
import SignUp from './SignUp'
import Updateprofile from './UpdateProfile'
import ConfirmationPage from './ConfirmationPage'
import AdminUsers from './Admin/AdminUsers'
import AdminNewslatters from './Admin/AdminNewslatters'
import AdminContactUs from './Admin/AdminContactUs'
import AdminSingleContact from './Admin/AdminSingleContact'
import AdminCheckout from './Admin/AdminCheckout'
import AdminSingleCheckout from './Admin/AdminSingleCheckout'


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/shop/:maincat/' element={<Shop />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/s_p_page/:id' element={<SingleProductPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/update_profile' element={<Updateprofile />} />
                    <Route path='/confirmation_page' element={<ConfirmationPage />} />



                    <Route path='/admin_home' element={<AdminHome />} />

                    <Route path='/admin_m_c' element={<AdminMaincategory />} />
                    <Route path='/admin_a_main_c' element={<AdminAddMaincategory />} />
                    <Route path='/admin_update_main_c/:id' element={<AdminUpdateMaincategory />} />

                    <Route path='/admin_sub_c' element={<AdminSubcategory />} />
                    <Route path='/admin_a_sub_c' element={<AdminAddSubcategory />} />
                    <Route path='/admin_update_sub_c/:id' element={<AdminUpdateSubcategory />} />

                    <Route path='/admin_b' element={<AdminBrand />} />
                    <Route path='/admin_a_b' element={<AdminAddBrand />} />
                    <Route path='/admin_update_brand/:id' element={<AdminUpdateBrand />} />


                    <Route path='/admin_product' element={<AdminProduct />} />
                    <Route path='/admin_add_product' element={<AdminAddProduct />} />
                    <Route path='/admin_update_product/:id' element={<AdminUpdateProduct />} />
                    <Route path='/admin-user' element={<AdminUsers />} />
                    <Route path='/admin_n' element={<AdminNewslatters />} />
                    <Route path='/admin_c' element={<AdminContactUs />} />
                    <Route path='/admin_single_contact/:id' element={<AdminSingleContact />} />
                    <Route path='/admin_single_checkout/:id' element={<AdminSingleCheckout />} />
                    <Route path='/admin_checkout' element={<AdminCheckout />} />





                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
