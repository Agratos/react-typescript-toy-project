import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { HiOutlineChevronDown } from 'react-icons/hi';

import papagoStore from 'src/modules/zustand/papago';
import { languageProperties } from 'src/assets/properties/languageProperties';

interface SelectButtonProps {
    language: string;
    isDetect?: boolean;
    setSelectLanguageOpen: Dispatch<SetStateAction<boolean>>
}

const SelectButton = ({language, isDetect, setSelectLanguageOpen}: SelectButtonProps) => {

    const textRender = () => {
        if(language === 'detect'){
            return languageProperties[language]
        }else{
            if(isDetect){
                return `${languageProperties[language]} 감지`;
            }else{
                return languageProperties[language];
            }
        }
    }

    return (
        <Wrapper>
            <TextWrapper onClick={() => setSelectLanguageOpen((open) => !open)}>
                {textRender()}
                <IconWrapper>
                    <HiOutlineChevronDown size={22} color={`#ababab`}/>
                </IconWrapper>
            </TextWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    height: inherit;
    color: #3d3d3d;
    font-size: 18px;
    font-weight: 600;
    font-family: noto,notojp,notokr,Helvetica,Microsoft YaHei,Apple SD Gothic Neo,Malgun Gothic,맑은 고딕,Dotum,돋움,sans-serif;;
`;
const TextWrapper = styled.div`
    display: flex;
    margin: auto 0;
    cursor: pointer;
`;
const IconWrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
    margin-left: 4px;
`;


export default SelectButton;