import React, { useRef } from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
// import Ticker from '../components/ticker'
import BG from '../components/bg'
import { useDarkMode } from '../contexts/Application'
import { CardBGImage, CardNoise } from '../components/utils'
import Image from '../components/image'
import { BeginSection } from '../components/beginSection'

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  user-select: none;
  position: fixed;
  left: 0vw;
  top: 0vh;
  // background: ${({ theme }) => theme.heroBG};
  opacity: 0.6;
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    max-width: 1150px;
    max-height: 720px;
  }
  @media (min-width: 1441px) {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    max-height: 720px;
    left: 120px;
    margin: 0 auto;
    position: absolute;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 4rem;
  @media (max-width: 375px) {
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  @media (max-width:768px){
    padding:4rem 0rem;
  }
  @media (min-width: 1441px) {
    margin-top: 5rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;

  @media (max-width: 960px) {
    margin: 0rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 72px;
  margin: 4rem 0 3rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1000px;
  letter-spacing: -0.05em;
  font-family: 'monospace', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 3rem;
    line-height: 3.5rem;
    margin: 2rem 0 2rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-size: 2.5rem;
    line-height: 3rem;
    margin: 2rem 0 2rem 0;
    font-weight: 400;
  }
`
const liStyle = {
  display: 'inline-block',
  marginBottom: '15px',
  marginRight: 0,
  color: 'white'
}
const ulStyle = {
  textAlign: 'center',
  marginTop: '85px',
  transition: 'right .25s ease 0s'
}
const h1Style = {
  fontSize: '38px',
  lineHeight: '46px',
  fontWeight: 500,
  color: '#ffffff',
  textAlign: 'center',
  margin: '114px 0 60px 0',
  height: '361px'
}

const IndexPage = props => {
  const isDark = useDarkMode()
  // const [active, setActive] = React.useState(0)
  // const carousel = useRef(null);
  // const [carouselPosition, setCarouselPosition] = React.useState(0);
  // const changeActive = val => {
  //   const el = carousel.current.children[val];
  //   if (el) {
  //     setCarouselPosition(el.offsetLeft)
  //     setActive(val)
  //   }

  // }
  const activeClassName = ""
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     changeActive(active === 6 ? changeActive(0) : changeActive(active + 1))
  //   }, 3000)
  //   return () => clearInterval(timer)
  // }, [active, carouselPosition])
  return (
    <Layout path={props.location.pathname} nofooter={true}>
      {/* <BGCard>
        <CardBGImage isDark={isDark} />
      </BGCard> */}
      {/* <Ticker /> */}
      {/* <BG /> */}
      <SEO
        title=""
        path={props.location.pathname}
        description={'A fully decentralized protocol for automated liquidity provision on Binance Smart Chain'}
      />
      <BeginSection isDark={isDark} path={props.location.pathname} />
      <StyledBody>
        <section className="growing">
          <div className="container">
            <div className="title-body">
              <h2>
BrainautSwap is a Decentralized Exchange (DEX) built on top of Binance Smart Chain (BSC).
              </h2>
              <p>
                The Brainaut protocol provides developers, liquidity providers & traders the opportunity to participate
                in a decentralized financial marketplace that is open and accessible to all. It is the Biggest Automated Market Maker (AMM) based Exchange in BSC
              </p>
            </div>
            {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  onClick={() => changeActive(0)}
                  data-slide-to="0"
                  className={active === 0 ? 'active' : 'inactive'}
                ></li>
                <li
                  data-target="#myCarousel"
                  onClick={() => changeActive(1)}
                  data-slide-to="1"
                  className={active === 1 ? 'active' : 'inactive'}
                ></li>
                <li
                  data-target="#myCarousel"
                  onClick={() => changeActive(2)}
                  data-slide-to="2"
                  className={active === 2 ? 'active' : 'inactive'}
                ></li>
                <li
                  data-target="#myCarousel"
                  onClick={() => changeActive(3)}
                  data-slide-to="3"
                  className={active === 3 ? 'active' : 'inactive'}
                ></li>
                <li
                  data-target="#myCarousel"
                  onClick={() => changeActive(4)}
                  data-slide-to="4"
                  className={active === 4 ? 'active' : 'inactive'}
                ></li>
                <li
                  data-target="#myCarousel"
                  onClick={() => changeActive(5)}
                  data-slide-to="4"
                  className={active === 5 ? 'active' : 'inactive'}
                ></li>
                <li
                  data-target="#myCarousel"
                  onClick={() => changeActive(7)}
                  data-slide-to="4"
                  className={active === 7 ? 'active' : 'inactive'}
                ></li>
              </ol>
              <div className="overflow-hidden" >
                <div className="carousel-inner" ref={carousel} style={{ transform: `translateX(-${carouselPosition}px)` }}>
                  <div className="item active">
                    <Image
                      src="Banner1.png"
                      alt=""
                      className={active === 0 ? activeClassName : 'inactive'}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="banner2.png"
                      alt=""
                      className={active === 1 ? activeClassName : 'inactive'}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={active === 2 ? activeClassName : 'inactive'}
                      src="banner3.png"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="banner4.png"
                      className={active === 3 ? activeClassName : 'inactive'}
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="banner5.png"
                      className={active === 4 ? activeClassName : 'inactive'}
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="banner_new1.png"
                      className={active === 5 ? activeClassName : 'inactive'}
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="banner_new2.png"
                      className={active === 6 ? activeClassName : 'inactive'}
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="banner_new3.png"
                      className={active === 7 ? activeClassName : 'inactive'}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          */}
          </div>
        </section>
        <section className="suite">
          <div className="container">
            <div className="title-body">
              <h2>Brainaut features a growing list of tools and functionality.</h2>
              <p>
                Brainaut protocol will provide open source apps in the future to assist with decentralized finance
                industry adoption worldwide.
              </p>
            </div>
            <div className="box-sec">
              <ul className={`box-line ${isDark[0] && "darkmode"}`}>
                {/* <li>
                  <a href="https://brainautstarter.org/" target="_blank" rel="noopener noreferrer" >
                    <div className="box1">

                      <Image
                        src="box-1.png"
                        alt=""
                        className="img-responsive"
                        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  </a>
                </li> */}
                <li>
                  <a href="https://info.brainaut.net/">
                    <div className="box1">
                      <Image src="box-2.png" alt="" className="img-responsive" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://app.brainaut.net/">
                    <div className="box1">
                      <Image src="box-3.png" alt="" className="img-responsive" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://tokens.brainaut.me">
                    <div className="box1">
                      <Image alt="" src="box-4.png" className="img-responsive" />
                    </div>
                  </a>
                </li>
                {/* <li>
                  <a href='#'>
                    <div className="box1">
                      <Image src="box-5.png" alt="" className="img-responsive" />
                    </div>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
        <section className={`power ${isDark[0] && "darkmode"}`}>
          <div className="container">
            <div className="title-body">
              <h2>Calling DeFi developers!</h2>
              <p>
                Check out the{' '}
                <strong>
                  <a className="purple-link" href="https://brainaut.net/docs/v1/">
                    documentation
                  </a>
                </strong>
                , the{' '}
                <strong>
                  <a className="purple-link" href="https://brainaut.net/docs/v1/javascript-SDK/quick-start/">
                    quick start
                  </a>
                </strong>{' '}
                or a guide below to integrate your project with thousands of tokens and billions in liquidity.
              </p>
            </div>
            <div className="row box-sec flex-box-bg">
              <div className="column">
                <a href="https://brainaut.net/docs/v1/smart-contract-integration/trading-from-a-smart-contract/">
                  <div className="power-1">
                    <span className="icon-1">
                      <Image src="icon-1.png" alt="" style={{ height: '100px', width: '100px', margin: 'auto' }} />
                    </span>
                    <h4>Token Swaps</h4>
                    <p>Simplify the process of integrating Brainaut into your startup or project</p>
                  </div>
                </a>
              </div>
              <div className="column">
                <a href="https://brainaut.net/docs/v1/smart-contract-integration/providing-liquidity/">
                  <div className="power-1">
                    <span className="icon-1">
                      <Image src="icon-2.png" alt="" style={{ height: '100px', width: '100px', margin: 'auto' }} />
                    </span>
                    <h4>Providing Liquidity</h4>
                    <p>A getting started guide to how to build interfaces with Brainaut</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="row flex-box-bg">
              <div className="column ">
                <a href="#">
                  <div className="power-1">
                    <span className="icon-1">
                      <Image src="icon-3.png" alt="" style={{ height: '100px', width: '100px', margin: 'auto' }} />
                    </span>
                    <h4>Flash Swaps</h4>
                    <p>How to withdraw the reserves of any BEP20 token on Brainaut & execute arbitrary logic</p>
                  </div>
                </a>
              </div>
              <div className="column">
                <a href="https://brainaut.net/docs/v1/core-concepts/oracles/">
                  <div className="power-1">
                    <span className="icon-1">
                      <Image src="icon-4.png" alt="" style={{ height: '100px', width: '100px', margin: 'auto' }} />
                    </span>
                    <h4>Oracle</h4>
                    <p>Highly Decentralized, manipulation-resistant, on-chain price feeds</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={`global  ${isDark[0] && "darkmode"}`}>
          <div className="container">
            <div className="title-body">
              <h2>The worldwide community</h2>
              <p>
                Learn more about Brainaut, chat with the team, community members, and share your input in shaping the
                future of the Brainaut protocol.
              </p>
            </div>
          </div>
        </section>
        <section className="subscribe">
          <div className="container">
            <div className="title-body">
              <h2>Subscribe to our newsletter for updates</h2>
            </div>
            <div className="row box-sec">
              <div className="col-input">
                <div className="subscr">
                  <div id="mc_embed_signup">
                    <form
                      action=""
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_blank"
                      noValidate
                    >
                      <ul id="mc_embed_signup_scroll">
                        <li>
                          <input
                            type="email"
                            value=""
                            name="EMAIL"
                            className="form-control fild-sub"
                            id="mce-EMAIL"
                            placeholder="your@email.com"
                            required
                          />
                          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            <input type="text" name="b_ae372fe57241528d3c5496518_11f483d7e0" tabIndex="-1" value="" />
                          </div>
                        </li>
                        <li>
                          <input
                            type="submit"
                            value="→"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="my-btn"
                          />
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row flex-box">
              <div className="flex-col">
                <div className="foot-1">
                  <h4>Products</h4>
                  <ul>
                    <li>
                      <a href="https://app.brainaut.net/#/swap">
                        <i className="angle-right" aria-hidden="true"></i>App
                      </a>
                    </li>
                    <li>
                      <a href="https://info.brainaut.net/">
                        <i className="angle-right" aria-hidden="true"></i>Analytics
                      </a>
                    </li>
                    <li>
                      <a href="https://tokens.brainaut.me/">
                        <i className="angle-right" aria-hidden="true"></i>Token Lists
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Brainautgov
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-col">
                <div className="foot-1">
                  <h4>Developers</h4>
                  <ul>
                    <li>
                      <a href="https://brainaut.net/docs/v1/">
                        <i className="angle-right" aria-hidden="true"></i>Documentation
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/brainaut">
                        <i className="angle-right" aria-hidden="true"></i>GitHub
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Whitepaper
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Audit
                      </a>
                    </li>
                    <li>
                      <a href="https://brainaut.net/bug-bounty/">
                        <i className="angle-right" aria-hidden="true"></i>Bug Bounty
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-col">
                <div className="foot-1">
                  <h4>Governance</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Brainaut Token
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Forum
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Voting Portal
                      </a>
                    </li>
                    <li>
                      <a href="https://brainaut.net/docs/v1/">
                        <i className="angle-right" aria-hidden="true"></i>Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-col">
                <div className="foot-1">
                  <h4>Community</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Discord
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/brainaut">
                        <i className="angle-right" aria-hidden="true"></i>Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://www.reddit.com/user/brainaut">
                        <i className="angle-right" aria-hidden="true"></i>Reddit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-col">
                <div className="foot-1">
                  <h4>About</h4>
                  <ul>
                    <li>
                      <a href="https://brainaut.net/about/">
                        <i className="angle-right" aria-hidden="true"></i>Info
                      </a>
                    </li>
                    <li>
                      <a href="https://brainaut.net/docs/v1/faq/">
                        <i className="angle-right" aria-hidden="true"></i>FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <p>
              &copy; 2021 <strong>brainaut</strong>. All Right Reserved
            </p>
          </div>
        </footer>
      </StyledBody>
    </Layout>
  )
}

export default IndexPage
