import React from "react";
import "./App.css";
import InstallAppButton from "./components/InstallAppButton/InstallAppButton";
import WebShare from "./components/WebShare/WebShare";
import WhatsAppOnShare from "./components/WhatsAppOnShare/WhatsAppOnShare";
import OpeningTimingDetails from "./components/OpeningTimingDetails/OpeningTimingDetails";
import { dataSetForBasicData } from "./ImportFiles";
import { AllTimeAccess } from "./AllTimeAccess";
import ServiceDataFunction from "./components/ServiceDataFunction/ServiceDataFunction";
import { dataForServiceTabs, servicesData } from "./components/ServiceDataFunction/ServicDataChangingDetails";
import GalleryImageFunction from "./components/GalleryImageFunction/GalleryImageFunction";
import GalleryVideoFunction from "./components/GalleryVideoFunction/GalleryVideoFunction";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";

const MainPageData = () => {
  
  const openNav = () => {
    document.getElementById("mySidepanel").style.width = "280px";
  };

  const closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0px";
  };

  return (
    <>
      <div className="body-image">
        <img
          src={dataSetForBasicData.BackgroundImage}
          alt="bgjwl"
          className="body-fix-image"
          // style={{
          //   height: "100vh",
          //   width: "100%",
          //   position: "fixed",
          //   objectFit: "cover",
          // }}
        />
        <section id="home" className="navbar-home-section">
          <div className="opening">
            <div className="opening-button">
              <div className="openbtn" onClick={openNav}>
                <i className="fa fa-bars"></i>
              </div>
            </div>
            <div id="mySidepanel" className="sidepanel">
              <ul>
                <li>
                  <span>
                    <a href="#home" className="nav-link" onClick={closeNav}>
                      <img
                        src={dataSetForBasicData.LogoOrProfileImage}
                        alt="NavbarBrandLogoImage"
                        className="rounded-circle"
                        height="30px"
                        width="30px"
                      />
                      <span className="">
                        {dataSetForBasicData.BrandNameOrCompanyName}
                      </span>
                    </a>

                    <button
                      className="closebtn"
                      title="close"
                      onClick={closeNav}
                    >
                      <i className="fa fa-close"></i>
                    </button>
                  </span>
                </li>
                <li>
                  <a href="#profile" className="nav-link" onClick={closeNav}>
                    <img
                      src={AllTimeAccess.ProfileIconImage}
                      alt="profileicon"
                      height="30px"
                      width="30px"
                    />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link" onClick={closeNav}>
                    <img
                      src={AllTimeAccess.ContactIconImage}
                      alt="contactcardicon"
                      height="30px"
                      width="30px"
                    />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link" onClick={closeNav}>
                    <img
                      src={AllTimeAccess.AboutIconImage}
                      alt="abouticon"
                      height="30px"
                      width="30px"
                    />
                    About us
                  </a>
                </li>
                <li>
                  <a href="#service" className="nav-link" onClick={closeNav}>
                    <img
                      src={AllTimeAccess.ServiceIconImage}
                      alt="serviceicon"
                      height="30px"
                      width="30px"
                    />
                    Service
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav-link" onClick={closeNav}>
                    <img
                      src={AllTimeAccess.PortfolioIconImage}
                      alt="portfolioicon"
                      height="30px"
                      width="30px"
                    />
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="nav-link" onClick={closeNav}>
                    <img
                      src={AllTimeAccess.FeedbackIconImage}
                      alt="feedbackicon"
                      height="30px"
                      width="30px"
                    />
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* cover image code */}
          <section
            className="nav-home-bg-image"
            style={{ backgroundImage: dataSetForBasicData.CoverImage }}
          ></section>
          {/* home */}

          <div className="container-fluid">
            <div className="row"> 
              {/* For Cover Video uncomment this code and cover image code is comment */}
              {/* <div className="col-12 middle-video p-0">
                <video autoplay muted loop width="100%">
                  <source src={dataSetForBasicData.CoverVideo} type="video/mp4"/>
                </video>
              </div> */}
              <div className="col-12 middle-logo p-0">
                <img
                  src={dataSetForBasicData.LogoOrProfileImage}
                  alt="LogoProfileImage"
                  className="first-image"
                  height="150px"
                  width="150px"
                />
                <h2 className="">
                  {dataSetForBasicData.BrandNameOrCompanyName}
                </h2>
                {/* <h3 className="jQClassForPersonName">{dataSetForBasicData.PersonName}</h3> */}
                {/* <img src="images/orra-unisex-salon-text-logo.webp" alt="orra-unisex-salon-text-logo" width="250px" height="61px"/> */}
                {/* <h6>Avneesh Kumar Singh</h6> */}
              </div>
            </div>
          </div>
        </section>

        {/* Profile section */}
        <section id="profile" className="profile-section">
          <div className="container-fluid">
            <div className="container">
              <div className="row profile-icon">
                <div className="col-4 text-center pb-1">
                  <a
                    href={`tel:+91 ${dataSetForBasicData.CallingNumber}`}
                    className="call"
                  >
                    <i className="fa fa-phone"></i>
                    <p>Call</p>
                  </a>
                </div>
                <div className="col-4 text-center pb-1">
                  <a
                    href={`https://api.whatsapp.com/send?phone=91${dataSetForBasicData.WhatsAppNumber}`}
                    className="whatsapp"
                  >
                    <i className="fab fa-whatsapp"></i>
                    <p>Whatsapp</p>
                  </a>
                </div>
                <div className="col-4 text-center pb-1">
                  <a
                    href={`mailto:${dataSetForBasicData.EmailAddress}`}
                    className="email"
                  >
                    <i className="fa fa-envelope"></i>
                    <p>Email</p>
                  </a>
                </div>
                <div className="col-4 text-center pb-3">
                  <a
                    href={dataSetForBasicData.DirectionLink}
                    className="direction"
                  >
                    <i className="fa fa-location-crosshairs"></i>
                    <p>Direction</p>
                  </a>
                </div>
                <div className="col-4 text-center pb-3">
                  <a
                    href={dataSetForBasicData.WebSiteLink}
                    rel="nofollow noopener"
                    target="_blank"
                    className="Website"
                  >
                    <i className="fa fa-earth-asia"></i>
                    <p>Website</p>
                  </a>
                </div>
                <div className="col-4 text-center pb-3">
                  <a
                    href={`sms:+91${dataSetForBasicData.CallingNumber}`}
                    className="facebook-messenger"
                  >
                    <i className="fa-solid fa-comment-sms"></i>
                    <p>Message</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="profile-star text-center">
              <a href="#rate">
                <span className="">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>
                <p className="star-review">
                  <strong>4.2</strong>(195 review)
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="contact-section">
          <div className="container-fluid pt-3 pb-4">
            <div className="container contact-icon">
              <div className="row pb-sm-2 pb-1">
                <div className="col-2 text-center pt-sm-0 pt-2">
                  <a
                    href={dataSetForBasicData.DirectionLink}
                    className="direction"
                    title="Address"
                  >
                    <i className="fa fa-location-crosshairs"></i>
                  </a>
                </div>
                <div className="col-1 d-none d-sm-block"></div>
                <div className="col-9 pt-lg-2">
                  <p className="jQClassForFullAddress">{`${dataSetForBasicData.BrandNameOrCompanyName}, ${dataSetForBasicData.BrandAddress}`}</p>
                </div>
              </div>

              <div className="row pb-sm-2 pb-1">
                <div className="col-2 text-center">
                  <a
                    href={`tel:+91 ${dataSetForBasicData.CallingNumber}`}
                    className="call jQClassForCallingNumberAnchor"
                    title="Call"
                  >
                    <i className="fa fa-phone"></i>
                  </a>
                </div>
                <div className="col-1 d-none d-sm-block"></div>
                <div className="col-9 pt-2">
                  <p className="jQClassForCallingNumberText">{`+91 ${dataSetForBasicData.CallingNumber}`}</p>
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-2 text-center">
                  <a
                    href={`mailto:${dataSetForBasicData.EmailAddress}`}
                    className="email jQClassForEmailAddress"
                    title="Send Mail"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
                <div className="col-1 d-none d-sm-block"></div>
                <div className="col-9 pt-2">
                  <p className="jQClassForEmailAddressValue">
                    {dataSetForBasicData.EmailAddress}
                  </p>
                </div>
              </div>
            </div>

            <div className="container text-center contact-button">
              <div className="row align-items-center">
                <div className="col-md-6 col-12 mt-1">
                  <WhatsAppOnShare />
                </div>
                <div className="col-md-3 col-6 mt-2">
                  <a
                    href={dataSetForBasicData.AddToContact}
                    className="btn button-color"
                    download
                  >
                    <i class="fa-regular fa-address-card"></i> Add Contact
                  </a>
                </div>
                <div className="col-md-3 col-6 mt-2">
                  <a
                    target="_blank"
                    rel="nofollow noopener"
                    href={dataSetForBasicData.FollowSocialMediaButton}
                    className="btn button-color"
                  >
                    <i className="fa-solid fa-bell pr-1"></i> Follow
                  </a>
                </div>
                <div className="col-md-3 col-6 mt-2">
                  <a
                    target="_blank"
                    rel="nofollow noopener"
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `https://${dataSetForBasicData.MainHositingName}/${dataSetForBasicData.FolderName}`
                    )}`}
                    className="btn button-color jQClassForWhatsAppNumberWithURL"
                  >
                    <i className="fab fa-whatsapp pr-1 "></i> Whatsapp
                  </a>
                </div>
                <div className="col-md-3 col-6 mt-2">
                  <a
                    target="_blank"
                    rel="nofollow noopener"
                    href={`sms:?&body=${encodeURIComponent(
                      `https://${dataSetForBasicData.MainHositingName}/${dataSetForBasicData.FolderName}`
                    )}`}
                    className="btn button-color jQClassForMessageNumberWithURL"
                  >
                    <i className="fa-solid fa-comment-sms pr-1"></i> Message
                  </a>
                </div>
                <div className="col-md-3 col-6 mt-2">
                  <button className="btn button-color">
                    <WebShare />
                  </button>
                </div>
                <div
                  className="col-md-3 col-6 mt-2"
                  style={{ display: "block" }}
                >
                  <InstallAppButton />
                </div>
              </div>
            </div>
            <div className="container pt-3 pb-0">
              <div className="row contact-socialmedia-icon text-center">
                <div className="col-3 p-2">
                  <a
                    href={dataSetForBasicData.FollowLinkFacebook}
                    rel="nofollow noopener"
                    target="_blank"
                    className=""
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="col-3 p-2">
                  <a
                    href={dataSetForBasicData.FollowLinkInstagram}
                    rel="nofollow noopener"
                    target="_blank"
                    className=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="col-3 p-2">
                  <a
                    href={dataSetForBasicData.FollowLinkYouTube}
                    rel="nofollow noopener"
                    target="_blank"
                    className=""
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="col-3 p-2">
                  <a
                    href={dataSetForBasicData.WebSiteLink}
                    rel="nofollow noopener"
                    target="_blank"
                    className=""
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="about-section">
          <div className="container text-center text-white">
            <h3 className="about-service-heading">ABOUT US</h3>

            <div className="row about-data">
              <div className="col-12">
                {/* <h4>WELCOME IN THE WORLD OF JEWELERYS</h4> */}
                <p className="pt-2">{dataSetForBasicData.BrandAboutUs}</p>
              </div>
            </div>
            <button
              type="button"
              className="btn about-button-color mb-4 mt-3"
              data-bs-toggle="collapse"
              data-bs-target="#about-collapse"
            >
              Opening Hours
            </button>
            <div
              id="about-collapse"
              className="collapse timing-text-color pb-4"
            >
              <OpeningTimingDetails />
            </div>
          </div>
        </section>

        {/* Service section */}
        <section id="service" className="service-section">
          <div className="container">
            <h3 className="about-service-heading mb-3">SERVICE</h3>
            <ServiceDataFunction
              dataForServiceTabs={dataForServiceTabs}
              servicesData={servicesData}
            />

            
          </div>
        </section>

        {/* portfolio section */}
        <section id="portfolio" className="portfolio-section pt-3">
          <div className="container">
            <h3 className="about-service-heading">GALLERY</h3>
              <GalleryImageFunction/>
          </div>
        </section>

        {/* video section */}
        <GalleryVideoFunction/>

        {/* feedback section */}
        <section id="feedback" className="feedback-section pt-3">
          <div className="container">
            <h3 className="about-service-heading">FEEDBACK</h3>
            <div className="row">
              <div className="col-12 pt-3 pb-3">
                <div id="feed-carousel" className="carousel slide" data-bs-ride="carousel">
                  {/* Indicators */}
                  <ul className="carousel-indicators d-none">
                    <li
                      data-bs-target="#feed-carousel"
                      data-bs-slide-to="0"
                      className="active"
                    ></li>
                    <li data-bs-target="#feed-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#feed-carousel" data-bs-slide-to="2"></li>
                  </ul>

                  {/* The slideshow */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <p className="">
                        {dataSetForBasicData.FeedbackReviewFirst}
                      </p>                      
                      <div className="feed-star">
                        <span className="">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <p className="">
                        {dataSetForBasicData.FeedbackReviewSecond}
                      </p>                     
                      <div className="feed-star">
                        <span className="">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <p className="">
                        {dataSetForBasicData.FeedbackReviewThird}
                      </p>                      
                      <div className="feed-star">
                        <span className="">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row mt-4 align-items-center text-center">
              <div className="col-sm-3 col-md-4 col-6 text-white">
                <strong>4.2</strong>
                <div className="feed-star">
                  <span className="">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half"></i>
                  </span>
                </div>
                <p>195 Total</p>
              </div>
              <div className="col-sm-4 col-6 pro-bar">
                <center>
                  <div className="d-flex">
                    <i className="fa-solid fa-star text-warning pt-1 pr-1"></i>
                    <strong>5</strong>
                    <div
                      className="progress bg-secondary m-1"
                      style={{ width: "120px" }}
                    >
                      <div
                        className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                        style={{ width: "70%" }}
                      >
                        70%
                      </div>
                    </div>
                    {/* <strong>3</strong> */}
                  </div>
                  <div className="d-flex">
                    <i className="fa-solid fa-star text-warning pt-1 pr-1"></i>
                    <strong>4</strong>
                    <div
                      className="progress bg-secondary m-1"
                      style={{ width: "120px" }}
                    >
                      <div
                        className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                        style={{ width: "20%" }}
                      >
                        20%
                      </div>
                    </div>
                    {/* <strong>0</strong> */}
                  </div>
                  <div className="d-flex">
                    <i className="fa-solid fa-star text-warning pt-1 pr-1"></i>
                    <strong>3</strong>
                    <div
                      className="progress bg-secondary m-1"
                      style={{ width: "120px" }}
                    >
                      <div
                        className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                        style={{ width: "10%" }}
                      >
                        10%
                      </div>
                    </div>
                    {/* <strong>0</strong> */}
                  </div>
                  <div className="d-flex">
                    <i className="fa-solid fa-star text-warning pt-1 pr-1"></i>
                    <strong>2</strong>
                    <div
                      className="progress bg-secondary m-1"
                      style={{ width: "120px" }}
                    >
                      <div
                        className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    {/* <strong>0</strong> */}
                  </div>
                  <div className="d-flex">
                    <i className="fa-solid fa-star text-warning pt-1 pr-1"></i>
                    <strong>1</strong>
                    <div
                      className="progress bg-secondary m-1"
                      style={{ width: "120px" }}
                    >
                      <div
                        className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    {/* <strong>0</strong> */}
                  </div>
                </center>
              </div>
              {/* <div className="col-sm-5 col-md-4 col-12 star-rating-wrapper">
                <input type="radio" name="rating" id="star-1" />
                <label for="star-1"></label>
                <input type="radio" name="rating" id="star-2" />
                <label for="star-2"></label>
                <input type="radio" name="rating" id="star-3" />
                <label for="star-3"></label>
                <input type="radio" name="rating" id="star-4" />
                <label for="star-4"></label>
                <input type="radio" name="rating" id="star-5" />
                <label for="star-5"></label>
              </div> */}
              <CustomerReviews />
            </div>
            <div className="row QR-Code">
              <div className="col-12 text-center pt-3">
                <a href="#!">
                  <img src={dataSetForBasicData.QRCodeImage} alt="QR-Image" height="130px" width="130px" />
                </a>
                <a
                  href={dataSetForBasicData.QRCodeImage}
                  download="QR-code-image"
                  className="download-qr-code"
                >
                  Download QR
                </a>
              </div>
            </div>
            <div className="row dizidesert pb-4">
              <div className="col-12 text-center pt-3">
                <a href="https://dizidesert.com/">
                  <span className="created-by">Created By</span>
                  <img
                    src={AllTimeAccess.CreatedByLogoImage}
                    alt="dizilogo"
                    height="60px"
                    width="200px"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* bottom to top */}
        <section className="section-bottom-top">
          <a href="#home" data-toggle="tooltip" title="Top">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </section>
      </div>
    </>
  );
};

export default MainPageData;
