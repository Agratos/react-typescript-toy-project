import React, { useState, useEffect } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { MaterialReactTable, type MRT_ColumnDef, MaterialReactTableProps, MRT_TableState } from 'material-react-table';
import Button from '@mui/material/Button';
import { ObjectType } from 'src/@types';

export interface TableProps{
    columns: MRT_ColumnDef<Record<string, any>>[]
    data: Record<string, any>[]
    state?: Partial<MRT_TableState>
    isPagination?: boolean
    pageSize?: number
    options?: Omit<MaterialReactTableProps, 'columns' | 'data'>;
    style?: CSSProperties 
}

const CustomTable = ({ columns, data, state, isPagination = true, pageSize = 5, options, style }: TableProps) => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize
    });
    // const [testData, setTestData] = useState<any>([]);

    // useEffect(() => {
    //     let temp = JSON.parse(JSON.stringify(data));
    //     let emptyRows = Math.max(0, 5 - temp.length)
    //     let emptyObject: ObjectType = {};
    //     if(emptyRows){
    //         for(const key in data[0]){
    //             emptyObject[key] = '';
    //         }
    //         temp = temp.concat(new Array(emptyRows).fill({}))
    //     }
    //     setTestData(temp);
    // }, [data, pagination.pageSize])

    // const sortTypes = React.useMemo(
    //     () => ({
    //       alphanumericFalsyLast(rowA: any, rowB: any, columnId: any) {
    //         const a = Number(rowA.values[columnId]);
    //         const b = Number(rowB.values[columnId]);
    //         return Number(a) - Number(b);
    //       },
    //     }),
    //     []
    // );

    return (
        <Wrapper noData={data.length ? false : true} style={{...style}}>
            <MaterialReactTable
                columns={columns} 
                data={data}
                state={{ 
                    pagination,
                    ...state 
                }}
                
                onPaginationChange={setPagination}
                muiTablePaginationProps={{
                    rowsPerPageOptions: [5, 10, 20, 50, 100],
                    showFirstButton: false,
                    showLastButton: false,
                }}

                muiTablePaperProps={{
                    sx: { flex: 1 }
                }}
                enablePagination={isPagination}
                enableColumnActions={false}
                enableColumnFilters={false}
                isMultiSortEvent={() => true}

                renderEmptyRowsFallback={() => {
                    return (
                        <RenderEmpty>데이터가 없습니다.</RenderEmpty>
                    )
                }}
                muiTableBodyProps={{ sx: data.length > 0 ? {} : {  height: '100%' } }}
                muiTableContainerProps={{ sx: { height: '100%' } }}

                {...options}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div<{noData: boolean}>`
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 0.5px solid black;
    border-radius: 8px;
    //margin: 8px;
    //overflow: hidden;

    .MuiPaper-root {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
    }

    .MuiTable-root {
        height: ${({noData}) => noData && `100%`};
    }

    .css-1omuo8w-MuiToolbar-root {
        border-bottom: 0.5px solid black;
        z-index: 0;
    }
`;
const RenderEmpty = styled.div`
    ${({theme}) => theme.div.center}
    font-size: 14px;
`;

export default CustomTable;
