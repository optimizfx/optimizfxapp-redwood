import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Robot/RobotsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type { DeleteRobotMutationVariables, FindRobots } from 'types/graphql'

const DELETE_ROBOT_MUTATION = gql`
  mutation DeleteRobotMutation($id: Int!) {
    deleteRobot(id: $id) {
      id
    }
  }
`

const RobotsList = ({ robots }: FindRobots) => {
  const [deleteRobot] = useMutation(DELETE_ROBOT_MUTATION, {
    onCompleted: () => {
      toast.success('Robot deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteRobotMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete robot ' + id + '?')) {
      deleteRobot({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Pairs</th>
            <th>Timeframe</th>
            <th>Image</th>
            <th>Files</th>
            <th>Published</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id}>
              <td>{truncate(robot.id)}</td>
              <td>{truncate(robot.title)}</td>
              <td>{truncate(robot.description)}</td>
              <td>{truncate(robot.pairs)}</td>
              <td>{truncate(robot.timeframe)}</td>
              <td>{truncate(robot.image)}</td>
              <td>{truncate(robot.files)}</td>
              <td>{checkboxInputTag(robot.published)}</td>
              <td>{timeTag(robot.createdAt)}</td>
              <td>{timeTag(robot.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.robot({ id: robot.id })}
                    title={'Show robot ' + robot.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRobot({ id: robot.id })}
                    title={'Edit robot ' + robot.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete robot ' + robot.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(robot.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RobotsList
