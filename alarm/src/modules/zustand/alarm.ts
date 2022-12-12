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
    setDelete: (id:number) => void;
    setUpdate: ({id,time,meridiem,toggle,day,memo,repeat}:IAlarmState) => void;
}

const alarmStore = create<IAlarmInitState>()(
    devtools(immer((set, get) => ({
        currentId: 0,
        registerToggle: false,
        alarm: [],

        getAlarm: (id: number) => get().alarm.filter(state => state.id === id)[0],

        getId: () => get().currentId,

        setAlarmToggle: (id: number) => set((state) => {
            const tmp = state.alarm.filter((alarm) => alarm.id === id)[0]
            tmp.toggle = !tmp.toggle;
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