import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: block;
  padding: 15px;
`;

export const List = styled.ul`
  display: block;
`;
export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-weight: 700;
  &:hover,
  &:focus {
    color: #9c27b0;
  }

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
  text-decoration: none;
`;
