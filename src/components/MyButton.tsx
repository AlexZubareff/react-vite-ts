import { Button } from "antd" 
import { MouseEventHandler } from "react"


interface MyButtonProps {
    children: string,
    onClick: MouseEventHandler
}



export default function MyButton ({children, onClick}: MyButtonProps) {
    return <Button type='primary' onClick={onClick} style={{margin: '2rem 0'}}>{children}</Button>
}

