import React from 'react'
import { PublicOrganism } from '../../Organism'

export default function LoginTemplate(props) {
    return (
        <PublicOrganism
            isLogin={true}
            {...props}
        />
    )
}
