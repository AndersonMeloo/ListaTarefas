import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function EditTask() {

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
                        <Input placeholder="Editar tarefa" />
                        <Button className="cursor-pointer">Editar</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default EditTask;