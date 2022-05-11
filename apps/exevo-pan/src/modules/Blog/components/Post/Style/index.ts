import styled from 'styled-components'
import { MaterialCard, InnerPadding, Smooth } from 'styles'

const ContentWrapper = styled.main`
  ${MaterialCard}
  ${InnerPadding}

  padding-top: 32px;
  padding-bottom: 32px;

  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  color: var(--onSurface);

  ${Smooth}

  * {
    ${Smooth}
  }
`
export default ContentWrapper

export * from './Lists'
export { default as h2 } from './HeadingSection'
export { default as table } from './Table'
export * from './Blockquote'
export * from './Code'
export * from './Headings'
export * from './Hr'
export * from './Link'
export * from './Small'
