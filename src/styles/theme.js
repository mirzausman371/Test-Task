import { createGlobalStyle, css } from 'styled-components'

const MEDIA_WIDTHS = {
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const white = '#FFFFFF'
const black = '#000000'

export const theme = darkMode => ({
  white,
  black,
  textColor: darkMode ? white : '#010101',
  invertedTextColor: darkMode ? '#010101' : white,
  greyText: darkMode ? white : '#6C7284',

  heroBG: darkMode
    ? 'radial-gradient(76.02% 75.41% at 6.84% 0%,#004eff 0%,#040606 100%);'
    : 'radial-gradient(93.02% 71.41% at -2.16% 0%,#002bff 7%,#aed4ea 100%);',
  invertImage: darkMode ? 'filter: invert(0);' : 'filter: invert(1);',
  invertLogo: darkMode ? 'filter: invert(1);' : 'filter: invert(0);',
  // : 'radial-gradient(76.02% 75.41% at 1.84% 0%,#363cff 0%,#e5d8ffeb 100%);',

  // for setting css on <html>
  backgroundColor: darkMode ? '#0f1013' : '#FFF',

  modalBackground: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.5)',
  cardBG: darkMode ? 'rgba(0, 0, 0, .9)' : 'rgba(236, 236, 236, .9)',
  menuBG: darkMode ? 'black' : 'white',
  marqueeBG: darkMode ? '#010101' : '#010101',

  inputBackground: darkMode ? '#202124' : white,
  placeholderGray: darkMode ? '#5F5F5F' : '#E1E1E1',
  shadowColor: darkMode ? '#000' : '#2F80ED',
  fplink: darkMode ? '#000000' : '#ffffff',
  // grays
  concreteGray: darkMode ? '#292C2F' : '#FAFAFA',
  mercuryGray: darkMode ? '#333333' : '#E1E1E1',
  silverGray: darkMode ? '#737373' : '#C4C4C4',
  chaliceGray: darkMode ? '#7B7B7B' : '#AEAEAE',
  doveGray: darkMode ? '#C4C4C4' : '#737373',

  colors: {
    blue1: darkMode ? '#2F80ED' : '#D4E4FA',
    blue2: darkMode ? '#1966D2' : '#A9C8F5',
    blue3: darkMode ? '#165BBB' : '#7DACF0',
    blue4: darkMode ? '#2D47A6' : '#5190EB',
    blue5: darkMode ? '#C4D9F8' : '#2172E5',
    blue6: darkMode ? '#C4D9F8' : '#1A5BB6',
    blue7: darkMode ? '#C4D9F8' : '#144489',
    blue8: darkMode ? '#C4D9F8' : '#0E2F5E',
    blue9: darkMode ? '#C4D9F8' : '#191B1F',

    // grey1: darkMode ? '#191B1F' : '#F7F8FA',
    // grey2: darkMode ? '#2C2F36' : '#EDEEF2',
    // grey3: darkMode ? '#40444F' : '#CED0D9',
    // grey4: darkMode ? '#565A69' : '#888D9B',
    // grey5: darkMode ? '#6C7284' : '#6C7284',
    grey6: darkMode ? '#888D9B' : '#565A69',
    grey7: darkMode ? '#CED0D9' : '#40444F',
    grey8: darkMode ? '#EDEEF2' : '#2C2F36',
    grey9: darkMode ? '#F7F8FA' : '#191B1F',

    grey1: darkMode ? '#212429' : '#FFFFFF',
    grey2: darkMode ? '#2C2F36' : '#F7F8FA',
    grey3: darkMode ? '#40444F' : '#EDEEF2',
    grey4: darkMode ? '#565A69' : '#CED0D9',
    grey5: darkMode ? '#6C7284' : '#888D9B',
    specialHeadingColor: !darkMode ? '#2a2a2a' : '#ffffff',
    boxBg: !darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(18,18,18,0.6)',
    white: '#FFFFFF',
    black: '#000000',

    green1: '#E6F3EC',
    green2: '#27AE60',

    pink1: darkMode ? '#2F80ED' : '#FF007A',
    pink2: '#FF8EC4',
    pink3: '#FFD7EA',

    yellow1: darkMode ? '#F3BE1E60' : '#F3BE1E60',
    yellow2: darkMode ? '#FFF4D260' : '#F7F2E360',

    red1: '#FF6871',

    link: darkMode ? '#2fdbed' : '#0027ff',
    invertedLink: darkMode ? '#2F80ED' : '#FF007A'
  },

  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    large: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    huge:
      ' 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)'
  },

  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `
})
// radial-gradient(76.02% 75.41% at 6.84% 0%,#004eff 0%,#040606 100%);
// radial-gradient(93.02% 71.41% at -2.16% 0%,#002bff 7%,#aed4ea 100%);
export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
    html {
    font-size: 16px;
    font-variant: none;
    background-color: ${({ theme }) => theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    overflow-y: none;
    width: 98vw;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: "monospace", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;

    line-height: 1.55;
    max-width: 1440px;
    width: 98vw;
    margin: 0px auto;
    font-weight: 400 !important;
    color: ${({ theme }) => theme.textColor};

    
    @media (min-width: 1441px) {
        overflow-x: visible;
    }
  }

  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  .title{
    letter-spacing: -0.05em;
    font-family: 'Inferi Light','Times New Roman',serif;
    font-size: 72px;
  }

  h1 {
    font-family: "GT Haptik Regular", 'Inferi Light','Times New Roman',serif;
    margin-top: 1.75rem ;
    font-size: 1.875rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "GT Haptik Regular";
  }

  h3 {
    font-weight: 400;
    font-family: "GT Haptik Regular";
  }



  #gatsby-focus-wrapper{
    min-height: 100vh;
    width: 100%;
    position: relative;
  }

  a{
    color: ${({ theme }) => theme.colors.fplink} !important;
    text-decoration: none;

  }
  button{
    color: ${({ theme }) => theme.textColor};
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  strong{
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey9};
  }

 .ds-dropdown-menu {
    width: 100px;
    max-height: 600px;
    overflow: scroll;

    @media screen and (max-width: 1080px) {
      min-width: 300px !important;
    }
  }
  .begin{
    padding-top: 26px;
    padding-bottom: 275px;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .banner-text h1 {
    font-size: 76px;
    font-weight: 500;

    line-height: 93px;
    text-align: center;
    margin-top: 114px;
    margin-bottom: 60px;
    padding: 0 5px;
    height: 361px;
}
.banner-text .banner-btn a{
  color: ${({ theme }) => theme.textColor};
}
.banner-text .banner-btn {
  text-align: center;
  display: block;
  margin-top: 85px;
  /* margin-bottom: 228px; */
  transition: right 0.25s ease 0s;
}
.banner-text .banner-btn li {
  display: inline-block;
  margin-right: 17px;
  transition:all .3s;
}
.banner-text .banner-btn li a:hover {
  cursor:pointer;
  transform:scale(1.05)
}
.btn-uni{
  color:white !important;
}

.banner-text .banner-btn li .btn-uni:hover, .banner-text .banner-btn li .btn-uni.active {
  background-image: -moz-linear-gradient( 167deg, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  background-image: -webkit-linear-gradient( 
167deg
, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  background-image: -ms-linear-gradient( 167deg, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  color: #fff;
  border: 0;
}
.banner-text .banner-btn li .btn-uni, body.day .banner-text .banner-btn li .btn-uni {
  padding: 12px 25px 13px;
}
.purple-link{
  color:#ca29f5 !important;
}
.banner-text .banner-btn li a {
  font-size: 20px;
  font-weight: 700;
  border: 2px solid;
  border-color:${({ theme }) => theme.textColor};
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 10px 25px;
  background: transparent;
  transform: scale(0.98);
  transition: transform 0.25s ease 0s;
  display: inline-block;
}
.title-body h2 {
  font-size: 48px;
  font-weight: 600;
  // color: #FFFFFF;
  line-height: 55px;
  text-align: center;
  margin-bottom: 60px;

}
.title-body p {
  font-size: 24px;
  font-weight: 500;
  // color: #ffffff;
  line-height: 36px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 0 67px;
}
.carousel{
  margin-top:80px;
  position:relative;
}
.carousel-indicators {
  bottom: -66px;
  position: absolute;
  left: 50%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;

}

ol, ul {
  margin-top: 0;
  margin-bottom: 10px;
}
.carousel-indicators li {
  display: inline-block;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  border: none;
  background: #979797;
  width: 15px;
  height: 15px;
  margin: 0 2px;
}
.carousel-indicators .active {
  background-image: -moz-linear-gradient( 167deg, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  background-image: -webkit-linear-gradient( 
167deg
, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  background-image: -ms-linear-gradient( 167deg, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  width: 15px;
  height: 15px;

}
.growing, .suite, .power, .global, .subscribe, footer {
  background: url("../images/growing-bg.png") no-repeat;

  background-size: cover;
  padding-bottom: 150px;
  margin-top:-116px;
}
.suite {
  padding-top: 55px;
}
.box-sec {
  margin-top: 80px;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.box-sec ul {
  list-style: none;
  flex-wrap:wrap;
  text-align:center;
}
.box-sec ul li {
  display: inline-block;
  margin-right: 12px;
  min-height:272px !important;
  min-width:200px;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.power .column{
  max-width:370px;
}
.power-1 {
  box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 6%);
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 45px 28px 50px;
  text-align: center;
  background: #fff;
  background-color: ${({ theme }) => theme.colors.boxBg};
  transition: transform 0.3s ease 0s;
  will-change: transform;
  height:100%;
}
.power-2 {
  box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 6%);
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px;
  text-align: center;
  background: #fff;
  background-color: ${({ theme }) => theme.colors.boxBg};

}
.power-1 h4 {
  margin-top: 0;
}

.foot-1 a{
  color:${({ theme }) => theme.colors.specialHeadingColor};
}
.power-1 h4, .foot-1 h4 {
  font-size: 23px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.specialHeadingColor};
  line-height: 35px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 15px;
}
.power a p {
  color: ${({ theme }) => theme.colors.specialHeadingColor};
    font-weight: 500;
}
footer h4{
  text-align:unset !important;
}
.col-small{
  float:left;
  padding: 0 20px;
  box-sizing:border-box;
}
.power .row{
  max-width:1200px;
  margin:40px 12vw;
}
.header-btn{
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);

}
.header-btn:hover {
  transform: translate3d(2px, 2px, 10px);
}
.flex-box-bg{
  display:flex;
  justify-content:space-around;
}
.column{

  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width:100%;
  padding:0 15px;
  margin:20px 0;
  height:initial;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.my-btn {
  padding: 4px 10px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-image: -moz-linear-gradient( 167deg, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  background-image: -webkit-linear-gradient( 
167deg
, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  background-image: -ms-linear-gradient( 167deg, rgb(116,89,255) 0%, rgb(204,40,245) 99%);
  // color: #fff;
  font-size: 34px;
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;
}
.left-active-img{
  animation-name: left;
  animation-duration: .5s;
}
.right-active-img{
  animation-name: right;
  animation-duration: .5s;
}
@keyframes left {
  from {left: 100vw;}
  to {left : 0;}
}
@keyframes right {
  from {right: 100vw;}
  to {right: 0;}
}
footer{
  padding-bottom: 0px !important ;
  margin-top:0px !important;
}
.fild-sub {
  font-family: unset !important;
  padding: 27px 281px 22px 14px;
  border-top-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
  border-radius: 0;
  // color: #2a2a2a;
  font-size: 16px;
}
.foot-1 ul{
  list-style: none;
}
.col-input{
  position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.subscr {
  text-align: center;
}
.flex-box{
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
}

.foot-1 ol,.foot-1 ul{
  margin:0;
}
.angle-right{
  margin-right:8px;
  box-sizing:border-box;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  // border-color:white;
}
.suite .box-sec ul li{
  cursor:pointer;
  transition:all .3s
}
.suite .box-sec ul li:hover {
  transform: translate3d(2px, 2px, 10px);
}

.power-1:hover {
  transform: scale(1.05);
}
.power-1{
  cursor:pointer;
  transition:all .3s

}
.power-2:hover {
  transform: translate3d(2px, 2px, 10px);}
.power-2{
  cursor:pointer;
  transition:all .3s

}
.angle-right{
  border-color:${({ theme }) => theme.textColor}
}
.begin{
  background: url("../images/banner-bg.png") no-repeat !important;
  background-size: cover !important;
}

#mc_embed_signup_scroll >li{
  min-width:0;
}
#mc_embed_signup {
  background: transparent;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}
#mc_embed_signup input {
  border: 1px solid #ccc !important;
}
#mc_embed_signup input[type=submit] {
  border: none !important;
}

@media screen and (max-width: 1060px){

  .power-1{
    min-height:353px;
  }

  .banner-text h1 {
      font-size: 45px;
      line-height: 58px;
      height:330px;
  }

  .title-body h2 {
    font-size: 33px;
    line-height: 42px;
}
.title-body p {
  font-size: 20px;
  line-height: 33px;
}
}

  @media screen and (max-width: 991px){
    .power-1{
      margin: 0 70px 0px;
      min-height:0;
    }
    .fild-sub {
      padding: 27px 156px 22px 14px;
    }
    .power-2{
      margin-bottom: 20px;
    }

    .begin{
      padding-bottom:100px
    }

    .growing, .suite, .power, .global, .subscribe {
      background: url("../images/growing-bg.png") no-repeat;
      background-size: cover;
    
      padding-bottom: 100px;
      margin-top:-34px;
  }
    .banner-text h1 {
        font-size: 38px;
        line-height: 46px;
    }
  .global .col-small {
      width: 50%;
  }

  .flex-col{
    width:100%; 
  }
    .banner-text .banner-btn li {
      display: inline-block;
      margin-bottom: 15px;
      margin-right: 0;
  }
  .banner-text .banner-btn li a, .my-btn {
    display: inline-block;
}
.title-body h2 {
  font-size: 30px;
  line-height: 36px;
}
.title-body p {
    font-size: 20px;
    padding: 0 10px;
    line-height: 27px;
}
.suite .box-sec ul {
  display: block;
  list-style: none;
  text-align: center;

}

.box-sec ul li {
  display: inline-block;
  margin-right: 0;
  margin-bottom: 20px;
  text-align: center;
  padding: 0 6px;
}
  }


  @media screen and (max-width: 767px){

    .box-sec ul li {
        padding: 0 8px;
    }

  }

@media (min-width:768px){
  .container {
    width: 750px;
}
}
@media (min-width:992px){
.col-small{
  width:25%;
}
.container {
  width: 900px;
}
}
@media (min-width: 1200px){

  .container {
      width: 1200px;
  }
}












`
