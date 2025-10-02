/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ 
  description, 
  title, 
  children, 
  image, 
  article = false, 
  keywords,
  pathname 
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
            image
            phone
            email
            address
            social {
              linkedin
            }
          }
        }
      }
    `
  )

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    image: image || site.siteMetadata.image,
    url: `${site.siteMetadata.siteUrl}${pathname || ``}`,
    keywords: keywords || site.siteMetadata.keywords,
  }

  return (
    <>
      <title>{title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Business Information */}
      <meta name="geo.region" content="FR-44" />
      <meta name="geo.placename" content="Treillières, France" />
      <meta name="geo.position" content="47.3297;-1.6225" />
      <meta name="ICBM" content="47.3297, -1.6225" />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": site.siteMetadata.siteUrl,
          "name": "Inoviso",
          "description": site.siteMetadata.description,
          "url": site.siteMetadata.siteUrl,
          "telephone": site.siteMetadata.phone,
          "email": site.siteMetadata.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5 rue des Frères Lumière",
            "addressLocality": "Treillières",
            "postalCode": "44119",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 47.3297,
            "longitude": -1.6225
          },
          "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 09:00-12:00"
          ],
          "sameAs": [
            site.siteMetadata.social.linkedin
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 47.3297,
              "longitude": -1.6225
            },
            "geoRadius": "50000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services d'isolation thermique",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Isolation thermique par l'extérieur",
                  "description": "Service d'isolation thermique par l'extérieur pour particuliers et professionnels"
                }
              }
            ]
          }
        })}
      </script>
      
      {children}
    </>
  )
}

export default Seo
