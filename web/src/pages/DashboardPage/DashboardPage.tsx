import { Box } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import RobotsCell from 'src/components/Robot/RobotsCell'

const DashboardPage = () => {
  return (
    <div className="p-5">
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <Box>
        <RobotsCell />
      </Box>
    </div>
  )
}

export default DashboardPage
