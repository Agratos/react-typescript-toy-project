import styled from 'styled-components';

import { CgCopy } from 'react-icons/cg';

import textCopy from 'src/utils/textCopy';

interface CopyButtonProps {
    value: string | undefined
}

const CopyButton = ({value}:CopyButtonProps) => {
    
    return (
        <Wrapper onClick={() => {textCopy(value ? value : '')}}>
            <CgCopy size={26} color={'#0000003d'}/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.div.vhCenter}
    height: 100%;
    padding: 0 24px;
    border-right: 1px solid rgba(0,0,0,.05);
    cursor: pointer;
`;

export default CopyButton;