import React, { useState, useRef, useEffect, useCallback, memo, ChangeEvent } from 'react';
import styled from 'styled-components';

import { RiDragDropLine, RiCloseCircleFill, RiFolderDownloadFill, RiImage2Fill } from 'react-icons/ri';

interface IFileType {
    id: number;
    file: File
}

const DragAndDropFile = () => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [files, setFiles] = useState<IFileType[]>([]);
    const [dataUrl, setDataUrl] = useState<string>();
    const [isClickPreview, setIsClickPreview] = useState<boolean>(false);
    const [imageTitle, setImageTitle] = useState<string>();

    const dragRef = useRef<HTMLDivElement | null>(null);
    const fileId = useRef<number>(0);
  
    const onChangeFiles = useCallback((e: ChangeEvent<HTMLInputElement> | any): void => {
        let selectFiles: File[] = [];
        let tempFiles: IFileType[] = files;
  
        if (e.type === "drop") {
            selectFiles = e.dataTransfer.files;
        } else {
            selectFiles = e.target.files;
        }
  
        for (const file of selectFiles) {
            tempFiles = [
                ...tempFiles,
                {
                    id: fileId.current++,
                    file: file
                }
            ];
        }
  
        setFiles(tempFiles);
    },[files]);
  
    const handleFilterFile = useCallback((id: number): void => {
        setFiles(files.filter((file: IFileType) => file.id !== id));
    },[files]);
  
    const handleDragIn = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
  
    const handleDragOut = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
    
        setIsDragging(false);
    }, []);
  
    const handleDragOver = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
    
        if (e.dataTransfer!.files) {
            setIsDragging(true);
        }
    }, []);
  
    const handleDrop = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
  
        onChangeFiles(e);
        setIsDragging(false);
    },[onChangeFiles]);
  
    const initDragEvents = useCallback((): void => {
        if (dragRef.current !== null) {
            dragRef.current.addEventListener("dragenter", handleDragIn);
            dragRef.current.addEventListener("dragleave", handleDragOut);
            dragRef.current.addEventListener("dragover", handleDragOver);
            dragRef.current.addEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
  
    const resetDragEvents = useCallback((): void => {
        if (dragRef.current !== null) {
            dragRef.current.removeEventListener("dragenter", handleDragIn);
            dragRef.current.removeEventListener("dragleave", handleDragOut);
            dragRef.current.removeEventListener("dragover", handleDragOver);
            dragRef.current.removeEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
  
    useEffect(() => {
        initDragEvents();
    
        return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);

    const fileToDataUrl = (file: File | Blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result as string);
        };

        reader.readAsDataURL(file);
        reader.onerror = reject;
    })

    const downloadFile = (id:number) => {
        const file = files.filter((file: IFileType) => file.id === id)[0].file;
        fileToDataUrl(file).then((url) => {
            const target = document.createElement('a');
            target.href = url as string;
            target.download = file.name;

            document.body.appendChild(target);
            target.click();

            document.body.removeChild(target);
        })
    }

    const previewImage = (id:number) => {
        const file = files.filter((file: IFileType) => file.id === id)[0].file;
        const check = getExtension(file.name)

        fileToDataUrl(file).then((url) => {
            setDataUrl(url as string);
            
            if(check === 'image'){
                setIsClickPreview(!isClickPreview);
                setImageTitle(file.name.split('.')[0])
            }
        })  
    }

    const getExtension = (fileName: string) => {
        const imageFormat = ['apng', 'avif', 'gif', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'webp'];
        const fileType = fileName.includes('.') && fileName.split('.').pop();

        if(fileType){
            const result = imageFormat.includes(fileType);
            return result ? 'image' : 'document';
        }else{
            return false;
        }
    }

    /** -------------------------------------------------------------------------------------------------- **/

    const dragItem = React.useRef<any>(null);
    const dragOverItem = React.useRef<any>(null);

    const handleSort = () => {
        let fileList = [...files]

        const draggedItemContent = fileList.splice(dragItem.current, 1)[0]

        fileList.splice(dragOverItem.current, 0, draggedItemContent);

        dragItem.current = null;
        dragOverItem.current = null;

        setFiles(fileList);
    }

    return(
        <Wrapper>
            <Title>원하는 파일올 올려주세요.</Title>
            <Title>미리보기는 이미지 파일만 지원됩니다.</Title>
            <DropBox ref={dragRef} onChange={onChangeFiles} isDragging={isDragging}>
                <RiDragDropLine size={64}/>
            </DropBox>
            <FileWrapper>
                {files.map(({file, id}, index) => (
                    <FileBox key={id}
                        onDragStart={(e) => dragItem.current = index}
                        onDragEnter={(e) => dragOverItem.current = index}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                        draggable
                    >
                        {file.name}
                        <ButtonWrapper>
                            <DeletButton
                                onClick={() => handleFilterFile(id)}
                            >
                                <RiCloseCircleFill size={20} />
                            </DeletButton>  
                            <PreviewButton
                                onClick={() => previewImage(id)}
                            >
                                <RiImage2Fill size={20} />
                            </PreviewButton>
                            <DownloadButton
                                onClick={() => downloadFile(id)}
                            >
                                <RiFolderDownloadFill size={20} />
                            </DownloadButton>
                        </ButtonWrapper>
                    </FileBox>
                ))}
            </FileWrapper>
            <div>
                {isClickPreview && 
                    <ImagePreview>
                        <Image src={`${dataUrl}`} draggable={false}/>
                        <ImageName>{`< ${imageTitle} >`}</ImageName>
                    </ImagePreview>
                }
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
`;
const DropBox = styled(Wrapper)< {isDragging: boolean} >`
    justify-content: center;
    width: 600px;
    height: 300px;
    border: 4px solid black;
    border-radius: 16px;
    margin: 8px;

    background-color: ${({isDragging}) => isDragging && '#626262ae'};
`;
const FileWrapper = styled.div`
    overflow-y: auto;
    max-height: 400px;
`;
const FileBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    border: 2px solid black;
    margin-bottom: 8px;
    padding: 8px;
    user-select: none;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80px;
`;
const DeletButton = styled.div`
    :hover{
        cursor: pointer;
    }
`;
const DownloadButton = styled(DeletButton)``;
const PreviewButton = styled(DeletButton)``;
const ImagePreview = styled.div`
    align-items: center;
    user-select: none;
`;
const Image = styled.img``;
const ImageName = styled.div`
    text-align: center;
`;

export default memo(DragAndDropFile);