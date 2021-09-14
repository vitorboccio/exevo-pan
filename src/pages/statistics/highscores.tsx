import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { Main } from 'templates'
import { Header, HighscoresGrid } from 'modules/Statistics'
import { ManageDataClient } from 'services'
import { GetStaticProps } from 'next'
import { buildUrl } from 'utils'
import { routes } from 'Constants'

const pageUrl = buildUrl(routes.HIGHSCORES)

export default function Highscores({
  statisticsData,
}: {
  statisticsData: StatisticsData
}): JSX.Element {
  const { t } = useTranslation('statistics')

  return (
    <div>
      <Head>
        <title>{t('Meta.Highscores.title')}</title>
        <meta name="title" content={t('Meta.Highscores.title')} />
        <meta property="og:site_name" content={t('Meta.Highscores.title')} />
        <meta property="og:title" content={t('Meta.Highscores.title')} />
        <meta property="twitter:title" content={t('Meta.Highscores.title')} />

        <meta name="description" content={t('Meta.Highscores.description')} />
        <meta
          property="twitter:description"
          content={t('Meta.Highscores.description')}
        />
        <meta
          property="og:description"
          content={t('Meta.Highscores.description')}
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="twitter:url" content={pageUrl} />

        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link
          rel="alternate"
          hrefLang="pt"
          href={buildUrl(routes.HIGHSCORES, 'pt')}
        />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />
      </Head>

      <Main>
        <main>
          <Header />
          <HighscoresGrid statisticsData={statisticsData} />
        </main>
      </Main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const statisticsData = await ManageDataClient.fetchStatisticsData()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'statistics',
      ])),
      statisticsData,
    },
    revalidate: 3600,
  }
}
