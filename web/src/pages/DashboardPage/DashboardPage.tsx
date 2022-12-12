// ** MUI Imports
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CardImgTop from 'src/components/CardImgTop/CardImgTop'
import RobotsCell from 'src/components/Robot/RobotsCell'
import RobotCard from 'src/components/RobotCard/RobotCard'
// ** Styled Component Import

const DashboardPage = () => {
  return (
    <div className="p-5">
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <RobotCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardImgTop />
        </Grid>
      </Grid>
    </div>
  )
}

export default DashboardPage
