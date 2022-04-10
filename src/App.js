import './App.css'
import react, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import UpdateForm from './components/UpdateForm'
import Alert from './components/Alert'
import About from './components/About'

function App () {
  const [mode, setmode] = useState('light')
  const [modeBtnText, setModeBtnText] = useState('Dark Mode')
  const [alert, setAlert] = useState(null)
  const [darkModeColor, setDarkModeColor] = useState('dark')
  const changeModeHandler = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.title = 'StudyBlog-LightMode'
      setModeBtnText('Dark Mode')
      showAlert('success', 'Mode Is Light')
    } else {
      setmode('dark')
      document.body.style.backgroundColor = '#343a40'
      document.title = 'StudyBlog-DarkMode'
      document.body.style.color = 'white'
      setModeBtnText('Light Mode')
      showAlert('success', 'Mode Is Dark')
    }
  }
  function showAlert (type, message) {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const changeDarkModeHandler = {
    blue: () => {
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#021c42'
        // document.body.style.color = 'white'
        setDarkModeColor('blue')
      }
    },
    red: () => {
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#5a0707'

        setDarkModeColor('red')
      }
    },
    green: () => {
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#093a09'

        setDarkModeColor('#19a219')
      }
    },
    yellow: () => {
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#c2c207'

        setDarkModeColor('yellow')
      }
    }
  }
  return (
    <>
      <NavBar
        mainWebsiteName={'DailyStudyUpdate'}
        mode={mode}
        onChangeMode={changeModeHandler}
        modeBtnText={modeBtnText}
        onChangeDarkMode={changeDarkModeHandler}
        darkModeColor={darkModeColor}
      />
      <Alert alert={alert} />
      <Header
        firstSlideHeading={'React'}
        firstSlidePara={'It is developed by FB(Meta)'}
        secondSlideHeading='HTML And CSS'
        secondSlidePara='Base Of WebDevelopment'
        thirdSlideHeading='JavaScript'
        thirdSlidePara='Brain Of WebDevelopment'
      />
      <Routes>
        <Route
          path='/'
          element={
            <UpdateForm
              heading={'Enter Your daily Update Of Study'}
              mode={mode}
              showAlert={showAlert}
              darkModeColor={darkModeColor}
            />
          }
        />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
