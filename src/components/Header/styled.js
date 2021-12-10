import styled from 'styled-components';

export const Wrapper = styled.div`

  display:grid;
  grid-column: 1/3;
  align-items:center;
  justify-items: center;
  width: 90%;
  height: 150px;
  /* border: 1px solid #202020; */
  margin-bottom: 20px;

  @media(max-width: 800px) {
      width: 100vw;
     };


  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 30%;
    height: 50px;
    padding: 10px;
    font-weight: 500;

    @media(max-width: 800px) {
    display: grid;
    width:90vw;  
    }  
  };
    
  
  button{
    background-color: #225ed8;
    width: 10%;
    height: 40px;
    padding: 0 60px; 
    border-radius: 8px;
    font-weight: bold;
    font-size:20px;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);

    @media(max-width: 800px) {
    display: grid;
    width:50%;
    align-items: center;
    justify-content: center;
    }  

    span {
      font-weight: bold;
      color: #ffff;
    }

    &:hover{
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

  }

`