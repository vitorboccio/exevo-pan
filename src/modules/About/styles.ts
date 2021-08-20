import styled, { css } from 'styled-components'
import { InnerContainer, MaterialCard, Smooth } from 'styles'
import MailSvg from 'assets/svgs/mail.svg'
import GithubSvg from 'assets/svgs/github.svg'
import LinkedinSvg from 'assets/svgs/linkedin.svg'

export const Wrapper = styled.main`
  ${InnerContainer}
`

export const BodyLayout = styled.div`
  margin: 0 auto;
  max-width: clamp(45ch, 50%, 75ch);
`

export const SurfaceWrapper = styled.div`
  ${MaterialCard}
  ${InnerContainer}
  padding-top: 32px;
  padding-bottom: 32px;
`

export const Section = styled.section`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 64px;

    &::after {
      content: '';
      position: absolute;
      top: calc(100% + 32px);
      left: 0;
      width: 30%;
      min-width: 200px;
      max-width: 400px;
      height: 1px;
      background-color: var(--separator);
      opacity: 0.7;
    }
  }
`

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;

  strong {
    font-weight: 400;
  }

  a {
    position: relative;
    color: var(--primary);
    filter: brightness(130%);

    ${Smooth}

    &::selection {
      background: var(--primary);
      color: var(--onPrimary);
    }

    &:hover {
      opacity: 0.75;
    }

    &::after {
      content: '';
      position: absolute;
      top: calc(100% - 1px);
      left: 0;
      width: 16px;
      height: 1px;
      background-color: var(--primary);
      opacity: 0.75;
    }
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  [role='img'] {
    font-size: 19px;
  }
`

export const Anchor = styled.a`
  padding: 4px 8px;
  border-radius: 6px;
  background-color: var(--separator);
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 0.5px;

  && {
    box-shadow: none;
    color: var(--onSurface);
  }

  &:active {
    box-shadow: inset 2px 2px rgba(0, 0, 0, 0.14);
  }

  &::before {
    content: '#';
    margin-right: 2px;
    font-family: 'Courier New', Courier, monospace;
  }

  &::after {
    display: none;
  }
`

export const Link = styled.a``

export const H2 = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 0.5px;
`

export const Ul = styled.ul`
  width: fit-content;
  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const Li = styled.li`
  ${MaterialCard}
  padding: 12px 24px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  font-size: 12px;
  box-shadow: none;

  ${Link} {
    color: var(--onPrimary);
    line-height: 1.6;
    transition: transform 0.2s ease-out;

    &:hover {
      transform: translateX(2px);
    }
  }
`

const IconStyle = css`
  margin-right: 16px;
  width: 18px;
  height: 18px;
  fill: var(--onPrimary);
`
export const MailIcon = styled(MailSvg)`
  ${IconStyle}
`
export const GithubIcon = styled(GithubSvg)`
  ${IconStyle}
`
export const LinkedinIcon = styled(LinkedinSvg)`
  ${IconStyle}
`
