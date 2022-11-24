import EditRobotCell from 'src/components/Robot/EditRobotCell'

type RobotPageProps = {
  id: number
}

const EditRobotPage = ({ id }: RobotPageProps) => {
  return <EditRobotCell id={id} />
}

export default EditRobotPage
