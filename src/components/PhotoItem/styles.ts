import styled from 'styled-components';

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 3px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  transition: all 0.3s;
  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  svg {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    color: #27282f;
    color: #fff;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
