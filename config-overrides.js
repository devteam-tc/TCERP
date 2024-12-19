// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = function override(config, env) {
//   // Define entry points for each page
//   config.entry = {
//     about: './src/pages/Aboutus/Aboutus.js',
//     contact: './src/pages/Contact/ContactUs.js',
//   };

//   // Change output filename to support multiple pages
//   config.output.filename = '[name].js';

//   // Use HtmlWebpackPlugin for each page
//   config.plugins = [
//     new HtmlWebpackPlugin({
//       filename: 'about.html',  // Output HTML for About page
//       chunks: ['about'],       // Only include about.js for this page
//       template: './public/index.html',  // Use the template
//     }),
//     new HtmlWebpackPlugin({
//       filename: 'contact.html',  // Output HTML for Contact page
//       chunks: ['contact'],       // Only include contact.js for this page
//       template: './public/index.html',  // Use the template
//     }),
//   ];

//   return config;
// };


const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  // Define entry points for each page
  config.entry = {
    about: './src/pages/Aboutus/Aboutus.js',
    contact: './src/pages/Contact/ContactUs.js',
  };

  // Change output filename to support multiple pages
  config.output.filename = '[name].js';

  // Use HtmlWebpackPlugin for each page
  config.plugins = [
    new HtmlWebpackPlugin({
      filename: 'about.html',  // Output HTML for About page
      chunks: ['about'],       // Only include about.js for this page
      template: './public/about.html',  // Use the template
      title: 'About Us - My Website',   // Custom title
      description: 'Learn more about us on our About page.', // Custom description
      keywords: 'About, Company, Info', // Custom keywords
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',  // Output HTML for Contact page
      chunks: ['contact'],       // Only include contact.js for this page
      template: './public/contact.html',  // Use the template
      title: 'Contact Us - My Website', // Custom title
      description: 'Get in touch with us on our Contact page.', // Custom description
      keywords: 'Contact, Email, Phone', // Custom keywords
    }),
  ];

  return config;
};
