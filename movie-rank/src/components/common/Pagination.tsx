import { useState } from 'react';
import styled, { css } from 'styled-components';

interface PaginationProps {
    total: number,
    limit: number,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    onClick: (number: number) => void;
}

const Pagination = ({total, limit, page, setPage, onClick}:PaginationProps) => {
    const numPages = Array.from({length: Math.ceil(Number(total)/limit)}, (_, i) => i + 1)
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleSetPage = (number: number) => {
        if(number >= currentPage){
            onClick(number + 1);
            setCurrentPage(number + 1);
        }else if(number <= currentPage){
            onClick(number + 5);
            setCurrentPage(number + 5);
        }
        setPage(number);
    }

    const handleOnClick = (item: number) => {
        if(currentPage !== item){
            onClick(item);
            setCurrentPage(item);
        }
    }

    return (
        <Wrapper>
            <Button
                disabled={page === 0}
                onClick={() => handleSetPage(page - limit)}
            >
                &lt;
            </Button>
            {numPages.slice(page, page + 5).map((item) => (
                <Button
                    key={`pagenation${item}`}
                    onClick={() => handleOnClick(item)}
                    current={currentPage === item}
                >
                    {item}
                </Button>
            ))}
            <Button
                disabled={page >= numPages.length - limit }
                onClick={() => handleSetPage(page + limit)}
            >
                &gt;
            </Button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
`;
const Button = styled.button<{current?: boolean, disabled?: boolean}>`
    background-color: transparent;
    color: white;
    border: none;
    
    font-size: 18px;

    ${({disabled}) => disabled && css`
        color: transparent;
    `}

    ${({current}) => current && css`
        color: red;
    `}
`;

export default Pagination;