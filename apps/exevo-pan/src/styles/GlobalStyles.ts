import { createGlobalStyle } from 'styled-components'
import Reset from './Reset'
import CustomScrollbar from './CustomScrollbar'

const GlobalStyles = createGlobalStyle`
  ${Reset}

  :root {
    --background: #eeeeee;
    --surface: #ffffff;
    --onSurface: #000000;
    --separator: #b4b4b4;
    --primary: #3f51b5;
    --onPrimary: #ffffff;
    --primaryVariant: #c5cae9;
    --darkerPrimary: #323d8e;
    --green: #377712;
    --red: #c51313;
    --alert: #f9eec1;
    --battleGreen: #43b600;
    --battleYellow: #ffdd00;
    --primaryVariantHighlight: #e7e8ee;
    --kwai: #ff7705;
    --kwaiSurface: #fff7f0;
    --kwaiVariant: #ffc696;

    /* @ ToDo: remove this 'tw' prefix */
    --tw-background: 238 238 238;
    --tw-surface: 255 255 255;
    --tw-onSurface: 0 0 0;
    --tw-separator: 180 180 180;
    --tw-primary: 63 81 181;
    --tw-onPrimary: 255 255 255;
    --tw-primaryVariant: 197 202 233;
    --tw-darkerPrimary: 50 61 142;
    --tw-green: 55 119 18;
    --tw-red: 197 19 19;
    --tw-alert: 249 238 193;
    --tw-battleGreen: 67 182 0;
    --tw-battleYellow: 255 221 0;
    --tw-primaryVariantHighlight: 231 232 238;
    --tw-kwai: 255 119 5;
    --tw-kwaiSurface: 255 247 240;
    --tw-kwaiVariant: 255 198 150;
  }

  [data-theme='dark'] {
    --background: #202225;
    --surface: #36393f;
    --onSurface: #ffffff;
    --separator: #72767d;
    --primary: #9857e7;
    --onPrimary: #ffffff;
    --primaryVariant: #5e4480;
    --darkerPrimary: #581f9b;
    --green: #5a9935;
    --red: #ff5b5b;
    --alert: #f9eec1;
    --battleGreen: #43b600;
    --battleYellow: #ffdd00;
    --primaryVariantHighlight: #714ca1;
    --kwai: #ff7705;
    --kwaiSurface: #453d3c;
    --kwaiVariant: #995f2e;

    /* @ ToDo: remove this 'tw' prefix */
    --tw-background: 32 34 37;
    --tw-surface: 54 57 63;
    --tw-onSurface: 255 255 255;
    --tw-separator: 114 118 125;
    --tw-primary: 152 87 231;
    --tw-onPrimary: 255 255 255;
    --tw-primaryVariant: 94 68 128;
    --tw-darkerPrimary: 88 31 155;
    --tw-green: 90 153 53;
    --tw-red: 255 91 91;
    --tw-alert: 249 238 193;
    --tw-battleGreen: 67 182 0;
    --tw-battleYellow: 255 221 0;
    --tw-primaryVariantHighlight: 113 76 161;
    --tw-kwai: 255 119 5;
    --tw-kwaiSurface: 69 61 60;
    --tw-kwaiVariant: 153 95 46;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: var(--background);
    color: var(--onSurface);
    transition: background-color 0.2s ease-out;
    ${CustomScrollbar}

    *::selection {
      color: var(--onSurface);
      background: var(--primaryVariant);
    }
  }

  #__next > div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    main {
      flex-grow: 1;
    }
  }

  svg {
    transition: fill 0.2s ease-out;
  }
`

export default GlobalStyles
