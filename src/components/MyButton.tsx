import { Button } from "antd" 
import { MouseEventHandler } from "react"


interface MyButtonProps {
    children: string,
    onClick: MouseEventHandler,
    // style: string
}



export default function MyButton ({children, onClick}: MyButtonProps) {
    return <Button type='primary' onClick={onClick} style={{margin: '0 1rem'}}>{children}</Button>
}

