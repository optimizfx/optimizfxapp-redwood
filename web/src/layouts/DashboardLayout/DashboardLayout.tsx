import Sidebar from 'src/components/Sidebar/Sidebar'
import Topbar from 'src/components/Topbar/Topbar'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <main className="content">
        <Sidebar />
        <Topbar />
        {children}
      </main>
    </>
  )
}

export default DashboardLayout
