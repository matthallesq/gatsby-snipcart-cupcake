import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";


const Wrapper = styled.div`
    width: 100%;
    height: 60vh; 
    background-size: cover;
    background-position: center;
    background: #646C79;
    background-repeat: no-repeat;
    margin-bottom: 10px;
`


const Background = props =>  {
    return (

    <Wrapper
      
       fluid={props.data.indexImage.childImageSharp.fluid}
      >
      </Wrapper>
    )
}

      export default Background;

