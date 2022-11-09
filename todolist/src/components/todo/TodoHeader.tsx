import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { BiLeftArrowAlt, BiMenu } from 'react-icons/bi';

import { resetTodo, toggleMenuTodo } from 'src/modules/actions/todo';
import CheckModal from '../modal/CheckModal';
import { RootState } from 'src/modules';

const TodoHeader = () => {
    const dispatch = useDispatch();
    const {toggleMenu} = useSelector(({todo}:RootState) => ({toggleMenu:todo.toggleMenu}));
    const [onClickModal, setOnClickModal] = useState<boolean>(false);

    const handleReset = () => {
        dispatch(resetTodo());
        setOnClickModal(false);
    }

    const handleMenu = () => {
        dispatch(toggleMenuTodo());
    }

    console.log(toggleMenu);

    return(
        <Wrapper>
            <ResetWrapper>
                <BiLeftArrowAlt 
                    size={30} 
                    onClick={() => !toggleMenu && setOnClickModal(true)}
                />
            </ResetWrapper>
            <Title>카카오톡 Todolist</Title>
            <MenuWrapper>
                <BiMenu 
                    size={30}
                    onClick={handleMenu}
                />
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
export default React.memo(TodoHeader);