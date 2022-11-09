import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { BiLeftArrowAlt, BiMenu, BiTrash } from 'react-icons/bi';

import { resetTodo, toggleMenuTodo, toggleRemoveTodo } from 'src/modules/actions/todo';
import CheckModal from '../modal/CheckModal';
import { RootState } from 'src/modules';

const TodoHeader = () => {
    const {
        toggleMenu, 
        toggleRemove
    } = useSelector(({todo}:RootState) => ({
        toggleMenu:todo.toggleMenu,
        toggleRemove:todo.toggleRemove
    }));
    const dispatch = useDispatch();
    const [onResetModal, setOnResetModal] = useState<boolean>(false);
    const [onRemoveModal, setOnRemoveModal] = useState<boolean>(false);

    const handleReset = () => {
        dispatch(resetTodo());
        setOnResetModal(false);
    }

    const handleMenu = () => {
        dispatch(toggleMenuTodo())
    }
    
    const handleRemove = () => {
        dispatch(toggleRemoveTodo());
        setOnRemoveModal(false);
    }

    return(
        <Wrapper>
            <ResetWrapper>
                <BiLeftArrowAlt 
                    size={30} 
                    onClick={() => !toggleMenu && setOnResetModal(true)}
                />
            </ResetWrapper>
            <Title>카카오톡 Todolist</Title>
            <MenuWrapper>
                {!toggleMenu &&  
                    <BiTrash
                        size={30}
                        onClick={() => setOnRemoveModal(true)}
                        color={toggleRemove ? 'blue' : 'black'}
                    />
                }
            </MenuWrapper>
            <MenuWrapper>
                <BiMenu 
                    size={30}
                    onClick={handleMenu}
                />
            </MenuWrapper>
            {onResetModal && 
                <CheckModal 
                    text={'초기화하시겠습니까?'}
                    onClickOkButton={handleReset}
                    onClickCancleButton={() => setOnResetModal(false)}
                />
            }
            {onRemoveModal &&
                <CheckModal 
                    text={toggleRemove ? '스레기통을 비활성화합니까?' : '스레기통을 활성화합니까?'}
                    onClickOkButton={handleRemove}
                    onClickCancleButton={() => setOnRemoveModal(false)}
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
const MenuWrapper = styled(ResetWrapper)`
    margin-left: 16px;
`;
const Title = styled.div`
    flex: 1;
    margin-left: 16px;
    font-size: 20px;
`;
export default React.memo(TodoHeader);