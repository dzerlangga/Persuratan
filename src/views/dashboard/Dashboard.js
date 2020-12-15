import React, { lazy } from 'react'

const Main = lazy(() => import('../main'))

const Dashboard = () => {
  return (
    <div className="mainDashboard">
      <Main />
    </div>
  )
}

export default Dashboard
