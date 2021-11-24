import React, {useEffect, useState} from 'react';
import { useGitHub } from '../../hooks/github_hooks';
import { RepositoryItem } from '../Repository_item';
import * as S from './styled';


export const Repositories = () => {
  const { gitHubState, getUserRepos, getUserStarred } = useGitHub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (gitHubState.user.login) {
      getUserRepos(gitHubState.user.login);
      getUserStarred(gitHubState.user.login);
    }
    setHasUserForSearchRepos(gitHubState.repositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gitHubState.user.login]);



  return ( 

    <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
        // react-tab-npm faz ser exibida qual tab foi clicada Repositories || Starred; 
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitHubState.repositories.map((item) => (
              <RepositoryItem
              key={item.id}
              name={item.name}
              linkToRepo={item.full_name}
              fullName={item.full_name}
              />
              ))}
            </S.WrapperList>  
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
          <S.WrapperList>
              {gitHubState.starred.map((item) => (
              <RepositoryItem
              key={item.id}
              name={item.name}
              linkToRepo={item.html_url}
              fullName={item.full_name}
              />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : 
      (
        <></>
      )}  
    </>  
  );
};

