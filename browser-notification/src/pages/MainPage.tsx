import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import backgroundImg from 'src/assets/images/1.png';

const MainPage = () => {

    useEffect(() => {
        if(!('Notification' in window)){
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === 'granted') {
            const notification = new Notification(
                '경고!',
                {
                    body: '문이 고장 났습니다.',
                    //icon: backgroundImg,
                    //image: backgroundImg
                    
                }
            );

            notification.onclick = () => {
                window.open('/');
            }

        } else if (Notification.permission === 'denied') {
            Notification.requestPermission().then((permission) => {
                if (permission !== 'granted' && permission !== 'denied'){
                    const notification = new Notification('Thanck Allow Notification');
                }
            })
        }
    },[])

    return (
        <Wrapper>
           크롬 알림 설정을 활성화 해주세요
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 16px;
`;

export default MainPage;