import type { EditRobotById, UpdateRobotInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RobotForm from 'src/components/Robot/RobotForm'

export const QUERY = gql`
  query EditRobotById($id: Int!) {
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
const UPDATE_ROBOT_MUTATION = gql`
  mutation UpdateRobotMutation($id: Int!, $input: UpdateRobotInput!) {
    updateRobot(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ robot }: CellSuccessProps<EditRobotById>) => {
  const [updateRobot, { loading, error }] = useMutation(
    UPDATE_ROBOT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Robot updated')
        navigate(routes.robots())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateRobotInput,
    id: EditRobotById['robot']['id']
  ) => {
    updateRobot({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Robot {robot?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RobotForm robot={robot} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
