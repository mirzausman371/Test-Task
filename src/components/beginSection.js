import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import uImage from '../images/banner-bg-2.png';
import Header from './header';

const StyledDiv = styled.div`
/*mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};*/

background: url(${uImage});
 background-size:cover;
 width: 100%;
height: 100%;
opacity: 1;
`;
export const BeginSection = ({ isDark, path }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)
    return (
        <StyledDiv isDark={isDark}>
            <Header path={path} siteTitle={data.site.siteMetadata.title} isDark={isDark} />
            <section className="begin">
                <div className="container">
                    <div className="banner-text">
                        <h1
                            className="animate-typing"
                            data-animate-loop="true"
                            data-type-speed="200"
                            data-type-delay="200"
                            data-remove-speed="50"
                            data-remove-delay="500"
                            data-cursor-speed="200"
                        >
                            Brainaut is a decentralised protocol on the Binance Smart Chain network. Users can swap, create markets, add
                            liquidity & stake.
              </h1>
                        <ul className="banner-btn">
                            <li>
                                <a className="active btn-uni" href="https://app.brainaut.net/#/swap">
                                    Use Brainaut
                  </a>
                            </li>
                            <li>
                                <a href="https://brainaut.net/docs/v1">Documentation</a>
                            </li>
                            <li>
                                <a href="https://brainaut.net/docs/v1/faq/">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </StyledDiv>
    )
}
