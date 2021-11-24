import React from 'react';
import * as S from './styled';


export const  RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{ name }</S.WrapperTitle>
      <S.WrapperFullName>Full Name:</S.WrapperFullName>
      <S.WrapperLink 
        href={ linkToRepo }
        target="blank"
        rel="noreferrer"
        >
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};
