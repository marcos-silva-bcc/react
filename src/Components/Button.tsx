import React from 'react'

interface Props {
    children: string;
    Color?: 'primary' | "secondary" | "sucess" | "warning";
    onClick: () => void;
}

const Button = ({children, onClick, Color ='primary'}: Props) => {
  return (
    <button className={'btn btn-' + Color } onClick={onClick}>{children}</button>
  )
}

export default Button

