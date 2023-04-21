import { useState , useLayoutEffect } from 'react';

import { ITableCildren } from 'src/@types/table';

interface IObject {
    [index: string]: any
}

interface IuseTableChildren {
    list: any[]; // table data
    targetList: string[]; // header name
    maximun: number;
    componentList: { // table 에 들어갈 component
        target: string,
        makeComponent: (value:any) => React.ReactNode
    }[]
}

// {
//     list: dummyData,
//     targetList: ['grade', 'device'],
//     componentList: [
//         {
//             target: 'grade',
//             makeComponent: (value) => <BsCircleFill color={getGradeColor(value)} />
//         },{
//             target: 'device',
//             makeComponent: () => <>test</>
//         }
//     ]
// }

const useTableChildren = ({list, targetList, maximun, componentList}: IuseTableChildren) => {
    const [children, setChildren] = useState<ITableCildren[]>();

    useLayoutEffect(() => {
        let result:ITableCildren[] = [];
        let temp:IObject = {} 
        targetList.forEach(target => {
            temp[target] = []
        })

        list.slice(0, maximun).map((data, index) => {
            targetList.forEach((target) => {
                Object.entries(data).map((element) => element[0] === target && temp[target].push({
                    id: index, 
                    component: componentList.find((x) => x.target === target)?.makeComponent(data)
                }))
            })
        })

        console.log(`temp: `,temp)

        targetList.forEach(target => {
            result.push({
                id: target,
                component: temp[target]
            })
            // result.push({
            //     target: target,
            //     child: temp[target]
            // })
        })
        
        setChildren(result)
    },[list])

    console.log(`children: ${children}`)

    return children;
}

export default useTableChildren;