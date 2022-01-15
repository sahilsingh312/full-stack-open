import React from 'react'

const Filter = ({keyword, handleSearch}) => {
    return (
        <div>
            filter, shown with: <input value={keyword} onChange={handleSearch} />
        </div>
    )
}

export default Filter
