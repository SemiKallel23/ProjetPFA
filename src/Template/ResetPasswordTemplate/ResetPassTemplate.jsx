import React from 'react'
import { PublicOrganism } from '../../Organism'

export default function ResetPassTemplate(props) {
    return (
        <PublicOrganism
            isResetPassword={true}
            {...props}
        />
    )
}
