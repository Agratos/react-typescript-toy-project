export interface IHTMLDivElement extends HTMLDivElement{
    [index:string]: any
}

export interface RefHandler {
    hourRef: React.RefObject<IHTMLDivElement>;
    minuteRef: React.RefObject<IHTMLDivElement>;
}

export interface IDay {
    [index:string]: boolean,
    0: boolean,
    1: boolean,
    2: boolean,
    3: boolean,
    4: boolean,
    5: boolean,
    6: boolean,
}