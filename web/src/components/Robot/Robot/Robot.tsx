
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag,  } from 'src/lib/formatters'

import type { DeleteRobotMutationVariables, FindRobotById } from 'types/graphql'

const DELETE_ROBOT_MUTATION = gql`
  mutation DeleteRobotMutation($id: Int!) {
    deleteRobot(id: $id) {
      id
    }
  }
`

interface Props {
  robot: NonNullable<FindRobotById['robot']>
}

const Robot = ({ robot }: Props) => {
  const [deleteRobot] = useMutation(DELETE_ROBOT_MUTATION, {
    onCompleted: () => {
      toast.success('Robot deleted')
      navigate(routes.robots())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteRobotMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete robot ' + id + '?')) {
      deleteRobot({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Robot {robot.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{robot.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{robot.title}</td>
            </tr><tr>
              <th>Description</th>
              <td>{robot.description}</td>
            </tr><tr>
              <th>Pairs</th>
              <td>{robot.pairs}</td>
            </tr><tr>
              <th>Timeframe</th>
              <td>{robot.timeframe}</td>
            </tr><tr>
              <th>Image</th>
              <td>{robot.image}</td>
            </tr><tr>
              <th>Files</th>
              <td>{robot.files}</td>
            </tr><tr>
              <th>Published</th>
              <td>{checkboxInputTag(robot.published)}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(robot.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(robot.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRobot({ id: robot.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(robot.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Robot
