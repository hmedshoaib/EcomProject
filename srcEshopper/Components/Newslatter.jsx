import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewslatter, getNewslatter } from "../Store/ActionCreators/NewslatterActionCreator"
import { useEffect } from 'react'
export default function Newslatter() {
    var [email, setemail] = useState("")
    var [show, setshow] = useState(false)
    var [msg, setmsg] = useState("")
    var dispatch = useDispatch()
    var newslatter = useSelector((state) => state.NewslatterStateData)
    function getData(e) {
        setemail(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        var d = newslatter.find((item) => item.email === email)
        if (d) {
            setshow(true)
            setmsg("Your Email Id is Already Subcribed!!!!")
        }
        else {
            dispatch(addNewslatter({ email: email }))
            setshow(true)
            setmsg(" Thanks to Subcribes Our Newlatter Services!!!")
        }
    }
    useEffect(() => {
        dispatch(getNewslatter())
    }, [newslatter.length])
    return (
        <section className="ftco-gallery" style={{ marginTop: "-80px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 heading-section text-center">
                        <h3 className="">Subscribe Our Newslatter Services</h3>
                        <form className='' onSubmit={postData}>
                            {
                                show ? <div className="alert alert-success text-center alert-dismissible fade show" role="alert">
                                    {msg}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> : ""
                            }
                            <div className="Ahmed">
                                <input type="text" name='email' placeholder='Enter your Email Address' className='form-control my-2 ahmed' onChange={getData} />
                            </div>
                            <div>
                                <button className='btn btn-primary w-100 btn-lg mb-5' type='submit'>Subscribes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
