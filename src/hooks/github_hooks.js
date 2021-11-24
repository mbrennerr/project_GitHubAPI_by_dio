import {useContext} from 'react'
import {GithubContext} from "../providers/github_provider"

export const useGitHub = () => {
   const { gitHubState, getUser, getUserRepos, getUserStarred } = useContext( GithubContext );
    
  return { gitHubState, getUser, getUserRepos, getUserStarred };
};
