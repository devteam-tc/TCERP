

import { FiEye } from "react-icons/fi";
import { PiCertificate } from "react-icons/pi";
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { HiBarsArrowDown } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSpeed } from "react-icons/md";
import { FaLeaf, FaBeer, FaIndustry, FaGraduationCap, FaBolt, FaPizzaSlice, FaCouch, FaTshirt ,  FaGem, FaTruck, FaTree, FaBook , FaRandom ,
   FaShieldAlt , FaUserTie , FaThumbsUp , FaUsers, FaBriefcase  } from 'react-icons/fa';
import { GoShieldLock } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbLayoutGridAdd } from 'react-icons/tb';

export const releavant = {
  logo: require("../assets/tcerplogo.png"),
  bgvideo:require("../assets/Home/videobanner.mp4"),
  us_flag_img:require("../assets/us-flag.jpg"),
  indian_flag_img:require("../assets/indian-flag.png"),
  testimonials_bg: require('../assets/Testimonials/testimonials_bg.png'),
  Quotation_mark: require('../assets/Home/Quotation_mark.webp'),
  ourMission: {
    images: {
      mainImage: require("../assets/Home/ourmission_img_1.webp"), 
      experienceIcon: require("../assets/experience_img.webp"),
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
      },
      
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
    
  },
}

// about us ourmissionvision

export const visionMissionData = {
  vision: {
    title: "Our Vision",
    text: "To obtain a better understanding of ERP software solutions and their revolutionary impact on enterprises, you must first understand what ERP is. ERP, or Enterprise Resource Planning, combines critical company functions such as sales, marketing, inventory, production, accounting, and human resources into a cohesive system. Cloud-based ERP software, such as ours in Hyderabad, India, improves efficiency by centralising and streamlining operations throughout the organisation."
  },
  mission: {
    title: "Our Mission",
    text: "Tech Cloud ERP, a web-based software from Hyderabad, India, excels in modern Business Process Management across diverse industries. Developed in the cloud, it integrates robust functionalities for high-end enterprise resource planning, ensuring a superior user experience through advanced technology and user-friendly design."
  },
  image: require("../assets/About_us/our_miss_viss_img.webp"), 
};
//record section
export const recordcount = [
  { number: '25+', text: 'Experience', icon: <FaBriefcase /> },
  { number: '2K+', text: 'Happy Clients', icon: <FaThumbsUp  /> },
  { number: '10K+', text: 'Users', icon: <FaUsers /> },
  { number: '38K+', text: 'Professionals', icon: <FaUserTie  /> },
];
//pricing plans
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
    title: "",
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
// cta 

export const ctaData = {
heading: "Call To Action",
description:
  "Join us today and make a difference! Take action now to create significant changes in your business. Together, we can build a technology revolution. Become part of our movement today.",
buttonText: "Call To Action",
buttonLink: "https://api.whatsapp.com/send?phone=8919439603&text=Hi..",
calltoaction_bg_img:require("../assets/Home/cta-bg-image-one.webp"),
};

export const partnerData = [
{ link: '/products/financial-management-systems', imgSrc: require("../assets/partner/finance.png"), alt: 'Finance' },
{ link: '/products/hr-managament-software', imgSrc: require("../assets/partner/HRM.png"), alt: 'HRM' },
{ link: '/products/Ecommerce-software', imgSrc: require("../assets/partner/ecomm.png"), alt: 'Ecommerce' },
{ link: '/products/trading-software', imgSrc: require("../assets/partner/trading.png"), alt: 'Trading' },
{ link: '/products/point-of-sale', imgSrc: require("../assets/partner/POS.png"), alt: 'POS' },
{ link: '/products/customer-relationship-management', imgSrc: require("../assets/partner/CRMD.png"), alt: 'CRM' },
];
export const ModulecardsData = [
{
  id: 1,
  image: require('../assets/Home/crmimg.webp'),
  title: 'CRM',
  description:
    'CRM stands for Customer Relationship Management. It\'s a strategy businesses use to manage interactions.',
},
{
  id: 2,
  image: require('../assets/Home/exportandimport.webp'),
  title: 'Export and Import',
  description: 'Streamline global trade with our Export and Import module. Manage logistics, documentation, and more.',
},
{
  id: 3,
  image: require('../assets/Home/sales.webp'),
  title: 'Sales and Marketing',
  description:
    'Sales & Marketing Module handles all the sales activities of domestic and international operations.',
},
{
  id: 4,
  image: require('../assets/Home/jobwork.webp'),
  title: 'Job Work',
  description:
    'Easily outsource specialized tasks with our Job Work module, optimizing production and reducing workload.',
},
{
  id: 5,
  image: require('../assets/Home/qualitycontrol.webp'),
  title: 'Quality Control',
  description: 'A process through which a business seeks to ensure that product quality is maintained perfectly.',
},
{
  id: 6,
  image: require('../assets/Home/secure.webp'),
  title: 'Inventory',
  description: 'facilitating seamless coordination among departments. Automated notifications maintain optimum levels, enhancing efficiency.',
},
{
  id: 7,
  image: require('../assets/Home/financee.webp'),
  title: 'Finance',
  description: 'Facilitating cash and asset management, it ensures accurate financial reporting without data entry.',
},
{
  id: 8,
  image: require('../assets/Home/assetmanage.webp'),
  title: 'Asset Managment',
  description: 'Streamline asset management from procurement to disposal with centralized views and seamless integration.',
},
];
export const testimonialsData = [
  {
    name: "Nagender Sadanala",
    testimonial: "Tech Cloud Solutions provide us a great ERP software. They have a fantastic ERP product which covers all the modules for manufacturers and trading companies and they provided 24*7 support.Thanks to team.",
    // image: require("../assets/Testimonials/testi1.png"),
    altText: "nagender_rathod_img"
},
{
    name: "Sunilkumar Padavala",
    testimonial: "Tech Cloud ERP offers a wide range of out-of-the-box features with  customization functions to fit various needs. We can create unlimited it's a lifetime ERP with no renewals. Very good software at a lesser cost.",
    altText: "sunil_img"
},
{
    name: "Sushmanth Vaibhav",
    testimonial: " One of the main reason for choosing Tech Cloud ERP was the robustness and flexibility it offered to suit our business needs. We have found it unique and it proves to be the best ERP for our medical devices manufacturing industry.",
    altText: "ferrero_img"
},
{
    name: "Anusha",
    testimonial: " I am using Tech Cloud ERP software for my Medical Services business. I’m very happy with the software. I’m using seamlessly the last 3 years and their support is really good.A big thanks for the Tech Cloud ERP team.",
    altText: "anusha_img"
},
{
    name: "Prerna Prasad",
    testimonial: "Tech Cloud ERP, has provided me the best ERP software which i have beenusing past 4 years, quite reasonable showing really good results. It has simplified my work and made it pretty efficient.",
    altText: "prerna_img"
},
{
    name: "Alekhya Poloju",
    testimonial: "This software exactly suits for any kind of manufacturing/trading businesses. The price of the software is very less compared to other softwares in the market. The best cloud based software with GST incorporated.",
    altText: "alekhya_img"
},
{
    name: "Manikanta Varma",
    testimonial: " I enthusiastically recommended Tech Cloud ERP to several other businesses. It's great to work with Tech Cloud ERP team. Even, at the highest level (owners and executives) they take a personal interest in their clients and have a deep understanding of their product.",
    altText: "manikanta_img"
},
];
export const cardData = {
  normal: [
    {
      icon: TbLayoutGridAdd , 
      title: 'Solutions For All',
      text: 'Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio leading cloud-based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7.',
      highlights: ['Integrated CRM and ERP System', 'E-Commerce Platform', 'Workflow Automation'],
    },
    {
      icon: FaRandom  ,
      title: 'Flexibility',
      text: 'Tech Cloud ERP is dedicated to creating easy-to-use, adaptable cloud ERP software applications. Whether you want customized ERP software processes, use the public or private cloud or pay only for what you need.',
      highlights: ['Modular Architecture', 'API-Based Integration', 'Continuous Improvement'],
    },
    {
      icon: GoShieldLock  ,
      title: 'Security',
      text: 'Tech Cloud ERP platform is built on the most advanced infrastructures in the world. We have teams of experts dedicated to protecting your data, warding off hackers and staying ahead of threats to keep your business and its data safe.',
      highlights: ['Risk Assessment', 'Data Breach', 'Encryption'],
    },
  ],
  "Show More": [
    {
      icon: HiOutlineLightBulb  ,
      title: 'Smart And Adaptable',
      text: 'Leverage intelligent ERP software system with built-in machine learning, predictive analytics and optimized processes. Keep the latest innovations at your fingertips with automatic updates.',
      highlights: ['AI-Powered Analytics', 'Predictive Analytics', 'Dynamic Pricing Engines'],
    },
    {
      icon: IoSpeedometerOutline  ,
      title: 'Fast And Affordable',
      text: 'Tap into Tech Cloud ERP world class cloud infrastructure to run lean and flexible business processes. Get up and run quickly anywhere in this world at any time for a low monthly & yearly cost.',
      highlights: ['Efficient Resource Utilization', 'Optimized Workflows', 'Containerization and Microservices'],
    },
    {
      icon: FaShieldAlt ,
      title: 'Secure And Reliable',
      text: 'Our best cloud ERP software have covered from system security to compliance. Your data is hosted on world-class servers with global teams dedicated to its safety robust backup protocols to safeguard your information at every step.',
      highlights: ['Data Encryption', 'Monitoring and Logging', 'Access Controls and Authentication'],
    }
  ]
};

//Navbar Section
export const NAV_ITEMS = [
{
  title: 'Home',
  link: '/',
  type: 'link',
},
// {
//   title: 'About',
//   type: 'dropdown',
//   id: 'aboutDropdown',
//   items: [
//     { title: 'What & Why?', link: '/about-us' },
//     { title: "MD's Profile & Message", link: '/mds-profile' },
//   ],
// },
{
  title: 'About',
  link: '/about-us',
  type: 'link',
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
        { title: 'Agriculture Industry', link: '/agriculture-industry' },
        { title: 'Apparel Industry', link: '/apparel-industry' },
        { title: 'Automative Industry ', link: '/automative-industry' },
        { title: 'Bevarage Industry', link: '/beverage-industry' },
        { title: 'Chemical Industry', link: '/chemical-industry' },
        { title: 'Educational Institutes', link: '/educational-institutes' },
        { title: 'Electric Industry', link: '/electrical-solar-industry' },
        { title: 'Electronics Industry', link: '/electronics-industry' },
      ],
    },
    {
      title: 'FMCG to Metal Fabrication Industry',
      type: 'dropdown',
      direction: 'right',
      items: [
        { title: 'FMCG Industry', link: '/FMCG-industry' },
        { title: 'Food Industry', link: '/food-industry' },
        { title: 'Furniture Industry', link: '/furniture-industry' },
        { title: 'Garment Industry', link: '/garment-industry' },
        { title: 'Hydrolic Cylinders Industry', link: '/hydraulic-industry' },
        { title: 'Jewellery Industry', link: '/jewellery-industry' },
        { title: 'Leather Industry', link: '/leather-industry' },
        { title: 'Logistics Industry ', link: '/logistics-industry' },
        { title: 'Medical Equipment Manufacturing Industry', link: '/medicalequipmentmanufacturing-industry' },
        { title: 'Wood Industry', link: '/wood-industry' },
        { title: 'Wholesalers Industry', link: '/wholesalers-industry' },
        { title: 'Metal Fabrication Industry', link: '/metal-fabrication-industry' },
        { title: 'Micro Finance Industry', link: '/microfinance-industry' },
    ],
    },
    {
      title: 'Oil & Gas Textile Industry',
      type: 'dropdown',
      direction: 'right',
      items: [
        { title: 'Oil & Gas Industry', link: '/oilandgas-industry' },
        { title: 'Packaging Industry', link: '/packaging-industry' },
        { title: 'Paper Industry', link: '/paper-industry' },
        { title: 'Plastic Industry', link: '/plastic-industry' },
        { title: 'Pharmaceutical Industry', link: '/pharma-industry' },
        { title: 'Publishing Industry', link: '/publishing-industry' },
        { title: 'Printing Industry', link: '/printing-industry' },
        { title: 'Pre Engineering Industry', link: '/preengineering-industry' },
        { title: 'Rubber Industry', link: '/rubber-industry' },
        { title: 'Restaurant Industry', link: '/restaurant-industry' },
        { title: 'Retail Industry', link: '/retail-industry' },
        { title: 'Steel Industry', link: '/steel-industry' },
        { title: 'Telecom Industry', link: '/telecom-industry' },
        { title: 'Textile Industry', link: '/textiles-industry' },
      ],
    },
  ],
},
{
  title: 'Products',
  type: 'dropdown',
  id: 'productsDropdown',
  items: [
    { title: 'Tech Cloud ERP', link: 'products/tech-cloud-erp' },
    { title: 'Tech Cloud CRM', link: 'products/customer-relationship-management' },
    { title: 'Tech Cloud POS', link: 'products/point-of-sale' },
    { title: 'Tech Cloud Trading Software', link: 'products/trading-software' },
    { title: 'Tech Cloud Ecommerce', link: 'products/Ecommerce-software' },
    { title: 'Tech Cloud HRMS', link: 'products/hr-managament-software' },
    { title: 'Tech Cloud Finance', link: 'products/financial-management-systems' },
    { title: 'Tech Cloud ERP Integrated-With-CRM-Ecommerce-POS', link: 'products/integrated-erp-software' },
    { title: 'Tech Cloud Restaurant ERP', link: 'products/erp-for-restaraunt' },
    { title: 'Accounting Software', link: 'products/erp-for-accounting-software' },
    // Other product items...
  ],
},
{
    title: 'BI',
    link: '/business-intelligence',
    type: 'link',
},
{
  title: 'Services',
  type: 'dropdown',
  id: 'servicesDropdown',
  items: [
    { title: 'Digital Marketing', link: 'services/digital-marketing' },
    { title: 'Web Development', link: 'services/web-development' },
    { title: 'Mobile Application Development', link: 'services/mobile-application-development' },
    // Add more services here...
  ],
},
{
    title: 'Pricing',
    link: '/pricing',
    type: 'link',
},
{
  title: 'ContactUs',
  link: '/ContactUs',
  type: 'link',
},
{
  title: 'Demo',
  link: '#',
  type: 'link',
  isDemo: true, // Custom flag to open Calendly widget
} 
];
// industries data 
export const sectionsData = {
agricultureIndustry: {
  link: '/industries/agriculture-industry',
  heading: 'Agriculture Industry',
  subheading:'The Best ERP For Agriculture Industry',
  description: 'ERP software can help you build transparent, resilient, and sustainable supply chains across the agriculture sector.',
  top_img: require('../assets/Industries/agriculture_top_img.webp'),
  bottom_img: require('../assets/Industries/agriculture_bottom_img.webp'),
  alt_text1: "agriculture_top_Img",
  alt_text2: "agriculture_bottom_Img",
  top_description: "Tech Cloud ERP software for Agriculture Industry in India provides a unique ERP Online Software Application. Tech Cloud ERP is a robust and scalable ERP for Agriculture Industry and it is also a Best Farm Management Software in India with which all types of agro companies can easily maintain the operation, quality, financial accounting and supply chain management etc. Agriculture is a very important industry for any country as it helps to make the country self-sufficient in terms of food. Agro industries across the globe are continuously investing with the latest technology and focusing on quality, better productivity and reduction in costs by improving all the operations.",
  bottom_description: "Tech Cloud ERP for Agro Industries in India provides the company with a complete ERP solution which will provide the management with various modules like account payable, account receivable, general ledger, purchase, sales, inventory and admin services, through which they can easily manage and improve financial accounting, inventories, supply chain management and quality of products.",
  similar_industries: [
    {
    title: 'Chemical Industry',
    link: '/industries/chemical-industry',
    },

    {
    title: 'Food Industry',
    link: '/industries/food-industry',
    },

    {
    title: 'Textile Industry',
    link: '/industries/textiles-industry',
    },

]
},
apparelIndustry: {
  link: '/industries/apparel-industry',
  heading: 'Apparel Industry',
  subheading:'The Best ERP For Apparel Industry',
  description: 'Elevate your apparel business with our ERP for growth.',
  top_img: require('../assets/Industries/apparel_top_img.webp'),
  bottom_img: require('../assets/Industries/apparel_Bottom_img.webp'),
  alt_text1: "apparel_top_Img",
  alt_text2: "apparel_bottom_Img",
  top_description: "Managing the apparel industry without ERP software is a challenging endeavor. An apparel ERP system aids in analyzing customer preferences, managing inventory, and achieving client goals. Without an effective ERP system, these tasks can become complex and overwhelming. Our top-notch ERP software for the apparel industry in India assists with design, production, and delivery. Apparel management software is widely used to access detailed data on online orders, respond quickly to queries, efficiently manage operations, accurately plan and schedule orders, and make better data predictions.",
  bottom_description: "The purpose of Tech Cloud ERP Apparel Industry Management Software in India is to help you efficiently accomplish these responsibilities, thereby increasing operational productivity and efficiency. With our Tech Cloud ERP Online Software, you can automate tedious tasks such as compiling reports, updating inventory information, and monitoring sales, all while reducing the risk of human error.",
  similar_industries: [
    {
    title: 'Food Industry',
    link: '/industries/food-industry',
    },

    {
    title: 'Bevarages Industry',
    link: '/industries/beverage-industry',
    },

    {
    title: 'Automative Industry',
    link: '/industries/automative-industry',
    },

]
},
automativeIndustry: {
  link: '/industries/automative-industry',
  heading: 'Automative Industry',
  subheading:'The Best ERP For Automative Industry',
  description: 'Drive your automotive business forward with our ERP solution tailored for growth.',
  top_img: require('../assets/Industries/automotive_top_img.webp'),
  bottom_img: require('../assets/Industries/automotive_Bottom_img.webp'),
  alt_text1: "automative_top_Img",
  alt_text2: "automative_bottom_Img",
  top_description: "Managing interlinked processes simultaneously is a crucial skill for every automotive industry leader and manager. With intricate operations such as production, assembly, and supply chain management all happening concurrently across various workstations, a single mistake at any point can disrupt the entire system. However, by integrating Tech Cloud ERP Online Software into your operations, you can streamline these processes and mitigate the risk of errors. This advanced ERP solution offers real-time visibility, enhanced coordination, and improved efficiency, allowing you to manage your workflow seamlessly and focus on strategic decision-making rather than operational burdens.",
  bottom_description: "Tech Cloud ERP software for the automotive industry in India is a versatile solution that seamlessly plans and manages all processes. From handling minute auto parts to ensuring timely delivery of large shipments, Tech Cloud ERP excels with its flexibility, scalability, and customization. Its extensive, user-friendly modules have been tested and proven to perform all tasks accurately, making it a top choice globally. This intuitive and customizable ERP integrates effortlessly into any automotive industry setup, enhancing efficiency and reliability.",
  similar_industries: [
    {
    title: 'Electronic Industry',
    link: '/industries/electronics-industry',
    },

    {
    title: 'Bevarages Industry',
    link: '/industries/beverage-industry',
    },

    {
    title: 'Educational Industry',
    link: '/industries/educational-institutes',
    },

]
},
beverageIndustry: {
  link: '/industries/beverage-industry',
  heading: 'Beverage Industry',
  subheading:'The Best ERP For Beverage Industry',
  description: 'Pour growth into your beverage business with our ERP solution.',
  top_img: require('../assets/Industries/beverage_top_img.webp'),
  bottom_img: require('../assets/Industries/beverage_bottom_img.webp'),
  alt_text1: "bevarage_top_Img",
  alt_text2: "bevarage_bottom_Img",
  top_description: "Tech Cloud ERP software for Beverage Industry in India is a solution that helps your company streamline operations and bring your beverages to the market, faster and more cost-efficiently. Suppose if you’re into a private-company, co-pack or produce your beverages like functional drinks or carbonated beverages, Tech Cloud Beverage ERP Software supports your unique processing requirements in product management & development, production, planning, inventory, quality control, scheduling, and warehousing management.",
  bottom_description: "Tech Cloud ERP Software Solutions can easily add beverage manufacturing applications to your existing financials and provides real-time reposts. If you want to upgrade your current manufacturing system, Tech Cloud ERP also offers an end to end Customized ERP Software for Beverages Industry which gives you the adaptability, accountability, traceability, reliability, functionality, and scalability you need to rapidly and profitably grow your business. From our online demo, know more information about the Beverage Manufacturing ERP system and also know how Tech Cloud ERP plays a key role in your time-saving and real-time actionable data.",
  similar_industries: [
    {
    title: 'Electronic Industry',
    link: '/industries/electronics-industry',
    },

    {
    title: 'Chemical Industry',
    link: '/industries/chemical-industry',
    },

    {
    title: 'Educational Industry',
    link: '/industries/educational-institutes',
    },

]
},
chemicalIndustry: {
  link: '/industries/chemical-industry',
  heading: 'Chemical Industry',
  subheading:'The Best ERP For Chemical Industry',
  description: 'Our ERP boosts efficiency, compliance, and growth for the chemical industry.',
  top_img: require('../assets/Industries/chemical_top_img.webp'),
  bottom_img: require('../assets/Industries/chemical_bottom_img.webp'),
  alt_text1: "chemical_top_Img",
  alt_text2: "chemical_bottom_Img",
  top_description: "The chemical industry remains a cornerstone of economies worldwide, making significant contributions to GDP and supporting various sectors. Its vast product range, from everyday household items to specialized chemicals, underscores its pervasive influence across industries. However, due to the intricate and potentially hazardous nature of its processes, meticulous management is paramount.",
  bottom_description: "Tech Cloud ERP Software Solutions can easily add beverage manufacturing applications to your existing financials and provides real-time reposts. If you want to upgrade your current manufacturing system, Tech Cloud ERP also offers an end to end Customized ERP Software for Beverages Industry which gives you the adaptability, accountability, traceability, reliability, functionality, and scalability you need to rapidly and profitably grow your business. From our online demo, know more information about the Beverage Manufacturing ERP system and also know how Tech Cloud ERP plays a key role in your time-saving and real-time actionable data.",
  similar_industries: [
    {
    title: 'Electronic Industry',
    link: '/industries/electronics-industry',
    },

    {
    title: 'Agriculture Industry',
    link: '/industries/agriculture-industry',
    },

    {
    title: 'Educational Industry',
    link: '/industries/educational-institutes',
    },

]
},

educationalInstitutes: {
  link: '/industries/educational-institutes',
  heading: 'Educational Institutes',
  subheading:'The Best ERP For Educational Institutes',
  description: 'Unlock growth potential with our custom ERP for education.',
  top_img: require('../assets/Industries/educational_top_img.webp'),
  bottom_img: require('../assets/Industries/eductional_bottom_img.webp'),
  alt_text1: "educational_top_Img",
  alt_text2: "educational_bottom_Img",
  top_description: "In today's rapidly evolving education sector, there's a growing recognition of the potential for Enterprise Resource Planning (ERP) systems. These cloud-based applications streamline internal and external resource management, covering everything from materials and finances to human resources. By facilitating seamless information flow across all functions within educational institutions, ERP systems enhance efficiency and effectiveness in various processes. Their implementation in India can notably improve academic resource management and enhance services for stakeholders and students alike.",
  bottom_description: "Tech Cloud ERP Software Solutions is one of the best school ERP Software in India. Tech Cloud ERP is a web based and cloud computing software, having a dynamic dash board with a GUI and inbuilt Email & SMS integration. Accessible anywhere, it supports multi-languages and provides unlimited data storage. Tech Cloud ERP is flexible software, which is mobile and tab compatibility, can manage multiple users, it has an auto back-up facility and provides lifetime product validity.",
  similar_industries: [
    {
    title: 'Bevarage Industry',
    link: '/industries/beverage-industry',
    },

    {
    title: 'Chemical Industry',
    link: '/industries/chemical-industry',
    },

    {
    title: 'Apparel Industry',
    link: '/industries/apparel-industry',
    },
]
},

electricalSolarIndustry: {
  link: '/industries/electrical-solar-industry',
  heading: 'Electrical Solar Industry',
  subheading:'The Best ERP For Electrical Solar Industry',
  description: 'Power up your business growth with our specialized ERP for the electric solar industry.',
  top_img: require('../assets/Industries/eletrical_top_img.webp'),
  bottom_img: require('../assets/Industries/eletrical_Bottom_img.webp'),
  alt_text1: "electrical_top_Img",
  alt_text2: "electrical_bottom_Img",
  top_description: "The Electrical industry comprises of manufacturers who produce generation equipment, transmission equipment and allied equipment’s. Primarily Electrical Manufacturers are involved in production of generators, boilers, turbines, electrical transformers, electrical cables & wires, switch gears, capacitors, process & control equipment’s, instrumentation & control equipment’s, measuring equipment’s & instruments, lighting & luminaries etc.",
  bottom_description: "Increasing Competition in the Electrical Solar Industry requires companies to reduce production cycle time, lower operation costs, improve efficiencies and increase productivity in order to ensure a faster time to market. Tech Cloud ERP has a comprehensive bill of materials module. Our BOM can be used for make-to-order and make-to-stock production. It provides a complete list of raw materials, components, sub-assemblies, components and exact quantities. It helps to record detailed information about whether a component is to be manufactured or purchased. We provide various BOM functions such as estimation, manufacturing, multi-layer, etc. It provides a BOM revision function so that all relevant personnel can use the updated correct BOM version.",
  similar_industries: [
    {
    title: 'Bevarage Industry',
    link: '/industries/beverage-industry',
    },

    {
    title: 'Chemical Industry',
    link: '/industries/chemical-industry',
    },

    {
    title: 'Apparel Industry',
    link: '/industries/apparel-industry',
    },
]
},
electronicsIndustry: {
  link: '/industries/electronics-industry',
  heading: 'Electronics Industry',
  subheading:'The Best ERP For Electronics Industry',
  description: 'Power up your business growth with our specialized ERP for the electric industry.',
  top_img: require('../assets/Industries/eletronic_top_image.webp'),
  bottom_img: require('../assets/Industries/eletronic_bottom_image.webp'),
  alt_text1: "electronic_top_Img",
  alt_text2: "electronic_bottom_Img",
  top_description: "The Electrical industry comprises of manufacturers who produce generation equipment, transmission equipment and allied equipment’s. Primarily Electrical Manufacturers are involved in production of generators, boilers, turbines, electrical transformers, electrical cables & wires, switch gears, capacitors, process & control equipment’s, instrumentation & control equipment’s, measuring equipment’s & instruments, lighting & luminaries etc.",
  bottom_description: "Increasing Competition in the Electrical Solar Industry requires companies to reduce production cycle time, lower operation costs, improve efficiencies and increase productivity in order to ensure a faster time to market. Tech Cloud ERP has a comprehensive bill of materials module. Our BOM can be used for make-to-order and make-to-stock production. It provides a complete list of raw materials, components, sub-assemblies, components and exact quantities. It helps to record detailed information about whether a component is to be manufactured or purchased. We provide various BOM functions such as estimation, manufacturing, multi-layer, etc. It provides a BOM revision function so that all relevant personnel can use the updated correct BOM version.",
  similar_industries: [
    {
    title: 'Bevarage Industry',
    link: '/industries/beverage-industry',
    },
    {
    title: 'Chemical Industry',
    link: '/industries/chemical-industry',
    },
    {
    title: 'Apparel Industry',
    link: '/industries/apparel-industry',
    },
]
},
FMCGIndustry: {
  link: '/industries/FMCG-industry',
  heading: 'FMCG Industry',
  subheading:'The Best ERP For FMCG Industry',
  description: 'Fueling FMCG growth with our specialized ERP solution.',
  top_img: require('../assets/Industries/Fmcg_top_img.webp'),
  bottom_img: require('../assets/Industries/Fmcg_Bottom_img.webp'),
  alt_text1: "fmcg_top_Img",
  alt_text2: "fmcg_bottom_Img",
  top_description: "In the fast-paced realm of Fast Moving Consumer Goods (FMCG), meeting everyday needs and ensuring customer loyalty is paramount. The challenge lies in fostering fidelity through robust customer engagement strategies. Timely delivery and accurate stock information are pivotal in achieving this goal. Leveraging sophisticated software solutions is essential to curating highly personalized experiences for consumers, presenting an array of products tailored to their preferences and empowering them to make informed choices.",
  bottom_description: "In the FMCG sector, timely delivery, accurate stock information, and personalized customer experiences are crucial for fostering loyalty and growth. Leveraging sophisticated software solutions is essential for achieving these goals and staying competitive.",
  similar_industries: [
    {
    title: 'Furniture Industry',
    link: '/industries/furniture-industry',
    },
    {
    title: 'Jewellery Industry',
    link: '/industries/jewellery-industry',
    },
    {
    title: 'Wood Industry',
    link: '/industries/wood-industry',
    },
]
},

foodIndustry: {
  link: '/industries/food-industry',
  heading: 'Food Industry',
  subheading:'The Best ERP For Food Industry',
  description: 'Empowering food businesses to flourish with our customized ERP solutions.',
  top_img: require('../assets/Industries/Food_top_img.webp'),
  bottom_img: require('../assets/Industries/food_bottom_img.webp'),
  alt_text1: "food_top_Img",
  alt_text2: "food_bottom_Img",
  top_description: "In the dynamic landscape of the food processing industry, organizations grapple with multifaceted challenges ranging from evolving consumer preferences to stringent regulatory standards. Prioritizing constant innovation, quality assurance, and adaptability is essential for sustaining competitiveness and meeting market demands.",
  bottom_description: "Tech Cloud ERP software for the food industry in India offers a comprehensive solution tailored to the unique needs of food manufacturers. By seamlessly integrating alldepartments and providing essential utilities such as dashboards and reports, it empowers businesses to enhance efficiency, compliance, and competitiveness. With its deep understanding of the industry's complexities, Tech Cloud ERP equips manufacturers with a robust platform to navigate challenges effectively.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

furnitureIndustry: {
  link: '/industries/furniture-industry',
  heading: 'Furniture Industry',
  subheading:'The Best ERP For Furniture Industry',
  description: 'Transforming furniture businesses with our bespoke ERP solutions for accelerated growth.',
  top_img: require('../assets/Industries/Furniture_top_img.webp'),
  bottom_img: require('../assets/Industries/Furniture_bottom_img.webp'),
  alt_text1: "furniture_top_Img",
  alt_text2: "furniture_bottom_Img",
  top_description: "Furniture manufacturers may have a passion for creating stunning designs into beautiful and functional furniture, fixtures or accessories. But this type of business need more than great craftsmanship to run a successful manufacturing business. Furniture Company might include many thousands of product with different colors, sizes, metals, finishes, shapes etc. create enormous complexity. Customers and distributors alike are putting pressure on you for faster delivery, more Eco-friendly designs and lower pricing.",
  bottom_description: "Discover how Tech Cloud ERP software for Furniture Industry in India can help you gain significant efficiencies, streamline your supply chain management and manage your furniture related hardware to distributors and consumers faster than ever, even at high volume. Tech Cloud ERP empowers your team to effectively manage areas like quality control, purchase, inventory management, shop floor operations, sales, finance and many more. All these from our single integrated ERP system.",
  similar_industries: [
    {
    title: 'Wood Industry',
    link: '/industries/wood-industry',
    },
    {
    title: 'Jewellery Industry',
    link: '/industries/jewellery-industry',
    },
    {
    title: 'Metal Fabrication Industry',
    link: '/industries/metal-fabrication-industry',
    },
]
},

garmentIndustry: {
  link: '/industries/garment-industry',
  heading: 'Garment Industry',
  subheading:'The Best ERP For Garment Industry',
  description: 'Elevating garment businesses with our tailored ERP solutions for accelerated growth.',
  top_img: require('../assets/Industries/Garment_top_img.webp'),
  bottom_img: require('../assets/Industries/Garment_Bottom_img.webp'),
  alt_text1: "garment_top_Img",
  alt_text2: "garment_bottom_Img",
  top_description: "The Electrical industry comprises of manufacturers who produce generation equipment, transmission equipment and allied equipment’s. Primarily Electrical Manufacturers are involved in production of generators, boilers, turbines, electrical transformers, electrical cables & wires, switch gears, capacitors, process & control equipment’s, instrumentation & control equipment’s, measuring equipment’s & instruments, lighting & luminaries etc.",
  bottom_description: "Increasing Competition in the Electrical Solar Industry requires companies to reduce production cycle time, lower operation costs, improve efficiencies and increase productivity in order to ensure a faster time to market. Tech Cloud ERP has a comprehensive bill of materials module. Our BOM can be used for make-to-order and make-to-stock production. It provides a complete list of raw materials, components, sub-assemblies, components and exact quantities. It helps to record detailed information about whether a component is to be manufactured or purchased. We provide various BOM functions such as estimation, manufacturing, multi-layer, etc. It provides a BOM revision function so that all relevant personnel can use the updated correct BOM version.",
  similar_industries: [
    {
      title: 'Jewellery Industry',
      link: '/industries/jewellery-industry',
    
    },
    {
      title: 'Wood Industry',
      link: '/industries/wood-industry',
    },
    {
      title: 'Metal Fabrication Industry',
      link: '/industries/metal-fabrication-industry',
    },
]
},

hydraulicIndustry: {
  link: '/industries/hydraulic-industry',
  heading: 'Hydraulic Industry',
  subheading:'The Best ERP For Hydraulic Industry',
  description: 'Boosting hydraulic cylinder businesses with our ERP for rapid growth.',
  top_img: require('../assets/Industries/Hydralic_top_img.webp'),
  bottom_img: require('../assets/Industries/Hydralic_bottom_img.webp'),
  alt_text1: "hydraulic_top_Img",
  alt_text2: "hydraulic_bottom_Img",
  top_description: "Tech Cloud ERP provides tailored solutions for Hydraulic Cylinder Industries in India, addressing industry-specific challenges with a highly scalable platform that optimizes operations and enhances efficiency.",
  bottom_description: "Moreover, Tech Cloud ERP's advanced analytics and reporting capabilities enable Hydraulic Cylinder Industries to make data-driven decisions, identify optimization opportunities, and streamline workflows. By leveraging real-time insights and predictive analytics, companies can proactively address challenges, minimize downtime, and seize new market opportunities. This strategic approach not only fosters sustainable growth but also enhances competitiveness in an ever-evolving market landscape. With Tech Cloud ERP as their trusted partner, Hydraulic Cylinder Industries in India are poised for continuous expansion and success.",
  similar_industries: [
    {
      title: 'Jewellery Industry',
      link: '/industries/jewellery-industry',
    
    },
    {
      title: 'Wood Industry',
      link: '/industries/wood-industry',
    },
    {
      title: 'Metal Fabrication Industry',
      link: '/industries/metal-fabrication-industry',
    },
]
},

jewelleryIndustry: {
  link: '/industries/jewellery-industry',
  heading: 'Jewellery Industry',
  subheading:'The Best ERP For Jewellery Industry',
  description: 'Revolutionizing Jewellery businesses with our ERP solutions for exponential growth.',
  top_img: require('../assets/Industries/jewellery_top_img.webp'),
  bottom_img: require('../assets/Industries/jewellery_Bottom_img.webp'),
  alt_text1: "jewellery_top_Img",
  alt_text2: "jewellery_bottom_Img",
  top_description: "Tech Cloud ERP Software Solutions are the rich experienced software development company for the Jewellery Industry. Tech Cloud ERP provides unique and flexible software solutions for a Jewellery Industry like from Jewellery Manufacturing, Designing to Wholesaler and Retailers. Tech Cloud ERP acts as a centralized setup by which you can control all the activities with your fingers.",
  bottom_description: "Tech Cloud ERP software for the Jewellery industry in India would be a great asset in Jewellery Stores. As Tech Cloud ERP knows there would be huge transactional data about customers, vendors, and laborers for a Jewellery Industry. Tech Cloud ERP would be a great change in these sectors as an ERP software maintains your data and at the same time, all the transactions can be well managed and synchronized with no need for manual documents and papers.",
  similar_industries: [
    {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
    
    },
    {
      title: 'Wood Industry',
      link: '/industries/wood-industry',
    },
    {
      title: 'Metal Fabrication Industry',
      link: '/industries/metal-fabrication-industry',
    },
]
},

leatherIndustry: {
  link: '/industries/leather-industry',
  heading: 'Leather Industry',
  subheading:'The Best ERP For Leather Industry',
  description: 'Empowering leather businesses with our ERP solutions for exponential growth.',
  top_img: require('../assets/Industries/leather_top_img.webp'),
  bottom_img: require('../assets/Industries/leather_bottom_img.webp'),
  alt_text1: "leather_top_Img",
  alt_text2: "leather_bottom_Img",
  top_description: "Generally, leather is an animal produce and it is a perishable product, it is essential to source the right quantity at the right time. So what you need is a business management tool which can help you optimize performance, satisfy customers and reduce IT costs. Tech Cloud ERP software for Leather Industry in India does all this and more! Comprising of industry-leading functionalities for Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Supply Chain Management (SCM), Human Resource Management (HRM), Analytics, Real Time Report and total for Leather Industry.",
  bottom_description: "Tech Cloud ERP for the Leather Industry streamlines operations, boosts efficiency, and cuts costs. With comprehensive functionalities including ERP, CRM, SCM, HRM, Analytics, and Real-Time Reporting, our tailored solutions optimize procurement processes, minimize wastage, and maximize profit margins.",
  similar_industries: [
    {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
    
    },
    {
      title: 'Wood Industry',
      link: '/industries/wood-industry',
    },
    {
      title: 'Logistics Industry',
      link: '/industries/logistics-industry',
    },
]
},

logisticsIndustry: {
  link: '/industries/logistics-industry',
  heading: 'Logistics Industry',
  subheading:'The Best ERP For Logistics Industry',
  description: 'Driving growth in the logistics industry with our tailored ERP solutions.',
  top_img: require('../assets/Industries/Logistics_top_img.webp'),
  bottom_img: require('../assets/Industries/Logistics_Bottom_img.webp'),
  alt_text1: "logistics_top_Img",
  alt_text2: "logistics_bottom_Img",
  top_description: "The Electrical industry comprises of manufacturers who produce generation equipment, transmission equipment and allied equipment’s. Primarily Electrical Manufacturers are involved in production of generators, boilers, turbines, electrical transformers, electrical cables & wires, switch gears, capacitors, process & control equipment’s, instrumentation & control equipment’s, measuring equipment’s & instruments, lighting & luminaries etc.",
  bottom_description: "Increasing Competition in the Electrical Solar Industry requires companies to reduce production cycle time, lower operation costs, improve efficiencies and increase productivity in order to ensure a faster time to market. Tech Cloud ERP has a comprehensive bill of materials module. Our BOM can be used for make-to-order and make-to-stock production. It provides a complete list of raw materials, components, sub-assemblies, components and exact quantities. It helps to record detailed information about whether a component is to be manufactured or purchased. We provide various BOM functions such as estimation, manufacturing, multi-layer, etc. It provides a BOM revision function so that all relevant personnel can use the updated correct BOM version.",
  similar_industries: [
    {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
    
    },
    {
      title: 'Wood Industry',
      link: '/industries/wood-industry',
    },
    {
      title: 'Medical equipment manufacturing Industry',
      link: '/industries/medicalequipmentmanufacturing-industry',
    },
]
},

medicalequipmentmanufacturingIndustry: {
  link: '/industries/medicalequipmentmanufacturing-industry',
  heading: 'Medical equipment manufacturing Industry',
  subheading:'The Best ERP For Medical equipment manufacturing Industry',
  description: 'Fueling growth in medical equipment manufacturing with our ERP solutions.',
  top_img: require('../assets/Industries/Medical__top_img.webp'),
  bottom_img: require('../assets/Industries/medical_bottom_img.webp'),
  alt_text1: "medical_top_Img",
  alt_text2: "medical_bottom_Img",
  top_description: "With the growing number of software solutions available in the market and significant functional overlap, the choosing process has grown very confusing, especially when trying to maximize the cost-benefit ratio. Tech Cloud ERP Software is the proven solution that meets both your manufacturing process and requirements. With a straightforward and cost-effective approach, Tech Cloud ERP provides an integrated ERP software for the medical devices manufacturing industry in India which includes specific functions to manage your complex manufacturing environment, FDA compliance and quality.",
  bottom_description: "Medical device manufacturers face intense competition and strict regulations. Tech Cloud ERP offers a unique, customizable ERP solution tailored to meet their specific needs, ensuring compliance, efficiency, and faster time-to-market.",
  similar_industries: [
    {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
    },
    {
      title: 'Wood Industry',
      link: '/industries/wood-industry',
    },
    {
      title: 'Logistics Industry',
      link: '/industries/logistics-industry',
    },
]
},

woodIndustry: {
  link: '/industries/wood-industry',
  heading: 'Wood Industry',
  subheading:'The Best ERP For Wood Industry',
  description: 'Empowering the wood industry with growth-focused ERP solutions.',
  top_img: require('../assets/Industries/wood_top_img.webp'),
  bottom_img: require('../assets/Industries/wood_bottom_img.webp'),
  alt_text1: "wood_top_Img",
  alt_text2: "wood_bottom_Img",
  top_description: "Wood Industry is the most important industry around the world, today many industries such as furniture, toymakers, paper, craftsmen, etc. are connected with the wood industry. Which focusing on wood processing, to make a product, “wood” has to go through various processes and furnished before it can be delivered to its end-user. Whether you are a make-to-stock, make-to-order or a project-based industry, Tech Cloud ERP will help you gain better visibility across all business processes.",
  bottom_description: "Tech Cloud ERP software for the wood industry in India is a cloud-based software that is designed to provide a seamless process in managing your business with ease. Its scalability and customization can help wood manufacturers at different stages of development, while the advanced modules and precise data mining can only ensure a smooth process flow and enhance sales. With Tech Cloud ERP users can keep a track of harvests, climatic conditions, inventory (stock) and stay updated with new processes and trends, all these coordinated for better results.",
  similar_industries: [
    {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
    },
    {
      title: 'Jewellery Industry',
      link: '/industries/jewellery-industry',
    },
    {
      title: 'Logistics Industry',
      link: '/industries/logistics-industry',
    },
]
},

wholesalersIndustry: {
  link: '/industries/wholesalers-industry',
  heading: 'Wholesalers Industry',
  subheading:'The Best ERP For Wholesalers Industry',
  description: 'Empowering wholesalers with tailored ERP solutions for business growth.',
  top_img: require('../assets/Industries/wholesalers_top_img.webp'),
  bottom_img: require('../assets/Industries/wholesalers_bottom_img.webp'),
  alt_text1: "wholesalers_top_Img",
  alt_text2: "wholesalers_bottom_Img",
  top_description: "For most of the distributors who operate in global networks, it has become important to develop new ways of doing business with each other within the new network department. And most of the wholesale distributors are managing their processes with fully customized enterprise applications like ERP, CRM, and Accounting. Wholesale Distributors are making do more with less than a complete solution to manage basic and fundamental processes such as order-to-cash and procure-to-pay, warehouse management, procurement, and finance and accounting.",
  bottom_description: "But as companies become less vertically integrated to reduce costs and focus more on their core competencies, and as traditional wholesale distributors are seeking for new ways to add value through services, without an integrated sales and distribution software, you are both leaving money on the table and lagging behind.",
  similar_industries: [
    {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
    },
    {
      title: 'Jewellery Industry',
      link: '/industries/jewellery-industry',
    },
    {
      title: 'Logistics Industry',
      link: '/industries/logistics-industry',
    },
]
},

metalFabricationIndustry: {
  link: '/industries/metal-fabrication-industry',
  heading: 'Metal Fabrication Industry',
  subheading:'The Best ERP For Metal Fabrication Industry',
  description: 'Empowering metal fabrication businesses to grow with our specialized ERP solutions.',
  top_img: require('../assets/Industries/metalfabrication_top_img.webp'),
  bottom_img: require('../assets/Industries/metalfabrication_bottom_img.webp'),
  alt_text1: "metalfabrication_top_Img",
  alt_text2: "metalfabrication_bottom_Img",
  top_description: "For different fabrication stores, have different work processes like casting, extrusion, chipping, forging, welding, etc. But what generally a Metal Fabrication industries lack is automated business management system. As the business grows its handling cost also increases thus, it becomes important that an ERP software manages the business more effectively to get benefits.",
  bottom_description: "Until today, some of the industries are using excel sheets, EBooks etc. to manage their business, but in this competitive world it is not ok to generate reports manually, what they need is a more robust and smart applications which is Tech Cloud ERP Software Solutions, an ERP software for Metal Fabrication Industry in India which manages all your heavy systems seamlessly from a single place. Tech Cloud ERP is more secure, scalable and robust solution that has an ability to manage all functions in Metal Fabrication Industry.",
  similar_industries: [
    {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
    },
    {
      title: 'Jewellery Industry',
      link: '/industries/jewellery-industry',
    },
    {
      title: 'Logistics Industry',
      link: '/industries/logistics-industry',
    },
]
},

microfinanceIndustry: {
  link: '/industries/microfinance-industry',
  heading: 'Microfinance Industry',
  subheading:'The Best ERP For Microfinance Industry',
  description: 'Empowering microfinance institutions to thrive with our ERP solutions for business growth.',
  top_img: require('../assets/Industries/Microfinance_top_img.webp'),
  bottom_img: require('../assets/Industries/Microfinance_bottom_img.webp'),
  alt_text1: "microfinance_top_Img",
  alt_text2: "microfinance_bottom_Img",
  top_description: "Microfinance has an important role in connecting the gap between the formal financial institutions and the rural poor and the microfinance software is robust that helps to automate all business activities. Tech Cloud ERP’s Microfinance Software provides you a unique and a smart banking functionality and helps to focus on other areas of business. Tech Cloud ERP’s Microfinance access to financial resources to a huge selection of unbanked population which has no previous credit history.",
  bottom_description: "Over the past few years, microfinance software is shown an impressive growth and have been instrumental in the cause of financial inclusion. Tech Cloud ERP offer financial services within communities which have limited resources and very few avenues for economic growth. By empowering the people within these communities with their Microloan products, Tech Cloud ERP’s Microfinance helps all the SMEs using their existing talent and skill sets.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

oilandGasIndustryy: {
  link: '/industries/oilandgas-industry',
  heading: 'Oil and Gas Industry',
  subheading:'The Best ERP For Oil and Gas Industry',
  description: 'Optimize your operations with our ERP solutions for the oil and gas industry.',
  top_img: require('../assets/Industries/oilandgas_top_img.webp'),
  bottom_img: require('../assets/Industries/oilandgas_bottom_img.webp'),
  alt_text1: "oilandgas_top_Img",
  alt_text2: "oilandgas_bottom_Img",
  top_description: "The oil and gas industry is an early adopter of ERP systems due to its reliance on precise workflow management and market analysis. ERP solutions enhance efficiency, balance multiple projects, and offer easy-to-use modules like sales, purchase, and inventory management. With the ever-increasing demand for oil and gas and fluctuating regulations, industry managers need agile solutions. Tech Cloud ERP provides flexibility tailored to user needs, simplifying processes and offering careful warehouse and supply chain management.",
  bottom_description: "Tech Cloud ERP, a partly cloud-based ERP software service, ensures reliability by tracking and recording every process in real-time. Accessible on any device, it keeps users updated throughout operations. In the risk-laden oil and gas industry, Tech Cloud ERP's automation and business intelligence aid in scheduling and managing processes safely, minimizing chances of mishaps.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

packagingIndustry: {
  link: '/industries/packaging-industry',
  heading: 'Packaging Industry',
  subheading:'The Best ERP For Packaging Industry',
  description: 'Enhance your packaging business with our tailored ERP solutions.',
  top_img: require('../assets/Industries/packaging_top_img.webp'),
  bottom_img: require('../assets/Industries/packaging_bottom_img.webp'),
  alt_text1: "packaging_top_Img",
  alt_text2: "packaging_bottom_Img",
  top_description: "From small down bottles to readymade food packets and from a small medicine to pharmaceutical machinery, the packaging industries have to provide security, protection, and marketing. With these innovations packaging industries have a unique set of manufacturing necessities, any packaging company deserves a software solution that fits all the requirements.",
  bottom_description: "Tech Cloud ERP Software Solutions provides completely Customizable ERP Software with advanced features to assist the total packaging process and to maintain total visibility & control of packaging. Packaging materials are always a challenging task, so you need a flexible management tool that should adapt to your growing business. Unlike entry-level ERP software, Tech Cloud ERP software for Packaging Industries in India is built to solve challenges for entire manufacturing multiple operations in an organization.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

paperIndustry: {
  link: '/industries/paper-industry',
  heading: 'Paper Industry',
  subheading:'The Best ERP For Paper Industry',
  description: 'Revolutionize your paper industry operations with our tailored ERP solutions.',
  top_img: require('../assets/Industries/paper_top_img.webp'),
  bottom_img: require('../assets/Industries/paper_bottom_img.webp'),
  alt_text1: "paper_top_Img",
  alt_text2: "paper_bottom_Img",
  top_description: "Paper manufacturing industries are increasingly implementing ERP software systems to enhance their processes. Tech Cloud ERP enables paper industries to access real-time data for optimizing procurement, production, distribution, and sales. The primary goal of our ERP software for paper industries in India is to continuously improve process efficiency through holistic analysis and strengthen customer relationships with efficient management. Additionally, Tech Cloud ERP facilitates well-coordinated information flow between suppliers and customers, promoting collaborative commerce.",
  bottom_description: "Moreover, the Supply Chain Management (SCM) module is crucial in paper mills management, fostering relationships with plant partners and enhancing the efficiency and reliability of SCM. This environment offers significant potential for total cost control and real-time value chain optimization.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

plasticIndustry: {
  link: '/industries/plastic-industry',
  heading: 'Plastic Industry',
  subheading:'The Best ERP For Plastic Industry',
  description: 'Elevate your plastic industry business with our customized ERP solutions.',
  top_img: require('../assets/Industries/plastic_top_img.webp'),
  bottom_img: require('../assets/Industries/plastic_bottom_img.webp'),
  alt_text1: "plastic_top_Img",
  alt_text2: "plastic_bottom_Img",
  top_description: "Plastic products are always in high demand, requiring industries to deliver large quantities efficiently. Managing heavy machinery, workers, and various departments is challenging, often impacting product quality due to human error or process gaps. Since product quality determines a company's reputation, maintaining it is crucial for any manufacturing business. Additionally, plastic manufacturing industries face challenges in wastage management and workforce management.",
  bottom_description: "To provide quality production and waste management in the plastic industry software is required, with that one can operate all the departments in one single place. Here Tech Cloud ERP software for the plastic industry in India is very useful when it comes to managing an enterprise and maintaining track of all its resources and inventory for swift and seamless processes. Tech Cloud ERP is a cloud-based ERP software solution, which can make all processes hassle-free and enhance collaboration among the teams and can operate from anywhere at any time.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

pharmaceuticalIndustry: {
  link: '/industries/pharma-industry',
  heading: 'Pharmaceutical Industry',
  subheading:'The Best ERP For Pharmaceutical Industry',
  description: 'Unlock your pharmaceutical business potential with our advanced ERP solutions.',
  top_img: require('../assets/Industries/pharmaceutical_top_img.webp'),
  bottom_img: require('../assets/Industries/pharmaceutical_bottom_img.webp'),
  alt_text1: "pharmaceutical_top_Img",
  alt_text2: "pharmaceutical_bottom_Img",
  top_description: "The pharmaceutical industry has seen remarkable growth due to high global demand and strong export markets. Managing a pharmaceutical business involves overseeing various departments, including Inventory, Production, Quality Check, Packaging, Sales, Purchase, HR/Payroll, and Finance. Using Pharmaceutical ERP software simplifies this complex process. Our cloud-based ERP software for the pharma industry in India efficiently manages all operations, from Sales to Finance and Planning to Packaging.",
  bottom_description: "The growing demand for pharmaceutical products has intensified market competition, particularly for small and medium-sized manufacturers. Tech Cloud ERP is a robust, scalable solution that streamlines all processes and data management for the pharma industry. Our flexible and powerful ERP software in India manages all critical business functions efficiently.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

publishingIndustry: {
  link: '/industries/publishing-industry',
  heading: 'Publishing Industry',
  subheading:'The Best ERP For Publishing Industry',
  description: 'Navigate the complexities of publishing with our streamlined ERP solutions.',
  top_img: require('../assets/Industries/publishing_top_img.webp'),
  bottom_img: require('../assets/Industries/publishing_bottom_img.webp'),
  alt_text1: "publishing_top_Img",
  alt_text2: "publishing_bottom_Img",
  top_description: "Generally, a publishing industry has to take care of content, designing, printing/publishing and distribution of publications namely magazines, newspapers, books, directories, etc. The publication process can be a daily, weekly, fortnightly, monthly or yearly basis. The flow included are sensitive and perplexing in nature.",
  bottom_description: "For example, an issue in one flow can have a big impact on all the resulting forms subsequently, taking the business for a hurl. To keep the wheel running easily, users need to adopt new innovations and devices that will go about as an impetus in the development of the organization. All the department of a publishing company has to be on the same path and controls all departments and optimum data visibility at once. Using Tech cloud ERP manages day-to-day tasks in an efficient and streamlined way. Tech Cloud ERP Software for the Publishing Industry in India can manage most of the difficulties and operations with a single connection.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

printingIndustry: {
  link: '/industries/printing-industry',
  heading: 'Printing Industry',
  subheading:'The Best ERP For Printing Industry',
  description: 'Print success with our tailored ERP solutions for the printing industry.',
  top_img: require('../assets/Industries/printing_top_img.webp'),
  bottom_img: require('../assets/Industries/printing_bottom_img.webp'),
  alt_text1: "printing_top_Img",
  alt_text2: "printing_bottom_Img",
  top_description: "Tech Cloud ERP Software for Printing Industry in India supports the total business process from sales, price estimating, quotation, order confirmation to production management and delivery. Our cloud ERP for printing business covers a large variety of print and packaging applications and it’s specifically designed for standardized processes across multi-locations and multi-country and multi-currency environments.",
  bottom_description: "Our Printing Industry Management software tracks all the lot/batch ranges to the last purpose of the finished product. Tech Cloud ERP has a traceability feature right from receipt, through quality control and production until the finished product. All generated records conjointly safeguard against any willful or wrong claims by customers, as a result of it provides a superb Quality Assurance trace. Reasons for rejection, corrective action, responsibilities, etc. are outlined to own far better management on production and quality maintenance.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

preEngineeringIndustry: {
  link: '/industries/preengineering-industry',
  heading: 'Pre-Engineering Industry',
  subheading:'The Best ERP For Pre-Engineering Industry',
  description: 'Engineer your success with our specialized ERP solutions for the pre-engineering industry.',
  top_img: require('../assets/Industries/preEngineering_top_img.webp'),
  bottom_img: require('../assets/Industries/preEngineering_bottom_img.webp'),
  alt_text1: "preEngineering_top_Img",
  alt_text2: "preEngineering_bottom_Img",
  top_description: "The engineering industry manufactures machines for industrial, commercial, and consumer use, providing a wide range of products including automobile parts, pumps, valves, engines, turbines, industrial furnaces and burners, compressors, industrial refrigeration and air-conditioning systems, machinery equipment, machine tools, and equipment for extraction, construction, and general-purpose machinery..",
  bottom_description: "Our ERP software for Engineering Industry in India has unique modules that are designed in a way that fulfills all the requirements of the Pre-Engineering Industry. Tech Cloud ERP Software automates and integrates Engineering business processes. Tech Cloud ERP helps Engineering manufacturers integrated processes and provide centralized data connection which reduces operational costs and manages supply chain closely to ensure profitability.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

rubberIndustry: {
  link: '/industries/rubber-industry',
  heading: 'Rubber Industry',
  subheading:'The Best ERP For Rubber Industry',
  description: 'Rubber-stamp your success with our specialized ERP solutions for the rubber industry.',
  top_img: require('../assets/Industries/rubber_top_img.webp'),
  bottom_img: require('../assets/Industries/rubber_bottom_img.webp'),
  alt_text1: "rubber_top_Img",
  alt_text2: "rubber_bottom_Img",
  top_description: "India is a major producer of rubber products, catering to both domestic and international markets. These products are manufactured by large industries as well as the SME sector. The global demand for rubber products is increasing, leading to heightened competition. Fluctuating raw material prices pose a significant challenge for the rubber industries. The major concerns include productivity, product quality, and cost factors. The product life cycle is short, and customers are highly price-sensitive, which directly impacts manufacturing profitability.",
  bottom_description: "Generally, this kind of manufacturing industry has pressure on how to reduce the operational cost, reduce the wastage of materials at the time of production, quickly respond to rapid changes in product development and other challenges. These companies, small or big can benefit majorly with an ERP Software for Rubber Industry in India which will help maintain costs by streamlining processes and tracking inventory.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

restaurantIndustry: {
  link: '/industries/restaurant-industry',
  heading: 'Restaurant Industry',
  subheading:'The Best ERP For Restaurant Industry',
  description: 'Sizzle up your restaurants success with our tailored ERP solutions.',
  top_img: require('../assets/Industries/restaurant_top_img.webp'),
  bottom_img: require('../assets/Industries/restaurant_bottom_img.webp'),
  alt_text1: "restaurant_top_Img",
  alt_text2: "restaurant_bottom_Img",
  top_description: "Restaurant Industry - An industry with many demands for its service and it is a start point for many business enthusiasts. Generally, for us analyzing a restaurant process may feel easy, but as we start digging into the ways of the restaurant's industry, the processes begin to take complex twists. Hence, it is no wonder the restaurant managers and supervisors are always on the run, as they try providing the best possible service to their customers.",
  bottom_description: "Tech Cloud ERP Software Solutions can be the ultimate savior for the restaurant industry, alleviating common hassles. Its proficiency in business management, waste reduction, and profit enhancement makes it an essential tool for any business. In a fast-paced environment, Tech Cloud ERP helps workers make informed decisions that benefit customers and increase profits. Similar to other businesses, restaurant ERP systems must maintain records of transactions and account statuses.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

retailIndustry: {
  link: '/industries/retail-industry',
  heading: 'Retail Industry',
  subheading:'The Best ERP For Retail Industry',
  description: 'Drive growth and efficiency in your retail business with our specialized ERP solutions.',
  top_img: require('../assets/Industries/retail_top_img.webp'),
  bottom_img: require('../assets/Industries/retail_bottom_img.webp'),
  alt_text1: "retail_top_Img",
  alt_text2: "retail_bottom_Img",
  top_description: "The primary purpose of an ERP system for a retail business is to facilitate quick decision-making in real-time and maintain accurate, end-to-end data across retail stores. Tech Cloud ERP software is a leading solution in India, designed to suit any type of retail business. It offers advanced modules including Sales & Marketing, Purchase, Inventory, Order Entry, Billing & Invoicing, Warehouse Management, HR Management, Receivables & Transactions, and Distribution.",
  bottom_description: "Tech Cloud ERP software is an ideal solution for retail businesses, efficiently running across various departments and locations. It monitors activities and generates real-time reports, all while connecting to a centralized database.Tech Cloud ERP offers comprehensive business management solutions with powerful analytics, and being fully cloud-based, it provides retailers with a cost-effective ERP system.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

steelIndustry: {
  link: '/industries/steel-industry',
  heading: 'Steel Industry',
  subheading:'The Best ERP For Steel Industry',
  description: 'Forge ahead in the steel industry with our specialized ERP solutions.',
  top_img: require('../assets/Industries/steel_top_img.webp'),
  bottom_img: require('../assets/Industries/steel_bottom_img.webp'),
  alt_text1: "steel_top_Img",
  alt_text2: "steel_bottom_Img",
  top_description: "Tech Cloud ERP Software is a powerful tool, particularly beneficial for the manufacturing industry. Manufacturing involves multiple operations from raw material conversion to finished goods. As companies grow, these operations become increasingly complex. Tech Cloud ERP software for the steel industry in India serves as a wizard tool, effectively managing the entire process seamlessly.",
  bottom_description: "FSteel manufacturing industry must also undergo several complex proceedings and processes to deliver the final output. Often the unavailability of raw materials and power coupled with rising costs, put the steel manufacturers in pressure and high competition to survive in the competitive market retaining their long and successful run. Both small and medium manufacturing industries find it vital to have a 360-degree view of their business operations on a continual basis.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

telecomIndustry: {
  link: '/industries/telecom-industry',
  heading: 'Telecom Industry',
  subheading:'The Best ERP For Telecom Industry',
  description: 'Connect, streamline, and grow with our tailored ERP solutions for the telecom industry.',
  top_img: require('../assets/Industries/telecom_top_img.webp'),
  bottom_img: require('../assets/Industries/telecom_bottom_img.webp'),
  alt_text1: "telecom_top_Img",
  alt_text2: "telecom_bottom_Img",
  top_description: "The telecommunications industry, a major economic contributor, manufactures a diverse range of products from large-scale switches to basic mobile phones. Tech Cloud ERP, a web-enabled and mobile-friendly software, integrates and manages all aspects of an organization into a single cohesive system, designed to meet evolving market needs.",
  bottom_description: "Tech Cloud ERP software for the Telecom Industry in India offers powerful business management capabilities, seamlessly integrating all departments to ensure smooth information flow. This unified solution supports every business operation, creating a clear, hassle-free environment for managers to make informed decisions. Tech Cloud ERP boosts employee confidence, reduces errors, and ensures tasks are completed on time and in a disciplined manner.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},

textileIndustry: {
  link: '/industries/textiles-industry',
  heading: 'Textile Industry',
  subheading:'The Best ERP For Textile Industry',
  description: 'Thread your success with our tailored ERP solutions for the textile industry.',
  top_img: require('../assets/Industries/textile_top_img.webp'),
  bottom_img: require('../assets/Industries/textile_bottom_img.webp'),
  alt_text1: "textile_top_Img",
  alt_text2: "textile_bottom_Img",
  top_description: "Tech Cloud ERP provides comprehensive solutions for managing the textile industry from cotton-to-yarn, yarn-to-fabric, fabric-to-garment, or across all segments. The textile business faces challenges such as seasonality, fluctuating global demand, processing capacity constraints, and high operating costs. Developed on the cloud with built-in best practices and comprehensive functionalities, Tech Cloud ERP software for the Textile Industry in India enables smooth and innovative management of your textile processes.",
  bottom_description: "Don't worry about the textile industry's seasonal cycles. Use Cloud ERP Software to plan effectively and deliver benefits to customers. Our features support raw material acquisition, trace work processes, manage products by style, color, size, and quality, and maintain relationships with vendors and customers. Automate workflows and purchase orders to save time.",
  similar_industries: [
    {
    title: 'FMCG Industry',
    link: '/industries/fmcg-industry',
    },
    {
    title: 'Leather Industry',
    link: '/industries/leather-industry',
    },
    {
    title: 'Wholesalers Industry',
    link: '/industries/wholesalers-industry',
    },
]
},
};


// expo details
export const expoDetails = {
  hyderabad: {
    title: 'Hyderabad Expo',
    venue: 'HITEX Exhibition Center, Hitex Road, Izzathnagar, Kothaguda, Hyderabad, Telangana 500084',
    date: '13,14,15 - Sep, 2024',
    images: [
      require('../assets/Gallery/HyderabadExpo/IntroImg1.png'),
      require('../assets/Gallery/HyderabadExpo/IntroImg2.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg1.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg2.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg3.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg4.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg5.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg6.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg7.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg8.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg9.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg10.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg11.png'),
      require('../assets/Gallery/HyderabadExpo/HyderabadExpoImg12.png')
    ],
  },
  delhi: {
    title: 'Delhi Expo',
    venue: 'Bharath Bhavan, Pragathi Maidan',
    date: '19,20,21,22 - Sep, 2024',
    images: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  chennai: {
    title: 'Chennai Food Pro Expo',
    venue: 'Chennai Trade Centre, Chennai, India',
    date: '9, 10, 11 - Aug, 2024',
    images: [
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg1.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg2.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg3.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg4.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg5.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg6.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg7.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg8.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg9.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg10.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg11.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg12.webp'),
      require('../assets/Gallery/ChennaiExpo/ChennaiExpoImg13.webp'),
    ],
  },
  surat: {
    title: 'Surat Tech Cloud ERP',
    description: 'Discover the Tech Cloud ERP Software in Surat...',
    images: [
      require('../assets/Gallery/SuratExpo/SuratExpoImg1.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg2.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg3.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg4.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg5.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg6.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg7.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg8.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg9.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg10.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg11.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg12.jpg'),
      require('../assets/Gallery/SuratExpo/SuratExpoImg13.jpg'),
    ],
  },
  GaneshChaturdhi: {
    title: 'Ganesh Chaturdhi Celebrations - 2024',
    venue: 'Office Unit No. 705, Jain Sadguru Capital Park, Madhapur, Hyderabad, Telangana, India-500081.',
    date: '19,20,21,22 - Sep, 2024',
    description: 'Discover the Tech Cloud ERP Software in Surat...',
    images: [
      require('../assets/Gallery/Events/GaneshChaturdhi/GaneshChaturdhiImg1.webp'),
      require('../assets/Gallery/Events/GaneshChaturdhi/GaneshChaturdhiImg2.webp'),
      require('../assets/Gallery/Events/GaneshChaturdhi/GaneshChaturdhiImg3.webp'),
      require('../assets/Gallery/Events/GaneshChaturdhi/GaneshChaturdhiImg6.webp'),
      require('../assets/Gallery/Events/GaneshChaturdhi/GaneshChaturdhiImg7.webp'),
    ],
  },
};

// gallery data
export const galleryData = {
  expo: [
    {
      id: 'surat',
      location: 'Surat',
      venue: 'Bharath Bhavan, Pragathi Maidan',
      date: '15 & 16 - June, 2024',
      img: require('../assets/Gallery/SuratExpo/SuratExpoThumbnail.png'),
      alt: 'World Food India 2024 in Delhi',
    },
    {
      id: 'chennai',
      location: 'Chennai',
      venue: 'Chennai Trade Centre, Chennai, India',
      date: '9, 10, 11 - Aug, 2024',
      img: require('../assets/Gallery/ChennaiExpo/ChennaiExpoExhibition.png'),
      alt: 'World Food India 2024 in Delhi',
    },
    {
      id: 'hyderabad',
      location: 'Hyderabad',
      venue: 'HITEX Exhibition Centre, Hitex Road, Kothaguda',
      date: '13, 14, 15 - Sep, 2024',
      img: require('../assets/Gallery/HyderabadExpo/HyderabadExpoThumbnail.png'),
      alt: 'Tech Cloud ERP at HITEX Hyderabad',
    },
    {
      id: 'delhi',
      location: 'Delhi',
      venue: 'Bharath Bhavan, Pragathi Maidan',
      date: '19, 20, 21, 22 - Sep, 2024',
      img: require('../assets/Gallery/DelhiExpo/DelhiExpoThumbnail.webp'),
      alt: 'World Food India 2024 in Delhi',
    },
    {
      id: 'coimbatore',
      location: 'Coimbatore',
      venue: 'Bharath Bhavan, Pragathi Maidan',
      date: '19, 20, 21, 22 - Sep, 2024',
      img: require('../assets/Gallery/Coimbature pics/CoimbatoreExpoThumbnail.png'),
      alt: 'World Food India 2024 in Delhi',
    }
  ],
 
  others: [
    {
      id: 'delhi2',
      location: 'Delhi',
      venue: 'Bharath Bhavan, Pragathi Maidan',
      date: '19,20,21,22,Sep,2024',
      img: require('../assets/Gallery/DelhiExpo/MedicalExpoThumbnail.webp'),
      alt: 'World Food India 2024 in Delhi',
    },
  ],
};

export const faqContent = {
  subTitle: "FAQs",
  title: "Answers to Your Questions",
  faqs: [
    {
      question: "What is Bike insurance?",
      answer: "Bike insurance provides financial protection for your motorcycle and its rider. It covers damage from accidents, theft, and other risks, while also offering liability coverage for injuries or damages caused to others."
    },
    {
      question: "Why do I need Bike insurance?",
      answer: "Bike insurance is essential to cover unexpected damages or accidents. It protects you financially and ensures you can handle liabilities arising from injuries or damages to others."
    },
    {
      question: "What are the different types of Bike insurance?",
      answer: "There are various types of bike insurance, including comprehensive coverage, third-party liability coverage, and personal accident cover, each offering different levels of protection."
    },
    {
      question: "How much Bike insurance coverage do I need?",
      answer: "The amount of bike insurance coverage you need depends on various factors, including the value of your bike, your usage, and personal preferences. It's advisable to get enough coverage to handle significant repairs or replacements and liabilities."
    }
  ],
  footerText: "When selecting a bike insurance policy online, it's crucial to evaluate several key factors to ensure you get the best coverage for your needs. First, determine the type of plan that suits you, such as a comprehensive policy for broader protection or third-party insurance for basic coverage. Next, use online comparison tools to assess different policies based on features, premiums, and value."
}

export const productData = {
  'tech-cloud-erp': {
    productTitle: 'Tech Cloud Enterprise Resource Planning',
    heading: "ERP Solutions",
    description: "Our ERP solutions are designed to streamline and optimize operations.",
    imageSrc : require("../assets/Products/products_main_img.webp"),
    mainTitle : "Our ERP Solutions Overview",
    title : "Cloud Based ERP Software",
    productDescription: [
      "Tech Cloud ERP, a web-based software from Hyderabad, India, excels in modern Business Process Management across diverse industries. Developed in the cloud, it integrates robust functionalities for high-end enterprise resource planning, ensuring a superior user experience through advanced technology and user-friendly design.",
      "To obtain a better understanding of ERP software solutions and their revolutionary impact on enterprises, you must first understand what ERP is. ERP, or Enterprise Resource Planning, combines critical company functions such as sales, marketing, inventory, production, accounting, and human resources into a cohesive system. Cloud-based ERP software, such as ours in Hyderabad, India, improves efficiency by centralising and streamlining operations throughout the organisation."
    ],
    cards: [
      {
        image: require("../assets/Products/tcerp/sale.png"),
        title: "Sales & Marketing",
        text: "Sales and marketing integration within ERP systems revolutionizes customer engagement, streamlining operations for unparalleled efficiency and driving dynamic business growth.",
        items: [
          "Handles pre-sales and sales activities of the organization.",
          "Complete stock-to-dock tracking of sales order processing cycle.",
          "Detailed Customers/ Business Partners/ Dealers database.",
        ]
      },
      {
        image: require("../assets/Products/tcerp/purchase.png"),
        title: "Purchase Management",
        text: "Streamline procurement processes, from requisition to payment, with our ERP's robust purchase management module.",
        items: [
          "Supplier invoices & payments to suppliers",
          "Enquiries to multiple vendors",
          "Configurable terms & conditions.",
        ]
      },
      {
        image: require("../assets/Products/tcerp/stores.png"),
        title: "Stores & Inventory",
        text: "Efficiently manage inventory across multiple stores with our ERP's comprehensive stores and inventory management solution.",
        items: [
          "Online status of item quantity.",
          "Multiple levels of classification of items.",
          "Expiry control and warranty tracking.",
        ]
      },
      {
        image: require("../assets/Products/tcerp/production.png"),
        title: "Production",
        text: "Optimize production workflows and resources with our ERP's advanced production management capabilities.",
        items: [
          "Supports batch, discrete, made to order and made to stock types of production.",
          "Multi level bill of materials.",
          "Material requirement planning based on sales order and production plan.",
        ]
      },
      {
        image: require("../assets/Products/tcerp/quality.png"),
        title: "Quality Check",
        text: "Ensure product integrity and compliance with rigorous quality checks using our ERP's sophisticated quality management tools.",
        items: [
          "Define inspection plans and checklists",
          "Assign inventory with user-defined QC statuses",
          "Generate customized Certificates of Analysis",
        ]
      },
      {
        image: require("../assets/Products/tcerp/plantmain.png"),
        title: "Plant Maintenance",
        text: "Keep your plant running smoothly with our ERP's plant maintenance module, offering seamless scheduling and tracking of maintenance tasks for optimal operational efficiency.",
        items: [
          "Equipment Details",
          "Preventive Maintenance",
          "Utility Details and maintenance",
        ]
      },
      {
        image: require("../assets/Products/tcerp/finance.png"),
        title: "Finance",
        text: "Gain unparalleled financial control and insights with our ERP's robust finance module, ensuring streamlined processes and compliance with regulatory standards.",
        items: [
          "Total flow of money (Cash/Bank) and total expenditures.",
          "Bank account transfers.",
          "General Ledger inquiries.",
        ]
      },
      {
        image: require("../assets/Products/tcerp/humanresouce.png"),
        title: "Human Resources",
        text: "Streamline HR processes and nurture talent with our ERP's intuitive human resource module, facilitating efficient management of employee data and development initiatives.",
        items: [
          "Employee Database.",
          "Dynamic HR Letter templates.",
          "Attendance Management.",
        ]
      },
      {
        image: require("../assets/Products/tcerp/assetmange.png"),
        title: "Asset Management",
        text: "Maximize asset performance and minimize downtime with our ERP's powerful asset management module, offering streamlined tracking, maintenance, and optimization tools for efficient operations.",
        items: [
          "Manage depreciable/non-depreciable assets and customize asset depreciation.",
          "Import/export asset records.",
          "Assign Vision Units to an asset to track billing value.",
        ]
      }
    ],
    tabData: {
      requirement: {
        image: require("../assets/Products/tcerp/requiregath.webp"),
        content: [
          { title: 'Identify Client Needs:', description: "Deeply understand the client's business objectives, pain points, and opportunities." },
          { title: 'Stakeholder Collaboration:', description: 'Engage with key decision-makers to ensure all requirements are well-documented.' },
          { title: 'Customized Solutions:', description: 'Shape solutions tailored to the unique needs of the business.' },
        ],
      },
      implementation: {
        image: require("../assets/Products/tcerp/impletrain.webp"), 
        content: [
          { title: 'System Setup:', description: 'Install, configure, and customize the ERP system.' },
          { title: 'Training:', description: 'Train the client’s team on how to use the system efficiently.' },
          { title: 'Documentation:', description: 'Create and provide all necessary documentation for future reference.' },
        ],
      },
      goLive: {
        image: require("../assets/Products/tcerp/golive.webp"), 
        content: [
          { title: 'Live System Activation:', description: 'Transition from the legacy system to the new ERP system.' },
          { title: 'Monitoring:', description: 'Monitor the system for issues and ensure smooth operation.' },
          { title: 'User Support:', description: 'Provide on-site and remote support during the go-live phase.' },
        ],
      },
      postGoLive: {
        image: require("../assets/Products/tcerp/pogostlive.webp") ,
        content: [
          { title: 'Ongoing Support:', description: 'Provide continued support to resolve any post-go-live issues.' },
          { title: 'System Optimization:', description: 'Fine-tune the system based on real-world usage.' },
          { title: 'Upgrades & Maintenance:', description: 'Ensure the system stays updated with the latest features and security patches.' },
        ],
      },
    },
    tabsHeadings: {
      requirement: "Requirement Gathering",
      implementation: "Implementation & Training",
      goLive: "Go Live & Onboarding",
      postGoLive: "Post-Go-Live Support",
    }
  },
  'customer-relationship-management': {
    productTitle: 'Tech Cloud Customer Relationship Management',
    heading: "CRM Solutions",
    description: "Elevate customer interactions with our CRM for personalized growth solutions.",
    imageSrc : require("../assets/Products/crm-pdt.webp"),
    mainTitle : "Our CRM Solutions Overview",
    title : "Cloud Based CRM Software",
    productDescription: [
      "Our web and cloud-based CRM software in Hyderabad helps companies manage customer and partner relationships. It automates routine sales, service, and marketing tasks, freeing your team to generate leads and close deals. With custom features, our CRM software is easy, adaptable, and affordable for small and medium-sized businesses. ",
      "Tech Cloud CRM allows for targeted results with easily customizable features, helping you and your sales team do the right things at the right time."
    ],
    cards: [
      {
        image: require("../assets/Products/CRM/contact.png"),
        title: "Contact Management",
        text: "Organize contacts, create leads, and import them for client communication and marketing campaigns. Duplicate contact details to save time and improve efficiency.",
        items: [
          "Organize and import contacts for seamless client communication.",
          "Create and manage leads to boost marketing efforts.",
          "Duplicate contact details to save time and increase efficiency.",
        ]
      },
      {
        image: require("../assets/Products/CRM/target customers.png"),
        title: "Target Customers",
        text: "Segment customers using contact database info to craft targeted marketing campaigns, enhancing product/service appeal to your ideal audience.",
        items: [
          "Segment customers for personalized marketing campaigns.",
          "Enhance product and service appeal to your target audience.",
          "Leverage contact database insights to drive engagement.",
        ]
      },
      {
        image: require("../assets/Products/CRM/organise.png"),
        title: "Organise Meetings",
        text: "Segment customers using contact database info to craft targeted marketing campaigns, enhancing product/service appeal to your ideal audience.",
        items: [
          "Schedule meetings and send invites seamlessly.",
          "Track meeting notes for efficient business activities.",
          "Set meeting durations and reminders to stay organized.",
        ]
      },
      {
        image: require("../assets/Products/CRM/manage.png"),
        title: "Manage Opportunities",
        text: "Track prospective sales and improve your bottom line by managing opportunities, recording expected revenue, and close dates to generate accurate sales pipeline reports. Combine emails, calls, tasks, and documents to identify necessary actions.",
        items: [
          "Manage opportunities by tracking expected revenue and close dates.",
          "Generate accurate sales pipeline reports for better forecasting.",
          "Combine emails, calls, tasks, and documents to drive necessary actions.",
        ]
      },
      {
        image: require("../assets/Products/CRM/Streamline workflow.png"),
        title: "Streamline Workflow",
        text: "Generate leads from word of mouth, email campaigns, and webinars. Assign to sales team with tasks, quotes, and calls for efficient follow-up and deal closure.",
        items: [
          "Generate leads from word of mouth, email campaigns, and webinars.",
          "Assign tasks, quotes, and calls to sales teams for follow-up.",
          "Streamline workflow for faster deal closures.",
        ]
      },
      {
        image: require("../assets/Products/CRM/Invoicing & Order Management.png"),
        title: "Invoicing & Order Management",
        text: "Quickly generate mass quotes from won opportunities with Tech Cloud CRM to save time and maintain competitive edge. Seamlessly convert quotes into orders upon client confirmation for streamlined sales processes.",
        items: [
          "Generate mass quotes from won opportunities to save time.",
          "Seamlessly convert quotes into orders upon client confirmation.",
          "Streamline sales processes to maintain a competitive edge.",
        ]
      },
      {
        image: require("../assets/Products/CRM/Case Management.png"),
        title: "Case Management",
        text: "Efficiently track and resolve customer issues with Tech Cloud CRM to enhance satisfaction and loyalty. Prioritize and delegate tasks promptly for timely resolution of critical issues.",
        items: [
          "Track and resolve customer issues to boost satisfaction and loyalty.",
          "Prioritize and delegate tasks for timely issue resolution.",
          "Enhance customer service efficiency with streamlined case management.",
        ]
      },
      {
        image: require("../assets/Products/CRM/projectmanage.png"),
        title: "Project Management",
        text: "Effortlessly manage projects with Tech Cloud CRM by creating tasks and integrating project-related documents. Optimize project timelines by allocating hours and days effectively.",
        items: [
          "Create tasks and integrate project documents for seamless management.",
          "Optimize timelines by efficiently allocating hours and days.",
          "Streamline project workflows for better execution and results.",
        ]
      },
      {
        image: require("../assets/Products/CRM/email marketing.png"),
        title: "Email Marketing",
        text: "Use Tech Cloud CRM for targeted campaigns to inform customers about new products/services, engaging them with relevant content. Prioritize valuable customers from your target list to drive sales effectively.",
        items: [
          "Launch targeted campaigns to promote new products and services.",
          "Engage customers with relevant and personalized content.",
          "Prioritize high-value customers to drive effective sales.",
        ]
      }
    ],
    tabData: {
      requirement: {
        image: require("../assets/Products/CRM/crmrequire.webp"),
        content: [
          { title: 'Identify CRM Needs:', description: "Understand the organization's goals for managing customer relationships." },
          { title: 'Team Collaboration:', description: 'Work with sales, marketing, and support teams to define specific CRM requirements.' },
          { title: 'Tailored CRM Approach:', description: 'Design a CRM solution tailored to your business processes and customer journey.' },
        ],
      },
      implementation: {
        image: require("../assets/Products/CRM/crmimplementation.webp"),
        content: [
          { title: 'CRM System Setup:', description: 'Install, configure, and customize the CRM system to meet your business needs.' },
          { title: 'Training & Enablement:', description: 'Train employees on how to efficiently use the CRM system for their roles.' },
          { title: 'Data Import & Migration:', description: 'Seamlessly migrate customer and business data into the new CRM system.' },
        ],
      },
      goLive: {
        image: require("../assets/Products/CRM/crmgolive.webp"),
        content: [
          { title: 'Go Live Activation:', description: 'Make the CRM system live and accessible for all users.' },
          { title: 'Real-time Monitoring:', description: 'Monitor system performance and address issues during the go-live phase.' },
          { title: 'User Support:', description: 'Provide on-site and remote support to ensure smooth adoption.' },
        ],
      },
      postGoLive: {
        image: require("../assets/Products/CRM/crmpostgolive.webp"),
        content: [
          { title: 'Continuous Support:', description: 'Offer ongoing support to resolve any post-launch challenges.' },
          { title: 'CRM Optimization:', description: 'Optimize the CRM system based on user feedback and business requirements.' },
          { title: 'Regular Updates:', description: 'Ensure the CRM system stays up-to-date with new features and security patches.' },
        ],
      },
    },
    tabsHeadings: {
      requirement: "CRM Requirement Analysis",
      implementation: "CRM Implementation",
      goLive: "Go Live & User Adoption",
      postGoLive: "Post-Go-Live CRM Optimization",
    }
  },
  'point-of-sale':{
      productTitle: 'Tech Cloud Point of Sale',
      heading: "Point of Sale",
      description: "Unlock growth and increase profits with our efficient, advanced POS system.",
      imageSrc : require("../assets/Products/pos-pdt.webp"),
      mainTitle : "Popular Tech Cloud POS",
      title : "Advanced Cloud-Based POS for Retail Stores",
      productDescription: [
        "Tech Cloud POS was established to empower restaurants and retailers with cutting-edge technology, driving sales growth, enhancing decision-making, and elevating customer satisfaction. We provide the best POS software in Hyderabad, India, which helps to synchronize point-of-sale data with third-party applications. Our solutions will work with the leading e-commerce applications, allowing you to service your customers via any channel.The menu for POS includes customer information, items, sales, employees, and messages.",
        "Our POS system manages billing based on customer orders, distinguishing between new and existing customers. Existing customer detail s are fetched from ERP, products selected for purchase, and payment processed via cash, debit, or credit card. Invoices are generated and provided to customers. Product availability is synced with ERP's Inventory module, with intuitive icons for easy POS navigation, supported by image uploads for item details."
      ],
      cards: [
          {
            image: require("../assets/Products/POS/webdevelopment.png"),
            title: "Web Based",
            text: "Leverage Tech Cloud CRM’s web-based analytics for real-time insights into customer behavior and sales trends. Access data anytime to optimize business strategies.",
            items: [
              "Real-time insights into customer behavior.",
              "Access data anytime, anywhere.",
              "Optimize strategies with cloud analytics.",
            ]
          },
          {
            image: require("../assets/Products/POS/customerunderstanding.png"),
            title: "Customer Understanding",
            text: "Deepen your understanding of customers by analyzing preferences and feedback to enhance engagement and satisfaction.",
            items: [
              "Analyze preferences and behaviors.",
              "Leverage feedback for better engagement.",
              "Tailor offerings to improve satisfaction.",
            ]
          },
          {
            image: require("../assets/Products/POS/discount.png"),
            title: "Discounts",
            text: "Utilize discounts effectively to drive sales and enhance customer loyalty. Implement targeted promotions to attract new customers and retain existing ones.",
            items: [
              "Drive sales with targeted discount promotions.",
              "Enhance customer loyalty through strategic offers.",
              "Encourage repeat purchases with enticing deals.",
            ]
          },
          {
            image: require("../assets/Products/POS/inventory.png"),
            title: "Inventory Optimization",
            text: "Optimize your inventory management with Tech Cloud CRM. Track stock levels and forecast demand to enhance efficiency and reduce costs.",
            items: [
              "Monitor stock levels for better management.",
              "Forecast demand to reduce excess inventory.",
              "Streamline operations to cut costs.",
            ]
          },
          {
            image: require("../assets/Products/POS/cashmanage.png"),
            title: "Cash Management",
            text: "Effective cash management is essential for maintaining financial stability and ensuring smooth operations. By monitoring cash flow, forecasting expenses.",
            items: [
              "Monitor cash flow for better financial control.",
              "Forecast expenses to avoid shortfalls.",
              "Manage receivables and payables efficiently.",
            ]
          },
          {
            image: require("../assets/Products/POS/customreceipts.png"),
            title: "Custom Receipts",
            text: "Tailored receipts improve the customer experience by providing personalized details and relevant information. With Tech Cloud CRM, you can create customized receipts.",
            items: [
              "Personalize receipts for a better customer experience.",
              "Include relevant details to enhance engagement.",
              "Strengthen brand identity with custom designs.",
            ]
          },
          {
            image: require("../assets/Products/POS/fasttraining.png"),
            title: "Fast Staff Training",
            text: "Rapid staff training is essential for maintaining operational efficiency. With Tech Cloud CRM, new team members can quickly learn to navigate the system and utilize its features effectively.",
            items: [
              "Quick onboarding for new staff.",
              "Minimize downtime during training.",
              "Boost productivity with efficient learning.",
            ]
          },
          {
            image: require("../assets/Products/POS/useraccount.png"),
            title: "User Accounts",
            text: "Manage user accounts securely with Tech Cloud CRM to ensure personalized experiences and tailored access. Control permissions and enhance security to protect sensitive information.",
            items: [
              "Securely manage user accounts for tailored access.",
              "Control permissions for enhanced security.",
              "Personalize experiences for each user.",
            ]
          },
          {
            image: require("../assets/Products/POS/data-analysis.png"),
            title: "Data Analysis",
            text: "Utilize Tech Cloud CRM to analyze data and uncover valuable insights and trends that drive informed decision-making. Transform raw data into actionable strategies to enhance performance and growth.",
            items: [
              "Uncover insights to guide business decisions.",
              "Identify trends for strategic planning.",
              "Transform data into actionable strategies.",
            ]
          }
        ],
        tabData: {
          requirement: {
            image: require("../assets/Products/POS/posrequirement.webp"),
            content: [
              { title: 'Understand Retail Needs:', description: "Identify the specific POS requirements based on store size, transaction volume, and customer experience goals." },
              { title: 'Stakeholder Collaboration:', description: 'Engage with store managers and decision-makers to gather comprehensive requirements.' },
              { title: 'Tailored POS Solutions:', description: 'Design a POS system that meets the unique needs of your retail operations.' },
            ],
          },
          implementation: {
            image: require("../assets/Products/POS/posimple.webp"), 
            content: [
              { title: 'POS System Setup:', description: 'Install, configure, and customize the POS system to match store operations.' },
              { title: 'Staff Training:', description: 'Train staff to use the POS system efficiently, covering transactions, inventory, and reporting.' },
              { title: 'Documentation & Support:', description: 'Provide user guides and ongoing support for staff during the implementation phase.' },
            ],
          },
          goLive: {
            image: require("../assets/Products/POS/posgolive.webp"),
            content: [
              { title: 'POS Go-Live:', description: 'Launch the POS system in your store and ensure all staff are comfortable with its usage.' },
              { title: 'Monitoring Performance:', description: 'Monitor system performance, address any issues, and ensure smooth operations post-launch.' },
              { title: 'Live Support:', description: 'Provide real-time support for any operational challenges during the go-live phase.' },
            ],
          },
          postGoLive: {
            image: require("../assets/Products/POS/postgolive.webp"),
            content: [
              { title: 'Ongoing Support & Maintenance:', description: 'Offer continued support to resolve any post-launch challenges and ensure system stability.' },
              { title: 'POS Optimization:', description: 'Optimize the POS system based on feedback and real-time performance data.' },
              { title: 'System Updates:', description: 'Keep the system up-to-date with new features and security improvements.' },
            ],
          },
        },
        tabsHeadings: {
          requirement: "POS Requirement Gathering",
          implementation: "POS Implementation & Training",
          goLive: "Go Live & Monitoring",
          postGoLive: "Post-Go-Live Support & Optimization",
        }
    
  },
  'trading-software': {
    productTitle: 'Tech Cloud Trading Software',
      heading: "Trading software",
      description: "Enhance customer relationships and streamline operations with our trading software.",
      imageSrc : require("../assets/Products/trading-pdt.webp"),
      mainTitle : "Why Choose Tech Cloud ERP",
      title : "A Perfect Software for Traders",
      productDescription: [
        "Tech Cloud Trading Software in Hyderabad offers a robust, cloud-based solution tailored for trading businesses. Our platform ensures seamless order management, real-time insights, and enhanced decision-making capabilities. From lead conversion to streamlined operations, we empower traders to excel in a competitive market.",
      ],
        cards: [
          {
            image: require("../assets/Products/trading/newcustomer.png"),
            title: "New Customers",
            text: "Generate quality leads by creating engaging, valuable content that attracts potential customers and encourages them to share their contact information.",
            items: [
              "Capture new leads through word of mouth, email campaigns, and webinars.",
              "Delegate these leads to your sales team equipped with tasks, quotes, and calls modules to close deals or reassign leads.",
              "Schedule calls or send out emails to those leads.",
            ]
          },
          {
            image: require("../assets/Products/trading/customermanage.png"),
            title: "Customer Management",
            text: "Streamline customer management by efficiently tracking interactions, resolving issues promptly, and maintaining strong relationships to enhance satisfaction and loyalty.",
            items: [
              "A Customer Management System is essential for collecting and collating customer data in large companies.",
              "Even the smallest organizations require a customer management system.",
              "Customer Management Systems capture, research, and analyze customer behavior, buying preferences, and demographics, even in small organizations.",
            ]
          },
          {
            image: require("../assets/Products/trading/purchase.png"),
            title: "Purchase Management",
            text: "Optimize purchase management by efficiently sourcing, acquiring, and tracking inventory to ensure timely and cost-effective procurement.",
            items: [
              "Purchase Management is considered to be very important function of Materials Management in a company.",
              "Nowadays, increasing competition and market demands, along with resource scarcity, have prompted organizations to reassess their purchasing activities.",
              "The purchasing department's functions have expanded to include verifying supplier credentials, ensuring timely material delivery, and inspecting material quality.",
            ]
          },
          {
            image: require("../assets/Products/trading/streamline.png"),
            title: "Streamline Warehouse Management",
            text: "Enhance efficiency and accuracy in warehouse management through optimized inventory control, streamlined workflows, and advanced technology integration.",
            items: [
              "The Streamline Warehouse Management System is a subscription-based inventory management system that is hosted, ensuring no technical issues for users.",
              "There are no upfront costs, allowing for convenient month-to-month payments, ensuring your version is always up to date every time you log in.",
              "The software has been specifically designed with a user-centered approach that prioritizes customer experience.",
            ]
          },
          {
            image: require("../assets/Products/trading/shipping.png"),
            title: "Reduced Shipping Costs",
            text: "Lower shipping costs through strategic optimization of logistics routes, carrier negotiations, and efficient packaging solutions.",
            items: [
              "Get acquainted with your representative.",
              "Leverage flat rate shipping.",
              "Negotiate shipping rates.",
            ]
          },
          {
            image: require("../assets/Products/trading/accounts.png"),
            title: "Accounts Maintenance",
            text: "Ensure seamless account maintenance by promptly updating information, monitoring transactions, and addressing customer inquiries to uphold satisfaction and trust.",
            items: [
              "A trading account can be any investment account containing securities, cash or other holdings.",
              "These investors frequently trade assets within the same session, subjecting their accounts to special regulations.",
              "A trading account can hold securities, cash, and other investment vehicles, similar to any other brokerage account.",
            ]
          }
        ],
        tabData: {
          discovery: {
            image: require("../assets/Products/trading/discovery.webp"), 
            alt: "Alt text for discovery image",
            content: [
              { title: 'Understand Business Goals:', description: "Gain insights into the business's trading objectives, pain points, and market opportunities." },
              { title: 'Stakeholder Engagement:', description: 'Collaborate with key team members to understand expectations and priorities for the software.' },
              { title: 'Identify Key Challenges:', description: 'Focus on understanding trading cycles, bottlenecks, and competitive pressures.' },
            ],
          },
          implementation: {
            image: require("../assets/Products/trading/implemenattion.webp"),
            alt: "Alt text for implementation image",
            content: [
              { title: 'System Configuration:', description: 'Install and configure ERP software to meet trading-specific needs.' },
              { title: 'Team Training:', description: 'Ensure that all users are trained to handle trading workflows, inventory, and customer management effectively.' },
              { title: 'Documentation Creation:', description: 'Create comprehensive user guides and process documentation for reference.' },
            ],
          },
          goLive: {
            image: require("../assets/Products/trading/tradinggolive.webp"),
            alt: "Alt text for go live image", 
            content: [
              { title: 'System Launch:', description: 'Officially activate the trading ERP system, transitioning from legacy solutions.' },
              { title: 'Monitoring & Adjustment:', description: 'Track system performance and make any necessary real-time adjustments.' },
              { title: 'Support & Guidance:', description: 'Provide ongoing support during the initial go-live phase to resolve any user issues.' },
            ],
          },
          optimization: {
            image: require("../assets/Products/trading/tradingpostlive.webp"),
            alt: "Alt text for optimization image", 
            content: [
              { title: 'System Enhancements:', description: 'Identify areas for improvement based on user feedback and operational performance.' },
              { title: 'Continuous Support:', description: 'Provide continuous support to resolve emerging issues and optimize trading operations.' },
              { title: 'Upgrades & Features:', description: 'Ensure the system is equipped with the latest trading tools and capabilities.' },
            ],
          },
        },
        tabsHeadings: {
          discovery: "Discovery & Planning",
          implementation: "Implementation & Training",
          goLive: "Go Live & Support",
          optimization: "Post-Go-Live Optimization",
        }

  },
  'Ecommerce-software': {
    productTitle: 'Tech Cloud E-Commerce Software',
      heading: "Ecommerce Solutions",
      description: "Our services encompass implementation, training, and support for seamless e-commerce and ERP integration.",
      imageSrc : require("../assets/Products/ecommerce-pdt.webp"),
      mainTitle : "Our E-commerce Overview",
      title : "Tech Cloud E-Commerce",
      productDescription: [
        "Tech Cloud ERP, a web-based software from Hyderabad, India, excels in modern Business Process Management across diverse industries. Developed in the cloud, it integrates robust functionalities for high-end enterprise resource planning, ensuring a superior user experience through advanced technology and user-friendly design.",
        "To obtain a better understanding of ERP software solutions and their revolutionary impact on enterprises, you must first understand what ERP is. ERP, or Enterprise Resource Planning, combines critical company functions such as sales, marketing, inventory, production, accounting, and human resources into a cohesive system. Cloud-based ERP software, such as ours in Hyderabad, India, improves efficiency by centralising and streamlining operations throughout the organisation."
      ],
        cards: [
          {
            image: require("../assets/Products/ecommerce/automation.png"),
            title: "Automation",
            text: "Experience the ease of transparent pricing with our cutting-edge automation, providing instant clarity on costs from taxes to shipping, ensuring a seamless shopping journey for our valued customers.",
            items: [
              "Enjoy transparent pricing for clarity on all costs.",
              "Streamline the shopping journey with automated calculations.",
              "Enhance customer satisfaction with seamless transactions.",
            ]
          },
          {
            image: require("../assets/Products/ecommerce/website-builder.png"),
            title: "Website Builder",
            text: "Craft your dream website effortlessly with our intuitive website builder, designed to empower you with creative freedom and seamless functionality.",
            items: [
              "Effortlessly create your dream website with user-friendly tools.",
              "Enjoy creative freedom with customizable templates and features.",
              "Experience seamless functionality for a smooth website-building process.",
            ]
          },
          {
            image: require("../assets/Products/ecommerce/database.png"),
            title: "Central Database",
            text: "Streamline your operations with our centralized database solution, providing a secure and efficient hub for all your valuable data, accessible anytime, anywhere.",
            items: [
              "Streamline operations with a secure, centralized database.",
              "Access valuable data anytime, anywhere.",
              "Enhance efficiency with a reliable data hub.",
            ]
          },
          {
            image: require("../assets/Products/ecommerce/search.png"),
            title: "Search Function",
            text: "Navigate through vast information effortlessly with our advanced search function, delivering rapid access to precisely what you need, exactly when you need it.",
            items: [
              "Effortlessly navigate vast information with advanced search.",
              "Access exactly what you need in seconds.",
              "Enhance productivity with quick and precise results.",
            ]
          },
          {
            image: require("../assets/Products/ecommerce/integration.png"),
            title: "Integration",
            text: "Seamlessly connect and synchronize your tools and processes with our integration solutions, empowering your business with enhanced efficiency and agility across every aspect of operations.",
            items: [
              "Seamlessly connect tools for improved operational efficiency.",
              "Synchronize processes to enhance business agility.",
              "Empower your organization with integrated solutions.",
            ]
          },
          {
            image: require("../assets/Products/ecommerce/data-visualization.png"),
            title: "Marketing data visualization",
            text: "Elevate your marketing strategy with our suite of advanced tools and comprehensive analysis reports, empowering you to unlock valuable insights and drive impactful decision-making.",
            items: [
              "Utilize advanced tools for effective marketing data visualization.",
              "Access comprehensive analysis reports for deeper insights.",
              "Drive impactful decision-making to enhance marketing strategies.",
            ]
          }
        ],
        tabData: {
          marketAnalysis: {
              image: require("../assets/Products/ecommerce/marketanalaysis.webp"),
              alt: "Ecommerce Market Analysis Image",
              content: [
                  { title: 'Market Trends:', description: "Identify current trends in the ecommerce landscape to stay competitive." },
                  { title: 'Customer Insights:', description: 'Gather insights into customer behavior and preferences.' },
                  { title: 'Competitor Analysis:', description: 'Analyze competitors to understand their strengths and weaknesses.' }
              ]
          },
          productManagement: {
              image: require("../assets/Products/ecommerce/productmanagement.webp"),
              alt: "Ecommerce Product Management Image",
              content: [
                  { title: 'Catalog Creation:', description: 'Efficiently create and manage your product catalog.' },
                  { title: 'Inventory Tracking:', description: 'Monitor stock levels in real-time to avoid shortages.' },
                  { title: 'Product Variants:', description: 'Easily manage different product variations and options.' }
              ]
          },
          orderFulfillment: {
              image: require("../assets/Products/ecommerce/orderfulfilment.webp"),
              alt: "Ecommerce Order Fulfillment Image",
              content: [
                  { title: 'Order Processing:', description: 'Streamline the order processing workflow for faster delivery.' },
                  { title: 'Shipping Integration:', description: 'Integrate with shipping carriers for real-time tracking.' },
                  { title: 'Returns Management:', description: 'Simplify returns processing to enhance customer satisfaction.' }
              ]
          },
          customerEngagement: {
              image: require("../assets/Products/ecommerce/customerengage.webp"),
              alt: "Ecommerce Customer Engagement Image",
              content: [
                  { title: 'Personalized Marketing:', description: 'Use customer data to create targeted marketing campaigns.' },
                  { title: 'Customer Feedback:', description: 'Gather feedback to improve products and services.' },
                  { title: 'Loyalty Programs:', description: 'Implement loyalty programs to increase customer retention.' }
              ]
          }
      },
      tabsHeadings: {
          marketAnalysis: "Market Analysis",
          productManagement: "Product Management",
          orderFulfillment: "Order Fulfillment",
          customerEngagement: "Customer Engagement"
      }
  },
  'hr-managament-software': {
    productTitle: 'Tech Cloud HR Management Software',
      heading: "HR managament Solutions",
      description: "Our expert team delivers top support, empowering your HR department with confidence.",
      imageSrc : require("../assets/Products/hrms-pdt.webp"),
      mainTitle : "Our HR Management Solutions",
      title : "Tech Cloud HRMS",
      productDescription: [
        "Tech Cloud ERP, a web-based software from Hyderabad, India, excels in modern Business Process Management across diverse industries. Developed in the cloud, it integrates robust functionalities for high-end enterprise resource planning, ensuring a superior user experience through advanced technology and user-friendly design.",
        "To obtain a better understanding of ERP software solutions and their revolutionary impact on enterprises, you must first understand what ERP is. ERP, or Enterprise Resource Planning, combines critical company functions such as sales, marketing, inventory, production, accounting, and human resources into a cohesive system. Cloud-based ERP software, such as ours in Hyderabad, India, improves efficiency by centralising and streamlining operations throughout the organisation."
      ],
      cards: [
          {
            image: require("../assets/Products/Hr/recruitment.png"),
            title: "Recruitment",
            text: "Top talent drives our company's success. Our recruitment component excels in managing positions, screening applicants, and optimizing selection processes.",
            items: [
              "Efficiently manage positions and screen applicants.",
              "Optimize the selection process for top talent acquisition.",
              "Streamline recruitment to drive company success.",
            ]
          },
          {
            image: require("../assets/Products/Hr/onboarding.png"),
            title: "On-boarding",
            text: "Effective onboarding through Tech Cloud HRMS ensures engaged and high-performing employees, maximizing organizational success.",
            items: [
              "Ensure engaged and high-performing employees.",
              "Maximize organizational success with effective onboarding.",
              "Streamline the onboarding process for new hires.",
            ]
          },
          {
            image: require("../assets/Products/Hr/welfare.png"),
            title: "Welfare Management",
            text: "ESS module, enables the employee to maintain his/ her own profile that can then checks business updates needed from and by the employee.",
            items: [
              "Enable employees to maintain their own profiles.",
              "Keep updated with essential business information.",
              "Enhance employee engagement through self-service.",
            ]
          },
          {
            image: require("../assets/Products/Hr/training.png"),
            title: "Training and Development",
            text: "Training and development in HRM enhance employee performance by boosting skills and knowledge through education and skill-building.",
            items: [
              "Boost employee performance with targeted training.",
              "Enhance skills and knowledge through continuous education.",
              "Invest in skill-building for organizational growth.",
            ]
          },
          {
            image: require("../assets/Products/Hr/leave.png"),
            title: "Leave and Time Management",
            text: "The international payroll management system helps the end-to-end global payroll information management process, crafted to provide a best tool for all payrolls.",
            items: [
              "Simplify global payroll management for seamless operations.",
              "Provide comprehensive tools for end-to-end payroll information.",
              "Ensure accuracy in managing employee leave and time.",
            ]
          },
          {
            image: require("../assets/Products/Hr/payroll.png"),
            title: "Payroll Management",
            text: "Payroll management involves overseeing the process of calculating and distributing employee salaries, wages, bonuses, and deductions within an organization.",
            items: [
              "Oversee accurate calculation and distribution of salaries.",
              "Manage bonuses and deductions effectively.",
              "Streamline payroll processes for efficiency.",
            ]
          },
          {
            image: require("../assets/Products/Hr/dashboard.png"),
            title: "Dynamic Dashboard",
            text: "Our ERP HRM Module dynamic dashboard provides real-time visualizations of key HR metrics and data, enabling quick insights for informed decision-making.",
            items: [
              "Access real-time visualizations of key HR metrics.",
              "Enable quick insights for informed decision-making.",
              "Simplify data analysis with intuitive dashboards.",
            ]
          },
          {
            image: require("../assets/Products/Hr/versatility.png"),
            title: "Versatile Calendar",
            text: "Manage Events Easily create events and send invites to attendees. Cancel or modify at anytime. Public Holidays Plan for holidays throughout the year by simply selecting from a list of public holidays in your country.",
            items: [
              "Easily create events and manage invites.",
              "Modify or cancel events as needed.",
              "Plan public holidays efficiently from a preset list.",
            ]
          },
          {
            image: require("../assets/Products/Hr/real-time.png"),
            title: "Real-time Collaboration",
            text: "Tech cloud Performance Management streamlines performance appraisals, replacing manual processes with an efficient evaluation cycle.",
            items: [
              "Streamline performance appraisals with automated evaluations.",
              "Replace manual processes with efficient cycles.",
              "Foster a culture of continuous feedback and improvement.",
            ]
          }
        ],
        tabData: {
          employeeManagement: {
              image: require("../assets/Products/Hr/emplyeemange.webp"),
              alt: "HR Employee Management Image",
              content: [
                  { title: 'Employee Profiles:', description: "Maintain detailed profiles for all employees, including personal information and performance history." },
                  { title: 'Attendance Tracking:', description: 'Efficiently monitor employee attendance and punctuality.' },
                  { title: 'Performance Reviews:', description: 'Conduct regular performance reviews to assess employee growth and areas for improvement.' }
              ]
          },
          complianceManagement: {
              image: require("../assets/Products/Hr/compliance.webp"),
              alt: "HR Compliance Management Image",
              content: [
                  { title: 'Regulatory Compliance:', description: 'Ensure compliance with labor laws and regulations to avoid legal issues.' },
                  { title: 'Policy Management:', description: 'Develop and maintain organizational policies that align with legal requirements.' },
                  { title: 'Audit Readiness:', description: 'Prepare for audits with organized records and documentation.' }
              ]
          },
          employeeEngagement: {
              image: require("../assets/Products/Hr/emplayeenage.webp"),
              alt: "HR Employee Engagement Image",
              content: [
                  { title: 'Feedback Mechanisms:', description: 'Implement systems for collecting employee feedback and suggestions.' },
                  { title: 'Recognition Programs:', description: 'Establish programs to recognize and reward employee achievements.' },
                  { title: 'Engagement Surveys:', description: 'Conduct surveys to gauge employee satisfaction and engagement levels.' }
              ]
          },
          analyticsAndReporting: {
              image: require("../assets/Products/Hr/analytics.png"),
              alt: "HR Analytics and Reporting Image",
              content: [
                  { title: 'HR Metrics Analysis:', description: 'Analyze key HR metrics to assess organizational health.' },
                  { title: 'Custom Reports:', description: 'Generate customized reports to meet specific business needs.' },
                  { title: 'Predictive Analytics:', description: 'Use data analytics to predict workforce trends and challenges.' }
              ]
          }
      },
      tabsHeadings: {
          employeeManagement: "Employee Management",
          complianceManagement: "Compliance Management",
          employeeEngagement: "Employee Engagement",
          analyticsAndReporting: "Analytics & Reporting"
      }
  },
  'financial-management-systems': {
    productTitle: 'Tech Cloud Financial Management Systems',
    heading: "Financial Management Solutions",
    description: "Accelerate financial success with our ERP finance module—real-time insights and automation for growth.",
    imageSrc : require("../assets/Products/Finance-pdt.webp"),
    mainTitle : "Finance provide you best services",
    title : "Tech Cloud Finance",
    productDescription: [
      "The finance module in ERP gathers all financial data and generates reports such as ledgers, trail balance data, overall balance sheets, and quarterly financial statements. Using Tech Cloud Finance Software in Hyderabad, India, you can streamline your core finance operations and capture new growth opportunities. Tech Cloud Finance Software integrates key financial and accounting processes, making it easier to manage spend, resources, and financial reporting requirements."
    ],
    cards: [
      {
        image: require("../assets/Products/Finance/functionalities.png"),
        title: "Functionalities",
        text: "Optimize finances with real-time reporting, automated billing, and seamless integration for better decision-making.",
        items: [
          "Optimize finances with real-time reporting.",
          "Automate billing for increased efficiency.",
          "Seamlessly integrate data for better decision-making.",
        ]
      },
      {
        image: require("../assets/Products/Finance/report.png"),
        title: "Inquiries & Reports",
        text: "Gain insights with comprehensive inquiries and generate detailed reports for informed financial decisions.",
        items: [
          "Gain insights through comprehensive inquiries.",
          "Generate detailed reports for informed decisions.",
          "Enhance financial strategies with accurate data.",
        ]
      },
      {
        image: require("../assets/Products/Finance/features.png"),
        title: "Advanced Features",
        text: "Elevate your financial management with cutting-edge features tailored to your business needs.",
        items: [
          "Elevate financial management with advanced tools.",
          "Tailor features to meet specific business needs.",
          "Optimize operations with cutting-edge technology."
        ]
      },
      {
        image: require("../assets/Products/Finance/report.png"),
        title: "Multi-currency",
        text: "Manage global transactions effortlessly with our multi-currency capabilities, ensuring financial accuracy across diverse markets.",
        items: [
          "Effortlessly manage global transactions with multi-currency support.",
          "Ensure financial accuracy across diverse markets.",
          "Streamline international operations for seamless business.",
        ]
      }
    ],
    tabData: {
      requirement: {
          image: require("../assets/Products/Finance/financerequire.webp"),
          content: [
              { title: 'Identify Financial Objectives:', description: "Understand the client's financial goals, challenges, and needs." },
              { title: 'Compliance Review:', description: 'Engage with stakeholders to assess regulatory requirements and compliance needs.' },
              { title: 'Tailored Solutions Design:', description: 'Develop solutions that cater to the specific financial management needs of the business.' }
          ],
      },
      implementation: {
          image: require("../assets/Products/Finance/financeimplementatiin.webp"),
          content: [
              { title: 'System Configuration:', description: 'Install and set up the financial management system according to specifications.' },
              { title: 'User Training:', description: 'Provide comprehensive training to ensure users are proficient in using the system.' },
              { title: 'Documentation Development:', description: 'Create detailed documentation for system processes and user guidelines.' }
          ],
      },
      goLive: {
          image: require("../assets/Products/Finance/onboarding.webp"),
          content: [
              { title: 'System Activation:', description: 'Activate the new financial management system for live operations.' },
              { title: 'Performance Monitoring:', description: 'Monitor system performance to identify any issues during the initial phase.' },
              { title: 'Support Availability:', description: 'Ensure on-site and remote support for users during the go-live period.' }
          ],
      },
      postGoLive: {
          image: require("../assets/Products/Finance/financepostlive.webp"),
          content: [
              { title: 'Continuous Support:', description: 'Provide ongoing support to address any post-implementation issues.' },
              { title: 'System Optimization:', description: 'Fine-tune system features based on user feedback and performance metrics.' },
              { title: 'Updates & Maintenance:', description: 'Regularly update the system to include new features and maintain security standards.' }
          ],
      }
  },
  tabsHeadings: {
      requirement: "Requirement Gathering",
      implementation: "Implementation & Training",
      goLive: "Go Live & Onboarding",
      postGoLive: "Post-Go-Live Support"
  }
  },
  'integrated-erp-software': {
      productTitle: 'Tech Cloud Integrated ERP Software',
      heading: "Integrated ERP Solutions",
      description: "Enhance your business with integrated ERP, CRM, and E- Commerce solutions.",
      imageSrc : require("../assets/Products/integrated-pdt.webp"),
      mainTitle : "Comprehensive Tech Cloud ERP Solutions",
      title : "Tech Cloud Integrated Cloud Based ERP",
      productDescription: [
        "Tech Cloud ERP, based in Hyderabad, India, is a cloud-based solution for the manufacturing industry. It integrates PoS, CRM, finance, and eCommerce, streamlining operations across accounting, HR, sales, and distribution. The system automates order management, real-time customer notifications, and product updates on eCommerce sites, reducing manual effort, saving time, and enhancing productivity for businesses globally.",
      ],
      cards: [
        {
          image: require("../assets/Products/integrated/crm.png"),
          title: "CRM",
          text: "Enhance your customer relationships with Tech Cloud ERP's integrated CRM module. Manage customer interactions, track purchase history, and streamline communications to boost satisfaction and loyalty.",
          items: [
            "Unified customer data for better insights.",
            "Automated customer notifications and follow-ups.",
            "Comprehensive tracking of customer interactions and purchase history.",
          ]
        },
        {
          image: require("../assets/Products/integrated/point.png"),
          title: "Point of Sale (POS)",
          text: "Streamline your sales processes with Tech Cloud ERP's robust POS system. Gain immediate access to customer data, manage transactions efficiently, and keep inventory levels accurate in real-time.",
          items: [
            "Real-time inventory management.",
            "Quick and efficient transaction processing.",
            "Detailed sales reports and analytics.",
          ]
        },
        {
          image: require("../assets/Products/integrated/ecommerce.png"),
          title: "E-Commerce Integration",
          text: "Expand your online presence with Tech Cloud ERP's seamless eCommerce integration. Automate order management, update products in real-time, and provide customers with accurate information for a smooth shopping experience.",
          items: [
            "Automated order and inventory updates.",
            "Real-time synchronization with eCommerce platforms.",
            "Enhanced product management and customer notifications.",
          ]
        }
      ],
      tabData: {
          requirement: {
              image: require("../assets/Products/integrated/integration.webp"),
              content: [
                  { title: 'Define Integrated Needs:', description: "Assess client requirements for integrating various systems into a unified ERP solution." },
                  { title: 'Collaboration with Teams:', description: 'Work with different departments to gather input and ensure comprehensive requirements.' },
                  { title: 'Scalable Solutions Design:', description: 'Develop flexible solutions that can scale with the business needs.' }
              ],
          },
          implementation: {
              image: require("../assets/Products/integrated/system.webp"),
              content: [
                  { title: 'ERP Customization:', description: 'Customize the ERP system to align with business processes and workflows.' },
                  { title: 'Cross-Department Training:', description: 'Train all relevant teams on the integrated system for a smooth transition.' },
                  { title: 'User Documentation:', description: 'Provide detailed manuals and guidelines for users to reference post-implementation.' }
              ],
          },
          goLive: {
              image: require("../assets/Products/integrated/integrationlaunch.webp"),
              content: [
                  { title: 'Integrated System Launch:', description: 'Execute the launch of the integrated ERP system across all departments.' },
                  { title: 'System Performance Monitoring:', description: 'Continuously monitor the system for performance and user feedback during the initial phase.' },
                  { title: 'Immediate User Assistance:', description: 'Offer on-the-spot support to resolve any issues that arise during go-live.' }
              ],
          },
          postGoLive: {
              image: require("../assets/Products/integrated/postinte.webp"),
              content: [
                  { title: 'Continuous Improvement:', description: 'Implement changes based on user feedback to enhance system performance.' },
                  { title: 'System Audits:', description: 'Regularly audit the system to ensure compliance and effectiveness.' },
                  { title: 'Future Upgrades Planning:', description: 'Plan and implement updates to maintain system relevance and security.' }
              ],
          }
      },
      tabsHeadings: {
          requirement: "Integration Needs Analysis",
          implementation: "System Integration Implementation",
          goLive: "Integration Launch & Monitoring",
          postGoLive: "Post-Integration Support"
      }
  },
  'erp-for-restaraunt': {
      productTitle: 'Tech Cloud ERP For Restaraunt Business',
      heading: "Restaraunt ERP Solutions",
      description: "Our expert team ensures seamless expansion with restaurant management software.",
      imageSrc : require("../assets/Products/resturant-pdt.webp"),
      mainTitle : "Streamlined Restaurant Management Solutions",
      title : "Tech Cloud Restaurant ERP",
      productDescription: [
        "Tech Cloud ERP, a web-based software from Hyderabad, India, excels in modern Business Process Management across diverse industries. Developed in the cloud, it integrates robust functionalities for high-end enterprise resource planning, ensuring a superior user experience through advanced technology and user-friendly design.",
        "To obtain a better understanding of ERP software solutions and their revolutionary impact on enterprises, you must first understand what ERP is. ERP, or Enterprise Resource Planning, combines critical company functions such as sales, marketing, inventory, production, accounting, and human resources into a cohesive system. Cloud-based ERP software, such as ours in Hyderabad, India, improves efficiency by centralising and streamlining operations throughout the organisation."
      ],
        cards: [
          {
            image: require("../assets/Products/restaurant/point-of-service.png"),
            title: "POS",
            text: "Efficiently process transactions and manage inventory with our intuitive point of sale system. Streamline your retail operations and enhance our customer experience today.",
            items: [
              "Table management with status (Reserved, Allocated, KOT status, Billing and Payment).",
              "Table reservation and cancellation of reservation are managed.",
              "Easily allocate the table and view guest current status.",
            ]
          },
          {
            image: require("../assets/Products/restaurant/purchase.png"),
            title: "Purchase Management",
            text: "Transform your procurement process with our comprehensive purchase management system. From vendor selection to inventory tracking, we simplify every aspect for enhanced efficiency and cost savings.",
            items: [
              "Approval system by authorized procurement dept.",
              "Multiple time goods receiving against requisition.",
              "Manage Purchase request generated by different dept.",
            ]
          },
          {
            image: require("../assets/Products/restaurant/inventory-management.png"),
            title: "Inventory Management",
            text: "Efficiently track and manage your inventory with our advanced inventory management solutions. From stock levels to supply chain optimization, we help you stay organized and in control.",
            items: [
              "All Inward and Outward flow of materials from the stores is monitored by this module.",
              "Manages the records of items returned to the suppliers and items sent to scrap.",
              "Requisition slip for each item is generated by this module.",
            ]
          },
          {
            image: require("../assets/Products/restaurant/receipe.png"),
            title: "Recipe Preparation",
            text: "Effortlessly create and manage recipes with our intuitive recipe preparation software. From ingredient quantities to cooking instructions, streamline your culinary processes for consistent and delicious results.",
            items: [
              "Once Recipe feeding on standard quantity & utilize in many ways.",
              "Easily generates Request for item of several quantity.",
              "Item conversion process 1 to many and many to 1.",
            ]
          },
          {
            image: require("../assets/Products/restaurant/time-management.png"),
            title: "Reservation Management",
            text: "Simplify your reservation process with our intuitive reservation management system. From booking to guest check-in, streamline operations and enhance customer satisfaction with ease.",
            items: [
              "Total control of guests and quick response of availability.",
              "Online customers can only book tables that are available and eliminates overbooking.",
              "Once a reservation is made the guest receives an email confirmation with a reservation number.",
            ]
          },
          {
            image: require("../assets/Products/restaurant/payroll.png"),
            title: "HR & Payroll Management",
            text: "Streamline your HR and payroll processes with our integrated solutions. From employee onboarding to payroll processing, we simplify HR tasks to save you time and resources.",
            items: [
              "Holidays Management, Shifting Management and Employee Roster Management.",
              "Employee Detail information Management.",
              "Over time and deduction Management.",
            ]
          }
        ],
        tabData: {
          requirement: {
              image:require("../assets/Products/restaurant/resturantassesment.webp"),
              alt: "Requirement Gathering Image",
              content: [
                  { title: 'Understanding Restaurant Needs:', description: "Assess the unique operational challenges and goals specific to the restaurant." },
                  { title: 'Collaborative Requirement Gathering:', description: 'Work closely with restaurant staff to document detailed requirements.' },
                  { title: 'Customized ERP Solutions:', description: 'Tailor the ERP system to fit the specific workflow of the restaurant.' }
              ],
          },
          implementation: {
              image: require("../assets/Products/restaurant/resturantimple.webp"),
              alt: "Implementation Image",
              content: [
                  { title: 'ERP Setup and Configuration:', description: 'Install and configure the ERP system tailored for restaurant operations.' },
                  { title: 'Hands-On Staff Training:', description: 'Conduct training sessions for staff to ensure effective system usage.' },
                  { title: 'Comprehensive User Documentation:', description: 'Provide detailed documentation for reference during and after implementation.' }
              ],
          },
          goLive: {
              image: require("../assets/Products/restaurant/resturantgolive.webp"),
              alt: "Go Live Image",
              content: [
                  { title: 'System Go Live Activation:', description: 'Officially transition to the new ERP system for restaurant management.' },
                  { title: 'Real-Time Operational Monitoring:', description: 'Closely monitor system performance to address any immediate issues.' },
                  { title: 'Dedicated User Support:', description: 'Offer support to restaurant staff during the transition period to ensure smooth operations.' }
              ],
          },
          postGoLive: {
              image: require("../assets/Products/restaurant/resturantpostlive.webp"),
              alt: "Post Go Live Image",
              content: [
                  { title: 'Continued Technical Support:', description: 'Provide ongoing assistance to resolve any post-launch challenges.' },
                  { title: 'Feedback Collection and Adaptation:', description: 'Gather feedback from users for continuous improvement of the ERP system.' },
                  { title: 'Regular System Updates:', description: 'Schedule updates to keep the ERP system aligned with the latest industry practices.' }
              ],
          },
      },
      tabsHeadings: {
          requirement: "Restaurant Needs Assessment",
          implementation: "Implementation Process",
          goLive: "Go Live Transition",
          postGoLive: "Post-Go-Live Support"
      }
  },
  'erp-for-accounting-software':{
      productTitle: 'Tech Cloud ERP for Accounting Software',
      heading: "ERP for Accounting Software",
      description: "Expert support for seamless integration and optimal performance in accounting software.",
      imageSrc : require("../assets/Products/accounting-pdt.webp"),
      mainTitle : "Reliable, efficient delivery",
      title : "Cloud Based ERP Software",
      productDescription: [
        "Tech Cloud ERP, a web-based software from Hyderabad, India, excels in modern Business Process Management across diverse industries. Developed in the cloud, it integrates robust functionalities for high-end enterprise resource planning, ensuring a superior user experience through advanced technology and user-friendly design.",
        "To obtain a better understanding of ERP software solutions and their revolutionary impact on enterprises, you must first understand what ERP is. ERP, or Enterprise Resource Planning, combines critical company functions such as sales, marketing, inventory, production, accounting, and human resources into a cohesive system. Cloud-based ERP software, such as ours in Hyderabad, India, improves efficiency by centralising and streamlining operations throughout the organisation."
      ],
        cards: [
          {
            image: require("../assets/Products/Accouting/module.png"),
            title: "Modules",
            text: "Effective management of sales, purchase, inventory, and finance is crucial for the success of any business.",
            items: [
              "Manage sales, purchase, and inventory efficiently.",
              "Optimize financial processes for business success.",
              "Streamline operations with integrated management modules.",
            ]
          },
          {
            image: require("../assets/Products/Accouting/feature.png"),
            title: "Features",
            text: "The web-based software offers cloud computing, mobile and tablet compatibility, auto backup, and flexible GST incorporation.",
            items: [
              "Access cloud computing with mobile and tablet compatibility.",
              "Benefit from automatic backups for data security.",
              "Incorporate flexible GST management seamlessly.",
            ]
          },
          {
            image: require("../assets/Products/Accouting/support.png"),
            title: "Support",
            text: "We provide training, 24/7 support, quick responses, and quick updates.",
            items: [
              "24/7 support with quick response times.",
              "Comprehensive training for seamless onboarding.",
              "Fast updates to keep your system running smoothly.",
            ]
          },
          {
            image: require("../assets/Products/Accouting/pricing.png"),
            title: "Pricing",
            text: "@ Rs.18,000 Only, our product offers very low pricing, abundant features, and is completely integrated.",
            items: [
              "Affordable pricing at just Rs. 18,000.",
              "Packed with abundant features for optimal use.",
              "Fully integrated for seamless business operations.",
            ]
          }
        ],
        tabData: {
          requirement: {
              image: require("../assets/Products/Accouting/accounting.webp"),
              alt: "Accounting Needs Image",
              content: [
                  { title: 'Understanding Client Objectives:', description: "Identify key financial goals and accounting practices." },
                  { title: 'Compliance Requirements:', description: 'Document necessary compliance with financial regulations and standards.' },
                  { title: 'Customization Expectations:', description: 'Gather requirements for any specific accounting features needed.' },
              ],
          },
          implementation: {
              image: require("../assets/Products/Accouting/implemenuser.webp"),
              alt: "Implementation Image",
              content: [
                  { title: 'Setup Chart of Accounts:', description: 'Define account structures tailored to the business model.' },
                  { title: 'Training Sessions for Users:', description: 'Educate staff on new processes and software functionalities.' },
                  { title: 'Prepare System Documentation:', description: 'Create user manuals for reference and future training.' },
              ],
          },
          goLive: {
              image: require("../assets/Products/Accouting/erpgolive.webp"),
              alt: "Go Live Image",
              content: [
                  { title: 'Launch the ERP System:', description: 'Transition all accounting functions to the new platform.' },
                  { title: 'Data Verification Process:', description: 'Ensure accuracy of migrated financial data.' },
                  { title: 'Immediate User Assistance:', description: 'Provide support for any initial issues encountered.' },
              ],
          },
          postGoLive: {
              image: require("../assets/Products/Accouting/accountingpostgo.webp"),
              alt: "Post Go Live Image",
              content: [
                  { title: 'Regular System Maintenance:', description: 'Conduct periodic reviews to ensure optimal performance.' },
                  { title: 'Continuous User Support:', description: 'Offer ongoing assistance for accounting software use.' },
                  { title: 'Updates for Compliance Changes:', description: 'Keep the system aligned with evolving financial regulations.' },
              ],
          },
      },
      tabsHeadings: {
          requirement: "Accounting Needs Assessment",
          implementation: "Implementation & User Training",
          goLive: "ERP Go Live Process",
          postGoLive: "Post Go Live Support & Maintenance",
      }
  },
 
};
export const businessData = [
 {
  heading: "ERP insights drive business growth",
  description: "Unlock the potential of your business with ERP insights. Gain valuable data-driven perspectives that empower informed decisions, streamline operations, and accelerate growth. Let ERP be the catalyst for your success",
 }
];
export const ExpertiseData = [
  {
    icon: FiEye ,
    title: 'Improved Visibility',
    description: 'Enhance your operational clarity and strategic foresight with improved visibility through advanced analytics tools.',
  },
  {
    icon: MdOutlineSpeed ,
    title: 'Increased Efficiency',
    description: 'Streamlining processes, maximizing resources, and optimizing workflows - efficiency is the heartbeat of progress.',
  },
  {
    icon: TbTruckDelivery ,
    title: 'On-time Delivery',
    description: 'Streamlining processes, maximizing resources, and optimizing workflows - efficiency is the heartbeat of progress.',
  },
  {
    icon: PiCertificate ,
    title: 'Product Quality',
    description: 'Enhance your operational clarity and strategic foresight with improved visibility through advanced analytics tools.',
  },
  {
    icon: HiBarsArrowDown ,
    title: 'Reduced Costs',
    description: 'Enhance your operational clarity and strategic foresight with improved visibility through advanced analytics tools.',
  },
  {
    icon: FaGroupArrowsRotate ,
    title: 'Improved Collaboration',
    description: 'Enhance your operational clarity and strategic foresight with improved visibility through advanced analytics tools.',
  },
];
export const aboutus_data = {
  'about_content': {
    heading: "Tech Cloud ERP Software for Your Business",
    description: "Our web/cloud-based products and solutions boast unassuming functionalities in Business Process Management, tailored for diverse business verticals",
  },
  'termsAndConditionscontent' :{
    heading: "Terms & Conditions",
    description: "By accessing our website or using our services, you agree to abide by our terms and conditions",
  },
  'privacypolicycontent':{
    heading: "Privacy Policy",
    description: "We respect your privacy and are committed to safeguarding your personal information in accordance with our Privacy Policy",
  },
  'mdsprofilecontent' :{
    heading: "MR. RAJ - FOUNDER & CEO",
    description: "Certified SAP expertise, and 27 years of extensive experience, shapes our vision and strategic path",
  },
  'pricingcontent':{
    heading: "Pricing",
    description: "Our Comprehensive solution for established businesses and enterprises.",
  },
  'featurescontent':{
    heading: "Features",
    description: "Our comprehensive solution for established businesses and enterprises.",
  },
  'productcomparison':{
    heading: "Product Comparison",
    description: "Our comprehensive solution for established businesses and enterprises.",
  },
  
};
export const ContactUs_content = {
  heading : "Contact us ",
  description: "Connect with our team today to discover how our expert ERP guidance can streamline your business operations and drive growth. Get in touch now to unlock your business potential.", 
}

export const industryData = [
  { title: "Agriculture", icon: <FaLeaf /> },
  { title: "Beverage", icon: <FaBeer /> },
  { title: "Chemical", icon: <FaIndustry /> },
  { title: "Educational", icon: <FaGraduationCap /> },
  { title: "Electric", icon: <FaBolt /> },
  { title: "Food", icon: <FaPizzaSlice /> },
  { title: "Furniture", icon: <FaCouch /> },
  { title: "Garment", icon: <FaTshirt /> },
  { title: "Jewellery", icon: <FaGem /> },
  { title: "Leather", icon: <FaBook /> },
  { title: "Logistics", icon: <FaTruck /> },
  { title: "Wood", icon: <FaTree /> },
  { title: "Paper", icon: <FaBook /> },
  { title: "Wood", icon: <FaTree /> },
  { title: "Paper", icon: <FaBook /> },
];

export const whyTechCloudERPContent = {
  imageSrc: require("../assets/About_us/why_tech_cloud_erp_img.webp"),
  title: "Why Tech Cloud ERP ?",
  description: [
    'TechCloud ERP provides a comprehensive solution that adapts to your business needs, streamlining processes and increasing efficiency. Our system is built with scalability in mind, allowing you to grow your business without the hassle of migrating to new platforms.',
    'With real-time data access and robust reporting tools, TechCloud ERP gives you insights that drive informed decision-making. Our user-friendly interface ensures that your team can easily adopt the system and start benefiting from improved operational workflows right away.'
  ],
  BusinessIntelligenceContent: { 
    imageSrc: require("../assets/About_us/why_tech_cloud_erp_img.webp"),
    title : "Business Intelligence",
    description: [
      "How do you organize people’s shared potential into a competitive advantage? Support them with data, solve their oddities in business, and encourage their creativity. Tech Cloud ERP’s business intelligence enables your teams to do work faster and smarter by providing a seamless experience. Users can feel easy collaboration, security, and governance by preparing analytics, building data fields and dashboards, and publishing & sharing the data with a single click.",
      "Tech Cloud ERP’s BI Tool is a fully hosted solution, so users can run it in minutes and add users as your needs grow without configuring servers, managing software upgrades, etc."
    ]
  },
  productspageContent:{
imageSrc : require("../assets/Products/products_main_img.webp"),
    title : "Cloud Based ERP Software",
    description: [
      "Tech Cloud ERP, a web-based software from Hyderabad, India, excels in modern Business Process Management across diverse industries. Developed in the cloud, it integrates robust functionalities for high-end enterprise resource planning, ensuring a superior user experience through advanced technology and user-friendly design.",
      "To obtain a better understanding of ERP software solutions and their revolutionary impact on enterprises, you must first understand what ERP is. ERP, or Enterprise Resource Planning, combines critical company functions such as sales, marketing, inventory, production, accounting, and human resources into a cohesive system. Cloud-based ERP software, such as ours in Hyderabad, India, improves efficiency by centralising and streamlining operations throughout the organisation."
    ]
  }
};

export const ReportingSectionContent = {
  heading: 'Upgrade your reporting.',
  subText: 'End the days of emailing spreadsheets around and reviewing stale data in meetings.',
  items: [
    {
      title: 'Empower business users',
      description: 'To analyze data, making sure the right people get the right data.'
    },
    {
      title: 'Send fresh, meaningful data',
      description: 'To the people who need it, in formats they prefer.'
    },
    {
      title: 'Create alerts',
      description: 'That automatically notify teams when important data changes.'
    }
  ],
  imageSrc: require("../assets/BI/report_img.webp"),
  imageAlt: 'Report Summary'
};
export const sliderData = [
  {
    title: 'ERP Software',
    description: 'Make better business decisions with the world\'s leading ERP software, optimizing operations through data and analytics.',
    linkText: 'Explore',
    link: '/products/tech-cloud-erp', 
  },
  {
    title: 'CRM Software',
    description: 'Enhance customer relationships with the world\'s leading CRM software, leveraging data and analytics for success.',
    linkText: 'Explore',
    link: '/products/customer-relationship-management',
  },
  {
    title: 'POS Software',
    description: 'Simplify transactions with the world\'s leading POS software, leveraging data and analytics.',
    linkText: 'Explore',
    link: '/products/point-of-sale', 
  },
  {
    title: 'Trading Software',
    description: 'Improve market strategies with the world\'s leading trading software, using data and analytics.',
    linkText: 'Explore',
    link: '/products/trading-software', 
  },
  {
    title: 'E-Commerce Software',
    description: 'Scale your business with leading eCommerce software, utilizing data to optimize sales.',
    linkText: 'Explore',
    link: '/products/Ecommerce-software', 
  },
];
export const contactData = {
  corporateOffice: {
    address: "Office Unit No. 705, Jain Sadguru Capital Park Madhapur, Hyderabad-500081",
    phoneNumber: "+91 8919439603",
    email: "info@techclouderp.com",
  },
  headquarters: {
    phoneNumber: "+1 (312) 766-3390",
    address: "1101, E Bell Street, Suite-E, Bloomington, USA, IL - 61701",
    email: "contact@techclouderp.com",
  },
};
export const termsAndConditionsData = {
  title: "Terms & Conditions",
  introduction: `
    Tech Cloud ERP terms and conditions administrate your use of this website; by using this website, you
    accept these terms and conditions. In case you want to disagree with these terms and conditions, you
    must not use this website. If you endure browsing this website, you approve to obey with the following
    terms and conditions of use, which together with our privacy policy govern Tech Cloud ERP association with
    you in relation to this website. The term “Tech Cloud ERP” or “us” or “we” refer to the owner of the
    website. The term “you” refers to the user of our website.
  `,
  points: [
    "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
    "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors fully permitted by law. Your use of any information or materials on this website is entirely at your risk, for which we shall not be liable.",
    "This website contains material which is owned by or licensed to us. This material is not limited to the design, layout, look, appearance, and graphics. Reproduction or tampering of information is prohibited other than in accordance with the copyright notice.",
    "This website may also include links to other websites belonging to our business. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s).",
    "You may not create a link to this website from another website or document without our consent.",
    "Your use of this website and any dispute arising out of use of the website is subject to the Cyber Law of India."
  ],
};
// privacy policy

export const privacyPolicyData = {
  title: "Privacy Policy",
  introduction: "As the Top ERP Software Development Company in India, Tech Cloud ERP treats its clients and visitors' privacy with high importance...",
  dataCollection: {
    title: "Data Collection",
    description: "Tech Cloud ERP collects the following types of data:",
    points: [
      "We have your consent. We require opt-in consent for the sharing of any sensitive personal information.",
      "We provide such information to our other trusted businesses or persons for the purpose of processing the information on our behalf.",
      "We have a good faith belief that access, use, preservation or disclosure of such information is reasonably necessary to...",
    ],
  },
  dataSecurity: {
    title: "Data Security",
    content: "Tech Cloud ERP provides a Customized ERP Software in India, so we take appropriate security measures to protect against unauthorized access...",
  },
  changesPolicy: {
    title: "Changes in Privacy Policy",
    content: "It shall be noted that this Privacy Policy may change later or from time to time...",
  },
  contactDetails: {
    title: "Contact Details",
    content: "Should you have any concerns regarding our cloud ERP software privacy policy, you can contact us through phone or email.",
  },
  termsConditions: {
    title: "Terms and Conditions",
    content: "Tech Cloud ERP terms and conditions govern your use of this website...",
  },
  note: "NOTE: IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE WEBSITE.",
};
export const profileData = {
  name: "Mr. Raj",
  description: ` is a Mechanical Engineer and a certified SAP Production Planning Consultant. 
                Known for his dynamic personality, Mr. Raj thrives on engaging with individuals at 
                all levels to enhance his knowledge base. He is a meticulous observer of processes, 
                consistently providing precise solutions swiftly. His profound expertise and 
                leadership abilities have significantly advanced the careers of numerous professionals 
                and have been instrumental in the growth of various businesses.`,
};

// services page data

export const servicesData = {
  'web-development': {
    title: 'Web Development',
    mainTitle :'Core Services for Modern Web Development',
    sectionSubtitle: 'Core web development services include responsive design, front-end and back-end development, CMS integration, API implementation, database management, and performance optimization for enhanced user experience and scalability.', 
    description: [
      "In today's digitized marketing environment, online promotion is essential. Advertisers must use digital marketing tools and techniques to enhance customer value and achieve organizational goals. At Tech Cloud ERP Software Solutions, we boost your global online visibility and profits through effective internet marketing strategies.",
      "Our digital marketing experts excel with web analysis tools, live traffic, and ad creation to attract customers. We identify your target audience, measure interest, and leverage all parameters for your benefit. We optimize your website for search engines, increase visibility, build brand awareness, and generate leads."
    ],
    services: [
      {
        id: 1,
        image: require("../assets/Services/webdevelopment/Webdesign.png"),
        title: "Web Designing",
        description: "Where art meets functionality, crafting digital experiences that captivate, inspire, and resonate with users worldwide.",
      },
      {
        id: 2,
        image: require("../assets/Services/webdevelopment/webdev.png"),
        title: "Web Development",
        description: "The alchemy of code and creativity, sculpting digital landscapes that empower, engage, and connect.",
      },
      {
        id: 3,
        image: require("../assets/Services/webdevelopment/mobile.png"),
        title: "Mobile App Development",
        description: "Mobile app development involves creating software for smartphones and tablets, focusing on functionality, usability, and user experience.",
      },
      {
        id: 4,
        image: require("../assets/Services/webdevelopment/Wordpress.png"),
        title: "WordPress Development",
        description: "WordPress development involves using the WordPress CMS to design, build, and maintain websites with flexibility and ease of use.",
      },
      {
        id: 5,
        image: require("../assets/Services/webdevelopment/ecommerce.png"),
        title: "eCommerce Development",
        description: "E-commerce development focuses on creating online platforms for buying and selling goods or services, streamlining transactions.",
      },
      {
        id: 6,
        image: require("../assets/Services/webdevelopment/webhosting.png"),
        title: "Web Hosting Services",
        description: "Hosting services offer server space and infrastructure for storing and accessing website data, enabling online presence.",
      },
    ],
    faq: [
      {
        question: 'What is web development?',
        answer: 'Web development involves creating and maintaining websites or web applications. It includes aspects like web design, content development, client-side and server-side scripting, and security management.',
      },
      {
        question: 'What are web hosting and domain names?',
        answer: 'Web hosting is the server space where your website’s files are stored. A domain name is the web address that users type to access your website, like www.example.com.',
      },
      {
        question: 'How often should I update my website?',
        answer: 'It’s recommended to update content regularly and redesign every few years to ensure your site remains relevant, secure, and optimized for new technology.',
      },
      {
        question: 'What is the importance of website maintenance?',
        answer: 'Website maintenance involves regularly checking your website for issues, updating software, and ensuring security, which keeps your site functional and secure over time.',
      },
    ],
    image: require('../assets/Services/web-app.webp'), 
    altText: 'Laptop displaying digital marketing concepts such as advertising, research, product, branding, and strategy',
  },
  'mobile-application-development': {
    mainTitle :'Comprehensive Solutions for Modern Mobile App Development',
    sectionSubtitle: 'We offer a comprehensive range of services to create high-quality, user-friendly, and scalable mobile applications. Our focus is on delivering seamless performance and intuitive user experiences across various devices and platforms.', // Added section subtitle
    title: 'Mobile Application Development',
    description: [
      "Mobile application development is the process of creating software applications that run on mobile devices, delivering a seamless user experience.",
      "Cross-platform development allows applications to be developed for multiple platforms using a single codebase, saving time and resources.",
    ],
    services: [
      {
        id: 1,
        image: require("../assets/Services/mobileapp/uiux.png"),
        title: " UI/UX Design",
        description: "Crafting visually appealing and user-centric interfaces that ensure smooth navigation and engagement, enhancing overall user satisfaction and retention.",
      },
      {
        id: 2,
        image:require("../assets/Services/mobileapp/flutter.png"),
        title: "Flutter App Development",
        description: "Building robust and high-performance mobile applications using Flutter, leveraging a single codebase to create natively compiled apps for both iOS and Android platforms.",
      },
      {
        id: 3,
        image:require("../assets/Services/mobileapp/cross-platform.png"),
        title: " Cross-Platform Development",
        description: "Developing apps using frameworks like Flutter and React Native to create cost-effective solutions that work seamlessly across multiple platforms with a single codebase.",
      },
      {
        id: 4,
        image:require("../assets/Services/mobileapp/backend.png"),
        title: "Backend Development & Integration",
        description: "Implementing powerful back-end solutions to support app functionality, including cloud storage, database management, and server-side logic for real-time data synchronization.",
      },
      {
        id: 5,
        image:require("../assets/Services/mobileapp/api.png"),
        title: "API Development & Integration",
        description: "Designing and integrating APIs to enable seamless communication between the mobile app and third-party services, providing additional functionalities and enhancing app performance.",
      },
      {
        id: 6,
        image:require("../assets/Services/mobileapp/quality.png"),
        title: "Quality Assurance & Testing",
        description: "Conducting rigorous testing procedures to identify and fix bugs, ensuring that the app performs flawlessly under various conditions and meets high-quality standards.",
      },
    ],
    faq: [
      {
        question: 'What is IOS Mobile App Development?',
        answer: 'Experts in developing cutting-edge iPhone and iPad apps using Swift, Objective C, and advanced tools like Xcode, Cocoapods, and CoreData.',
      },
      {
        question: 'Why is Android App Development important?',
        answer: 'Experts in custom Android app design and development using Java, Android Studio, and advanced frameworks like MVC/MVP.',
      },
      {
        question: 'What is Hybrid App Development?',
        answer: 'Proficient in HTML5, CSS, and JavaScript for robust web and hybrid apps with native feel and full device integration.',
      },
      {
        question: 'What is Multi-platform mobile app development?',
        answer: 'Creating powerful cross-platform mobile apps with Titanium, PhoneGap, and other frameworks.',
      },
    ],
    image: require('../assets/Services/mobile-app.webp'),
    altText: 'Mobile devices displaying various application interfaces.',
  },
  'digital-marketing': {
    mainTitle :'Essential Services for Modern Digital Marketing',
    sectionSubtitle: 'Essential digital marketing services include SEO, social media, PPC, content creation, email campaigns, and analytics for growth optimization.', // Added section subtitle
    title: 'Digital Marketing',
    description: [
      "Digital marketing refers to the promotion of products or services through digital channels like search engines, social media, email, and websites. It involves strategies and tactics to connect with a target audience online and achieve business objectives.",
      "Digital marketing is important because it helps businesses reach a larger audience and drive engagement through online channels. It allows businesses to target specific audiences and measure the effectiveness of their marketing strategies.",
    ],
    services: [
      {
        id: 1,
        image: require("../assets/Services/digital/SEO.png"),
        title: "Search Engine Optimization",
        description: "Search Engine Optimization (SEO) is a process of enhancing the visibility of a website or a web page in a search engine's unpaid results—often referred to as organic or natural results.",
      },
      {
        id: 2,
        image: require("../assets/Services/digital/SEM.png"),
        title: "Search Engine Marketing",
        description: "Search Engine Marketing (SEM) is a digital marketing strategy focused on promoting websites by increasing their visibility in search engine results pages (SERPs) through paid advertising.",
      },
      {
        id: 3,
        image: require("../assets/Services/digital/SMO.png"),
        title: "Social Media Optimization",
        description: "SEM can be an effective way to quickly increase website traffic, generate leads, and drive conversions, especially for businesses looking to achieve immediate results or supplement their SEO efforts.",
      },
      {
        id: 4,
        image: require("../assets/Services/digital/FBads.png"),
        title: "Facebook Ads",
        description: "Facebook Ads is a businesses to create targeted adcampaigns to reach specific audiences on Facebook and Instagram, driving brand awareness.",
      },
      {
        id: 5,
        image: require("../assets/Services/digital/CM.png"),
        title: "Content Marketing",
        description: "Content marketing is a strategic marketing approach focused on creating and distributing valuable relevant, and consistent content to attract and retain a clearly defined audience.",
      },
      {
        id: 6,
        image: require("../assets/Services/digital/EM.png"),
        title: "Email Marketing",
        description: "Content marketing is a strategic marketing approach focused on creating and distributing valuable relevant, and consistent content to attract and retain a clearly defined audience.",
      },
    ],
    faq: [
      {
        question: 'What is digital marketing?',
        answer: 'Digital marketing refers to the promotion of products or services through digital channels.',
      },
      {
        question: 'Why is digital marketing important for my business?',
        answer: 'It helps businesses reach a larger audience and drive engagement through online channels.',
      },
      {
        question: 'How much should I budget for digital marketing?',
        answer: 'Typically, businesses allocate around 10-20% of their revenue for marketing.',
      },
    ],
    image: require('../assets/Services/digital.webp'), 
    altText: 'Digital marketing strategies for brand promotion.',
  },
};


export const roles = [
  { company: 'Mitsubishi Chemical Factory', role: 'Manager (Production & Maintenance)' },
  { company: 'United Breweries Limited', role: 'Senior Officer (Production)' },
  { company: 'Usha International', role: 'Senior Manager (Production)' },
  { company: 'Rigel Soft', role: 'Founder & Managing Partner' },
  { company: 'Tech Integra Solutions', role: 'Founder & Managing Partner' },
  { company: 'Softpro Systems LLC', role: 'Senior Business Analyst' },
  { company: 'Criterion', role: 'Managing Director' },
  { company: 'OM IT Solutions', role: 'Regional Head' },
  { company: 'Xseed Tech Integra Solutions Pvt. Ltd.', role: 'Founder & Managing Director' },
];
// constant.js
export const chairmanMessageContent = {
  title: "Mr. Raj",
  image: require("../assets/Profile/Raj.png"),
  backgroundImage: require("../assets/Profile/bg_profile.png"), // Add background image path
  message: [
    "Thank you for choosing to continue your valuable partnership with us. Your ongoing support and trust in our products inspire us to deliver exceptional service and ensure that we provide outstanding value for your investment. Committed to propelling Tech Cloud ERP to new heights, we remain dedicated to addressing your needs with solutions that are not only simpler and more efficient but also reliable and cost-effective.",
    
    "We actively engage in continuous dialogue with you, our esteemed customers, to understand and anticipate your evolving requirements, ensuring we are prepared to meet them as they arise. Our commitment to total customer satisfaction drives us to tailor our products precisely to your specifications and to offer steadfast support after your purchase.",
    
    "Our mission to fulfill these promises is powered by our greatest asset—our employees. Their relentless dedication plays a crucial role in the realization of our company's goals Thus, we ask for the ongoing support of our valued customers and the cooperation of our dedicated employees. We also extend our heartfelt thanks to our supporters who have played a significant role in our company's journey and growth. Your partnership is vital to our continued success, and we look forward to achieving our shared objectives together",
    
  ]
};
export const cardservicesData = [
  {
    title: 'User Friendly',
    imgSrc: require("../assets/About_us/user-friendly.png"),
  },
  {
    title: 'Web Technologies',
    imgSrc: require("../assets/About_us/web.png"),
  },
  {
    title: 'Customization',
    imgSrc: require("../assets/About_us/customization.png"),
  },
  {
    title: 'Opensource',
    imgSrc: require("../assets/About_us/opensource.png"),
  },
  {
    title: 'Amazing Support',
    imgSrc: require("../assets/About_us/Amazingsupport.png"),
  },
  {
    title: 'Versatility',
    imgSrc: require("../assets/About_us/versatility.png"),
  },
  {
    title: 'Flexible Pricing',
    imgSrc: require("../assets/About_us/flexiblepricing.png"),
  },
  {
    title: 'Mobile Versions',
    imgSrc: require("../assets/About_us/Mobileversions.png"),
  },
  {
    title: 'Cloud Servers',
    imgSrc: require("../assets/About_us/Cloudservers.png"),
  },
  {
    title: 'Plugin Marketplace',
    imgSrc: require("../assets/About_us/Pluginmarket.png"),
  },
  {
    title: 'Secure & Reliable',
    imgSrc: require("../assets/About_us/Secure & reliable.png"),
  },
  {
    title: 'Language versatility',
    imgSrc: require("../assets/About_us/translate.png"),
  },
];
// constant.js

export const pricingDataContent = {
  modules: [
    {
      title: "Available Modules",
      badge: "Modules",
      items: [
        "CRM",
        "Sales Management",
        "Design",
        "Purchase Management",
        "Project Management",
        "Inventory Management",
        "Services",
        "Installation",
        "Finance & Accounts",
      ],
    },
    {
      title: "Available Modules",
      badge: "Modules",
      items: [
        "Production Management",
        "Asset Management",
        "Social Media Marketing",
        "Quality Control",
        "Quality Assurance",
        "Human Resources Management",
        "Exports & Imports",
        "Job Work",
      ],
    },
    {
      title: "Domains / Industries",
      badge: "Domains",
      items: [
        "Garment Manufacturing",
        "Garment Printing",
        "Medical Device Manufacturing",
        "Elevator / Lifts Manufacturing",
        "Fabrication Industries",
        "Construction",
        "Chemical Industries",
        "Pharma Industries",
        "Pump Manufacturing",
        "Carton Box Manufacturing",
        "Plastic Manufacturing",
        "Smart Brix Manufacturing",
        "Metal Drums Manufacturing",
      ],
    },
    {
      title: "Domains / Industries",
      badge: "Domains",
      items: [
        "Paper Manufacturing",
        "Asbestos Manufacturing",
        "Trademark - Service Industry",
        "Roadside Assistance - Service",
        "Plywood Manufacturing",
        "Fan Manufacturing",
        "Hydraulic Cylinders Manufacturing",
        "Jewellery Manufacturing",
        "Aerospace System Manufacturing",
        "Imports and Exports",
        "ERP and POS",
        "Restaurant POS",
      ],
    },
  ],
};
// pricing 
export const pricingTableData = [
  {
    tier: "1",
    turnover: "0 - 10 Crores",
    modules: "",
    users: "5 - 10",
    userCost: "Rs. 2000 / User / Month",
  },
  {
    tier: "2",
    turnover: "11 - 25 Crores",
    modules: "Customer's Choose as per their Requirements",
    users: "11 - 20",
    userCost: "Rs. 2000 / User / Month",
  },
  {
    tier: "3",
    turnover: "26 - 50 Crores",
    modules: "",
    users: "20 - 50",
    userCost: "Rs. 1500 / User / Month",
  },
  {
    tier: "4",
    turnover: "51 - 100 Crores",
    modules: "",
    users: "50 - 200",
    userCost: "Rs. 1250 / User / Month",
  },
  {
    tier: "5",
    turnover: "101 - 500 Crores",
    modules: "",
    users: "200 & Above",
    userCost: "Rs. 1000 / User / Month",
  },
];
export const pricingShapes = [
  {
    id: 1,
    src: require("../assets/Pricing/pricing-wave-1.png"),
    alt: "Shape",
    className: "dots"
  },
  {
    id: 2,
    src: require("../assets/Pricing/pricing-wave-2.png"),
    alt: "Shape",
    className: "wave"
  },
];


export const featuresData = [
  {
      imgSrc: require("../assets/Features/webbased.webp"),
      title: "Web Based And Cloud Computing",
      description: "Web-based and cloud computing provide scalable, flexible access to apps and data online.",
  },
  {
      imgSrc: require("../assets/Features/dynamic.webp"),
      title: "Dynamic Dashboards",
      description: "Dynamic dashboards offer real-time, interactive data visualization for better decision-making.",
  },
  {
      imgSrc: require("../assets/Features/Whatsapp_email.webp"),
      title: "Email & Whatsapp Integration",
      description: "Email and SMS integration enables seamless, efficient communication across both channels.",
  },
  {
      imgSrc: require("../assets/Features/mobilenadtab.webp"),
      title: "Mobile & Tab Compatibility",
      description: "Ensures a seamless user experience across devices, enhancing accessibility and usability.",
  },
  {
      imgSrc: require("../assets/Features/autobackup.webp"),
      title: "Data Auto Backup",
      description: "Automates secure data storage, ensuring continuity and protection against loss.",
  },
  {
      imgSrc: require("../assets/Features/customisable.webp"),
      title: "Customizable Software",
      description: "Allows users to tailor applications to specific needs, enhancing functionality and satisfaction.",
  },
  {
      imgSrc: require("../assets/Features/payasgo.webp"),
      title: "Pay As You Go",
      description: "Enables users to pay for services based on actual usage, promoting flexibility and cost-efficiency.",
  },
  {
      imgSrc: require("../assets/Features/chatusers.webp"),
      title: "Chat between Users",
      description: "Facilitates real-time communication and collaboration, enhancing interaction and connectivity.",
  },
  {
      imgSrc: require("../assets/Features/infiniteusers.webp"),
      title: "Unlimited Users",
      description: "Accommodates an unlimited number of users, ensuring scalability and accessibility.",
  },
  {
      imgSrc: require("../assets/Features/Audit_trail.webp"),
      title: "Audit Trail",
      description: "Detailed log of system activities, supporting accountability, compliance, and security.",
  },
  {
      imgSrc: require("../assets/Features/Inventory.webp"),
      title: "Multiple Inventory Location",
      description: "Centralized inventory management across multiple locations, ensuring accuracy and seamless transfers.",
  }
];
// product comparison

export const comparisonData = {
  features: [
      {
          id: 1,
          name: "Users",
          techCloudERP: "Unlimited Users",
          sapBusinessOne: "User-based license costing",
      },
      {
          id: 2,
          name: "Accessing the ERP",
          techCloudERP: "Web based",
          sapBusinessOne: "Web based",
      },
      {
          id: 3,
          name: "Dashboard",
          techCloudERP: "Dynamic Dashboard with a Graphical User Interface",
          sapBusinessOne: "No Dynamic Dashboards",
      },

      {
        id: 4,
        name: "Email & SMS",
        techCloudERP: "Inbuilt SMS & Email Integration",
        sapBusinessOne: "Not Available",
    },
    {
      id: 5,
      name: "Language",
      techCloudERP: "Multi-language",
      sapBusinessOne: "No Multi-language",
  },
  {
    id: 6,
    name: "Data Import/Export",
    techCloudERP: "Available",
    sapBusinessOne: "Available",
},
{
  id: 7,
  name: "Reports",
  techCloudERP: "User defined & Inbuilt reports",
  sapBusinessOne: "Inbuilt reports",
},
{
  id: 8,
  name: "Server",
  techCloudERP: "Web Server",
  sapBusinessOne: "Web Server",
},
{
  id: 9,
  name: "Server Maintenance",
  techCloudERP: "Auto Backup & Restore Facility",
  sapBusinessOne: "Manual Triggering",
},
{
  id: 10,
  name: "Software",
  techCloudERP: "PHP",
  sapBusinessOne: "ABAP",
},
{
  id: 11,
  name: "Database",
  techCloudERP: "MySQL",
  sapBusinessOne: "Oracle",
},
{
  id: 12,
  name: "Source Code",
  techCloudERP: "Complete Source code will be given to the Client",
  sapBusinessOne: "Source Code will be with the Development Company",
},

{
  id: 13,
  name: "Renewal/License Cost",
  techCloudERP: "Lifetime Solution & No Renewal",
  sapBusinessOne: "Renewal / License Cost is present",
},

{
  id: 14,
  name: "AMC",
  techCloudERP: "15% or Not Mandate",
  sapBusinessOne: "30% and Mandate",
},
{
  id: 15,
  name: "Implementation Period",
  techCloudERP: "Plug & Play, If customisation - 1 month deployment period",
  sapBusinessOne: "Product will not match exactly and needs 50 % customisation Heavy customisation charge and takes more time.",
},
{
  id: 16,
  name: "Implementation Cost",
  techCloudERP: "Low",
  sapBusinessOne: "High",
},
      // Add more features as needed
  ],
  salesAndCRMFeatures: [
      {
          id: 1,
          name: "Delivery Against Sales Orders",
          techCloudERP: "Yes",
          sapBusinessOne: "No",
      },
      {
          id: 2,
          name: "Invoice Against Sales Orders",
          techCloudERP: "Yes",
          sapBusinessOne: "No",
      },
      {
          id: 3,
          name: "Opportunities & Pipeline Management",
          techCloudERP: "Yes",
          sapBusinessOne: "Yes",
      },
      // Add more features as needed
  ],
};
// coFounders Data
export const coFoundersData = [
  {
      name: "Devang Patel",
      title: "Chairman",
      description: "Mr. Devang is a Mechanical Engineer and a certified SAP Production Planning Consultant. Known for his dynamic personality, he thrives on engaging with individuals at all levels to enhance his knowledge base. He is a meticulous observer of processes, consistently providing precise solutions swiftly. His profound expertise and leadership abilities have significantly advanced the careers of numerous professionals and have been instrumental in the growth of various businesses.",
      socialLinks: {
          facebook: "https://www.facebook.com/devang.patel",
          linkedin: "https://www.linkedin.com/in/devang-patel",
          instagram: "https://www.instagram.com/devang.patel",
          twitter: "https://twitter.com/devang_patel",
      },
  },
  {
      name: "Raja Shanmugam",
      title: "Founder & CEO",
      description: "Mr. Raja is a Mechanical Engineer and a certified SAP Production Planning Consultant. Known for his dynamic personality, he thrives on engaging with individuals at all levels to enhance his knowledge base. He is a meticulous observer of processes, consistently providing precise solutions swiftly. His profound expertise and leadership abilities have significantly advanced the careers of numerous professionals and have been instrumental in the growth of various businesses.",
      socialLinks: {
          facebook: "https://www.facebook.com/raja.shanmugam",
          linkedin: "https://www.linkedin.com/in/raja-shanmugam",
          instagram: "https://www.instagram.com/raja.shanmugam",
          twitter: "https://twitter.com/raja_shanmugam",
      },
  },
];
// sticky button data
export const assets = {
  brochureLink: require("../assets/TCE-CompanyBrochure.pdf"),
};
