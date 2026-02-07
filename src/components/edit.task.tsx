import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Task } from "@/prisma/generated/prisma";
import { useState } from "react";
import { toast } from "sonner";

type TaskProps = {
    task: Task
}

function EditTask({ task }: TaskProps) {

    const [editedTask, setEditedTask] = useState(task.task)

    const handleEditeTask = () => {

        if (editedTask !== task.task) {
            toast.success('You can send information to the database')
        } else {
            toast.error('The information has not been changed')
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
                        <Button
                            className="cursor-pointer"
                            onClick={handleEditeTask}
                        >Editar</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default EditTask;