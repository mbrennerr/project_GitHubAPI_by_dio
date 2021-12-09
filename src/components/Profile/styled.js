import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media(max-width: 800px) {
  display: grid;
  };
}
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
      font-size:13px;
     };
  }

  h4 {
    font-size:16px;
    font-weight: bold;
    @media(max-width: 800px) {
      font-size:13px;
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
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
  @media(max-width: 800px) {
      margin:30px;
      width:300px;
      
     };
`;