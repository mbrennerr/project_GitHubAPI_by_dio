import styled from 'styled-components';

export const WrapperLayout = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    /* border: 1px solid #202020; */
    /* background-color:#202020; */
    justify-items: center;

    @media(max-width: 800px) {
      grid-template-columns: 1fr;
     };
`;
