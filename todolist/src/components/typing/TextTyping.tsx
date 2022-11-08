import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TextTyping = () => {
    const [text, setText] = useState<string>('');
    const [fullText, setFullText] = useState<string[][]>([
        ['환영합니다.'],
        [
            '홈페이지는 1920 x 1080에 맞춰 만들어 졌습니다.',
            '추후 반응형으로 변경 예정입니다.',
            '양해부탁드립니다.',
        ],
        ['달을 누르시면 메인 화면으로 넘어갑니다.'],
    ]);
    const [textIndex, setTextIndex] = useState<number>(0);
    const [primaryArrayIndex, setPrimaryArrayIndex] = useState<number>(0);
    const [secondArrayIndex, setSecondArrayIndex] = useState<number>(0);
    const [typing, setTyping] = useState<boolean>(true);

    useEffect(() => {
        if (typing) {
            typingText();
        } else {
            deleteText();
        }
    }, [primaryArrayIndex, secondArrayIndex, typing, text]);

    const typingText = () => {
        if (textIndex < fullText[primaryArrayIndex][secondArrayIndex].length) {
            setTimeout(() => {
                setText(
                    text +
                        fullText[primaryArrayIndex][secondArrayIndex][textIndex]
                );
                setTextIndex(textIndex + 1);
            }, 100);
        } else {
            if (secondArrayIndex + 1 < fullText[primaryArrayIndex].length) {
                setTimeout(() => {
                    setTextIndex(0);
                    setText(text + '\n');
                    setSecondArrayIndex(
                        (secondArrayIndex + 1) %
                            fullText[primaryArrayIndex].length
                    );
                }, 100);
            } else {
                setTimeout(() => {
                    setPrimaryArrayIndex(
                        (primaryArrayIndex + 1) % fullText.length
                    );
                    setSecondArrayIndex(0);
                    setTextIndex(0);
                    setTyping(!typing);
                }, 1500);
            }
        }
    };

    const deleteText = () => {
        if (text.length > 0) {
            setTimeout(() => {
                let str = text;
                str = str.slice(0, -1);
                setText(str);
            }, 50);
        } else {
            setTimeout(() => {
                setTyping(!typing);
            }, 1500);
        }
    };

    const textRendering = () => {
        return (
            <TextWrapper>
                <Text>{text}</Text>
            </TextWrapper>
        );
    };

    return <Wrapper>{textRendering()}</Wrapper>;
};
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    width: 100vw;
    color: #ffffffd8;
    text-align: center;
    font-size: 24px;
    font-weight: bolder;
`;
const TextWrapper = styled.div``;
const Text = styled.pre`
    ::after {
        content: '|';
        animation: blink 0.6s step-start infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
`;

export default React.memo(TextTyping);
