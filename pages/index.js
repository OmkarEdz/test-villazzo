import React, { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'
import axios from 'axios'
import Slider from 'react-slick';
import ContactForm from "../components/contact-form"

var HomeSlider = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:false,
  arrows: true,
  autoplay: false,
};

var settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:false,
  arrows: false,
  autoplay: true,
};

const Home = ({
  global,
  footerData,
  navigation,
  homepage,
}) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  // const navRef = document.getElementById("popover");
  const onAddClick = (e) => {
    document.getElementById("popover").classList.add("show_popup");
  };

  function onhoverTabbng(event) {
    document.getElementById('tabList').classList = '';
    document.getElementById('tabList').classList.add('showTab' + event.currentTarget.getAttribute("data-id"));
  }

  return (
    <>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
        />
      <Header navigation={navigation} global={global} />

      {/* homepage Slider section start here */}
      <div className="home_banner_slider">
        <Slider {...HomeSlider}>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner first_banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.FirstSlideImg})`}}>
                <div className="banner_slide_cont_inner">
                  <h1 className="banner_slide_head">{homepage.attributes.HomeSlider.FirstSlideHead}</h1>
                  <p className="banner_slide_cont">{homepage.attributes.HomeSlider.FirstSlideContent}</p>
                  <p className="contBtn inqury-btn"><a href="javascript:;" onClick={onAddClick}>FIND OUT MORE</a></p>
                </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.SecSlideImg})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.SecSlideContent}</p>
              </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.ThirdSlideImage})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.ThirdSlideContent}</p>
              </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.FourthSlideImage})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.FourthSlideContent}</p>
              </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.FifthSlideImage})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.FifthSlideContent}</p>
              </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.SixthSlideImage})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.SixthSlideContent}</p>
              </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.SeventhSlideImage})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.SeventhSlideContent}</p>
              </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.EighthSlideImage})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.EighthSlideContent}</p>
              </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.NinthSlideImage})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.NinthSlideContent}</p>
              </div>
            </div>
          </div>
          <div className="banner_slide_item">
            <div className="banner_slide_item_inner" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeSlider.TenthSlideImage})`}}>
              <div className="banner_slide_cont_inner">
                <p className="banner_slide_mini_cont">{homepage.attributes.HomeSlider.TenthSlideContent}</p>
              </div>
            </div>
          </div>
        </Slider>

        <div className="search_wrapper">
          <p>SEARCH THE FINEST VILLA IN THE BEST LOCATION</p>
          <form action="submit">
            <input type="text" />
            <div className="locWrapper">
              <ul>
                <li><a href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + `/aspen`}>Aspen</a></li>
                <li><a href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + `/miami`}>Miami</a></li>
                <li><a href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + `/saint-tropez`}>Saint-Tropez</a></li>
                <li><a href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + `/mykonos`}>Mykonos</a></li>
                <li><a href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + `/ibiza`}>Ibiza</a></li>
              </ul>
            </div>
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </div>
      {/* homepage Slider section start here */}

      {/* homepage MORE Villas section start here */}
      <div className="mainContainer more_villas_wrap">
        <h2 className="bookHead noMar">{homepage.attributes.MoreVillaSection.Heading}</h2>
        <p className="bookDesc">{homepage.attributes.MoreVillaSection.Subheading}</p>
        <p className="middleImg">
          <Image
            loader={myLoader}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.MoreVillaSection.Image}`}
            layout="fill"
            alt="Book Item"
          />
        </p>
        <h4 className="botMiniHead">{homepage.attributes.MoreVillaSection.EndHeading}</h4>
        <p className="bookMiniDesc">{homepage.attributes.MoreVillaSection.EndSubheading}</p>
        <p className="contBtn inqury-btn"><a href="javascript:;" onClick={onAddClick}>FIND OUT MORE</a></p>
      </div>
      {/* homepage MORE Villas section end here */}


      {/* homepage Gaallery section start here */}
      <div className="home_gallery_wrap">
        <div className="gallery_row_first">
          <div className="mini_col">
            <div className="two_imgs">
              <p className="col_img">
                <Image
                  loader={myLoader}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeGallery.FirstRowImage1}`}
                  layout="fill"
                  alt="Book Item"
                />
              </p>
              <p className="col_img">
                <Image
                  loader={myLoader}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeGallery.FirstRowImage2}`}
                  layout="fill"
                  alt="Book Item"
                />
              </p>
            </div>
          </div>
          <div className="mini_col grey_col">
            <h3 className="col_head">{homepage.attributes.HomeGallery.FirstRowHead}</h3>
            <p className="col_content">{homepage.attributes.HomeGallery.FirstRowContent}</p>
            <p className="contBtn inqury-btn"><a href="https://test.villazzo.com/about-luxury-villa-rentals/5-star-villahotel-service">FIND OUT MORE</a></p>
          </div>
          <div className="big_col">
            <p className="col_img">
              <Image
                loader={myLoader}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeGallery.FirstRowImage3}`}
                layout="fill"
                alt="Book Item"
              />
            </p>
          </div>
        </div>
        <div className="gallery_row_first">
          <div className="big_col">
            <p className="col_img">
                <Image
                  loader={myLoader}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeGallery.SecRowImage1}`}
                  layout="fill"
                  alt="Book Item"
                />
              </p>
          </div>
          <div className="mini_col grey_col">
            <h3 className="col_head">{homepage.attributes.HomeGallery.SecRowHead}</h3>
            <p className="col_content">{homepage.attributes.HomeGallery.SecRowContent}</p>
            <p className="contBtn inqury-btn"><a href="https://test.villazzo.com/about-luxury-villa-rentals/5-star-villahotel-service">FIND OUT MORE</a></p>
          </div>
          <div className="mini_col">
            <p className="col_img">
                <Image
                  loader={myLoader}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomeGallery.SecRowImage2}`}
                  layout="fill"
                  alt="Book Item"
                />
            </p>
          </div>
        </div>
      </div>
      {/* homepage Gaallery section end here */}


      {/* homepage tabbing section start here */}
      <div className="mainContainer tabbing_sec_wrapper">
        <h2 className="bookHead noMar">{homepage.attributes.HomeTabbing.Heading}</h2>
        <p className="bookDesc">{homepage.attributes.HomeTabbing.Content}</p>
        <div className="tabbing_wrapper">
          <ul id="tabList" className="showTab0">
          {homepage.attributes.HomeTabs.map((item, index) => (
            <li className={`tabbing_item item${index}`} key={index} data-id={index}
              onClick={(event)=>onhoverTabbng(event)}>
              <div className="tabbing_item_icon">
                <Image
                    loader={myLoader}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.TabImage}`}
                    layout="fill"
                    alt="Book Item"
                />
              </div>
              <h4>{item.TabHead}</h4>
            </li>
          ))}
          </ul>
          <div className="tab_content">
          {homepage.attributes.HomeTabs.map((tabitem, index) => (
            <div className={`tab_content_item tab_item${index}`} key={index}>
              <h4 className="tab_content_item_head">{tabitem.TabHead}</h4>
              <p className="tab_content_item_content">{tabitem.TabContent}</p>
            </div>
          ))}
          </div>
        </div>
        <p className="contBtn inqury-btn"><a href="javascript:;" onClick={onAddClick}>FIND OUT MORE</a></p>
      </div>
      {/* homepage tabbing section start here */}


      {/* homepage Inspiration section start here */}
      <div className="mainContainer">
        <h2 className="bookHead noMar">{homepage.attributes.Inspiration.Heading}</h2>
        <p className="bookDesc">{homepage.attributes.Inspiration.content}</p>
        <div className="insp_box_wrapper">
          <a className="insp_box_item big_width" href="https://www.villazzo.com/blog/category/miami/" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.Inspiration.BoxImage1})`}}>
            <span className="insp_box_cont">{homepage.attributes.Inspiration.BoxContent1}</span>
          </a>
          <a className="insp_box_item" href="https://www.villazzo.com/blog/category/miami-beach-luxury-travel/" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.Inspiration.BoxImage2})`}}>
            <span className="insp_box_cont">{homepage.attributes.Inspiration.BoxContent2}</span>
          </a>
          <a className="insp_box_item" href="https://www.villazzo.com/blog/category/travel/" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.Inspiration.BoxImage3})`}}>
            <span className="insp_box_cont">{homepage.attributes.Inspiration.BoxContent3}</span>
          </a>
          <a className="insp_box_item big_width" href="https://www.villazzo.com/blog/category/property-management/" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.Inspiration.BoxImage4})`}}>
            <span className="insp_box_cont">{homepage.attributes.Inspiration.BoxContent4}</span>
          </a>
        </div>
      </div>
      {/* homepage Inspiration section start here */}

      {/* homepage BOOK WITH VILLAZZO section start here */}
      <div className="mainContainer">
        <h2 className="bookHead">{homepage.attributes.bookVillazzoSection.Heading}</h2>
        <div className="bookBoxeWrap">
          <div className="bookItem">
            <p className="bookItemImg">
              <Image
                loader={myLoader}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.bookVillazzoSection.BookItemIconURL1}`}
                layout="fill"
                alt="Book Item"
              />
            </p>
            <h5 className="bookItemHead">{homepage.attributes.bookVillazzoSection.BookItemTitle1}</h5>
            <p className="bookItemDesc">{homepage.attributes.bookVillazzoSection.BookItemContent1}</p>
          </div>
          <div className="bookItem">
            <p className="bookItemImg">
              <Image
                loader={myLoader}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.bookVillazzoSection.BookItemIconURL2}`}
                layout="fill"
                alt="Book Item"
              />
            </p>
            <h5 className="bookItemHead">{homepage.attributes.bookVillazzoSection.BookItemTitle2}</h5>
            <p className="bookItemDesc">{homepage.attributes.bookVillazzoSection.BookItemContent2}</p>
          </div>
          <div className="bookItem">
            <p className="bookItemImg">
              <Image
                loader={myLoader}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.bookVillazzoSection.BookItemIconURL3}`}
                layout="fill"
                alt="Book Item"
              />
            </p>
            <h5 className="bookItemHead">{homepage.attributes.bookVillazzoSection.BookItemTitle3}</h5>
            <p className="bookItemDesc">{homepage.attributes.bookVillazzoSection.BookItemContent3}</p>
          </div>
        </div>
        <p className="contBtn inqury-btn"><a href="javascript:;" onClick={onAddClick}>FIND OUT MORE</a></p>
      </div>
      {/* homepage BOOK WITH VILLAZZO section end here */}

      {/* homepage testimonial section start here */}
      <div className="homeTestiWrapper" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.HomepageTestimonials.BackgroundImageURL})`}}>
        <div className="homeTestiCotainer">
          <h3>{homepage.attributes.HomepageTestimonials.Heading}</h3>
          <Slider {...settings}>
            <div className="slideItem">
              {homepage.attributes.HomepageTestimonials.ClientReview1}
            </div>
            <div className="slideItem">
              {homepage.attributes.HomepageTestimonials.ClientReview2}
            </div>
            <div className="slideItem">
              {homepage.attributes.HomepageTestimonials.ClientReview3}
            </div>
            <div className="slideItem">
              {homepage.attributes.HomepageTestimonials.ClientReview4}
            </div>
            <div className="slideItem">
              {homepage.attributes.HomepageTestimonials.ClientReview5}
            </div>
          </Slider>
        </div>
      </div>
      {/* homepage testimonial section end here */}
      <ContactForm />
      <Footer footerProp={footerData} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    globalRes,
    footerRes,
    navigationRes,
    homepageRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
    fetchAPI("/homepage", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
