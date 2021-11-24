import React, { useState, createContext, useCallback } from 'react';
import { api } from '../services/api';

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],

});

export const GithubProvider = ({ children }) => {
  const [gitHubState, setGitHubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blogUrl: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
      
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    setGitHubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api.get(`users/${username}`)
    .then(({ data }) => {
      setGitHubState((prevState) => ({
        ...prevState,
        hasUser:true,
        user: {
          id: data.id,
          avatar: data.avatar_url,
          login: data.login,
          name: data.name,
          html_url: data.html_url,
          blog: data.blog,
          company: data.company,
          location: data.location,
          followers: data.followers,
          following: data.following,
          public_gists: data.public_gists,
          public_repos: data.public_repos,
        },
      }));
    }).finally(() => {
      setGitHubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading,
      }));
    });
  };

  // Função para trazer os repositórios do Usuário; 
  const getUserRepos = (username) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGitHubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };
  // Função para trazer os favoritos do Usuário;
  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGitHubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    gitHubState,
    getUser: useCallback((username) => getUser(username),[]),
    getUserRepos: useCallback((username) => getUserRepos(username),[]),
    getUserStarred: useCallback((username) => getUserStarred(username),[]),
  };
  
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};