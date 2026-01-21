import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Ban, Check, List, ListCheck, Plus, SquarePen, Trash } from "lucide-react";

function Home() {

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
              <div className="h-14 flex justify-between items-center border-t">
                <div className="w-1 h-full bg-green-300"></div>
                <p className="flex-1 px-2 text-sm">Tarefa 1</p>

                <div className="flex gap-2 items-center">
                  <SquarePen size={16} className="cursor-pointer" />
                  <Trash size={16} className="cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex gap-2 items-center">
                <ListCheck size={18} />
                <p className="text-xs">Tarefas concluídas (3/3)</p>
              </div>

              <Button className="text-xs h-7 cursor-pointer" variant={'outline'}>
                <Trash size={16} />
                Limpar tarefas concluídas
              </Button>
            </div>

            <div className="h-2 w-full bg-gray-100 mt-4 roundend-md">
              <div className="h-full bg-blue-500 roundend-md" style={{ width: "50%" }}></div>
            </div>

          </CardContent>

        </Card>
      </main>
    </>
  );
}

export default Home;