import React from 'react'

function Navbar() {
    return (
        <div
            className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center">
                    <img className=' w-44' src="https://blog.codepen.io/wp-content/uploads/2022/01/codepen-wordmark-display-inside-white@10x.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar