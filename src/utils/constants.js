export const releavant = {
    logo: require("../assets/logo.png"),
    bgvideo:require("../assets/Home/videobanner.mp4"),
    ourmission_img_1:require("../assets/Home/ourmission_img_1.png"),
    ourmission_img_2:require("../assets/Home/ourmission_img_2.png"),
    us_flag_img:require("../assets/us-flag.jpg"),
    indian_flag_img:require("../assets/indian-flag.png"),
    testimonials_bg: require('../assets/Testimonials/testimonials_bg.png'),
    Quotation_mark: require('../assets/Home/Quotation_mark.png')
    
}

// utils/constants.js

export const NAV_ITEMS = [
    {
      title: 'Home',
      link: '/',
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
        title: 'Pricing',
        link: '/pricing',
        type: 'link',
    },
    {
      title: 'ContactUs',
      link: '#',
      type: 'link',
  },
    {
      title: 'Demo',
      link: '#',
      type: 'link',
      isDemo: true, // Custom flag to open Calendly widget
    },
    
  ];
  

  export const testimonialsData = {

    car_testimonials: [
    {
        name: "Chandana Rathod",
        role: "Digital Marketing",
        testimonial: "I highly recommend Legacy Insurance Brokers for their exceptional and reliable service.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        altText: "chandana_rathod_img"
    },
    {
        name: "Anand Tiwari",
        role: "AI/ML",
        testimonial: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        altText: "anand_tiwari_img"
    },
    {
        name: "Durga Prasad",
        role: "Graphic Designer",
        testimonial: "Legacy Insurance Brokers made the process of getting insurance effortless and stress-free.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        altText: "durgaprasad_img"
    },
    {
        name: "Indraja",
        role: "Marketing Specialist",
        testimonial: "Their team is professional, attentive, and always ready to help with any questions.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        altText: "indraja_img"
    },
    {
        name: "Jhon Doe",
        role: "Product Manager",
        testimonial: "The policies offered are comprehensive and tailored to my specific needs.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        altText: "jhondoe_img"
    },
    {
        name: "Michel Davis",
        role: "Data Analyst",
        testimonial: "I am impressed with the customer service and the range of options provided by Legacy Insurance Brokers.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        altText: "michel_davis_img"
    },
    {
        name: "Prasanna kumari",
        role: "Sales Executive",
        testimonial: "The ease of communication and quick response times have made my experience with Legacy Insurance Brokers exceptional.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        altText: "prasanna_kumari_img"
    },
    ],
    bike_testimonials: [
      {
          Name: "John Doe",
          Role: "IT Professional",
          testimonial: "I highly recommend Legacy Insurance Brokers for their exceptional and reliable service. As someone who commutes daily by bike, their coverage provides the security I need on the busy roads of the city.",
          image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp",
      },
      {
          Name: "Liam White",
          Role: "Doctor",
          testimonial: "Legacy Insurance Brokers offer a service that is both reliable and tailored to bikers. As a doctor with a hectic schedule, I trust them to keep my bike protected so I can focus on my patients.",
          image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp", 
      
      },
      {
          Name: "Mia Anderson",
          Role: "Entrepreneur",
          testimonial: "I highly recommend Legacy Insurance Brokers for their outstanding service. Being an entrepreneur, my bike is essential for quick and efficient travel.",
          image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      },
      {
          Name: "Ryan Thompson",
          Role: "Architect",
          testimonial: "Legacy Insurance Brokers truly understand the needs of bikers. As an architect, I’m constantly on the move, and their reliable service gives me peace of mind on every ride.",
          image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      },
      {
          Name: "David Lee",
          Role: "Software Developer",
          testimonial: "I highly recommend Legacy Insurance Brokers. With a passion for weekend rides, I appreciate their comprehensive bike coverage",
          image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp", 
      },
      {
          Name: "Alex Johnson",
          Role: "Financial Analyst",
          testimonial: "Legacy Insurance Brokers offer top-notch service. Their clear and comprehensive coverage options for my bike ensure that I’m protected at all times.",
          image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp",
      },
      {
          Name: "Emily Davis",
          Role: "Chartered Accountant",
          testimonial: "I trust Legacy Insurance Brokers to keep my bike protected. Their service is efficient and tailored, providing the security I need to focus on my work and enjoy my rides.",
          image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp",
      },
    ],
  };