import { useEffect, useState } from 'react'

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage: 'url(img/daytrader-in-city.png)',
    height: '100%',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,
    height: '100%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])
  const { classes } = useStyles()

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await logIn({ email })
      if (error) throw error
      toast.success('Check your email for the login link!')
    } catch (error) {
      toast.error(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Welcome back to Botit
        </Title>
        {/* <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> */}
        <TextInput
          label="Email address"
          placeholder="Your email"
          size="md"
          className="inputField"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        /> */}
        {/* <Checkbox label="Keep me logged in" mt="xl" size="md" /> */}
        <Button
          fullWidth
          mt="xl"
          size="md"
          className="button block"
          disabled={loading}
          onClick={(e) => {
            e.preventDefault()
            handleLogin(email)
          }}
        >
          {loading ? <span>Loading</span> : <span>Send magic link</span>}
        </Button>

        <Text align="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'>
            href="/signup"
            weight={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}
export default LoginPage
