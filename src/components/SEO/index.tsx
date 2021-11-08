import Head from 'next/head'
import React from 'react'

interface SEOProps {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
}

const SEO = ({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}: SEOProps): JSX.Element => {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? '| My Next.JS Boilerplate' : ''
  }`
  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
    : undefined

  return (
    <Head>
      <title>{pageTitle}</title>
      <html lang="en" />
      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}

      {!shouldIndexPage && <meta name="robots" content="noindex, nofollow" />}
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#E93A50" />
      <meta name="msapplication-TileColor" content="#E93A50" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  )
}

export default SEO
