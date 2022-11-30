import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

interface IAlarmState {
    id: number,
    time: string,
    toggle: boolean,
    day: {
        [index:string]: boolean,
        Mon: boolean,
        Tue: boolean,
        Wed: boolean,
        Thu: boolean,
        Fri: boolean,
        Sat: boolean,
        Sun: boolean,
    }
    memo: string,
    repeat: number,
}

interface IAlarmInitState {
    currentId: number;
    alarm: IAlarmState[];
    getAlarm: (id:number) => IAlarmState;
    setToggle: (id:number) => void;
}

const alarmStore = create<IAlarmInitState>()(
    devtools(immer((set, get) => ({
        currentId: 1,
        alarm: [{
            id: 0,
            time: '7.30',
            toggle: true,
            day: {
                Mon: true,
                Tue: true,
                Wed: true,
                Thu: true,
                Fri: true,
                Sat: false,
                Sun: false,
            },
            memo: 'Wake Up for Go to Work!',
            repeat: 5,
        },
        {
            id: 1,
            time: '4.30',
            toggle: false,
            day: {
                Mon: false,
                Tue: true,
                Wed: true,
                Thu: true,
                Fri: true,
                Sat: false,
                Sun: false,
            },
            memo: '밥먹을 시간 입니다.',
            repeat: 5,
        }],

        // setMessage: (text: string) => set((state) => { 
        //     state.message = text;
        // }, false, 'asdmessage')

        getAlarm: (id: number) => get().alarm.filter(state => state.id === id)[0],

        setToggle: (id: number) => set((state) => {
            state.alarm[id].toggle = !state.alarm[id].toggle;
        }, false, 'setToggle')
    })))
)


export default alarmStore;