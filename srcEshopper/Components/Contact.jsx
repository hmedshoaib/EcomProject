import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addContact } from '../Store/ActionCreators/ContactActionCreator'
export default function Contact() {
	var dispatch = useDispatch()
	var [shows, setshows] = useState(false)
	var [data, setdata] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
		date: new Date()
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

	function posData(e) {
		e.preventDefault()
		var item = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			subject: data.subject,
			message: data.message,
			status: "Active",
			data: data.date
		}
		dispatch(addContact(item))
		setshows(true)
	}

	return (
		<>
			<section className="ftco-section contact-section bg-light">
				<div className="container">
					<div className="row d-flex mb-5 contact-info">
						<div className="w-100"></div>
						<div className="col-md-3 d-flex">
							<div className="info bg-white p-4">
								<p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
							</div>
						</div>
						<div className="col-md-3 d-flex">
							<div className="info bg-white p-4">
								<p><span>Phone:</span> <Link to="tel://1234567920">+ 1235 2355 98</Link></p>
							</div>
						</div>
						<div className="col-md-3 d-flex">
							<div className="info bg-white p-4">
								<p><span>Email:</span> <Link to="mailto:info@yoursite.com">info@yoursite.com</Link></p>
							</div>
						</div>
						<div className="col-md-3 d-flex">
							<div className="info bg-white p-4">
								<p><span>Website</span> <Link to="#">yoursite.com</Link></p>
							</div>
						</div>
					</div>
					<div className="row block-9">
						<div className="col-md-6 order-md-last">
							<form onSubmit={posData} className="bg-white p-5 contact-form">
								{
									shows ? <div className="alert alert-success text-center alert-dismissible fade show" role="alert">
										Thanks to Share Your Query With Us!!! Our Team Will Contact You Soon!!!
										<button type="button" className="close" data-dismiss="alert" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div> : ""
								}
								<div className="form-group">
									<input type="text" className="form-control" name='name' onChange={getData} placeholder="Your Name" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" name='email' onChange={getData} placeholder="Your Email" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" name='phone' onChange={getData} placeholder="Phone" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" name='subject' onChange={getData} placeholder="Subject" />
								</div>
								<div className="form-group">
									<textarea name="message" id="" cols="30" rows="7" className="form-control" onChange={getData} placeholder="Message"></textarea>
								</div>
								<div className="form-group">
									<input type="submit" value="Send Message" className="btn btn-primary w-100" />
								</div>
							</form>

						</div>

						<div className="col-md-6 d-flex">
							<div id="map" className="bg-white">
								<div className="mapouter"><div className="gmap_canvas"><iframe className='w-100' height="550px" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=new Delhi Laxmi Nagar&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-gallery ftco-section ftco-no-pb">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 heading-section text-center mb-4 ">
							<h2 className="mb-4">Follow Us On Instagram</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
						</div>
					</div>
				</div>
				<div className="container-fluid px-0">
					<div className="row no-gutters">
						<div className="col-md-4 col-lg-2 ">
							<Link to="images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-1.jpg')" }}>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram"></span>
								</div>
							</Link>
						</div>
						<div className="col-md-4 col-lg-2 ">
							<Link to="images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-2.jpg')" }}>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram"></span>
								</div>
							</Link>
						</div>
						<div className="col-md-4 col-lg-2 ">
							<Link to="images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-3.jpg')" }}>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram"></span>
								</div>
							</Link>
						</div>
						<div className="col-md-4 col-lg-2 ">
							<Link to="images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-4.jpg')" }}>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram"></span>
								</div>
							</Link>
						</div>
						<div className="col-md-4 col-lg-2 ">
							<Link to="images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-5.jpg')" }}>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram"></span>
								</div>
							</Link>
						</div>
						<div className="col-md-4 col-lg-2 ">
							<Link to="images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-6.jpg')" }}>
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-instagram"></span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
