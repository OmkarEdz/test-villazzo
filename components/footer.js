import React, { useState } from "react"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import axios from 'axios';

const Footer = ({ footerProp }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  // const navRef = React.useRef(null);
  // const onAddClick = (e) => {
  //   navRef.current.classList.add("show_popup");
  // };

  const onRemoveClick = (e) => {
    navRef.current.classList.remove("show_popup");
    setShowSuccessMessage(false);
        setShowFailureMessage(false);
  };
  
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onchange = event => {
    const result = event.target.value.replace(/\D/g, '');
    setPhone(result);
  };

  //   Form validation state
  const [errors, setErrors] = useState({});

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const re = /^[0-9\b]+$/;
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setPhone(e.target.value)
    }
  }

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (lastName.length <= 0) {
      tempErrors["lastName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
  // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    
    let isValidForm = handleValidation();

    if (isValidForm) {
      axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contactforms`,
        {
          "data": {
            firstName: fullname,
            lastName: lastName,
            email: email,
            phoneNo: phone,
            message: message,
          }
        }
      );

      const qs = require('qs');
        axios.post('https://webdevfolio.com/Villazzomail/Villazzomail.php',  qs.stringify({
            "firstName": fullname,
            "lastName": lastName,
            "email": email,
            "phoneNo": phone,
            "message": message,

        }))
        .then((res) => {
          console.log(`statusCode: ${res.statusCode}`)
          console.log(res)
          console.log(`statusCode: ${res.data}`)
        })
        .catch((error) => {
          console.error(error)
        })
      
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      // Reset form fields
      setFullname("");
      setlastName("");
      setEmail("");
      setPhone("");
      setMessage("");

      return;
    }
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      // Reset form fields
      setFullname("");
      setlastName("");
      setEmail("");
      setPhone("");
      setMessage("");
  }
  return (
    <>
      <div className="footer-bg-color">
        <div className="footer-container container-fluid">
          <footer>
            <div className="footer-wrap">
              <div className="footer-links">
                <div className="footer-sec1">
                  <div className="toll-wrap left-section" dangerouslySetInnerHTML={{__html: footerProp.attributes.leftSectionContent}}>
                  </div>
                </div>
                <div className="navigate-wrap">
                  <b>
                    <p className="text-navigate">NAVIGATE</p>
                  </b>
                  <div className="navigate">
                    <div className="navigate-links">
                      {footerProp.attributes.navigateLinksLeft?.map((value, index) => (
                        <div className="navigate-sec1" key={`left${index}`}>
                          <a href={value.URL} key={`left-links${index}`}>{value.Label}</a>
                        </div>
                      ))}
                      {/* <div className="navigate-sec1"><a onClick={onAddClick}>CONTACT</a></div> */}
                    </div>
                    {/* <div className="navigate-links">
                      {footerProp.attributes.navigateLinksRight.map((value, index) => (
                        <div className="navigate-sec1" key={`right${index}`}>
                          <a href={value.URL} key={`right-links${index}`}>{value.Label}</a>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="connect-wrap">
                    <p className="bottomLink"><a href="mailto:VILLAS@VILLAZZO.COM">VILLAS@VILLAZZO.COM</a></p>
                    <div className="footer-icons">
                      <p>CONNECT</p>
                      <div className="icons-wrap">
                        {footerProp.attributes.socialConnect.map((value, index) => (
                          value.Account=='Email' ? <a href={value.URL} key={`footer-links${index}`}>
                          <i className='fa-solid fa-envelope' key={`ico${index}`}></i>
                          </a> :
                          value.URL && <a href={value.URL} key={`social${index}`}>
                            <i className={`fa-brands fa-${value.Account.toLowerCase()}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-images-wrap">
                <div className="footer-images">
                  {footerProp.attributes.FooterFeaturedImages.map((fImage, index) => (
                    <a href={fImage.URL} className="footer-img" key={`featuredImages${index}`}>
                      <div className="featured-img">
                        <Image
                          loader={myLoader}
                          src={getStrapiMedia(
                            fImage.Image
                          )}
                          key={`featuredImage${index}`}
                          layout="fill"
                          alt="footerImage"
                          className="desktopImages"
                        />
                        <Image
                          loader={myLoader}
                          src={getStrapiMedia(
                            fImage.MobImage
                          )}
                          layout="fill"
                          alt="footerImage"
                          className="mobileImages"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-page-links">
          {footerProp.attributes.copyrightLinks.map((value, index) => (
            <div className="year" key={`copyright${index}`}>
              <a href={value.URL} key={`links${index}`}>{value.Label}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Footer
