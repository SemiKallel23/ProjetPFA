import React from 'react'
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
export default function Button(props) {
    let className = ['default-button']
    if (props.className)
        className.push(props.className)

    switch (props.type) {
        case "primary":
            className.push("button-primary")
            break;
        case "sideBarBtn":
            className.push("side-bar-btn")
            break;
        case "delete-btn":
            className.push("delete-btn")
        case "pagination-btn":
            className.push("pagination-btn")
            break;
        case "delete-users":
            className.push("delete-users-btn")
            break;
        case "cancel-delete":
            className.push("cancel-delete-btn")
        case "logout-btn":
            className.push("logout-btn")
        default:
            break;
    }

    return (

        <button
            onClick={props.onClick}
            className={className.join(" ")}
            disabled={props.disabled}
        >
            {props.isLoading
                ? <Icon className="loader" iconName={"spinner9"} size={"16"} />
                : props.value}                  
        </button>

    )
}
Button.defaultProps = {
    type: "",
    onClick: () => { return null },
    className: "",
    disabled: false,
    value: "",
    isLoading: false
}
Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])

}