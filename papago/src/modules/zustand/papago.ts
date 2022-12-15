import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

import naverApi from 'src/apis/naverApi';

interface PapagoStoreProps {
    beforLanguage: string;
    afterLanguage: string;
    setBeforLanguage: (lang: string) => void;
    setAfterLanguage: (lang: string) => void;
    changeLanguageEachOther: () => void;
    sendPapagoApi: ({source, target, text}:{source:string, target:string, text:string}) => void;
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
        
        sendPapagoApi: async({source, target, text}:{source:string, target:string, text:string}) => set((state) => {
            const response = naverApi.getTranslate({source, target, text})
            console.log(response);
        })

    }))))
)


export default papagoStore;