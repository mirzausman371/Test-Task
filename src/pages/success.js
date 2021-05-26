import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'


const Success = props => {
  // const data = useStaticQuery(graphql`
  //   {
  //     brainautcornImage: file(relativePath: { eq: "brainaut_image.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200) {
  //           ...GatsbyImageSharpFluid_noBase64
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout path={props.location.pathname} nofooter={true}>
      <BG />
      <SEO title="Success" path={props.location.pathname} />
      {/* <StyledAbout>
        <StyledSectionFlex style={{ flexDirection: 'column', paddingBottom: '0px' }}>
          <StyledCardBG fluid={data.brainautcornImage.childImageSharp.fluid} />
          <Title style={{ width: '100%' }}>You are now subscribed.</Title>
          <Link to="/">Back home</Link>
        </StyledSectionFlex>
      </StyledAbout> */}
    </Layout>
  )
}

export default Success
