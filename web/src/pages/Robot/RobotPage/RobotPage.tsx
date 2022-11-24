import RobotCell from 'src/components/Robot/RobotCell'

type RobotPageProps = {
  id: number
}

const RobotPage = ({ id }: RobotPageProps) => {
  return <RobotCell id={id} />
}

export default RobotPage
