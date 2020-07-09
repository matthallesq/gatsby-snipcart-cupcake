import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
       margin: 0;
       padding: 0;
       border: 0;
       font-size: 100%;
       font: inherit;
       vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
       display: block;
    }
    body {
       line-height: 1;
    }
    ol, ul {
       list-style: none;
    }
    blockquote, q {
       quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
       content: '';
       content: none;
    }
    table {
       border-collapse: collapse;
       border-spacing: 0;
    }


    * {
        box-sizing: border-box;
    }

    body {
      padding: 0;
      margin: 0;
      font-family: Montserrat, sans-serif;
      font-display: block;

    }
    a {
      text-decoration: none;
      color: inherit;
    }
    p, h1, h2, h3, h4 {
      line-height: 1.5em;
    }
    button, select {
      border: none;
      padding: 0;
      margin: 0;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      font-family: inherit;
      font-size: 1em;
  }
  strong {
     font-weight: bold;
  }

  /* Hide the website with a full color */
.snipcart-overwrite #snipcart-header,
.snipcart-overwrite #snipcart-footer,
.snipcart-overwrite #snipcart-overlay,
.snipcart-overwrite #snipcart-overlay  {
    background: #000;
}

/* Remove the padding from the container to expend the cart */
.snipcart-overwrite .snipcart-checkout-container {
    padding: 0;
}

/* Make the cart take full width */
.snipcart-overwrite #snipcart-main-container {
    max-width: none;
    width: 100%;
    overflow-x: hidden;
}

/* Remove the image of the close button and hide the label */
.snipcart-overwrite #snipcart-close {
    background: none;
    text-indent: 0;
    width: auto;
    color: #000;
    right: -13px;
    display: block;
}

/* Add a new label and arrow to the close button */
.snipcart-overwrite #snipcart-close:after {
    content: "Return to site \279C";
    color: #87db57;
    position: relative;
    left: -33px;
}
`
