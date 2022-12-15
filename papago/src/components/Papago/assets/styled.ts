import styled from 'styled-components';

export const TranslationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 633px;
    height: 446px;
    border-radius: 11px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
    margin: 0 10px;
`;

export const TranslationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 1px solid rgba(0,0,0,.05);
    height: 60px;
    padding: 0 22px;
`;

export const TranslationBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px 24px;
`;

export const TranslationFooter = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-top: 1px solid rgba(0,0,0,.05);
`;

export const Textarea = styled.textarea`
    flex: 9;
    resize: none;
    border: none;
    font-size: 36px;
    font-family: noto,notojp,notokr,Helvetica,Microsoft YaHei,Apple SD Gothic Neo,Malgun Gothic,맑은 고딕,Dotum,돋움,sans-serif;;

    :focus{
        outline: none;
    }
    ::placeholder{
        font-weight: 600;
        color: #3d3d3d35;
    }
`;