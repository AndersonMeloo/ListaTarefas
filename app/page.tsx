import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Ban, Check, List, Plus } from "lucide-react";

function Home() {

  return (

    <>
      <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
        <Card className="w-lg p-4">

          <CardContent className="flex gap-2">
            <Input placeholder="Adicionar tarefa" />
            <Button variant={'default'} className="cursor-pointer">
              <Plus />
              Adicionar
            </Button>
          </CardContent>

          <Separator />

          <div className="flex gap-2">
            <Badge className="cursor-pointer">
              <List />
              Todas
            </Badge>

            <Badge className="cursor-pointer">
              <Ban />
              Não finalizadas
            </Badge>

            <Badge className="cursor-pointer">
              <Check />
              Concluídas
            </Badge>
          </div>

        </Card>
      </main>
    </>
  );
}

export default Home;