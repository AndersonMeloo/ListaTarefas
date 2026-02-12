import { Badge } from "../components/ui/badge";
import { Ban, Check, List } from "lucide-react";

export type FilterType = 'all' | 'pending' | 'completed';

type FilterProps = {
    currentFilter: FilterType,
    setCurrentFilter: React.Dispatch<React.SetStateAction<FilterType>>
}

const Filter = ({ currentFilter, setCurrentFilter }: FilterProps) => {

    return (
        <div>
            <div className="flex gap-4">
                <Badge
                    className="cursor-pointer"
                    variant={`${currentFilter === 'all' ? 'default' : 'outline'}`}
                    onClick={() => setCurrentFilter('all')}
                >
                    <List />
                    Todas
                </Badge>

                <Badge
                    className="cursor-pointer"
                    variant={`${currentFilter === 'pending' ? 'default' : 'outline'}`}
                    onClick={() => setCurrentFilter('pending')}
                >
                    <Ban />
                    Não finalizadas
                </Badge>

                <Badge
                    className="cursor-pointer"
                    variant={`${currentFilter === 'completed' ? 'default' : 'outline'}`}
                    onClick={() => setCurrentFilter('completed')}
                >
                    <Check />
                    Concluídas
                </Badge>
            </div>
        </div>
    )
}

export default Filter