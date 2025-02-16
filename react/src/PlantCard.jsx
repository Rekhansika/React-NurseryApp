import React from 'react'

const PlantCard = ({plant}) => {
    return (
        <div className='app-pic'>
            <img src={plant.original_url} alt="" />
            <h5>{plant.title}</h5>
        </div>

    )
}

export default PlantCard