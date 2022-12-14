import styled from 'styled-components';

import BeforTranslation from './BeforTranslation';
import AfterTranslation from './AfterTranslation';

const Papago = () => {
    return (
        <Wrapper>
            <TextareaWrapper>
                <BeforTranslation />
                <AfterTranslation />
            </TextareaWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;
const TextareaWrapper = styled.div`
    display: flex;
    margin: auto 0;
`;


export default Papago;