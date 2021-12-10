import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1/3;
  justify-items: center;
  /* border: solid 1px #202020; */

  @media(max-width: 800px) {
  display: grid;
  grid-template-columns: 1fr;
  };
  /* width:100vw; */

`;

export const WrapperInfosUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;
  h1 {
    font-size:32px;
    font-weight: bold;
    @media(max-width: 800px) {
      font-size:20px;
     };
  }

  h3 {
    font-size:18px;
    font-weight: bold;
    @media(max-width: 800px) {
      font-size:15px;
     };
  }

  h4 {
    font-size:16px;
    font-weight: bold;
    @media(max-width: 800px) {
      font-size:14px;
     };
  }

  
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  
  h3 {
    margin-right: 8px;

  }

  a {
    font-size:18px;
    color: blue;
    font-weight: bold;
    @media(max-width: 800px) {
      font-size:15px;
     };
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);

  @media(max-width: 800px) {
      margin:15px;
      width:250px;
      
    };
`;