import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";


const BackgroundImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background: ${props => props.theme.colors.primaryAccent};

    @media (max-width: 930px) {
        width: 250px;
      }

      @media (max-width: 710px) {
        width: 100%;
      }
`

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
