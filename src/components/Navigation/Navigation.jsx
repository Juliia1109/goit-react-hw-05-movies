import React from 'react';
import { StyledLink } from './Navigation.styled';


export default function Navigation() {
  return (
   <nav>
 <ul>
    <li>
    <StyledLink to="/">Home</StyledLink>
    </li>
    <li>
    <StyledLink to="/movies">Movies</StyledLink>
    </li>
 </ul>
   </nav>
  )
}
