import { useEffect } from 'react'

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
import { Link, navigate, routes } from '@redwoodjs/router'
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

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
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])
  const { classes } = useStyles()
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
          Welcome back to Mantine!
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text align="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'>
            href="#"
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
// import { useState } from 'react'

// import { Container } from '@mantine/core'

// import { useAuth } from '@redwoodjs/auth'

// const LoginPage = () => {
//   const { logIn } = useAuth()
//   const [loading, setLoading] = useState(false)
//   const [email, setEmail] = useState('')

//   const handleLogin = async (email) => {
//     try {
//       setLoading(true)
//       const { error } = await logIn({ email })
//       if (error) throw error
//       alert('Check your email for the login link!')
//     } catch (error) {
//       alert(error.error_description || error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Container size="xs" p="xl" sx={{ height: '100%' }}>
//       <div className="row flex-center flex">
//         <div className="col-6 form-widget">
//           <h1 className="header">Supabase + RedwoodJS</h1>
//           <p className="description">
//             Sign in via magic link with your email below
//           </p>
//           <div>
//             <input
//               className="inputField"
//               type="email"
//               placeholder="Your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <button
//               onClick={(e) => {
//                 e.preventDefault()
//                 handleLogin(email)
//               }}
//               className={'button block'}
//               disabled={loading}
//             >
//               {loading ? <span>Loading</span> : <span>Send magic link</span>}
//             </button>
//           </div>
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default LoginPage

// import { useRef } from 'react'
// import { useEffect } from 'react'

// import { useAuth } from '@redwoodjs/auth'
// import {
//   Form,
//   Label,
//   TextField,
//   PasswordField,
//   Submit,
//   FieldError,
// } from '@redwoodjs/forms'
// import { Link, navigate, routes } from '@redwoodjs/router'
// import { MetaTags } from '@redwoodjs/web'
// import { toast, Toaster } from '@redwoodjs/web/toast'

// const LoginPage = () => {
//   const { isAuthenticated, logIn } = useAuth()

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate(routes.dashboard())
//     }
//   }, [isAuthenticated])

//   const usernameRef = useRef<HTMLInputElement>(null)
//   useEffect(() => {
//     usernameRef.current?.focus()
//   }, [])

//   const onSubmit = async (data: Record<string, string>) => {
//     const response = await logIn({ ...data })

//     if (response.message) {
//       toast(response.message)
//     } else if (response.error) {
//       toast.error(response.error)
//     } else {
//       toast.success('Welcome back!')
//     }
//   }

//   return (
//     <>
//       <MetaTags title="Login" />

//       <main className="rw-main">
//         <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
//         <div className="rw-scaffold rw-login-container">
//           <div className="rw-segment">
//             <header className="rw-segment-header">
//               <h2 className="rw-heading rw-heading-secondary">Login</h2>
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

//                   <div className="rw-forgot-link">
//                     <Link
//                       to={routes.forgotPassword()}
//                       className="rw-forgot-link"
//                     >
//                       Forgot Password?
//                     </Link>
//                   </div>

//                   <FieldError name="password" className="rw-field-error" />

//                   <div className="rw-button-group">
//                     <Submit className="rw-button rw-button-blue">Login</Submit>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           </div>
//           <div className="rw-login-link">
//             <span>Don&apos;t have an account?</span>{' '}
//             <Link to={routes.signup()} className="rw-link">
//               Sign up!
//             </Link>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// export default LoginPage
