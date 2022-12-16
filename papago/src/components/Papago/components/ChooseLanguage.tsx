import styled, { css } from 'styled-components';

import { AiOutlineCheck } from 'react-icons/ai';

import { ITranslation } from '../assets/types';
import { languageProperties } from 'src/assets/properties/languageProperties';
import objectConvertArray from 'src/utils/objectConvertArray';
import papagoStore from 'src/modules/zustand/papago';

const ChooseLanguage = ({before, select, setLanaguage, cloaseLanguageOpen}: ITranslation) => {
    const { isDetect } = papagoStore(); 
    const list = JSON.parse(JSON.stringify(languageProperties));
    const languageList:string[][] = objectConvertArray(list)
    
    const handleCheckLanguage = ({index, language, select}: {index: number, language:string[], select: string}) => {
        if(isDetect && before){
            if(index === 0) return true;
        }else{
            if(select === language[0]) return true;
        }
        return false;
    }

    const handleSelectLanguage = (language:string[]) => {
        setLanaguage(language[0]);
        cloaseLanguageOpen((open) => !open);
    }

    return (
        <Wrapper>
            {languageList.filter((list, index) => before ? true : index !== 0).map((language, index) => (
                <Language checked={handleCheckLanguage({index,select,language})}>
                    <Text onClick={() => handleSelectLanguage(language)}>
                        {language[1]}
                    </Text>
                {handleCheckLanguage({index,select,language}) &&
                    <IconWrapper>
                        <AiOutlineCheck color={'#0FB74C'} size={16}/>
                    </IconWrapper>
                }
                </Language>
            ))}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: inherit;
`;
const Language = styled.div<{checked: boolean}>`
    display: flex;
    margin: 12px 0;
    width: 33.33%;
    font-size: 22px;
    font-weight: 600;
    font-family: noto,notojp,notokr,Helvetica,Microsoft YaHei,Apple SD Gothic Neo,Malgun Gothic,맑은 고딕,Dotum,돋움,sans-serif;;
    color: #444444;
    cursor: pointer;

    ${({checked}) => checked && css`
        color: #0FB74C;
    `}
`;
const Text = styled.div``;
const IconWrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
    margin-left: 6px;
`;

export default ChooseLanguage;