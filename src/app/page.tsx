'use client';

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { Ban, Check, List, ListCheck, Plus, Sigma, Trash } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog"
import EditTask from "@/src/components/edit.task";
import { getTasks } from "../_actions/get-taks-from-db";
import { useEffect, useState } from "react";
import { Task } from "@/prisma/generated/prisma";

function Home() {

  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleGetTasks = async () => {
    try {
      const tasks = await getTasks();

      if (!tasks) return

      setTaskList(tasks)
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  }

  useEffect(() => {
    const fetchTasks = async () => {
      await handleGetTasks();
    };
    fetchTasks();
  }, [])

  return (

    <>
      <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
        <Card className="w-lg">

          <CardHeader className="flex gap-2">
            <Input placeholder="Adicionar tarefa" />
            <Button variant={'default'} className="cursor-pointer">
              <Plus />
              Adicionar
            </Button>
          </CardHeader>

          <CardContent>
            <Separator className="mb-2" />

            {/* Badges */}
            <div className="flex gap-4">
              <Badge className="cursor-pointer" variant={"default"}>
                <List />
                Todas
              </Badge>

              <Badge className="cursor-pointer" variant={"outline"}>
                <Ban />
                Não finalizadas
              </Badge>

              <Badge className="cursor-pointer" variant={"outline"}>
                <Check />
                Concluídas
              </Badge>
            </div>

            {/* Cards */}
            <div className="mt-4 border-b">
              {taskList.map(task => (
                <div className="h-14 flex justify-between items-center border-t" key={task.id}>
                  <div className={`w-1 h-full ${task.done ? 'bg-green-300' : 'bg-red-300'}`}></div>
                  <p className="flex-1 px-2 text-sm">{task.task}</p>
                  <div className="flex gap-2 items-center">
                    <EditTask />
                    <Trash size={16} className="cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex gap-2 items-center">
                <ListCheck size={18} />
                <p className="text-xs">Tarefas concluídas (3/3)</p>
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="text-xs h-7 cursor-pointer" variant={'outline'}>
                    <Trash size={16} />
                    Limpar tarefas concluídas
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Sim</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div className="h-2 w-full bg-gray-100 mt-4 roundend-md">
              <div className="h-full bg-blue-500 roundend-md" style={{ width: "50%" }}></div>
            </div>

            <div className="flex justify-end items-center gap-2 mt-2">
              <Sigma size={18} />
              <p className="text-xs">3 tarefas no total</p>
            </div>

          </CardContent>

        </Card>
      </main>
    </>
  );
}

export default Home;