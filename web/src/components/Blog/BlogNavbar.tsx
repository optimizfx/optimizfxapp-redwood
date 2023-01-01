import { useState } from 'react'

import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Drawer,
  ScrollArea,
  Divider,
  UnstyledButton,
  Center,
  Box,
  Button,
  Collapse,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons'

import { useAuth } from '@redwoodjs/auth'
import { routes } from '@redwoodjs/router'

import { Logo } from 'src/components/Logo/Logo'

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

interface HeaderSimpleProps {
  links: { link: string; label: string }[]
}

export function BlogNavbar({ links }: HeaderSimpleProps) {
  const { isAuthenticated, logOut } = useAuth()
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  // const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes, cx, theme } = useStyles()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Logo size={20} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Group className={classes.hiddenMobile}>
          {isAuthenticated ? (
            <Button component="a" href="/admin/posts/new" variant="filled">
              Create Post
            </Button>
          ) : (
            ''
          )}
          {isAuthenticated ? (
            <Button
              component="a"
              onClick={() => logOut()}
              variant="filled"
              color="red"
            >
              Logout
            </Button>
          ) : (
            <Button component="a" href="/signup" variant="default">
              Sign up
            </Button>
          )}
        </Group>
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          className={classes.hiddenDesktop}
          size="sm"
        />
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
            <Divider
              my="sm"
              color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
            />

            <a href="/" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>

            <Divider
              my="sm"
              color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
            />

            <Group position="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
              {isAuthenticated ? (
                <Button
                  component="a"
                  onClick={() => routes.articleNew}
                  variant="filled"
                  color="red"
                >
                  Create Post
                </Button>
              ) : (
                ''
              )}
              {isAuthenticated ? (
                <Button
                  component="a"
                  onClick={() => logOut()}
                  variant="filled"
                  color="red"
                >
                  Logout
                </Button>
              ) : (
                <Button component="a" href="/signup" variant="default">
                  Sign up
                </Button>
              )}
            </Group>
          </ScrollArea>
        </Drawer>
      </Container>
    </Header>
  )
}
