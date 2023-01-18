import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

export interface IAlarmState {
    id: number,
    time: string,
    meridiem: string,
    toggle: boolean,
    day: {
        [index:string]: boolean,
        0: boolean,
        1: boolean,
        2: boolean,
        3: boolean,
        4: boolean,
        5: boolean,
        6: boolean,
    }
    memo: string,
    repeat: number,
}

interface IAlarmInitState {
    currentId: number;
    updateId: number | null;
    alarmPageIndex: number;
    alarm: IAlarmState[];
    getAlarm: (id:number) => IAlarmState;
    getId: () => number;
    getUpdateId: () => number | null;
    setUpdateId: (id: number) => void;
    setAlarmToggle: (id:number) => void;
    setAlarmPageIndex: (index:number) => void;
    setRegister: ({id,time,meridiem,toggle,day,memo,repeat}:IAlarmState) => void;
    setDelete: (id:number) => void;
    setUpdate: ({id,time,meridiem,toggle,day,memo,repeat}:IAlarmState) => void;
}

const alarmStore = create<IAlarmInitState>()(
    devtools(immer((set, get) => ({
        currentId: 1,
        updateId: null,
        alarmPageIndex: 0,
        alarm: [],

        getAlarm: (id: number) => get().alarm.filter(state => state.id === id)[0],

        getId: () => get().currentId,

        getUpdateId: () => get().updateId,

        setUpdateId: (id: number) => set((state) => {
            state.updateId = id;
        }),

        setAlarmToggle: (id: number) => set((state) => {
            const tmp = state.alarm.filter((alarm) => alarm.id === id)[0]
            tmp.toggle = !tmp.toggle;
        }, false, 'setAlarmToggle'),

        setAlarmPageIndex: (index:number) => set((state) => {
            state.alarmPageIndex = index;
        }, false, 'setAlarmPageIndex'),

        setRegister: ({id,time,meridiem,toggle,day,memo,repeat}:IAlarmState) => set((state) => {
            state.alarm.push({
                id,
                time,
                meridiem,
                toggle,
                day,
                memo,
                repeat,
            });
            state.currentId = id + 1;
        }, false, 'setRegister'),

        setDelete: (id:number) => set((state) => {
            state.alarm = state.alarm.filter((alarm) => alarm.id !== id) 
        }, false, 'delete'),

        setUpdate: ({id,time,meridiem,toggle,day,memo,repeat}:IAlarmState) => set((state) => {
            const updateIndex = state.alarm.findIndex((alarm) => alarm.id === id)
            state.alarm[updateIndex] = {
                id,
                time,
                meridiem,
                toggle,
                day,
                memo,
                repeat,
            }
        }, false, 'setUpdate')
    })))
)

export default alarmStore;