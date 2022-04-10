import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar (props) {
  const cursorPointer={
    cursor:'pointer'
  }

  return (
    <nav className={`navbar NavBarBg navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className='container-fluid'style={{backgroundColor:`${props.darkModeColor}!important`}}>
        <Link className='navbar-brand' to='/'>
          {props.mainWebsiteName}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                {props.navigationItem}
              </Link>
            </li>
          </ul>
          <div className='form-check form-switch'>
            <input
              className='form-check-input'
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
              onClick={props.onChangeMode}
            />
            <label
              className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}
              htmlFor='flexSwitchCheckDefault'
            >
            {props.modeBtnText}
            </label>
            
          </div>
          <div className="blue p-3  bg-primary border border-primary ms-2 rounded-circle d" onClick={props.onChangeDarkMode.blue} style={cursorPointer}/>
          <div className="red p-3  bg-danger border border-danger mx-2 rounded-circle d"onClick={props.onChangeDarkMode.red}  style={cursorPointer}/>
          <div className="green p-3  bg-success border border-success me-2 rounded-circle d"onClick={props.onChangeDarkMode.green} style={cursorPointer}/>
          <div className="yellow p-3  bg-warning border border-warning rounded-circle d"onClick={props.onChangeDarkMode.yellow} style={cursorPointer}/>
        </div>
      </div>
    </nav>
  )
}
NavBar.propTypes = {
  mainWebsiteName: PropTypes.string,
  navigationItem: PropTypes.string
}
NavBar.defaultProps = {
  mainWebsiteName: 'Ekta',
  navigationItem: 'About'
}
