import styled from 'styled-components';

import DragAndDropFile from 'src/components/DragAndDropFile';

const MainPage = () => {
    return (
        <Wrapper>
            <DragAndDropFile />
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default MainPage;