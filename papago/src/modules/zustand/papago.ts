import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

import naverApi from 'src/apis/naverApi';

interface PapagoInitialState {
    isDetect: boolean;
    beforLanguage: string;
    afterLanguage: string;
    beforText: string;
    translatedText: string;
}

interface PapagoAction extends PapagoInitialState {
    setBeforLanguage: (lang: string) => void;
    setAfterLanguage: (lang: string) => void;
    changeLanguageEachOther: (str: string) => void;
    resetTranslatedText: () => void;

    papagoTranslateApi: ({source, target, text}:{source:string, target:string, text:string}) => Promise<void>;
    papagoLanguageDetectApi: (text:string) => void;
}

const initState:PapagoInitialState = {
    isDetect: true,
    beforLanguage: 'detect',
    afterLanguage: 'en',
    beforText: '',
    translatedText: '',
}

const papagoStore = create<PapagoAction>()(
    devtools(immer((set , get) => ({
        ...initState,

        setBeforLanguage: (lang: string) => set((state) => {
            switch(lang){
                case 'detect':
                    state.isDetect = true;
                    break;
                default:
                    state.isDetect = false;
            }
            state.beforLanguage = lang
        }, false, 'setBeforLanguage'),
        setAfterLanguage: (lang: string) => set((state) => {
            state.afterLanguage = lang;
        }, false, 'setAfterLanguage'),

        changeLanguageEachOther: (str: string) => set((state) => {
            let temp = state.beforLanguage;
            state.beforLanguage = state.afterLanguage;
            state.afterLanguage = temp;

            temp = state.translatedText;
            state.translatedText = str;
            state.beforText = temp;
        }, false, 'changeLanguageEachOther'),
        
        papagoTranslateApi: async({source, target, text}:{source:string, target:string, text:string}) => {
            naverApi.getTranslate({source, target, text}).then((res) => set((state) => {
                state.translatedText = res.data.message.result.translatedText;
            }, false, 'papagoTranslateApi'))
        },

        papagoLanguageDetectApi: (text:string) => {
            naverApi.getLanguageDetect(text).then((res) => set((state) => {
                state.beforLanguage = res.data.langCode;
            }, false, 'papagoLanguageDetectApi'))
        },

        resetTranslatedText: () => set((state) => {
            state.translatedText = '';
        }, false, 'resetTranslatedText'),

    })))
)


export default papagoStore;