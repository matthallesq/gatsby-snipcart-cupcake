import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";


const ItemThumbnailStyled = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 50px;

    background: ${props => props.theme.colors.primaryAccent};

    @media (max-width: 930px) {
        width: 250px;
      }

      @media (max-width: 710px) {
        width: 100%;
      }
`

const Heading2 = styled.h2`
    font-size: 2.5em;
    padding: 10px;
    text-align: center;
    width: 100%;
    min-height: 85px;
    margin: auto;

`

const LinkStyled = styled(Link)`
    width: 100%;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const itemThumbnail = (props) => {
    return (
        <ItemThumbnailStyled>
            <LinkStyled to={props.link}>
                <ImgStyled fluid={props.image} />
                <Heading2>{props.heading}</Heading2>
            </LinkStyled>
            <Price> From ${props.price.toFixed(2)}</Price>
        </ItemThumbnailStyled >
    )
}

export default itemThumbnail;
