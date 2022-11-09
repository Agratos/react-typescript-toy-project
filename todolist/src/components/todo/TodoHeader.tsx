import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { BiLeftArrowAlt, BiMenu } from 'react-icons/bi';

import { resetTodo } from 'src/modules/actions/todo';

import CheckModal from '../modal/CheckModal';

const TodoHeader = () => {
    const dispatch = useDispatch();
    const [onClickModal, setOnClickModal] = useState<boolean>(false);

    const handleReset = () => {
        dispatch(resetTodo());
        setOnClickModal(false);
    }

    return(
        <Wrapper>
            <ResetWrapper>
                <BiLeftArrowAlt 
                    size={30} 
                    onClick={() => setOnClickModal(true)}
                />
            </ResetWrapper>
            <Title>카카오톡 Todolist</Title>
            <MenuWrapper>
                <BiMenu size={30} />
            </MenuWrapper>
            {onClickModal && 
                <CheckModal 
                    text={'초기화하시겠습니까?'}
                    onClickOkButton={handleReset}
                    onClickCancleButton={() => setOnClickModal(false)}
                />
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    text-align: left;

    padding: 12px 16px 8px;
    border-bottom: 1px solid #ffffff39;

    z-index: 2;
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