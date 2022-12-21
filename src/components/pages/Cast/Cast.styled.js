import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const Item = styled.li`
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  width: 200px;
`;

export const Container = styled.div`
  width: 200px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Title = styled.h3`
  max-width: 200px;
  text-align: center;
  font-size: 20px;
  font-weight: 650;
  margin: 10px auto;
`;
export const Text = styled.h4`
  text-align: center;
  margin: 10px;
`;
