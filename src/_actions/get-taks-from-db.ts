import { prisma } from "../utils/prisma"

const getTasks = async () => {

    const tasks = await prisma.task.findMany();

    if (!tasks) return

    console.log(tasks)
    return tasks
}