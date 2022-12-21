import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  padding: 15px;
  gap: 20px;
`;

export const Input = styled.input`
  width: 400px;
  font-size: 15px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
  border: 1px solid grey;
  color: black;
  &:hover,
  &:focus {
    color: #9c27b0;
  }
`;

export const List = styled.ul`
  display: block;
  padding: 15px;
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
