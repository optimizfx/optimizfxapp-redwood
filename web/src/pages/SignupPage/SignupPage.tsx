import { useRef } from 'react'
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
import { useDisclosure } from '@mantine/hooks'
import { IconEyeCheck, IconEyeOff } from '@tabler/icons'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link } from '@redwoodjs/router'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

// const SignupPage = () => {
//   const { isAuthenticated, signUp } = useAuth()

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate(routes.home())
//     }
//   }, [isAuthenticated])

//   // focus on email box on page load
//   const usernameRef = useRef<HTMLInputElement>(null)
//   useEffect(() => {
//     usernameRef.current?.focus()
//   }, [])

//   const onSubmit = async (data: Record<string, string>) => {
//     const response = await signUp({ ...data })

//     if (response.message) {
//       toast(response.message)
//     } else if (response.error) {
//       toast.error(response.error)
//     } else {
//       // user is signed in automatically
//       toast.success('Welcome!')
//     }
//   }

//   return (
//     <>
//       <MetaTags title="Signup" />

//       <main className="rw-main">
//         <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
//         <div className="rw-scaffold rw-login-container">
//           <div className="rw-segment">
//             <header className="rw-segment-header">
//               <h2 className="rw-heading rw-heading-secondary">Signup</h2>
//             </header>

//             <div className="rw-segment-main">
//               <div className="rw-form-wrapper">
//                 <Form onSubmit={onSubmit} className="rw-form-wrapper">
//                   <Label
//                     name="username"
//                     className="rw-label"
//                     errorClassName="rw-label rw-label-error"
//                   >
//                     Username
//                   </Label>
//                   <TextField
//                     name="username"
//                     className="rw-input"
//                     errorClassName="rw-input rw-input-error"
//                     ref={usernameRef}
//                     validation={{
//                       required: {
//                         value: true,
//                         message: 'Username is required',
//                       },
//                     }}
//                   />
//                   <FieldError name="username" className="rw-field-error" />

//                   <Label
//                     name="password"
//                     className="rw-label"
//                     errorClassName="rw-label rw-label-error"
//                   >
//                     Password
//                   </Label>
//                   <PasswordField
//                     name="password"
//                     className="rw-input"
//                     errorClassName="rw-input rw-input-error"
//                     autoComplete="current-password"
//                     validation={{
//                       required: {
//                         value: true,
//                         message: 'Password is required',
//                       },
//                     }}
//                   />
//                   <FieldError name="password" className="rw-field-error" />

//                   <div className="rw-button-group">
//                     <Submit className="rw-button rw-button-blue">
//                       Sign Up
//                     </Submit>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           </div>
//           <div className="rw-login-link">
//             <span>Already have an account?</span>{' '}
//             <Link to={routes.login()} className="rw-link">
//               Log in!
//             </Link>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// export default SignupPage

import { toast } from '@redwoodjs/web/toast'
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage: 'url(img/trading-robot.png)',
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

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  const [visible, { toggle }] = useDisclosure(false)
  const { classes } = useStyles()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({ ...data })
    setLoading(true)
    if (response.message) {
      toast(response.message)
      setLoading(false)
    } else if (response.error) {
      toast.error(response.error)
      setLoading(false)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
      setLoading(false)
    }
  }

  // const handleLogin = async (email) => {
  //   try {
  //     setLoading(true)
  //     const { error } = await logIn({ email })
  //     if (error) throw error
  //     toast.success('Check your email for the login link!')
  //   } catch (error) {
  //     toast.error(error.error_description || error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

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
          Signup
        </Title>
        <TextInput
          label="Email address"
          placeholder="Your email"
          size="md"
          className="inputField"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          visible={visible}
          onVisibilityChange={toggle}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Your password"
          mt="md"
          size="md"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          visible={visible}
          onVisibilityChange={toggle}
        />
        <Button
          fullWidth
          mt="xl"
          size="md"
          className="button block"
          disabled={loading}
          onClick={(e) => {
            e.preventDefault()
            onSubmit({ email, password })
          }}
        >
          {loading ? <span>Loading</span> : <span>Sign Up</span>}
        </Button>
        <Text align="center" mt="md">
          Already have an account?{' '}
          <Anchor<'a'>
            href="/login"
            weight={700}
            onClick={() => routes.login()}
          >
            Sign In
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}
export default SignupPage
