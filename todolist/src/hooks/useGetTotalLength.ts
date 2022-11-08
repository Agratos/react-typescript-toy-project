import { useEffect } from 'react';

interface IGetTotalLengthProps {
    id: string;
    size: number;
}

const useGetTotalLength = ({id, size}: IGetTotalLengthProps) => {
    let result: number[] = [];
    
    useEffect(() => {
        for(let i = 0; i < size; i++){
            let temp = document.getElementsByClassName(`${id}__${i+1}`);
            result.push((temp[0] as SVGGeometryElement).getTotalLength());
        }
    },[])

    return result;
}

export default useGetTotalLength;