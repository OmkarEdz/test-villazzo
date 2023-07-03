import React, { useState, useEffect } from "react"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'

const Header = ({ navigation, global }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  let navElements = navigation.attributes.Navigation
  let mainNavigation = []
  let menucount = 0
  let timeout
  let scroll = 0
  useEffect(() => {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        document.getElementById('header').classList.add('sticky')
      } else {
        document.getElementById('header').classList.remove('sticky')
      }
    });
  }, [])
  navElements.forEach((element, index) => {
    if (element.__component === "shared.header-navigation") {
      mainNavigation.push(element)
      if (index === 0) {
        menucount = 0
        mainNavigation[menucount].submenu = []
      } else {
        menucount = menucount + 1
        mainNavigation[menucount].submenu = []
      }
    } else {
      mainNavigation[menucount].submenu.push(element)
    }
  })
  const [toggleMenuClass, toggleMenu] = useState(false)
  const [subMenuClass, subMenuToggleMenu] = useState(false)
  
  const navRef = React.useRef(null);

  return (
    <>
      <header className="header" id="header">
          <div className="main-wrap">
            <div className="mobile-nav">
              <nav className="navbar navbar-expand-lg navbar-light hideOnDesk">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => toggleMenu((toggleMenuClass = !toggleMenuClass))}
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>
                  <div
                    className={`navbar-collapse ${ toggleMenuClass ? "" : "collapse"}`}
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      {mainNavigation.map((menu, index) => (
                        <li className="nav-item" key={`nav-menu-mobile${index}`}>
                          <a href={menu.URL} key={`nav-link-mobile${index}`} className={`nav-link ${menu.showIcon === "Yes" ? "showIcon" : ""}`} onClick={() => subMenuToggleMenu((subMenuClass = !subMenuClass))}>
                            {menu.Label}
                            {menu.submenu.length ? <span className="arrow"><i className="fa fa-chevron-down" aria-hidden="true"></i></span> : ""}
                          </a>
                          {menu.submenu.length ? (
                            <ul className={`dropdown-menu ${ subMenuClass ? "active" : ""}`} key={`nav-submenu-mobile${index}`}>
                              {menu.submenu.map((submenu) => (
                                <li key={`nav-li-mobile${index}sub${submenu.Label}`}>
                                  <a className="dropdown-item" href={submenu.URL} key={`nav-menu-item${index}dd${submenu.Label}`}>
                                    {submenu.Label}
                                  </a>
                                </li>
                              ))} 
                            </ul>
                          ) : ("")}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="logo-wrap">
              <div className="villazzo-logo-wrap">
                <div className="main-logo">
                  <Link href="" passHref><Image
                    loader={myLoader}
                    src={getStrapiMedia(global.attributes.siteLogo)}
                    alt="Image"
                    layout="fill"
                  /></Link>
                </div>
                <div className="visit-text">
                  <div className="visit-text-wrap">
                    <p>Visit Our Sites</p>
                    <p className="drop-down mb-drop">
                      <a href="#">
                        <i className="fa-solid fa-caret-down"></i>
                      </a>
                    </p>
                    <div className="dropdownMenu dropdownMenuNew">
                      {navigation.attributes.OurSitesHeader.map((Element, index) => (
                        <p key={index}>
                          <a href={Element.SiteLink}>
                            <Image
                              loader={myLoader}
                              src= {`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${Element.SiteImageURL}`}
                              key={`featuredImage${index}`}
                              alt="Our Site"
                              layout="fill"
                            />
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="visit-text-wrap favLink">
                    <p><a href="https://test.villazzo.com/favourites">FAVORITES <i className="fa fa-star"></i></a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inquiry-wrap">
              <div className="inquiry">
                <a href="tel:+1(305)777 0146" className="desktop-inquiry-call">+1 (877) VILLAZZO</a>
                <a href="tel:+1(305)777 0146" className="mobile-inquiry-call"><i className="fa fa-phone" aria-hidden="true"></i></a>
              </div>
              <div className="see-more-text">
              <div className="see-more-text-wrap">
                  <p>SEE MORE OPTIONS</p>
                  <p className="drop-down">
                    <a href="#">
                      <i className="fa-solid fa-caret-down"></i>
                    </a>
                  </p>
                  <div className="dropdownMenu dropdownMenuSeeMore">
                    <ul>
                      <li>
                        <a href="tel:+1(877)8455299"><span>TOLL FREE:</span><br/>1-877-VILLAZZO</a>
                      </li>
                      <li>
                        <a href="tel:+1-305-777-0146"><span>MIAMI OFFICE:</span><br/>+1 (305) 777-0146</a>
                      </li>
                      <li>
                        <a href="tel:+33(4)94493254"><span>SAINT-TROPEZ OFFICE:</span><br/>+33 (4) 94 49 32 54</a>
                      </li>
                      <li>
                        <div className="inqury-btn">
                          <a href="https://test.villazzo.com/about-luxury-villa-rentals/contact">CONTACT US</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="inqury-btn">
              <a href="https://test.villazzo.com/about-luxury-villa-rentals/contact">INQUIRE</a>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light hideOnMob">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  {mainNavigation.map((menu, index) => (
                    <li className="nav-item" key={`nav-menu-desk${index}`}>
                      <a
                        className={`nav-link ${
                          menu.showIcon === "Yes" ? "showIcon" : ""
                        }`}
                        href={menu.URL}
                        key={`nav-links-desk${index}`}
                      >
                        {menu.Label}
                      </a>
                      {menu.submenu.length ? (
                        <ul
                          className="dropdown-menu"
                          key={`nav-drop-desk${index}`}
                        >
                          {menu.submenu.map((submenu) => (
                            <li key={`nav-li-desk${index}dd${submenu.Label}`}>
                              <a
                                className="dropdown-item"
                                href={submenu.URL}
                                key={`nav-drop-item-desk${index}dd${submenu.Label}`}
                              >
                                {submenu.Label}
                              </a>
                              <a className={`sub-link ${
                                submenu.ShowAdvancedLink == "No" ? "showMenu" : ""
                              }`} href={submenu.AdvancedLinkURL}>{submenu.AdvancedLink}</a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>
    </>
  )
}

export default Header
