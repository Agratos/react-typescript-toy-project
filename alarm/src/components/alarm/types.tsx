export interface IHTMLDivElement extends HTMLDivElement{
    [index:string]: any
}

export interface RefHandler {
    hourRef: React.RefObject<IHTMLDivElement>;
    minuteRef: React.RefObject<IHTMLDivElement>;
}