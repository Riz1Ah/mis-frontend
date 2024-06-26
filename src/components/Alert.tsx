import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClickClose: () => void;
}
function Alert({children, onClickClose}: Props) {
    return ( 
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClickClose}></button>
      </div>
    );
}

export default Alert;