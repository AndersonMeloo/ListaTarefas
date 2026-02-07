import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Task } from "@/prisma/generated/prisma";
import { useState } from "react";
import { toast } from "sonner";
import { editTask } from "../_actions/edit-task";

type TaskProps = {
    task: Task,
    handleGetTasks: () => void
}

function EditTask({ task, handleGetTasks }: TaskProps) {

    const [editedTask, setEditedTask] = useState(task.task)

    const handleEditedTask = async () => {

        try {
            if (editedTask !== task.task) {
                toast.success('You can send information to the database')
            } else {
                toast.error('The information has not been changed')
                return
            }

            await editTask({
                idTask: task.id,
                newTask: editedTask
            })

            handleGetTasks()
        } catch (error) {
            throw error
        }
    }

    return (

        <>
            <Dialog>
                <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer" />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Editar Tarefa</DialogTitle>
                    </DialogHeader>

                    <div className="flex gap-2">
                        <Input
                            placeholder="Editar tarefa"
                            value={editedTask}
                            onChange={(e) => setEditedTask(e.target.value)}
                        />
                        <DialogClose asChild>
                            <Button
                                className="cursor-pointer"
                                onClick={handleEditedTask}
                            >
                                Editar
                            </Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default EditTask;