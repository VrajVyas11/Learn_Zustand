import { UserIcon, Laugh, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useStore } from '@/store/store';

export function Joke() {
    const { getJoke, joke } = useStore(
        useShallow((state) => ({
            getJoke: state.getJoke,
            joke: state.joke,
        }))
    );

    const [showDelivery, setShowDelivery] = useState(false);

    useEffect(() => {
        getJoke();
        setShowDelivery(false);
        const timer = setTimeout(() => {
            setShowDelivery(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [getJoke]);
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon">
                    <Laugh />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="overflow-auto border-[#003b00] space-y-4 w-96 bg-[#06090e] text-white p-4 rounded-lg">
                <div className="flex flex-col gap-2">
                    <Label className="text-lg text-center">A Joke for you:</Label>
                    <hr />
                    <div className="font-normal text-xl tracking-wide">
                        {joke.setup ? `${joke.setup}` : 'Loading joke...'}
                        {showDelivery && joke.delivery && (<div className=' flex justify-end flex-col'><p className=' mt-5 mb-3 font-bold tracking-wider'>{joke.delivery}</p> <Button onClick={() => getJoke()}><RefreshCw /></Button></div>)}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
