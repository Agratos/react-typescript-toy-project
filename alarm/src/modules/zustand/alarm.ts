import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware'

interface IAlarmState {
    id: number,
    time: string,
    toggle: boolean,
    day: {
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
    currentId: number,
    alarm: IAlarmState[],
    getAlarm: (id:number) => IAlarmState;
}

const alarmStore = create<IAlarmInitState>()(
    devtools(immer((set, get) => ({
        currentId: 1,
        alarm: [{
            id: 1,
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
        }],

        // setMessage: (text: string) => set((state) => { 
        //     state.message = text;
        // }, false, 'asdmessage')

        getAlarm: (currentId: number) => get().alarm.filter(state => state.id === currentId)[0]
    })))
)


export default alarmStore;