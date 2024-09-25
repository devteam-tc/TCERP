import React from "react";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";
import img17 from "../assets/gallery/17.jpg";
import img18 from "../assets/gallery/18.jpg";
import img19 from "../assets/gallery/19.jpg";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
  { src: img6, alt: "Image 6" },
  { src: img7, alt: "Image 7" },
  { src: img8, alt: "Image 8" },
  { src: img9, alt: "Image 9" },
  { src: img10, alt: "Image 10" },
  { src: img11, alt: "Image 11" },
  { src: img12, alt: "Image 12" },
  { src: img13, alt: "Image 13" },
  { src: img14, alt: "Image 14" },
  { src: img15, alt: "Image 15" },
  { src: img16, alt: "Image 16" },
  { src: img17, alt: "Image 17" },
  { src: img18, alt: "Image 18" },
  { src: img19, alt: "Image 19" },
];

const Gallery = () => {

    
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="container py-4 mt-6 md:mt-16">
        <div className="mb-8">
          <h1 className="text-2xl md:text-[2rem] font-bold uppercase text-center bg-gradient-to-r from-yellow-200 to-yellow-900 bg-clip-text text-transparent">Gallery</h1>
          <hr className="mx-auto mb-4 border-2 border-golden w-[80%] rounded-lg" />
        </div>
      <div className="columns-1 gap-0 sm:columns-2 md:columns-3 lg:columns-4">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[
            lgThumbnail,
            lgZoom,
          ]}
        >
          {images.map((image, index) => (
            <a href={image.src} key={index}>
              <img
                alt={image.alt}
                src={image.src}
                loading="lazy"
                className="max-w-full block rounded-3xl transition-transform duration-500 hover:scale-95 p-2"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;



// import React from "react";


// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// import LightGallery from "lightgallery/react";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";

// const images = [
//   { src: require('../../assets/Gallery/HyderabadExpo/IntroImg1.png'),alt: "Image 1" },
//   { src: require('../../assets/Gallery/HyderabadExpo/IntroImg2.png'), alt: "Image 2" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg1.png'), alt: "Image 3" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg2.png'), alt: "Image 4" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg3.png'), alt: "Image 5" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg4.png'), alt: "Image 6" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg5.png'), alt: "Image 7" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg6.png'), alt: "Image 8" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg7.png'), alt: "Image 9" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg8.png'), alt: "Image 10" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg9.png'), alt: "Image 11" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg10.png'), alt: "Image 12" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg11.png'), alt: "Image 13" },
//   { src: require('../../assets/Gallery/HyderabadExpo/HyderabadExpoImg12.png'), alt: "Image 14" },
// ];

// const Gallery = () => {

    
//   const onInit = () => {
//     console.log("lightGallery has been initialized");
//   };

//   return (
//     <div className="container py-4 mt-6 md:mt-16">
//         <div className="mb-8">
//           <h1 className="text-2xl md:text-[2rem] font-bold uppercase text-center bg-gradient-to-r from-yellow-200 to-yellow-900 bg-clip-text text-transparent">Gallery</h1>
//           <hr className="mx-auto mb-4 border-2 border-golden w-[80%] rounded-lg" />
//         </div>
//       <div className="columns-1 gap-0 sm:columns-2 md:columns-3 lg:columns-4">
//         <LightGallery
//           onInit={onInit}
//           speed={500}
//           plugins={[
//             lgThumbnail,
//             lgZoom,
//           ]}
//         >
//           {images.map((image, index) => (
//             <a href={image.src} key={index}>
//               <img
//                 alt={image.alt}
//                 src={image.src}
//                 loading="lazy"
//                 className="max-w-full block rounded-3xl transition-transform duration-500 hover:scale-95 p-2"
//               />
//             </a>
//           ))}
//         </LightGallery>
//       </div>
//     </div>
//   );
// };

// export default Gallery;