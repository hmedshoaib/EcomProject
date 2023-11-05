import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftNav() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin_home" className="list-group-item list-group-item-action list-group-item-primary">Home</Link>
                <Link to="/admin-user" className="list-group-item list-group-item-action list-group-item-secondary">Users</Link>
                <Link to="/admin_m_c" className="list-group-item list-group-item-action list-group-item-success">MainCategories</Link>
                <Link to="/admin_sub_c" className="list-group-item list-group-item-action list-group-item-danger">SubCategories</Link>
                <Link to="/admin_b" className="list-group-item list-group-item-action list-group-item-warning">Brands</Link>
                <Link to="/admin_product" className="list-group-item list-group-item-action list-group-item-info">Products</Link>
                <Link to="/admin_c" className="list-group-item list-group-item-action list-group-item-success">ContactUs</Link>
                <Link to="/admin_n" className="list-group-item list-group-item-action list-group-item-dark">Newslatters</Link>
                <Link to="/admin_checkout" className="list-group-item list-group-item-action list-group-item-primary">Checkout</Link>
            </div>
        </>
    )
}
