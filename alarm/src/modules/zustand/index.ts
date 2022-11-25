import create from 'zustand';

interface CounterStoreProps {
    counter: number;
    increaseCounter: () => void;
    decreaseCounter: () => void;
}

const counterStore = create<CounterStoreProps>((set) => ({
    counter: 0,
    increaseCounter: () => set((state) => ({ counter: state.counter + 1})),
    decreaseCounter: () => set((state) => ({ counter: state.counter - 1})),
}))

export default counterStore;