import React, { useState } from "react"
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactForm = ({
    
}) => {

  const [toggleMenuClass, toggleMenu] = useState(false)
  const [subMenuClass, subMenuToggleMenu] = useState(false)
  
  const navRef = React.useRef(null);
  const onAddClick = (e) => {
    navRef.current.classList.add("show_popup");
  };

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
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState("");
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
    if (checkIn.length <= 0) {
      tempErrors["checkIn"] = true;
      isValid = false;
    }
    if (checkOut.length <= 0) {
      tempErrors["checkOut"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
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
            checkInDate: checkIn,
            checkOutDate: checkOut,
          }
        }
      );

      const qs = require('qs');
        axios.post('https://webdevfolio.com/TestVillazzomail/Villazzomail.php',  qs.stringify({
            "firstName": fullname,
            "lastName": lastName,
            "email": email,
            "phoneNo": phone,
            "message": message,
            "checkInDate": checkIn,
            "checkOutDate": checkOut,

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
      setCheckIn("");
      setCheckOut("");
      setMessage("");

      // setTimeout(() => {
      //   setShowSuccessMessage(false);
      //   setShowFailureMessage(false);
      // }, 2500);
      return;
    }
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      // Reset form fields
      setFullname("");
      setlastName("");
      setEmail("");
      setPhone("");
      setCheckIn("");
      setCheckOut("");
      setMessage("");
  }
  return (
      <>
        <div ref={navRef} id="popover" className="main_popup hide">
            <div className="custom_model">
              <div className="custom_model_dialog">
                  <div className="custom_model_content">
                    <a onClick={onRemoveClick} className="model_close"><i className="fa-solid fa-xmark"></i></a>
                    <div className="Popup_wrap">
                      <form onSubmit={handleSubmit}>
                        <div className="contact-form">
                          <div className="contact-form-label">
                            <div className="form-item">
                              <input
                                placeholder="FIRST NAME" 
                                type="text"
                                value={fullname}
                                onChange={(e) => {
                                  setFullname(e.target.value);
                                }}
                                name="fullname"
                                className="input-name contact-lebel"
                              />
                              {errors?.fullname && (
                                <p className="error_msg">First name cannot be empty.</p>
                              )}
                            </div>
                            <div className="form-item">
                              <input
                                placeholder="LAST NAME" 
                                name="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => {
                                  setlastName(e.target.value);
                                }}
                                className="contact-lebel"
                              />
                              {errors?.lastName && (
                                <p className="error_msg">Last name cannot be empty.</p>
                              )}
                            </div>
                          </div>
                          <div className="contact-form-label">
                            <div className="form-item">
                              <input
                                placeholder="PHONE" 
                                type="tel"
                                name="phone"
                                pattern="[0-9]*"
                                value={phone}
                                onChange={handleChange}
                                className="input-name contact-lebel"
                                maxLength="12"
                              />
                              {errors?.email && (
                                <p className="error_msg">Phone number cannot be empty.</p>
                              )}
                            </div>
                            <div className="form-item">
                              <input
                                placeholder="EMAIL ADDRESS" 
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                className="input-name contact-lebel"
                              />
                              {errors?.email && (
                                <p className="error_msg">Email cannot be empty.</p>
                              )}
                            </div>
                          </div>
                          <div className="contact-form-label">
                            <div className="form-item">
                              <DatePicker dateFormat="dd/MM/yyyy" placeholderText="CHECK IN" selected={checkIn} onChange={(date) => setCheckIn(date)} className="input-name contact-lebel" placeholder="CHECK IN" />
                              {errors?.checkIn && (
                                <p className="error_msg">Check In cannot be empty.</p>
                              )}
                            </div>
                            <div className="form-item">
                              <DatePicker dateFormat="dd/MM/yyyy" placeholderText="CHECK OUT" selected={checkOut} minDate={checkIn} onChange={(date) => setCheckOut(date)} className="input-name contact-lebel" placeholder="CHECK OUT" />
                              {errors?.checkOut && (
                                <p className="error_msg">Check Out cannot be empty.</p>
                              )}
                            </div>
                          </div>
                          <div className="contact-form-label">
                            <div className="form-item full-width">
                              <textarea
                                name="message"
                                value={message}
                                onChange={(e) => {
                                  setMessage(e.target.value);
                                }}
                                className="form-message contact-lebel" rows="4" cols="50" placeholder="COMMENTS">
                              </textarea>
                              {errors?.message && (
                                <p className="error_msg">Message cannot be empty.</p>
                              )}
                            </div>
                          </div>
                          {/* <div className="contact-form-label contact-form-label-footer">
                            <div className="checkBoxWrap">
                              <input type="checkbox" value="email-check" />
                              Email me your monthly newsletter
                            </div>
                          </div>
                          <div className="contact-form-label contact-form-label-footer">
                            <p>Confirm that you are not a Robot:</p>
                            <input type="text" className="" placeholder="What is 2+2 ?" />
                          </div> */}
                          <div className="submit_btn_wrap">
                            <button type="submit" >Submit</button>
                          </div>
                          <div className="final_msg_wrap">
                            {showSuccessMessage && (
                              <p className="thankyou_msg">
                                Thank you for your message! A team member from Villazzo Realty will get back to you shortly.
                              </p>
                            )}
                            {showFailureMessage && (
                              <p className="error_msg">
                                Please fill the form
                              </p>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>  
                  </div>
              </div>
            </div>
        </div>
      </>
  )
}

export default ContactForm