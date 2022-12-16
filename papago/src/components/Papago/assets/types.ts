import { Dispatch, SetStateAction} from 'react'

export interface ITranslation {
    before: boolean
    select: string
    setLanaguage: (str:string) => void
    cloaseLanguageOpen: Dispatch<SetStateAction<boolean>>
}

export interface IHTMLTextAreaElement extends HTMLTextAreaElement {
    [index:string]: any
}