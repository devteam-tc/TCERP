import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ReactDOM from 'react-dom/client';



// Select the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './routes/index.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';

// import Layout from './routes/layout';
// import NotMatch from './routes/not-match';
// import RentPage from './routes/rent';
// import BuyPage from './routes/buy';
// import SellPage from './routes/sell';
// import HomePage from './routes/home';
// import NewsPage from './routes/news';
// import Mortgage from './routes/mortgage';

// import Home from './pages/Home/Home';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <NotMatch />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: 'rent',
//         element: <RentPage />,
//       },
//       {
//         path: 'buy',
//         element: <BuyPage />,
//       },
//       {
//         path: 'sell',
//         element: <SellPage />,
//       },
//       {
//         path: 'news',
//         element: <NewsPage />,
//       },
//       {
//         path: 'mortgage',
//         element: <Mortgage />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
