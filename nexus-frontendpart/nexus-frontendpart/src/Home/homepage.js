import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import { Link } from 'react-router-dom';


import 'bootstrap'; // Importing the entire Bootstrap library

import "./css/linearicons.css";
import "./css/font-awesome.min.css";
import "./css/bootstrap.css";
import "./css/magnific-popup.css";
import "./css/nice-select.css";							
import "./css/animate.min.css";
import "./css/owl.carousel.css";			
import "./css/jquery-ui.css";			
import "./css/main.css";
const Home=()=>{
	const bannerStyle = {
		height: '100vh',
		backgroundImage: 'url("./img/banner-bg.jpg")',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	  };
	
	  const contentStyle = {
		paddingTop: '20%',
	  };
	
	  const headingStyle = {
		fontSize: '3rem',
	  };
	
	  const paragraphStyle = {
		fontSize: '1.5rem',
	  };
	
	  const buttonStyle = {
		fontSize: '1.2rem',
		padding: '10px 20px',
	  };
    return(
		<>
		{/* header section */}
		<header id="header" style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1000', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff' }}>
    <div id="home">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                        <a href="tel:+953 012 3654 896"><span className="lnr lnr-phone-handset"></span> <span className="text" style={{ color: '#fff' }}>+953 012 3654 896</span></a>
                        <a href="mailto:support@colorlib.com"><span className="lnr lnr-envelope"></span> <span className="text" style={{ color: '#fff' }}>support@colorlib.com</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container main-menu">
            <div className="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li><a href="index.html" style={{ color: '#fff' }}>Home</a></li>
                        <li><a href="about.html" style={{ color: '#fff' }}>About</a></li>
                        <li><a href="courses.html" style={{ color: '#fff' }}>Courses</a></li>
                        <li><a href="events.html" style={{ color: '#fff' }}>Events</a></li>
                        <li><a href="gallery.html" style={{ color: '#fff' }}>Gallery</a></li>
                        <li><Link to="/login" style={{ color: '#fff' }}>Login</Link></li>
                        <li><Link to="/register" style={{ color: '#fff' }}>Register</Link></li>
                     
                        
                        <li><a href="contact.html" style={{ color: '#fff' }}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>

 {/* section */}
 <section className="banner-area relative" id="home" style={bannerStyle}>
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-between">
          <div className="banner-content col-lg-9 col-md-12" style={contentStyle}>
            <h1 className="text-uppercase" style={headingStyle}>
              We Ensure better education
              for a better world
            </h1>
            <p className="pt-10 pb-10" style={paragraphStyle}>
              In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.
            </p>
            <NavLink to="#" className="primary-btn text-uppercase" style={buttonStyle}>Get Started</NavLink>
          </div>
        </div>
      </div>
    </section>
      <section class="feature-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div class="single-feature">
								<div class="title">
									<h4>Learn Online Courses</h4>
								</div>
								<div class="desc-wrap">
									<p>
										Usage of the Internet is becoming more common due to rapid advancement
										of technology.
									</p>
									<a href="#">Join Now</a>									
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="single-feature">
								<div class="title">
									<h4>No.1 of universities</h4>
								</div>
								<div class="desc-wrap">
									<p>
										For many of us, our very first experience of learning about the celestial bodies begins when we saw our first.
									</p>
									<a href="#">Join Now</a>									
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="single-feature">
								<div class="title">
									<h4>Huge Library</h4>
								</div>
								<div class="desc-wrap">
									<p>
										If you are a serious astronomy fanatic like a lot of us are, you can probably remember that one event.
									</p>
									<a href="#">Join Now</a>									
								</div>
							</div>
						</div>												
					</div>
				</div>	
			</section>        

			<section class="popular-course-area section-gap">
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-8">
                <div class="title text-center">
                    <h1 class="mb-10">Popular Courses we offer</h1>
                    <p>There is a moment in the life of any aspiring.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="active-popular-carusel">
                <div class="single-popular-carusel">
                    <div class="thumb-wrap relative">
                        <div class="thumb relative">
                            <div class="overlay overlay-bg"></div>
                            <img class="img-fluid" src="./img/p1.jpg" alt="Course Image"/>
                        </div>
                        <div class="meta d-flex justify-content-between">
                            <p><span class="lnr lnr-users"></span> 355 <span class="lnr lnr-bubble"></span>35</p>
                            <h4>$150</h4>
                        </div>
                    </div>
                    <div class="details">
                        <a href="#">
                            <h4>Learn Designing</h4>
                        </a>
                        <p>When television was young, there was a hugely popular show based on the still popular fictional characters.</p>
                    </div>
                </div>

                

            </div>
        </div>
    </div>
</section>

		
			<section class="review-area section-gap relative">
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row">
						<div class="active-review-carusel">
							<div class="single-review item">
								<div class="title justify-content-start d-flex">
									<a href="#"><h4>Fannie Rowe</h4></a>
									<div class="star">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div class="single-review item">
								<div class="title justify-content-start d-flex">
									<a href="#"><h4>Hulda Sutton</h4></a>
									<div class="star">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div class="single-review item">
								<div class="title justify-content-start d-flex">
									<a href="#"><h4>Fannie Rowe</h4></a>
									<div class="star">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div class="single-review item">
								<div class="title justify-content-start d-flex">
									<a href="#"><h4>Hulda Sutton</h4></a>
									<div class="star">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>	
							<div class="single-review item">
								<div class="title justify-content-start d-flex">
									<a href="#"><h4>Fannie Rowe</h4></a>
									<div class="star">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div class="single-review item">
								<div class="title justify-content-start d-flex">
									<a href="#"><h4>Hulda Sutton</h4></a>
									<div class="star">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div class="single-review item">
								<img src="img/r1.png" alt=""/>
								<div class="title justify-content-start d-flex">
									<a href="#"><h4>Fannie Rowe</h4></a>
									<div class="star">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div class="single-review item">
								<div class="title justify-content-start d-flex">
									<a href="#"><h4>Hulda Sutton</h4></a>
									<div class="star">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>																												
						</div>
					</div>
				</div>	
			</section>
            <section class="cta-two-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 cta-left">
							<h1>Not Yet Satisfied with our Trend?</h1>
						</div>
						<div class="col-lg-4 cta-right">
							<a class="primary-btn wh" href="#">view our blog</a>
						</div>
					</div>
				</div>	
			</section> 


            <footer class="footer-area section-gap">
				<div class="container">
					
					<div class="footer-bottom row align-items-center justify-content-between">
						<p class="footer-text m-0 col-lg-6 col-md-4">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved to Nexus | Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://nexus.com" target="_blank">Nexus</a> &amp; distributed by <a href="https://themewagon.com" target="_blank">Team E</a>
</p>
						<div class="col-lg-2 col-sm-12 footer-social">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-instagram"></i></a>
						
						</div>
					</div>						
				</div>
			</footer>	
      </>
    );
}
export default Home;