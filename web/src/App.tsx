import { CssBaseline, ThemeProvider } from '@mui/material'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import { ColorModeContext, useMode } from './theme'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <FatalErrorBoundary page={FatalErrorPage}>
            <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
              <AuthProvider type="dbAuth">
                <RedwoodApolloProvider>
                  <Routes />
                </RedwoodApolloProvider>
              </AuthProvider>
            </RedwoodProvider>
          </FatalErrorBoundary>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
