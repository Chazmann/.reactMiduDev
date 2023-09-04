import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FollowContainer } from './assets/components/FollowContainer.jsx'
import { FollowContainerMap } from './assets/components/FollowContainerMappingArray.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FollowContainer />
    <br /> */}
    <FollowContainerMap />
  </React.StrictMode>,
)
