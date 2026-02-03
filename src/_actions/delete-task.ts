'use server'

import { prisma } from "../utils/prisma"

export const deleteTask = async (id: string) => {

    try {

        if (!id) return

        const deletedTask = await prisma.task.delete({
            where: { id }
        })

        if (!deletedTask) return

        return deletedTask

    } catch (error) {
        throw error
    }
}