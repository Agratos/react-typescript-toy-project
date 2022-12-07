import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

export interface IAlarmState {
    id: number,
    time: string,
    toggle: boolean,
    day: {
        [index:string]: boolean,
        월: boolean,
        화: boolean,
        수: boolean,
        목: boolean,
        금: boolean,
        토: boolean,
        일: boolean,
    }
    memo: string,
    repeat: number,
}

interface IAlarmInitState {
    currentId: number;
    registerToggle: boolean;
    alarm: IAlarmState[];
    getAlarm: (id:number) => IAlarmState;
    setAlarmToggle: (id:number) => void;
    setRegisterToggle: () => void;
    setRegister: ({id,time,toggle,day,memo,repeat}:IAlarmState) => void;
}

const alarmStore = create<IAlarmInitState>()(
    devtools(immer((set, get) => ({
        currentId: 1,
        registerToggle: false,
        alarm: [{
            id: 0,
            time: '7.30',
            toggle: true,
            day: {
                월: true,
                화: true,
                수: true,
                목: true,
                금: true,
                토: false,
                일: false,
            },
            memo: 'Wake Up for Go to Work!',
            repeat: 5,
        },
        {
            id: 1,
            time: '4.30',
            toggle: false,
            day: {
                월: false,
                화: true,
                수: true,
                목: true,
                금: true,
                토: false,
                일: false,
            },
            memo: '밥먹을 시간 입니다.',
            repeat: 5,
        }],

        getAlarm: (id: number) => get().alarm.filter(state => state.id === id)[0],

        setAlarmToggle: (id: number) => set((state) => {
            state.alarm[id].toggle = !state.alarm[id].toggle;
        }, false, 'setAlarmToggle'),

        setRegisterToggle: () => set((state) => {
            state.registerToggle = !state.registerToggle
        }, false, 'setRegisterToggle'),

        setRegister: ({id,time,toggle,day,memo,repeat}:IAlarmState) => set((state) => {
            state.alarm.push({
                id,
                time,
                toggle,
                day,
                memo,
                repeat,
            });
            state.currentId = id;
        }, false, 'setRegister')
    })))
)

// increaseCounter: () => set((state) => ({ counter: state.counter + 1})),


export default alarmStore;