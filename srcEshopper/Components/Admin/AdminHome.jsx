import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../Store/ActionCreators/UserActionCreator';

export default function AdminHome() {
    var users = useSelector((state) => state.UserStateData)
    var [user, setuser] = useState({})
    var dispatch = useDispatch()

    function getAPIData() {
        dispatch(getUser())
        var d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d) {
            setuser(d)

        }

    }


    useEffect(() => {
        getAPIData()
    }, [users.length])
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <div className="row">
                            <div className="col-md-5 mt-4">
                                {
                                    user.pic ?
                                        <img src={`/assets/product_img/${user.pic}`} width="95%" height="400px" alt="" /> :
                                        <img src="assets/images/noImg.png" width="95%" height="400px" alt="" />
                                }
                            </div>
                            <div className="col-md-7 mt-5">
                                <h5 className='bg text-center text-light'>Admin-Home</h5>
                                <div className='d-flex admin-home '>
                                    <div className='px-3 w-50'>Name</div>
                                    <div>{user.name}</div>
                                </div>
                                <div className='d-flex admin-home '>
                                    <div className='px-3 w-50'>User Name</div>
                                    <div>{user.username}</div>
                                </div>
                                <div className='d-flex admin-home '>
                                    <div className='px-3 w-50'>Email</div>
                                    <div>{user.email}</div>
                                </div>
                                <div className='d-flex admin-home '>
                                    <div className='px-3 w-50'>Phone</div>
                                    <div>{user.phone}</div>
                                </div>
                                <div className='d-flex admin-home '>
                                    <div className='px-3 w-50'>Role</div>
                                    <div>{user.role}</div>
                                </div>
                                <div className='mybtn mt-3'>
                                    <Link className='btn w-100 mybtn btn-primary' to="/update_profile">Update Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
