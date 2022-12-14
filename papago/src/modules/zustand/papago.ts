import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

interface PapagoStoreProps {
    beforLanguage: string;
    afterLanguage: string;
    setBeforLanguage: (lang: string) => void;
    setAfterLanguage: (lang: string) => void;
    changeLanguageEachOther: () => void;
    //sendPapagoApi: () => void;
}

const papagoStore = create<PapagoStoreProps>()(
    devtools(persist(immer((set , get) => ({
        beforLanguage: '언어감지',
        afterLanguage: '영어',

        setBeforLanguage: (lang: string) => set((state) => {
            state.beforLanguage = lang
        }),
        setAfterLanguage: (lang: string) => set((state) => {
            state.afterLanguage = lang;
        }),

        changeLanguageEachOther: () => set((state) => {
            let temp = state.beforLanguage;
            state.beforLanguage = state.afterLanguage;
            state.afterLanguage = temp;
        }),
        
    }))))
)


export default papagoStore;