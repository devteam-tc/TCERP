export const releavant = {
    logo: require("../assets/logo.png"),
    bgvideo:require("../assets/Home/videobanner.mp4"),
    ourmission_img_1:require("../assets/Home/ourmission_img_1.png"),
    ourmission_img_2:require("../assets/Home/ourmission_img_2.png"),
    us_flag_img:require("../assets/us-flag.jpg"),
    indian_flag_img:require("../assets/us-flag.jpg")
}

// utils/constants.js

export const NAV_ITEMS = [
    {
      title: 'Home',
      link: 'index.html',
      type: 'link',
    },
    {
      title: 'About',
      type: 'dropdown',
      id: 'aboutDropdown',
      items: [
        { title: 'What & Why?', link: 'whatwhy.html' },
        { title: 'What sets us Different?', link: 'what-sets-us-different.html' },
        { title: 'Unique Tech Cloud ERP', link: 'unique-tech-cloud-erp.html' },
        { title: "MD's Profile & Message", link: 'mds-profile-message.html' },
      ],
    },
    {
      title: 'Industries',
      type: 'dropdown',
      id: 'industriesDropdown',
      items: [
        {
          title: 'Agriculture to Electronic Industries',
          type: 'dropdown',
          direction: 'left',
          items: [
            { title: 'Agriculture Industry', link: 'erp-for-agriculture.html' },
            { title: 'Apparel Industry', link: 'erp-for-electronics.html' },
            { title: 'Automative Industry ', link: '' },
            { title: 'Bevarage Industry', link: '' },
            { title: 'Chemical Industry', link: '' },
            { title: 'Educational Institutes', link: '' },
            { title: 'Electric Industry', link: '' },
            { title: 'Electronics Industry', link: '' },
          ],
        },
        {
          title: 'FMCG to Metal Fabrication Industry',
          type: 'dropdown',
          direction: 'right',
          items: [
            { title: 'FMCG Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Food Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Furniture Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Hydrolic Cylinders Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Jewellery Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Leather Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Modical Equipment Manufacturing Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Wood Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Wholesalers Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Metal Fabrication Industry', link: 'erp-for-metal-fabrication.html' },
            { title: 'Micro Finance Industry', link: 'erp-for-metal-fabrication.html' },
            

        ],
        },
        {
          title: 'Oil & Gas Textile Industry',
          type: 'dropdown',
          direction: 'right',
          items: [
            { title: 'Oil & Gas Industry', link: 'erp-for-oil-and-gas.html' },
            { title: 'Packaging Industry', link: 'erp-for-textile.html' },
            { title: 'Paper Industry', link: 'erp-for-textile.html' },
            { title: 'Plastic Industry', link: 'erp-for-textile.html' },
            { title: 'Pharmaceutical Industry', link: 'erp-for-textile.html' },
            { title: 'Publishing Industry', link: 'erp-for-textile.html' },
            { title: 'Printing Industry', link: 'erp-for-textile.html' },
            { title: 'Pre Engineering Industry', link: 'erp-for-textile.html' },
            { title: 'Rubber Industry', link: 'erp-for-textile.html' },
            { title: 'Restaurant Industry', link: 'erp-for-textile.html' },
            { title: 'Retail Industry', link: 'erp-for-textile.html' },
            { title: 'Steel Industry', link: 'erp-for-textile.html' },
            { title: 'Telecom Industry', link: 'erp-for-textile.html' },
            { title: 'Textile Industry', link: 'erp-for-textile.html' },
          ],
        },
      ],
    },
    {
      title: 'Products',
      type: 'dropdown',
      id: 'productsDropdown',
      items: [
        { title: 'Tech Cloud ERP', link: 'cloud-erp-software.html' },
        { title: 'Tech Cloud CRM', link: 'customer-relationship-management.html' },
        { title: 'Tech Cloud POS', link: 'erp-for-textile.html' },
        { title: 'Tech Cloud Trading Software', link: 'erp-for-textile.html' },
        { title: 'Tech Cloud Ecommerce', link: 'erp-for-textile.html' },
        { title: 'Tech Cloud HRM', link: 'erp-for-textile.html' },
        { title: 'Tech Cloud Finance', link: 'erp-for-textile.html' },
        { title: 'Tech Cloud ERP Integrated-With-CRM-Ecommerce-POS', link: 'erp-for-textile.html' },
        { title: 'Tech Cloud Restaurant ERP', link: 'erp-for-textile.html' },
        { title: 'Accounting Software', link: 'erp-for-textile.html' },
        // Other product items...
      ],
    },
    {
        title: 'BI',
        link: '#',
        type: 'link',
    },
    {
        title: 'Services',
        type: 'dropdown',
        id: 'servicesDropdown',
        items: [
          { title: 'Web Development', link: 'erp-for-textile.html' },
          { title: 'Mobile Application Development', link: 'customer-relationship-management.html' },                                                                                   
          { title: 'Digital Marketing', link: 'cloud-erp-software.html' },
 
          // Other Services items...
        ],
      },
    {
      title: 'Demo',
      link: '#',
      type: 'link',
      isDemo: true, // Custom flag to open Calendly widget
    },
  ];
  