import { Grid } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2

import Sidebar from 'src/components/Sidebar/Sidebar'
import Topbar from 'src/components/Topbar/Topbar'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <Topbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
