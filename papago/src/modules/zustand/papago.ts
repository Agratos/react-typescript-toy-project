import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

interface PapagoStoreProps {
    message: string;
    
    //sendPapagoApi: () => void;
}

const papagoStore = create<PapagoStoreProps>()(
    devtools(persist(immer((set , get) => ({
        message: '',

        
    }))))
)


export default papagoStore;