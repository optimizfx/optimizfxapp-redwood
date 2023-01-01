import { createStyles, Container, Title, Text, Button } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(img/day-trader-frontpage.png)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  subTitle: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 35,
    paddingTop: 10,
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}))

export function Hero() {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
              >
                OPTIMIZFX.COM
              </Text>{' '}
            </Title>
            <Title className={classes.subTitle}>
              Trade Smarter,{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
              >
                Not Harder.
              </Text>{' '}
            </Title>

            <Text className={classes.description} mt={30}>
              Welcome to OptimixFX, your one-stop destination for all things
              related to trading forex and day trading. At OptimixFX, we believe
              that everyone should have access to the tools and knowledge
              necessary to succeed in the fast-paced world of forex trading.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
