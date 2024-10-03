const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const { createWriteStream } = require('fs');

// Set the hostname
const hostname = 'https://tcerp-website.web.app/'; // Replace with your domain

// Create a stream to write to the sitemap.xml file
const sitemapStream = new SitemapStream({ hostname });

// Create a writable stream
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe the sitemap stream to the write stream
sitemapStream.pipe(writeStream);

// Add URLs to the sitemap
sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemapStream.write({ url: '/about-us', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/tech-cloud-erp', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/customer-relationship-management', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/point-of-sale', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/trading-software', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/Ecommerce-software', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/hr-managament-software', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/financial-management-systems', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/integrated-erp-software', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/erp-for-restaraunt', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/products/erp-for-accounting-software', changefreq: 'monthly', priority: 0.7 });

sitemapStream.write({ url: '/agriculture-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/apparel-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/automative-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/beverage-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/chemical-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/educational-institutes', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/electrical-solar-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/electronics-industry', changefreq: 'monthly', priority: 0.7 });

sitemapStream.write({ url: '/FMCG-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/food-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/furniture-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/garment-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/hydraulic-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/jewellery-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/leather-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/logistics-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/medicalequipmentmanufacturing-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/wood-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/wholesalers-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/metal-fabrication-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/microfinance-industry', changefreq: 'monthly', priority: 0.7 });

sitemapStream.write({ url: '/oilandgas-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/packaging-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/paper-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/plastic-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/pharma-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/publishing-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/printing-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/preengineering-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/rubber-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/restaurant-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/retail-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/steel-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/telecom-industry', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/textiles-industry', changefreq: 'monthly', priority: 0.7 });

sitemapStream.write({ url: '/services/web-development', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/services/mobile-application-development', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/services/digital-marketing', changefreq: 'monthly', priority: 0.7});

sitemapStream.write({ url: '/pricing', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/ContactUs', changefreq: 'monthly', priority: 0.7 });
sitemapStream.write({ url: '/services/digital-marketing', changefreq: 'monthly', priority: 0.7})







// Add more routes as needed

// End the stream
sitemapStream.end();

// Optionally handle stream completion
streamToPromise(sitemapStream).then((sm) => {
  console.log('Sitemap generated successfully:', sm.toString());
}).catch((error) => {
  console.error('Error generating sitemap:', error);
});
