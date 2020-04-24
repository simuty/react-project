import React from 'react'

import Top from './Top'
import Total from './Total'
import Reports from './Reports'
import List from './List'

interface Props {

}

function Statistics({ }: Props) {
    return (
        <div>
            <Top />
            <Total />
            <Reports />
            <List />
        </div>
    )
}

export default Statistics
