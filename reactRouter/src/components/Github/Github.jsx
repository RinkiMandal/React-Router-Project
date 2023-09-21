import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()



    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/RinkiMandal')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])

    return (
        <div className='text-center m-4 bg-teal-100  p-4 text-3xl'>Github Followers: {data.followers}
        <img className='lg:ml-96 my-6 rounded-lg md:ml-11' 
        src={data.avatar_url} alt='Git picture' width={300} />
        Name : {data.name}
        
        </div>
        
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RinkiMandal')
    return response.json()
}