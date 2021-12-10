import React, { useState } from 'react'
import { useGitHub } from '../../hooks/github_hooks';
import * as S from './styled';

export const Header = () => {
  const { getUser} = useGitHub();
  const [usernameForSearch, setUsernameForSearch] = useState()

  const  submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch)
  };

  return (
    <S.Wrapper >
      <>
        <input 
          type="text"
          placeholder="Enter github username" onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button
         type="submit"
         onClick={submitGetUser}
         >
          <span>
          Search
          </span>
        </button>
      </>
    </S.Wrapper>
      )
}
