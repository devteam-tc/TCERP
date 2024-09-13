export const releavant = {
    logo: require("../assets/logo.png"),
    bgvideo:require("../assets/Home/videobanner.mp4"),
    us_flag_img:require("../assets/us-flag.jpg"),
    indian_flag_img:require("../assets/us-flag.jpg"),
    ourMission: {
      images: {
        mainImage: require("../assets/Home/ourmission_img_1.png"),  // Replace with the actual path or import
        experienceIcon: require("../assets/Home/ourmission_img_2.png"),
      },
      content: {
        companyName: 'Tech Cloud ERP',
        description: `Tech Cloud ERP is a web-based solution for small and mid-sized businesses, acting as a
          central hub for tracking and analyzing departmental activities. It offers real-time data and
          integrated processes to accelerate decision-making and support growth, claiming to be
          India's leading ERP software developer with a focus on reducing operational costs, especially for
          manufacturing companies.`,
        missionTitle: 'Our Mission',
        missionText: `Our mission is to help our clients respond faster and more efficiently to market
          dynamics. We strive to make them more agile in a competitive marketplace through high-tech
          strategies and action plans.`,
        experience: {
          years: '25+',
          text: 'Years of Experience'
        }
      }
    }
}
//Card Section
export const CardContent = [
  {
    title: 'Solutions For All',
    description: 'Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7.',
    features: ['Integrated CRM and ERP System', 'E-Commerce Platform', 'Workflow Automation']
  },
  {
    title: 'Flexibility',
    description: 'Tech Cloud ERP is dedicated in creating easy to use, adaptable cloud ERP software applications. Whether you want customized ERP software processes, use the public or private cloud or pay only for what you need.',
    features: ['Modular Architecture', 'API-Based Integration', 'Continuous Improvement']
  },
  {
    title: 'Security',
    description: 'Tech Cloud ERP platform is built on the most advanced infrastructures in the world. We have teams of experts dedicated to protecting your data, warding off hackers and staying ahead of threats to keep your business and its data safe.',
    features: ['Risk Assessment', 'Data breach', 'Encryption']
  }
];
//Navbar Section
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
        link: '/',
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
  //record section
  export const recordcount = [
    { number: '25+', text: 'Experience' },
    { number: '2K+', text: 'Happy Clients' },
    { number: '10K+', text: 'Users' },
    { number: '38K+', text: 'Professionals' },
  ];
  export const pricingPlans = [
    {
      price: "2000*",
      title: "Basic",
      description: "Per member, per Month.",
      coverages: [
        "1-5 Modules",
        "1-5 users",
      ],
      note: "For all individuals and starters who want to start with domaining",
      creditCardRequired: "No credit card required",
      background: '#fff',
      color: '#000',
    },
    {
      price: "1500*",
      title: "Popular",
      description: "Per member, per Month.",
      coverages: [
        "1-15 Modules",
        "1-25 users",
      ],
      note: "For professional domain names investors with a big portfolio",
      creditCardRequired: "No credit card required",
      background: '#05A7CC',
      color: '#fff',
    },
    {
      price: "0*",
      title: " Ultimate",
      description: "Per member, per Month.",
      coverages: [
        "Unlimited modules",
        "Unlimited Customization",
      ],
      note: "For all individuals and starters who want to start with domaining",
      creditCardRequired: "No credit card required",
      background: '#fff',
      color: '#000',
    }
  ];
  // constants.js

export const ctaData = {
  heading: "Call To Action",
  description:
    "Join us today and make a difference! Take action now to create significant changes in your business. Together, we can build a technology revolution. Become part of our movement today.",
  buttonText: "Call To Action",
  buttonLink: "https://api.whatsapp.com/send?phone=8919439603&text=Hi..",
  calltoaction_bg_img:require("../assets/Home/cta-bg-image-one.png"),
};
export const partnerData = [
  { link: '/financial-management-systems', imgSrc: require("../assets/partner/finance.png"), alt: 'Finance' },
  { link: '/hr-management-software', imgSrc: require("../assets/partner/HRM.png"), alt: 'HRM' },
  { link: '/ecommerce-software', imgSrc: require("../assets/partner/ecomm.png"), alt: 'Ecommerce' },
  { link: '/trading-software', imgSrc: require("../assets/partner/trading.png"), alt: 'Trading' },
  { link: '/point-of-sale', imgSrc: require("../assets/partner/POS.png"), alt: 'POS' },
  { link: '/customer-relationship-management', imgSrc: require("../assets/partner/CRMD.png"), alt: 'CRM' },
];
export const cardsData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x180',
    title: 'CRM',
    description:
      'CRM stands for Customer Relationship Management. It\'s a strategy businesses use to manage interactions with customers.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x180',
    title: 'Export and Import',
    description:
      'Streamline global trade with our Export and Import module. Manage logistics, documentation, and more.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x180',
    title: 'Sales and Marketing',
    description:
      'Sales & Marketing Module handles all the sales activities of domestic and international operations.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300x180',
    title: 'Job Work',
    description:
      'Easily outsource specialized tasks with our Job Work module, optimizing production and reducing workload.',
  },
];