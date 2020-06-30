(function () {
  let currentTheme
  function changeTheme (inputTheme) {
    if (inputTheme === 'dark') {
      setHtmlClass()
      localStorage.setItem('casper-theme', inputTheme)
    }
  }

  function setHtmlClass () {
    document.querySelector('html').classList.add('__casper-dark-mode')
  }

  try {
    currentTheme = localStorage.getItem('casper-theme') || 'light'
    changeTheme(currentTheme)
  } catch (err) {
    console.log(new Error('Accessing theme has been denied'))
  }
})()
