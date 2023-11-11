import React, { useContext } from 'react'
import { LangContext } from '../../Lang'
import AtomText from '../Text/Text'

function Header({ title }) {
    return (
        <div className='w-100 pt-40 pb-40'>
            <AtomText
                type={"type-2"}
            >
                {title}
            </AtomText>
        </div>
    )
}
Header.defaultProps = {
    title: 'title'
};
export default Header