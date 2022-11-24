import styled from 'styled-components';

interface PaginationProps {
    total: number,
    limit: number,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    onClick: (number: number) => void;
}

const Pagination = ({total, limit, page, setPage, onClick}:PaginationProps) => {
    const numPages = Array.from({length: Math.ceil(Number(total)/limit)}, (_, i) => i + 1)
    
    const handleSetPage = (number: number) => {
        setPage(number);
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
                    onClick={() => onClick(item)}
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
const Button = styled.button``;

export default Pagination;