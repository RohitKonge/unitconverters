import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  canonicalUrl?: string;
}

const SEO = ({ 
  title = 'Unit Converter - Free Online Unit Conversion Calculator',
  description = 'Free online unit converter for quick and accurate conversions between different units of measurement. Convert length, weight, temperature, area, and volume instantly.',
  type = 'converter',
  canonicalUrl = 'https://unitconverters.live'
}: SEOProps) => {
  const fullTitle = `${title} | UnitConverters.live`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: title,
          description: description,
          url: canonicalUrl,
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Any',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          keywords: `${type} converter, ${type} conversion, unit converter, measurement converter, metric to imperial, imperial to metric`,
        })}
      </script>
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;