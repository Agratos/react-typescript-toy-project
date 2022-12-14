import { useState } from 'react';
import styled from 'styled-components';

import { 
    TranslationWrapper,
    TranslationHeader,
    TranslationBody,
    TranslationFooter,
    Textarea
 } from './assets/styled';
import ChooseLanguage from './ChooseLanguage';
import SelectButton from './components/SelectButton';
import CopyButton from './components/CopyButton';

import papagoStore from 'src/modules/zustand/papago';


const AfterTranslation = () => {
    const { afterLanguage } = papagoStore()
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
                <Textarea readOnly style={{cursor:'default'}} />
            </TranslationBody>
            <TranslationFooter>
                
            </TranslationFooter>
        </TranslationWrapper>
    )
}

export default AfterTranslation;