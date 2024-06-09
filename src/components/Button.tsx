import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color: 'primary' | 'secondary' | 'danger'
    onclickHandle: () => void;
}

function Button({children, color, onclickHandle}: Props) {
    return ( 
        <div className={"btn btn-"+color} onClick={onclickHandle}>{children}</div>
     );
}

export default Button;