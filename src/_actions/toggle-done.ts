'use server'

import { prisma } from "../utils/prisma";

export const updateTaskStatus = async (taskId: string) => {

    try {
        const currentTask = await prisma.task.findUnique({

            where: { id: taskId }
        })

        if (!currentTask) return

        const updatedStatus = await prisma.task.update({
            where: { id: taskId },
            data: { done: !currentTask.done }
        })

        if (!updatedStatus) return

        return updatedStatus
    } catch (error) {
        throw error
    }
}