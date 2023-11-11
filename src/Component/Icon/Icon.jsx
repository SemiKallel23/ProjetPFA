import IcomoonReact  from "icomoon-react";
import iconSet from "../../Style/icomoon/selection.json";
import PropTypes from 'prop-types';
import React from 'react'

export default function Icon(props) {
    return (
            <IcomoonReact
                className={props.className}
                iconSet={iconSet}
                color={props.color}
                size={props.size}
                icon={props.iconName}
                onClick={props.onClick}
            />
    )
}
Icon.defaultProps={
    className:"",
    color:"white",
    size:16,
    iconName:"eye"
}
Icon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    iconName: PropTypes.string,
    size:PropTypes.oneOfType([PropTypes.string,PropTypes.number])
}