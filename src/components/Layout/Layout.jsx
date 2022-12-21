import React from 'react';
import { Link, Nav, Item } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';


export default function Layout() {
  return (
    <>
   <Nav>
 <GlobalStyle />
    <Item>
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    </Item>
   </Nav>
   <Outlet />
   </>
  )
}
