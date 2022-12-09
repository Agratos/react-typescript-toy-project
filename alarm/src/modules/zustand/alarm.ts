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
    getId: () => number;
    setAlarmToggle: (id:number) => void;
    setRegisterToggle: () => void;
    setRegister: ({id,time,meridiem,toggle,day,memo,repeat}:IAlarmState) => void;
    setDelete: (deleteId:number) => void;
}

const alarmStore = create<IAlarmInitState>()(
    devtools(immer((set, get) => ({
        currentId: 0,
        registerToggle: false,
        alarm: [],

        getAlarm: (id: number) => get().alarm.filter(state => state.id === id)[0],

        getId: () => get().currentId,

        setAlarmToggle: (id: number) => set((state) => {
            state.alarm[id].toggle = !state.alarm[id].toggle;
        }, false, 'setAlarmToggle'),

        setRegisterToggle: () => set((state) => {
            state.registerToggle = !state.registerToggle
        }, false, 'setRegisterToggle'),

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

        setDelete: (deleteId:number) => set((state) => {
            state.alarm = state.alarm.filter((alarm) => alarm.id !== deleteId) 
        }, true, 'delete'),
    })))
)

export default alarmStore;