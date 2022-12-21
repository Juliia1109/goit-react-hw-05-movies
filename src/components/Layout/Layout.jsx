import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
// import { useLocation } from "react-router-dom";


export default function Layout() {
  // const location = useLocation();

  return (
 <>
  {/* {!location.pathname.includes('details') && <Navigation />} */}
 <Navigation />
 <Outlet />
 </>
  )
}
