import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

interface CounterStoreProps {
    counter: number;
    message: string;
    increaseCounter: () => void;
    decreaseCounter: () => void;
    setMessage: (text:string) => void;
}

const testStore = create<CounterStoreProps>()(
    devtools(persist(immer((set) => ({
        counter: 0,
        message: '',

        increaseCounter: () => set((state) => ({ counter: state.counter + 1})),
        decreaseCounter: () => set((state) => ({ counter: state.counter - 1})),

        setMessage: (text: string) => set((state) => { 
            state.message = text;
        }, false, 'asdmessage')
    }))))
)


export default testStore;