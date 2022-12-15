import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

import naverApi from 'src/apis/naverApi';

interface PapagoInitialState {
    beforLanguage: string;
    afterLanguage: string;
    translatedText: string;
}

interface PapagoAction extends PapagoInitialState {
    setBeforLanguage: (lang: string) => void;
    setAfterLanguage: (lang: string) => void;
    changeLanguageEachOther: () => void;
    sendPapagoApi: ({source, target, text}:{source:string, target:string, text:string}) => void;
    resetTranslatedText: () => void;
}

const initState:PapagoInitialState = {
    beforLanguage: 'detect',
    afterLanguage: 'en',
    translatedText: '',
}

const papagoStore = create<PapagoAction>()(
    devtools(persist(immer((set , get) => ({
        ...initState,

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
        
        sendPapagoApi: async({source, target, text}:{source:string, target:string, text:string}) => {
            naverApi.getTranslate({source, target, text}).then((res) => set((state) => {
                console.log(res.data.message.result.translatedText)
                state.translatedText = res.data.message.result.translatedText;
            }))
        },

        resetTranslatedText: () => set((state) => {
            state.translatedText = ''
        }),



    }))))
)


export default papagoStore;