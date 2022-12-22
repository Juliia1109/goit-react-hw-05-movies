import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 800;
  margin: 10px;
  border: 1px solid grey;
  color: black;
  &:hover,
  &:focus,
  &.active {
    color: #9c27b0;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 10px;
`;

export const Img = styled.img`
  width: 300px;
  border-radius: 10px;
`;

export const Title = styled.h2`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.p`
  margin-top: 15px;
`;

export const TitleText = styled.h3`
  margin-top: 30px;
  margin-left: 10px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  color: black;
  &:hover,
  &:focus,
  &.active {
    color: #9c27b0;
  }
`;
