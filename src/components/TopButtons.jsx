import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id:1,
            title:"Valparaiso"
        },
        {
            id:2,
            title:"Posadas"
        },
        {
            id:3,
            title:"Buenos Aires"
        },
        {
            id:4,
            title:"Ireland"
        },
        {
            id:5,
            title:"Toronto"
        },
    ]

  return (
    <div className='flex item-center justify-around my-6'>

        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium' onClick={() => setQuery({q: city.title})}>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons