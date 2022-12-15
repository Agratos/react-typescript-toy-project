import { useState, useRef } from 'react';
import styled from 'styled-components';

import { FaExchangeAlt } from 'react-icons/fa'; 

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

const BeforTranslation = () => {
    const { beforLanguage, changeLanguageEachOther, sendPapagoApi } = papagoStore()
    const [selectLanguageOpen, setSelectLanguageOpen] = useState<boolean>(false);
    const [textareaValue, setTextareaValue] = useState<string>('');
    
    const handleTextareaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(e.target.value)
    }

    const getTextareaValue = () => {
        return textareaValue
    }

    return (
        <TranslationWrapper>
            <TranslationHeader>
                <SelectButton 
                    language={beforLanguage}
                    setSelectLanguageOpen={setSelectLanguageOpen}
                />
                <LanguageChangeButton onClick={changeLanguageEachOther} disabled={beforLanguage === '언어감지'}>
                    <FaExchangeAlt size={22} color={beforLanguage === '언어감지' ? '#87878745' :'#8d8b8bb5'}/>
                </LanguageChangeButton>
            </TranslationHeader>
            <TranslationBody>
                <Textarea
                    onChange={(e) => handleTextareaValue(e)}
                    placeholder='번역할 내용을 입력하세요.' 
                />
                <TextLengthWrapper>
                    <TextLength>{`${textareaValue.length}`} / 5000</TextLength>
                </TextLengthWrapper>
            </TranslationBody>
            <TranslationFooter>
                <FunctionWrapper>
                    <CopyButton getValue={getTextareaValue}/>
                </FunctionWrapper>
                <TranslateButton
                    onClick={() => sendPapagoApi({
                        source:'ko',
                        target:'en',
                        text:'hello'
                    })}
                >
                    번역하기
                </TranslateButton>
            </TranslationFooter>
        </TranslationWrapper>
    )
}
const LanguageChangeButton = styled.button`
    margin: auto 0;
    border: none;
    background-color: transparent;
`;
const TextLengthWrapper = styled.div`
    flex: 1;
    margin-top: 16px;
`;
const TextLength = styled.div`
    color: #3d3d3d35;
    font-size: 22px;
    float: right;
`;
const FunctionWrapper = styled.div``;
const TranslateButton = styled(LanguageChangeButton)`
    ${({theme}) => theme.div.vhCenter}
    //width: 50px;
    height: inherit;
    font-size: 22px;
    font-weight: bolder;
    color: #fff;
    background-color: #21dc6d;
    border-bottom-right-radius: 11px;
    padding: 0 24px;
    cursor: pointer;
`;

export default BeforTranslation;