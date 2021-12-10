import styled from 'styled-components';

export const Wrapper = styled.div`

    border: 1px solid #202020;
    width: 40%;
    display: grid;
    grid-column: 1/3;
    align-content: center;
    justify-items: center;

  h1 {
    font-weight: bold;
    font-size: 32px;

    @media(max-width: 800px) {
      font-size:20px;
     };
  }
`;

