import React from 'react'
import { Link } from 'react-router-dom'

export default function BuyerProfile({user}) {
    return (
        <>
            <h5 className='bg text-center text-light'>Buyer_Profile</h5>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>Name</div>
                <div>{user.name}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>User Name</div>
                <div>{user.username}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>Email</div>
                <div>{user.email}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>Phone</div>
                <div>{user.phone}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>Addreddline1</div>
                <div>{user.addressline1}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>Addreddline2</div>
                <div>{user.addressline2}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>Addreddline3</div>
                <div>{user.addressline3}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>City</div>
                <div>{user.city}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>State</div>
                <div>{user.state}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>Pin</div>
                <div>{user.pin}</div>
            </div>
            <div className='d-flex admin-home1 '>
                <div className='px-3 w-50'>Role</div>
                <div>{user.role}</div>
            </div>
            <div className='mybtn my-3'>
                <Link className='btn w-100 mybtn btn-primary' to="/update_profile">Update Profile</Link>
            </div>
        </>
    )
}
