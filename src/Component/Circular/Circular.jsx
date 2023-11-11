import React from 'react'

function Circular(props) {
    let circularStyle
    if (props.circularStyle) {
        circularStyle = props.circularStyle
    }
    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                borderRadius: props.width / 2
            }}
            className={'center circular-style ' + circularStyle}
        >
            {props.children}
        </div>
    )
}
Circular.defaultProps = {
    width: 32,
    height: 32,
}
export default Circular