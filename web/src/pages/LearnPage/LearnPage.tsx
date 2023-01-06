import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LearnPage = () => {
  return (
    <>
      <MetaTags title="Learn" description="Learn page" />

      <h1>LearnPage</h1>
      <p>
        Find me in <code>./web/src/pages/LearnPage/LearnPage.tsx</code>
      </p>
      <p>
        My default route is named <code>learn</code>, link to me with `
        <Link to={routes.learn()}>Learn</Link>`
      </p>
    </>
  )
}

export default LearnPage
