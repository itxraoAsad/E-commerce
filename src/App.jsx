import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WebListView from './weblistveiw';
import Header from './header';
import Nav from './nav';
import Content from './content';
import GridContent from './gridcontent';
import GridConten2 from './gridconten2';
import Grid3 from './grid3';
import Footer from './footer';
import ListPage from './listpage';
import ProfilePage from './profilepage';


function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <Content />
      <GridContent />
      <GridConten2 />
      <Grid3 />
      <Footer />
    </>
  );
}


const router = createBrowserRouter([
  
  {
    
    path: '/',
     
    element: <Layout />,
  },
  {
    path: '/weblistveiw',
    element: <WebListView />,
  },
  {
    path: '/listpage',
    element: <ListPage />,
  },

   {
    path: '/profilepage',
    element: <ProfilePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
