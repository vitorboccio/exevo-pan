import styled, { css } from 'styled-components'
import Image from 'next/image'
import ExevoPanLogoImage from 'assets/logo.png'
import MoonIconSvg from 'assets/svgs/moon.svg'
import MarketIconSvg from 'assets/svgs/market.svg'
import HistoryIconSvg from 'assets/svgs/history.svg'
import AdvertiseIconSvg from 'assets/svgs/advertise.svg'
import StatisticsIconSvg from 'assets/svgs/statistics.svg'
import WarIconSvg from 'assets/svgs/war.svg'
import AboutIconSvg from 'assets/svgs/about.svg'
import BlogIconSvg from 'assets/svgs/blog.svg'
import { Clickable, Shadow, Smooth } from 'styles'

export const LogoWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    margin-right: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;

    transition: 0.2s filter ease-out;
    &:hover {
      filter: brightness(110%);
    }
  }
`

export const H1 = styled.h1`
  display: none;
`

export const ExevoPanLogo = styled(Image).attrs({
  src: ExevoPanLogoImage,
})``

export const Ul = styled.ul`
  position: fixed;
  top: 60px;
  left: 0;

  padding: 20px;
  display: grid;
  grid-gap: 16px;
  grid-auto-columns: min-content;
  border-radius: 0 0 6px 0;

  background-color: var(--darkerPrimary);
  ${Shadow}
  ${Smooth}

  &[aria-expanded="false"] {
    transform: translateX(-100%);
    opacity: 0;
  }

  @media (min-width: 768px) {
    && {
      position: unset;
      transform: unset;
      padding: unset;
      background-color: unset;
      border-radius: unset;
      box-shadow: unset;
      opacity: unset;

      display: flex;
      align-items: center;
    }
  }
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 74;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  ${Smooth}

  &[aria-hidden='true'] {
    opacity: 0;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    opacity: 0;
    pointer-events: none;
  }
`

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 8px;
  }

  a {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border-radius: 9px;

    h2 {
      font-size: 14px;
      letter-spacing: 0.5px;
      font-weight: 400;
      color: var(--onPrimary);
      white-space: nowrap;
    }

    ${Clickable}
    &[aria-current='page'] {
      box-shadow: inset 3px 3px rgb(0 0 0 / 14%);
    }
  }
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const MoonIcon = styled(MoonIconSvg)``

const NavIconStyle = css`
  margin-right: 6px;
  width: 18px;
  height: 18px;
  fill: var(--onPrimary);
`

export const MarketIcon = styled(MarketIconSvg)`
  ${NavIconStyle}
`
export const HistoryIcon = styled(HistoryIconSvg)`
  ${NavIconStyle}
`

export const AdvertiseIcon = styled(AdvertiseIconSvg)`
  ${NavIconStyle}
`

export const StatisticsIcon = styled(StatisticsIconSvg)`
  ${NavIconStyle}
`

export const WarIcon = styled(WarIconSvg)`
  ${NavIconStyle}
`

export const AboutIcon = styled(AboutIconSvg)`
  ${NavIconStyle}
`

export const BlogIcon = styled(BlogIconSvg)`
  ${NavIconStyle}
`
