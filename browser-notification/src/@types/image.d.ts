declare module '*.png' {
    const content: string;
    export default content;
}
declare module '*.jpg' {
    const content: string;
    export default content;
}
declare module '*.gif' {
    const content: string;
    export default content;
}

// declare module '*.svg' {  
//     import React = require('react'); 
//     export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;  
//     const content: string;  
//     export default content;
// }

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
