import { useState, useEffect, useRef } from 'react';
import getStoredStateMigrateV4 from 'redux-persist/lib/integration/getStoredStateMigrateV4';
import styled from 'styled-components';

const MainPage = () => {
    // const [userResponded, setUserResponded] = useState(false);

    // const pushNotification = async (notificationText:string) => {
    //     if(!('Notification' in window)){
    //         alert('Browser does not support notification');
    //     } else if (Notification.permission === 'granted') {
    //         const notification = new Notification(notificationText);
    //     } else if (Notification.permission !== 'denied') {
    //         await Notification.requestPermission().then((permission) => {
    //             if (permission === 'granted') {
    //                 const notification = new Notification(notificationText);
    //             }
    //         })
    //     }
    // }

    // const enableNotifisAndClose = async () => {
    //     await pushNotification('안녕하세요');
    //     setUserResponded(true);
    // }

    // const disableNotifisAndClose = () => {
    //     setUserResponded(true);
    // }

    // const conditionRender = () => {
    //     if(!(userResponded) && (Notification.permission === 'granted')){
    //         return (
    //             <div>
    //                 알림을 허락 하시겠습니까?
    //                 <button onClick={enableNotifisAndClose}>수락</button>
    //                 <button onClick={disableNotifisAndClose}>거부</button>
    //             </div>
    //         )
    //     } else if (Notification.permission === 'granted') {
    //         return (
    //             <div>
    //                 알람이 울리고 있습니다!!
    //                 <button onClick={() => pushNotification('안녕하세요')}> 알람 보내기</button>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>알림 거부가 되어있습니다.</div>
    //         )
    //     }
    // }

    const notifications = [
        {
            id: '1',
            type: 'SUCCESS',
            message: 'hellow',
        }
    ]

    const onClick = () => {
        Notification.requestPermission().then((result) => {
            console.log(result);
            const text = `HEY! Your task is now overdue.`;
            const notification = new Notification('To do list', { body: text });
        });
    }

    return (
        <Wrapper>
            <button onClick={() => onClick()}>알람</button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    padding: 16px;
`;

export default MainPage;