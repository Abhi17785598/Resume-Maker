import React, { useState } from 'react'
import img1 from "../assets/img1.png"

function Templates() {
    const [template] = useState(
        Array(18).fill().map((_,i)=>({
            id:i +1,
            decription:'modern',
            image:img1,
        }))
    )
          
    return (
        <>
            <div>
                <h1 className='text-center text-4xl  font-semibold W-[50px]'>Resume templates built to impress.</h1>
                <p className='text-gray-500 text-center gap-2 '>Creative resume templates designed by professional typographers. <br />
                    No matter how you customize your resume, it will always stand out.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {template.map((temp)=>(
                    <div key={temp.id} className='bg-white shadow-md rounded-md text-center'>
                        <img src={temp.image} alt="" className='w-[350px] mx-auto mb-2' />
                        <h2 className='text-lg font-de'>{temp.description}</h2>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Templates
