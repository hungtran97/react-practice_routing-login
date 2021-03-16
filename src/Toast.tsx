import React from 'react'
import { Alert } from 'react-bootstrap'

import './Toast.css'

interface ToastProps {
    toast: {
        type: string
        message: string
    }
}
class Toast extends React.Component<ToastProps, any> {
    constructor(props: any) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div className="custom-toast">
                <Alert variant={this.props.toast.type}>
                    {this.props.toast.message}
                </Alert>
            </div>
        )
    }
}

export default Toast