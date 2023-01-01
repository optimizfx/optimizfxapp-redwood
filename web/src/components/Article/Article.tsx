import { AspectRatio, Card, Image, Text, createStyles } from '@mantine/core'

import { Link, routes } from '@redwoodjs/router'

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}))

const Article = ({ article }) => {
  const { classes } = useStyles()
  return (
    // <article key={article.id} className="p-5">
    //   <header>
    //     <h2 className="text-lg font-bold text-slate-900">
    //       <Link to={routes.article({ id: article.id })}>{article.title}</Link>
    //     </h2>
    //   </header>
    //   <p className="text-slate-600">{article.body}</p>
    //   <div>Posted at: {article.createdAt}</div>
    // </article>

    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href={routes.article({ id: article.id })}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  )
}

export default Article
