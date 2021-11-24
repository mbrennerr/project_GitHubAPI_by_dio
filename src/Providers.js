import React from 'react'
import { App } from './App'
import { ResetCSS } from './components/Global/ResetCSS'
import { GithubProvider } from './providers/github_provider'

export const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS/>
        <App/>
      </GithubProvider>
    </main>
  )
}
