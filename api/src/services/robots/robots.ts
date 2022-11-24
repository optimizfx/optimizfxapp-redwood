import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const robots: QueryResolvers['robots'] = () => {
  return db.robot.findMany()
}

export const robot: QueryResolvers['robot'] = ({ id }) => {
  return db.robot.findUnique({
    where: { id },
  })
}

export const createRobot: MutationResolvers['createRobot'] = ({ input }) => {
  return db.robot.create({
    data: input,
  })
}

export const updateRobot: MutationResolvers['updateRobot'] = ({
  id,
  input,
}) => {
  return db.robot.update({
    data: input,
    where: { id },
  })
}

export const deleteRobot: MutationResolvers['deleteRobot'] = ({ id }) => {
  return db.robot.delete({
    where: { id },
  })
}
