import { useState, useEffect } from 'react';
import styled from 'styled-components';

import SelectButton from './SelectButton';

import { ITranslation } from '../assets/types';
import { languageProperties } from 'src/assets/properties/languageProperties';
import objectConvertArray from 'src/utils/objectConvertArray';

const ChooseLanguage = ({before}: ITranslation) => {
    const list = JSON.parse(JSON.stringify(languageProperties));
    const languageList:string[][] = objectConvertArray(list)
    
    return (
        <Wrapper>
            {languageList.filter((lanugage,index) => before ? true : index !== 0).map((language, index) => (
                <div>
                    {language[1]}
                </div>
            ))}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 1px solid black;
`;

export default ChooseLanguage;