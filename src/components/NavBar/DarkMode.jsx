import { useEffect, useState } from 'react'
import DarkModeButton from '../../assets/website/dark-mode-button.png'
import LightModeButton from '../../assets/website/light-mode-button.png'

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  // acessa o elemento html
  const element = document.documentElement


  // guarda o tema no localstorage e o elemento html
  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      element.classList.add('dark')
      element.classList.add('dark')
    } else {
      element.classList.remove('light')
      element.classList.remove('dark')
    }
  })

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        src={LightModeButton}
        alt="Light button"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        } transition-all duration-300`}
      />

      <img
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        src={DarkModeButton}
        alt="Dark button"
        className={`w-12 cursor-pointer`}
      />
    </div>
  )
}

export default DarkMode
