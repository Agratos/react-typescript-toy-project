import styled from 'styled-components';

import { BiLeftArrowAlt, BiMenu } from 'react-icons/bi';

const TodoHeader = () => {
    return(
        <Wrapper>
            <ResetWrapper>
                <BiLeftArrowAlt size={30} />
            </ResetWrapper>
            <Title>카카오톡 Todolist</Title>
            <MenuWrapper>
                <BiMenu size={30} />
            </MenuWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    text-align: left;

    padding: 12px 16px 8px;
    border-bottom: 1px solid #ffffff39;
`;
const ResetWrapper = styled.div`
    :hover{
        cursor: pointer;
    }
`;
const MenuWrapper = styled(ResetWrapper)``;
const Title = styled.div`
    flex: 1;
    margin-left: 16px;
    font-size: 20px;
`;
export default TodoHeader