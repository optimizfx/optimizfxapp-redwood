import type { FindRobotById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Robot from 'src/components/Robot/Robot'

export const QUERY = gql`
  query FindRobotById($id: Int!) {
    robot: robot(id: $id) {
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

export const Empty = () => <div>Robot not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ robot }: CellSuccessProps<FindRobotById>) => {
  return <Robot robot={robot} />
}
