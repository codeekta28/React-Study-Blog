import React, { useState } from 'react'

export default function UpdateForm (prop) {
  // creating variables
  const [date, setdate] = useState('')
  const [react, setreact] = useState('')
  const [logic, setlogic] = useState('')
  const [blog, setblog] = useState('')
  const [bigProject, setbigProject] = useState('')
  const [interview, setinterview] = useState('')


  // event functions

  const dateHandler = event => {
    setdate(event.target.value)
  }
  const reactHandler = event => {
    setreact(event.target.value)
  }
  const logicHandler = event => {
    setlogic(event.target.value)
  }
  const blogHandler = event => {
    setblog(event.target.value)
  }
  const bigHandler = event => {
    setbigProject(event.target.value)
  }
  const interviewHandler = event => {
    setinterview(event.target.value)
  }
  const submitFormHandler = event => {
    event.preventDefault();
    setdate('');
    setreact('');
    setlogic('');
    setblog('');
    setbigProject('');
    setinterview('');
    console.log(date);
    prop.showAlert("success",'form is submitted')
  }

  const inputStyle={
    backgroundColor:prop.darkModeColor,
    color:prop.mode==='dark'?'white':'black',
    border:`2px solid ${prop.mode==='dark'?'white':'black'} `
  }

  return (
    <>
    <section id="updateForm">
      <div className='container  my-5'>
        <h1>{prop.heading}</h1>
        <form className='' onSubmit={submitFormHandler}>
          <div className='mb-3'>
            <label htmlFor='date' className='form-label'>
              Date
            </label>
            <input
            style={inputStyle}
              type='date'
              className='form-control'
              id='date'
              placeholder='select Date'
              onChange={dateHandler}
              value={date}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='react' className='form-label'>
              React Update
            </label>
            <input
              type='text'
              style={inputStyle}
              className='form-control'
              id='react'
              placeholder='React Updates'
              onChange={reactHandler}
              value={react}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='logic' className='form-label'>
              JavaScript Logic Questions
            </label>
            <input
              type='text'
              style={inputStyle}
              className='form-control'
              id='logic'
              placeholder='Logic Questions'
              onChange={logicHandler}
              value={logic}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='blog' className='form-label'>
              JavaScript Blog Project
            </label>
            <input
              type='text'
              style={inputStyle}
              className='form-control'
              id='blog'
              placeholder='Blog'
              onChange={blogHandler}
              value={blog}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='big' className='form-label'>
              JavaScript Big Project
            </label>
            <input
              type='text'
              style={inputStyle}
              className='form-control'
              id='big'
              placeholder='Big Project'
              onChange={bigHandler}
              value={bigProject}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Interview' className='form-label'>
              InterView Preparation
            </label>
            <input
              type='text'
              style={inputStyle}
              className='form-control'
              id='Interview'
              placeholder='Interview Preparation'
              onChange={interviewHandler}
              value={interview}
            />
          </div>
          <button className='btn ' style={inputStyle}>Submit</button>
        </form>
      </div>
      <div className='container'>
        <h2>Form Summary</h2>
        <p>
          {date}
          {react}
          {logic}
          {blog}
          {bigProject}
          {interview}
        </p>
      </div>
      </section>
    </>
  )
}
