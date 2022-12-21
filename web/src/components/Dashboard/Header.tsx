import React from 'react'
import { useState } from 'react'

import {
  createStyles,
  Header,
  Text,
  MediaQuery,
  Autocomplete,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { IconSun, IconMoonStars, IconSearch, IconPerson  } from '@tabler/icons'
// import { IconSearch } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },

  inner: {
    height: 70,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
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
}))

interface HeaderSearchProps {
  links: { link: string; label: string }[]
}

function AppHeader() {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const { classes } = useStyles()

  // const items = links.map((link) => (
  //   <a
  //     key={link.label}
  //     href={link.link}
  //     className={classes.link}
  //     onClick={(event) => event.preventDefault()}
  //   >
  //     {link.label}
  //   </a>
  // ))

  return (
    <Header height="inherit" className={classes.header}>
      <div className={classes.inner}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Autocomplete
          className={classes.search}
          placeholder="Search"
          icon={<IconSearch size={16} stroke={1.5} />}
          data={[
            'React',
            'Angular',
            'Vue',
            'Next.js',
            'Riot.js',
            'Svelte',
            'Blitz.js',
          ]}
        />
        {/* <Text>Application header</Text> */}
        {/* <Group ml={50} spacing={5} className={classes.links}>
          {items}
        </Group> */}

        <ActionIcon
          variant="default"
          // color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
      </div>
    </Header>
  )
}

export default AppHeader
