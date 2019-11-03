import { createGlobalStyle, CSSObject } from 'styled-components'

const genericStyles: CSSObject = {
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  h3: {
    marginTop: 15
  }
}

const bodyAndHtmlGlobalStyles: CSSObject = {
  'html, body': {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  body: {
    fontFamily: 'Roboto',
    minHeight: '100%',
    margin: 0
  },
}

export const GlobalStyles = createGlobalStyle({
  ...genericStyles,
  ...bodyAndHtmlGlobalStyles,
})
