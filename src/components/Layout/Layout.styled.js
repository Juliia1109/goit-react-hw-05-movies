import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 13px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
  border: 1px solid grey;
  color: black;
  &.active {
    color: #9c27b0;
  }
`;
