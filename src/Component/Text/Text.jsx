import React from 'react';
import Icon from '../Icon/Icon';

const AtomText = (props) => {
    let textClassName = []
    let classNameIcon
    switch (props.type) {
        case "type-1":
            textClassName.push("side-bar-text-1")
            break;
        case "type-2":
            textClassName.push("header-text-1")
            break;
        case "type-3":
            textClassName.push("text-table-Header")
            break;
        case "type-4":
            textClassName.push("text-body-table")
            break;
        case "type-5":
            textClassName.push("text-pagination")
            break;
        case "type-6":
            textClassName.push("text-delete")
            break;
        case "type-7":
            textClassName.push("text-cancel")
            break;
        default:
            break;
    }
    if (props.isIcon) {
        textClassName.push('center')
        classNameIcon = "me-8"
    }
    if (props.textStyle) {
        textClassName.push(props.textStyle)
    }
    return (
        <span className={textClassName.join(" ")}>
            {props.isIcon && <Icon className={classNameIcon} iconName={props.iconName} size={props.size} />}
            {props.children}
        </span>
    );
};

AtomText.defaultProps = {
    type: 'type-1',
    isIcon: false,
    size: 24,
    children: "text"
};

export default AtomText;