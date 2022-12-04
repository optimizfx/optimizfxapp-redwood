import type { FindRobots } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Robots from 'src/components/Robot/Robots'

export const QUERY = gql`
  query FindRobots {
    robots {
      id
      title
      description
      pairs
      timeframe
      image
      files
      published
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No robots yet. '}
      <Link to={routes.newRobot()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ robots }: CellSuccessProps<FindRobots>) => {
  return <Robots robots={robots} />
}
