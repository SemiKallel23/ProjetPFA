import React from 'react'
import { PublicOrganism } from '../../Organism'

export default function ForgetPassTemplate(props) {
    return (
        <PublicOrganism
            isForgetPassword={true}
            {...props}
        />
    )
}
