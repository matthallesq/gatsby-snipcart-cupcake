import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";


const ImgStyled = styled(Img)`
    width: 100%;
    height: 350px;

    @media (max-width: 930px) {
        height: 250px;
      }
`

const Price = styled.p`
    padding-bottom: 10px;
`

const BackgroundImage = (props) => {
    return (
                <ImgStyled fluid={props.image} />
        
    )
}

export default BackgroundImage;
