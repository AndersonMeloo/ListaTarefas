'use server'

import { prisma } from "../utils/prisma"

export const deleteCompletedTasks = async () => {

    try {

        await prisma.task.deleteMany({
            where: { done: true }
        })

        const allTasks = await prisma.task.findMany()
        if (!allTasks) return

        return allTasks

    } catch (error) {
        throw error
    }
}