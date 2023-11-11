import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
export default function Input(props) {
    const [inputType, setInputType] = useState("text")
    let containerClassName = ["flex", "flex-col","w-100"]
    if (props.containerClassName)
        containerClassName.push(props.containerClassName)

    let className = ["default-input"]
    if (props.className)
        className.join(props.className)

    switch (props.type) {
        case "primary":
            className.push("input-primary")
            break;
        case "secondary":
            className.push("input-secondary")
            break;
        default:
            break;
    }

    let errorClassName = ['default-error']
    switch (props.errorType) {
        case "primary":
            errorClassName.push("error-primary")
            break;
        default:
            break;
    }
    let labelClassName = ['default-label']
    switch (props.labelType) {
        case "primary":
            labelClassName.push("label-primary")
            break;
        default:
            break;
    }
    useEffect(() => {
        if (props.isPassword) {
            setInputType("password")
        }

    }, [props.isPassword])

    const handlePasswordVisiblity = () => {
        setInputType(
            inputType === "password"
                ? "text"
                : "password"

        )
    }
    return (
        <div className={containerClassName.join(" ")}>
            {props.label && <label className={labelClassName.join(' ')}  >{props.label}</label>}
            <div className='w-100 position-relative '>
                <input
                    value={props.value}
                    className={className.join(" ")}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder}
                    onClick={props.onClick}
                    type={inputType}
                />
                {props.isPassword &&
                    <div className='position-absolute right-20p top-30 '>
                        <Button
                            className={'br-none bg-transparent'}
                            onClick={() => { handlePasswordVisiblity() }}
                            value={
                                <Icon
                                    size={16}
                                    iconName={inputType === "password" ? "eye-blocked" : "eye"}
                                    color={"rgba(0, 0, 0, 0.54)"}
                                />
                            }
                        />

                    </div>

                }
            </div>
            {props.isInvalid   &&
                <div className={errorClassName.join(" ")}>
                    {props.error}
                </div>}
        </div>
    )


}
Input.defaultProps = {
    className: "",
    value: "",
    type: "",
    placeholder: "",
    label: "",
    labelClassName: "",
    errorType: "",
    error: "",
    isPassword: false,
    isInvalid:false,
    onChange: () => { return null },
    onBlur: () => { return null },
    onClick: () => { return null }
}
Input.propTypes = {
    value: PropTypes.string,
    isPassword: PropTypes.bool,
    isInvalid:PropTypes.bool,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    errorType: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    labelType: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    containerClassName: PropTypes.string,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
}