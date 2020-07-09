// Here a theme is defined. This theme is passed to the entire site (via layout.js) so the individual parts of the theme object
// can be accessed in each styled component.

export const theme = {
    colors: {
        main: '#1F3044', //used in header
        primaryAccent: '#ffffff', //used for thumbnails on homepage and as price background
        secondaryAccent: '#646C79', //used for header border and item buttons
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

};



