import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
// import Ticker from '../components/ticker'
import BG from '../components/bg'
import { useDarkMode } from '../contexts/Application'
import { CardBGImage, CardNoise } from '../components/utils'
import Image from '../components/image'

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  user-select: none;
  position: fixed;
  left: 0vw;
  top: 0vh;
  background: ${({ theme }) => theme.heroBG};
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
  const [active, setActive] = React.useState(0)
  const [activeClassName, setActiveClassName] = React.useState('left-active-img')
  const changeActive = val => {
    if (val  || val === 0) {
      if (val < active) {
        setActive(val)
        setActiveClassName('left-active-img')
      } else {
        setActive(val)
        setActiveClassName('right-active-img')
      }
    }
  }
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     changeActive(active === 4 ? changeActive(0) : changeActive(active + 1))
  //   }, 3000)
  //   return () => clearInterval(timer)
  // }, [])
  console.log(active);
  return (
    <Layout path={props.location.pathname} nofooter={true}>
      <BGCard>
        <CardBGImage isDark={isDark} />
        <CardNoise />
      </BGCard>
      {/* <Ticker /> */}
      {/* <BG /> */}
      <SEO
        title=""
        path={props.location.pathname}
        description={'A fully decentralized protocol for automated liquidity provision on Ethereum'}
      />
      <StyledBody>
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
                KwikSwap is a decentralised protocol on the Ethereum network. Users can swap, create markets, add
                liquidity & stake.
              </h1>
              <ul className="banner-btn">
                <li>
                  <a className="active btn-uni" href="https://app.kwikswap.org/#/swap">
                    Use Kwikswap
                  </a>
                </li>
                <li>
                  <a href="https://kwikswap.org/docs/v1">Documentation</a>
                </li>
                <li>
                  <a href="https://kwikswap.org/docs/v1/faq/">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="growing">
          <div className="container">
            <div className="title-body">
              <h2>
                A new Cross-chain Automated Protocol on Ethereum & Polkadot incorporating Plasm / Acala Network
                Parachains.
              </h2>
              <p>
                The Kwikswap protocol provides developers, liquidity providers & traders the opportunity to participate
                in a decentralized financial marketplace that is open and accessible to all.
              </p>
            </div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
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
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <Image
                    src="Banner1.png"
                    alt=""
                    className={active === 0 ? activeClassName : 'inactive'}
                    style={{ width: '100%', display: `${active === 0 ? 'block' : 'none'}  ` }}
                  />
                </div>
                <div className="item">
                  <Image
                    src="banner2.png"
                    alt=""
                    className={active === 1 ? activeClassName : 'inactive'}
                    style={{ width: '100%', display: `${active === 1 ? 'block' : 'none'}  ` }}
                  />
                </div>
                <div className="item">
                  <Image
                    className={active === 2 ? activeClassName : 'inactive'}
                    src="banner3.png"
                    alt=""
                    style={{ width: '100%', display: `${active === 2 ? 'block' : 'none'}  ` }}
                  />
                </div>
                <div className="item">
                  <Image
                    src="banner4.png"
                    className={active === 3 ? activeClassName : 'inactive'}
                    alt=""
                    style={{ width: '100%', display: `${active === 3 ? 'block' : 'none'}  ` }}
                  />
                </div>
                <div className="item">
                  <Image
                    src="banner5.png"
                    className={active === 4 ? activeClassName : 'inactive'}
                    alt=""
                    style={{ width: '100%', display: `${active === 4 ? 'block' : 'none'}  ` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="suite">
          <div className="container">
            <div className="title-body">
              <h2>Kwikswap features a growing list of tools and functionality.</h2>
              <p>
                Kwikswap protocol will provide open source apps in the future to assist with decentralized finance
                industry adoption worldwide.
              </p>
            </div>
            <div className="box-sec">
              <ul className="box-line">
                <li>
                  <a href = "#">
                    <div className="box1">
                    {/* <Image src="icon-1.png" alt="" style={{ height: '100px', width: '100px', margin: 'auto' }} /> */}

                      <Image
                        src="box-1.png"
                        alt=""
                        className="img-responsive"
                        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href = "https://info.kwikswap.org/">
                    <div className="box1">
                      <Image src="box-2.png" alt="" className="img-responsive" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href = "https://app.kwikswap.org/">
                    <div className="box1">
                      <Image src="box-3.png" alt="" className="img-responsive" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href = "https://tokens.kwikswap.org">
                    <div className="box1">
                      <Image alt="" src="box-4.png" className="img-responsive" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href = '#'>
                    <div className="box1">
                      <Image src="box-5.png" alt="" className="img-responsive" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="power">
          <div className="container">
            <div className="title-body">
              <h2>Calling DeFi developers!</h2>
              <p>
                Check out the{' '}
                <strong>
                  <a className="purple-link" href="https://kwikswap.org/docs/v1/">
                    documentation
                  </a>
                </strong>
                , the{' '}
                <strong>
                  <a className="purple-link" href="https://kwikswap.org/docs/v1/javascript-SDK/quick-start/">
                    quick start
                  </a>
                </strong>{' '}
                or a guide below to integrate your project with thousands of tokens and billions in liquidity.
              </p>
            </div>
            <div className="row box-sec flex-box-bg">
              <div className="column">
                <a href="https://kwikswap.org/docs/v1/smart-contract-integration/trading-from-a-smart-contract/">
                  <div className="power-1">
                    <span className="icon-1">
                      <Image src="icon-1.png" alt="" style={{ height: '100px', width: '100px', margin: 'auto' }} />
                    </span>
                    <h4>Token Swaps</h4>
                    <p>Simplify the process of integrating Kwikswap into your startup or project</p>
                  </div>
                </a>
              </div>
              <div className="column">
                <a href="https://kwikswap.org/docs/v1/smart-contract-integration/providing-liquidity/">
                  <div className="power-1">
                    <span className="icon-1">
                      <Image src="icon-2.png" alt="" style={{ height: '100px', width: '100px', margin: 'auto' }} />
                    </span>
                    <h4>Providing Liquidity</h4>
                    <p>A getting started guide to how to build interfaces with Kwikswap</p>
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
                    <p>How to withdraw the reserves of any ERC20 token on Kwikswap & execute arbitrary logic</p>
                  </div>
                </a>
              </div>
              <div className="column">
                <a href="https://kwikswap.org/docs/v1/core-concepts/oracles/">
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
        <section className="global">
          <div className="container">
            <div className="title-body">
              <h2>The worldwide community</h2>
              <p>
                Learn more about Kwikswap, chat with the team, community members, and share your input in shaping the
                future of the Kwikswap protocol.
              </p>
            </div>
            <div className="row box-sec box-sec-1">
              <div className="col-small">
                <a href="https://t.me/kwikswapdex">
                  <div className="power-2">
                    <Image
                      src="telegram.png"
                      alt=""
                      className="img-responsive"
                      style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </a>
              </div>
              <div className="col-small">
                <a href="https://twitter.com/kwikswapdex">
                  <div className="power-2">
                    <Image src="twitter-card.png" alt="" className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-small">
                <a href="#">
                  <div className="power-2">
                    <Image src="discourse.png" alt="" className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-small">
                <a href="https://www.reddit.com/r/kwikswap">
                  <div className="power-2">
                    <Image src="reddit-card.png" alt="" className="img-responsive" />
                  </div>
                </a>
              </div>
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
                      <a href="https://app.kwikswap.org/#/swap">
                        <i className="angle-right" aria-hidden="true"></i>App
                      </a>
                    </li>
                    <li>
                      <a href="https://info.kwikswap.org/">
                        <i className="angle-right" aria-hidden="true"></i>Analytics
                      </a>
                    </li>
                    <li>
                      <a href="https://tokens.kwikswap.org/">
                        <i className="angle-right" aria-hidden="true"></i>Token Lists
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Kwikstarter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Kwikgov
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="angle-right" aria-hidden="true"></i>Kwikhawk
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
                      <a href="https://kwikswap.org/docs/v1/">
                        <i className="angle-right" aria-hidden="true"></i>Documentation
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/kwikswap">
                        <i className="angle-right" aria-hidden="true"></i>GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://kwikswap.org/whitepaper.pdf">
                        <i className="angle-right" aria-hidden="true"></i>Whitepaper
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Audit
                      </a>
                    </li>
                    <li>
                      <a href="https://kwikswap.org/bug-bounty/">
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
                        <i className="angle-right" aria-hidden="true"></i>Kwik Token
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
                      <a href="https://kwikswap.org/docs/v1/">
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
                      <a href="https://twitter.com/kwikswapdex">
                        <i className="angle-right" aria-hidden="true"></i>Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://www.reddit.com/r/kwikswap">
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
                      <a href="https://kwikswap.org/blog/">
                        <i className="angle-right" aria-hidden="true"></i>Blog
                      </a>
                    </li>
                    <li>
                      <a href="https://kwikswap.org/about/">
                        <i className="angle-right" aria-hidden="true"></i>Info
                      </a>
                    </li>
                    <li>
                      <a href="https://kwikswap.org/docs/v1/faq/">
                        <i className="angle-right" aria-hidden="true"></i>FAQ
                      </a>
                    </li>
                    <li>
                      <a href="https://kwikswap.org/about/#jobs">
                        <i className="angle-right" aria-hidden="true"></i>Jobs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="angle-right" aria-hidden="true"></i>Logo & Brand
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <p>
              &copy; 2021 <strong>kwikswap</strong>. All Right Reserved
            </p>
          </div>
        </footer>
      </StyledBody>
    </Layout>
  )
}

export default IndexPage
