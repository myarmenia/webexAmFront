import React, { useState, useEffect } from 'react'
import './ScrollUpButton.css'
import { scroll_Up_Icon } from '../../iconFolder/icon'

function ScrollUpButton() {
  const [scrolBtn, setScrolBtn] = useState(false)

  function handleScroll() {
    if (window.scrollY > 1200) {
      setScrolBtn(true)
    } else {
      setScrolBtn(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a id="button" onClick={scrollToTop} style={{ visibility: scrolBtn ? 'visible' : 'hidden', opacity: scrolBtn ? '1' : '0' }}>
      {scroll_Up_Icon}
    </a>
  )
}

export default ScrollUpButton