import styled from 'styled-components';

export const Wrapper = styled.div`
 padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 400px;
  height: 200px;
  align-content: center;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);

  @media(max-width: 800px) {
    display: grid;
    justify-items: stretch;
    width:90vw;
    height: 150px;  
    }  
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #2d3748;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;
`;


