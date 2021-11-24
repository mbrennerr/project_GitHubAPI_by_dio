import React from 'react';
import { useGitHub } from '../../hooks/github_hooks';
import * as S from './styled'

export const Profile = () => {
  const {gitHubState} = useGitHub();

  
  return(
    <S.Wrapper>
      <S.WrapperImage
      src={gitHubState.user.avatar}
      alt="User Avatar"
      />
      <S.WrapperInfosUser>
        <div>
          <h1>{gitHubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>UserName: </h3>
            <a
            href={gitHubState.user.html_url}
            target="blank"
            rel="noreferrer">{gitHubState.user.login}</a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Company: </h3>
            <span>{gitHubState.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location: </h3>
            <span>{gitHubState.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog: </h3>
            <a href={gitHubState.user.blog} target="blank">{gitHubState.user.blog}</a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{gitHubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{gitHubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{gitHubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repositories</h4>
            <span>{gitHubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfosUser>
    </S.Wrapper>
  ) 
    
}



