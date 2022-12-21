import { useState } from 'react'

import {
  AppShell,
  useMantineTheme,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text,
  Navbar,
  Group,
  ActionIcon,
  Header,
  UnstyledButton,
  ThemeIcon,
} from '@mantine/core'
import { useLocalStorage, useViewportSize } from '@mantine/hooks'
import {
  IconSun,
  IconMoonStars,
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
} from '@tabler/icons'

import { Toaster } from '@redwoodjs/web/toast'

import AppHeader from 'src/components/Dashboard/Header'
import { Logo } from 'src/components/Dashboard/Logo'
import { Sidebar } from 'src/components/Dashboard/Sidebar'
import { UserMenu } from 'src/components/Dashboard/UserMenu'

type DashboardV2LayoutProps = {
  children?: React.ReactNode
}

interface MainLinkProps {
  icon: React.ReactNode
  color: string
  label: string
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

const data = [
  {
    icon: <IconGitPullRequest size={16} />,
    color: 'blue',
    label: 'Pull Requests',
  },
  { icon: <IconAlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  { icon: <IconMessages size={16} />, color: 'violet', label: 'Discussions' },
  { icon: <IconDatabase size={16} />, color: 'grape', label: 'Databases' },
]

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />)
  return <div>{links}</div>
}

const DashboardV2Layout = ({ children }: DashboardV2LayoutProps) => {
  // Set color theme state and save to local storage
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  const { height } = useViewportSize()

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="md"
          fixed={false}
          navbar={
            <Navbar width={{ base: 300 }} height={height} p="xs">
              <Navbar.Section grow mt="xs">
                <MainLinks />
              </Navbar.Section>
              <Navbar.Section>{/* <User /> */}</Navbar.Section>
            </Navbar>
          }
          header={
            <Header height={60}>
              <Group sx={{ height: '100%' }} px={20} position="apart">
                <Logo colorScheme={colorScheme} />
                <Group px={20}>
                  <UserMenu />
                  <ActionIcon
                    variant="default"
                    onClick={() => toggleColorScheme()}
                    size={30}
                  >
                    {colorScheme === 'dark' ? (
                      <IconSun size={16} />
                    ) : (
                      <IconMoonStars size={16} />
                    )}
                  </ActionIcon>
                </Group>
              </Group>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default DashboardV2Layout
