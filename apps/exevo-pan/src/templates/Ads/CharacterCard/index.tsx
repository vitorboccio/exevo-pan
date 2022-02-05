import { useEffect } from 'react'
import { google } from 'Constants'
import * as S from './styles'

const CharacterCard = (
  props: React.HTMLAttributes<HTMLDivElement>,
): JSX.Element => {
  useEffect(() => {
    try {
      ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
      ;(window as any).adsbygoogle.push({} as any)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <S.Wrapper {...props} aria-hidden>
      <ins
        className="adsbygoogle"
        data-ad-client={google.ADSENSE_ID}
        data-ad-slot="6250183199"
        data-ad-format="auto"
      />
    </S.Wrapper>
  )
}

export default CharacterCard
