import { useContext } from 'react'

// ** MUI Imports

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputBase from '@mui/material/InputBase'
import { Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'
import Menu from 'mdi-material-ui/Menu'

// ** Type Import
// import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import NotificationDropdown from 'src/components/SharedComponents/NotificationDropdown'
import UserDropdown from 'src/components/SharedComponents/UserDropdown'
import { ColorModeContext, tokens } from 'src/theme'

interface Props {
  hidden: boolean
  // settings: Settings
  toggleNavVisibility: () => void
  // saveSettings: (values: Settings) => void
}

const Topbar = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props
  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    // NEW LAYOUT TEST
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
      }}
    >
      <Box
        className="actions-left"
        sx={{ mr: 2, display: 'flex', alignItems: 'center' }}
      >
        {hidden ? (
          <IconButton
            color="inherit"
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        <TextField
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Magnify fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        className="actions-right"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <NotificationDropdown />
        <UserDropdown />
      </Box>
    </Box>

    // <Box display="flex" justifyContent="space-between" p={2}>
    //   {/* SEARCH BAR */}
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       backgroundColor: colors.primary[400],
    //       borderRadius: '3px',
    //     }}
    //   >
    //     <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
    //     <IconButton type="button" sx={{ p: 1 }}>
    //       <SearchOutlinedIcon />
    //     </IconButton>
    //   </Box>

    //   {/* ICONS */}
    //   <Box display="flex">
    //     <IconButton onClick={colorMode.toggleColorMode}>
    //       {theme.palette.mode === 'dark' ? (
    //         <DarkModeOutlinedIcon />
    //       ) : (
    //         <LightModeOutlinedIcon />
    //       )}
    //     </IconButton>
    //     <IconButton>
    //       <NotificationsOutlinedIcon />
    //     </IconButton>
    //     <IconButton>
    //       <SettingsOutlinedIcon />
    //     </IconButton>
    //     <IconButton>
    //       <PersonOutlinedIcon />
    //     </IconButton>
    //   </Box>
    // </Box>
  )
}

export default Topbar
