import Head from 'next/head';

export default function SEOHead({ 
  title = "Muvik — We Build Websites, Apps & Digital Solutions", 
  description = "Muvik builds modern websites, mobile apps, and digital marketing solutions. Full-stack dev, UI/UX, DevOps & social media — contact us to start your project.",
  url = "https://muvik.com",
  image = "/muviklogo.png"
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Muvik Solutions",
    "description": description,
    "url": url,
    "logo": `${url}/muvik-logo.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8252911976",
      "contactType": "Customer Service",
      "email": "vinaychaudhary9899@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/muvik.com/posts/?feedView=all"
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Muvik Solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <link rel="icon" href="/muviklogo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/muviklogo.png" />
    </Head>
  );
}