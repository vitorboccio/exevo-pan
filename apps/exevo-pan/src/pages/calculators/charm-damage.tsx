import Head from 'next/head'
import { Main, Hero } from 'templates'
import { Header, CharmDamage, pages } from 'modules/Calculators'
import { GetStaticProps } from 'next'
import { useTranslations } from 'contexts/useTranslation'
import { buildUrl, buildPageTitle, loadRawSrc } from 'utils'
import { routes, jsonld } from 'Constants'
import { common, calculators } from 'locales'

const pageUrl = buildUrl(routes.CHARM_DAMAGE)
const { hero } = pages.CharmDamage

export default function Calculator() {
  const { translations } = useTranslations()

  const pageTitle = buildPageTitle(
    translations.calculators.Meta.CharmDamage.title,
  )

  const previewSrc = loadRawSrc(hero)

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta property="twitter:title" content={pageTitle} />

        <meta
          name="description"
          content={translations.calculators.Meta.CharmDamage.description}
        />
        <meta
          property="twitter:description"
          content={translations.calculators.Meta.CharmDamage.description}
        />
        <meta
          property="og:description"
          content={translations.calculators.Meta.CharmDamage.description}
        />
        <meta property="og:type" content="website" />

        <meta key="preview-1" property="og:image" content={previewSrc} />
        <meta key="preview-2" property="twitter:image" content={previewSrc} />

        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="twitter:url" content={pageUrl} />

        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link
          rel="alternate"
          hrefLang="pt"
          href={buildUrl(routes.CHARM_DAMAGE, 'pt')}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={buildUrl(routes.CHARM_DAMAGE, 'es')}
        />
        <link
          rel="alternate"
          hrefLang="pl"
          href={buildUrl(routes.CHARM_DAMAGE, 'pl')}
        />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: jsonld.standard,
          }}
        />
      </Head>

      <Main>
        <Header />
        <Hero
          title={translations.calculators.Meta.CharmDamage.title}
          src={hero}
          offset
        />
        <CharmDamage />
      </Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    translations: {
      common: common[locale as RegisteredLocale],
      calculators: calculators[locale as RegisteredLocale],
    },
  },
})
