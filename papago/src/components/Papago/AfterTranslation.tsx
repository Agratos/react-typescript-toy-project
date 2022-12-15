import { useState } from 'react';
import styled from 'styled-components';

import { 
    TranslationWrapper,
    TranslationHeader,
    TranslationBody,
    TranslationFooter,
    Textarea,
    WriteAreaWrapper,
    SelectAreaWrapper
 } from './assets/styled';
import ChooseLanguage from './components/ChooseLanguage';
import SelectButton from './components/SelectButton';
import CopyButton from './components/CopyButton';

import papagoStore from 'src/modules/zustand/papago';


const AfterTranslation = () => {
    const { afterLanguage, translatedText } = papagoStore()
    const [selectLanguageOpen, setSelectLanguageOpen] = useState<boolean>(false);

    return (
        <TranslationWrapper>
            <TranslationHeader>
            <SelectButton 
                    language={afterLanguage}
                    setSelectLanguageOpen={setSelectLanguageOpen}
                />
            </TranslationHeader>
            <TranslationBody>
                {selectLanguageOpen ?
                    <WriteAreaWrapper>
                        <Textarea value={translatedText} readOnly style={{cursor:'default'}} />
                    </WriteAreaWrapper>
                    :
                    <SelectAreaWrapper>
                        <ChooseLanguage before={false}/>
                    </SelectAreaWrapper>
                }
            </TranslationBody>
            <TranslationFooter>
                <FunctionWrapper>
                    <CopyButton text={translatedText}/>
                </FunctionWrapper>
            </TranslationFooter>
        </TranslationWrapper>
    )
}
const FunctionWrapper = styled.div``;

export default AfterTranslation;