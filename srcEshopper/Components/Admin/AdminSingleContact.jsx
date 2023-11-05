import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContact, updateContact } from '../../Store/ActionCreators/ContactActionCreator';
import { useState } from 'react';



export default function AdminSingleContact() {
    var contact = useSelector((state) => state.ContactStateData)
    var [data, setdata] = useState({})
    var { id } = useParams()
    var dispatch = useDispatch()
    var navigate = useNavigate()


    function getAPIData() {
        dispatch(getContact())
        var d = contact.find((item) => item.id === Number(id))
        if (d) {
            setdata(d)
        }
    }

    function update() {
            dispatch(updateContact({...data,status:"Done"}))
            setdata((old)=>{
                return {
                    ...old,
                    ["status"]:"Done"
                }
            })
    }

    function deleteRecord() {
            dispatch(deleteContact({...data,status:"Done"}))
            navigate("/admin_c")
    }

    useEffect(() => {
        getAPIData()
    }, [contact.length])
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg text-center'><Link to="#" className='text-light'>Single_Contact</Link></h5>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                ID
                            </div>
                            <div className="w-50 p-3 border">
                                {data.id}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Name
                            </div>
                            <div className="w-50 p-3 border">
                                {data.name}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Email
                            </div>
                            <div className="w-50 p-3 border">
                                {data.email}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Phone
                            </div>
                            <div className="w-50 p-3 border">
                                {data.phone}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Subject
                            </div>
                            <div className="w-50 p-3 border">
                                {data.subject}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Message
                            </div>
                            <div className="w-50 p-3 border">
                                {data.message}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Date
                            </div>
                            <div className="w-50 p-3 border">
                                {data.data}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-3 border">
                                Status
                            </div>
                            <div className="w-50 p-3 border">
                                {data.status}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-100 p-3 border">
                                    {
                                        data.status==="Active"?
                                        <button className='btn btn-primary w-100' onClick={update}>Update Status to Done</button>:
                                        <button className='btn btn-primary w-100' onClick={deleteRecord}>Delete</button>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

