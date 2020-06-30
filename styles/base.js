import css from 'styled-jsx/css'

export default css.global`
  /* Light Mode */
  :root {
    --casper-background: #fff;
    --casper-primary-text: #000;
  }

  /* Dark Mode */
  .__casper-dark-mode:root {
    --casper-background: #000;
    --casper-primary-text: #fff;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--casper-background);
    color: var(--casper-primary-text);
  }
`
