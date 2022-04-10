import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'

export default function Header (props) {
  return (
    <header className=''>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='https://wallpaperaccess.com/full/3949076.jpg'
              className='d-block w-100 img-fluid'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>{props.firstSlideHeading}</h5>
              <p>{props.firstSlidePara}</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://www.sololearn.com/Uploads/html-css.jpg'
              className='d-block w-100 img-fluid'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>{props.secondSlideHeading}</h5>
              <p>{props.secondSlidePara}</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg'
              className='d-block w-100 img-fluid'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>props.thirdSlideHeading</h5>
              <p>props.thirdSlidePara</p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </header>
  )
}
Header.propTypes={
firstSlideHeading:PropTypes.string.isRequired,
firstSlidePara:PropTypes.string,
secondSlideHeading:PropTypes.string.isRequired,
secondSlidePara:PropTypes.string,
thirdSlideHeading:PropTypes.string.isRequired,
thirdSlidePara:PropTypes.string,
}
