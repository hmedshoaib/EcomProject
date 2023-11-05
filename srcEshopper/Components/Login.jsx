import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser } from "../Store/ActionCreators/UserActionCreator"
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {

  var users = useSelector((state) => state.UserStateData)
  var dispatch = useDispatch()
  var navigate = useNavigate()


  var [data, setdata] = useState({
    username: "",
    password: ""
  })




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

  function postData(e) {
    e.preventDefault()
    var user = users.find((item) => item.username === data.username && item.password === data.password)
    if (user) {
      localStorage.setItem("login", true)
      localStorage.setItem("name", user.name)
      localStorage.setItem("username", user.username)
      localStorage.setItem("userid", user.id)
      localStorage.setItem("userrole", user.role)
      if (user.role === "Admin")
        navigate("/admin_home")
      else
        navigate("/profile")
    }
    else {
      alert(`Invalid UserName & Password!!!!`)
    }

  }

  useEffect(() => {
    dispatch(getUser())
  }, [])


  return (
    <>
      <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <h1 className="mb-0 bread">Login Us</h1>
              <div className="container-fluid p-3">
                <div className="w-70 m-auto">
                  <form action="" className='Ahmed1' onSubmit={postData}>
                    <div>
                      <input type="text" name='username' required id='username' placeholder='Enter  username : ' className='form-control' onChange={getData} />
                      <input type="password" name='password' required id='password' placeholder='Enter  password : ' className='form-control' onChange={getData} />
                    </div>
                    <div className="mybtn mt-4">
                      <button type='submit' className='btn btn-primary w-100' style={{ fontSize: "15px", fontWeight: "600", width: "95%" }} >Login</button>
                    </div>
                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                      <Link to="#" className='text-dark'>forget password</Link>
                      <Link to="/signup" className='text-dark'>New User?Create a free Account</Link>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
