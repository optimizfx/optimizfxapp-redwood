import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RobotForm from 'src/components/Robot/RobotForm'

import type { CreateRobotInput } from 'types/graphql'

const CREATE_ROBOT_MUTATION = gql`
  mutation CreateRobotMutation($input: CreateRobotInput!) {
    createRobot(input: $input) {
      id
    }
  }
`

const NewRobot = () => {
  const [createRobot, { loading, error }] = useMutation(
    CREATE_ROBOT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Robot created')
        navigate(routes.robots())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateRobotInput) => {
    createRobot({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Robot</h2>
      </header>
      <div className="rw-segment-main">
        <RobotForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRobot
