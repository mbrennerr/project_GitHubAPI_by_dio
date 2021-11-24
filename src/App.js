import React from 'react';
import { Layout } from "./components/Layout";
import { NoUserSurveyed } from "./components/NoUserSurveyed";
import { Profile } from "./components/Profile";
import { Repositories } from "./components/Repositories";
import { useGitHub } from "./hooks/github_hooks";



export const App = () => {
  const {gitHubState} = useGitHub();
  return (
    <Layout>
      {gitHubState.hasUser ? ( 
        <>
        {gitHubState.loading ? (<p>Loading</p>):
        (
        <>
        <Profile />
        <Repositories />
        </>
        )}
        </>
        ):
        (
          <NoUserSurveyed/>
        )
      }
    </Layout>
  );
};
