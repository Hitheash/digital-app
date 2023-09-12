import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      {/* Your content */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Your Company Name",
            "description": "Brief description of your company",
            "url": "https://www.yourwebsite.com",
            "logo": "https://www.yourwebsite.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-123-456-7890",
              "contactType": "customer service"
            }
          }
        `}
      </script>
    </div>
  );
};

export default AboutUsPage;
