import { useState, useRef } from 'react';
import styled from 'styled-components';

import { FaExchangeAlt } from 'react-icons/fa'; 

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

import { IHTMLTextAreaElement } from './assets/types';
import papagoStore from 'src/modules/zustand/papago';


const BeforTranslation = () => {
    const { 
        changeLanguageEachOther, 
        papagoTranslateApi, 
        papagoLanguageDetectApi, 
        resetTranslatedText,
        setBeforLanguage,
    } = papagoStore();
    const { beforLanguage, afterLanguage, isDetect } = papagoStore();
    const [selectLanguageOpen, setSelectLanguageOpen] = useState<boolean>(false);
    const [textareaValue, setTextareaValue] = useState<string>('');
    const textareaRef = useRef<IHTMLTextAreaElement>(null);
    
    const handleTextareaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        clearTimeout(textareaRef.current!.setTimeOut);
        
        textareaRef.current!.setTimeOut = setTimeout(() => {
            const text = e.target.value;
            if(text.replace(/\n|\r|\s*/g, '') !== ''){
                if(isDetect) { 
                    papagoLanguageDetectApi(e.target.value)
                }

                if(beforLanguage !== 'detect'){
                    papagoTranslateApi({
                        source: beforLanguage,
                        target: afterLanguage,
                        text: e.target.value
                    })
                }
            }else {
                resetTranslatedText();
                if(isDetect && text === '') setBeforLanguage('detect');
            }
            setTextareaValue(text)
        }, 100)
    }
 
    return (
        <TranslationWrapper>
            <TranslationHeader>
                <SelectButton 
                    language={beforLanguage}
                    setSelectLanguageOpen={setSelectLanguageOpen}
                    isDetect={isDetect}
                />
                <LanguageChangeButton onClick={changeLanguageEachOther} disabled={beforLanguage === 'detect'}>
                    <FaExchangeAlt size={22} color={beforLanguage === 'detect' ? '#87878745' :'#938484'}/>
                </LanguageChangeButton>
            </TranslationHeader>
            <TranslationBody>
                {selectLanguageOpen ?
                    <WriteAreaWrapper>
                        <Textarea
                            ref={textareaRef}
                            onChange={(e) => handleTextareaValue(e)}
                            placeholder='번역할 내용을 입력하세요.' 
                        />
                        <TextLengthWrapper>
                            <TextLength>{`${textareaValue.length}`} / 5000</TextLength>
                        </TextLengthWrapper>
                    </WriteAreaWrapper>
                    :
                    <SelectAreaWrapper>
                        <ChooseLanguage before={true}/>
                    </SelectAreaWrapper>
                }
            </TranslationBody>
            <TranslationFooter>
                <FunctionWrapper>
                    <CopyButton text={textareaValue}/>
                </FunctionWrapper>
                <TranslateButton
                    onClick={() => papagoTranslateApi({
                        source:'ko',
                        target:'en',
                        text: textareaValue
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