import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-950 '>
    
        <footer className='text-white '>
        <div className='p-4  flex justify-between'>
            <div>
            <div className='text-lg font-bold'>Get to know us</div>
            <div className='py-5'>
            <p >About us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Cares</p>
            </div>
            </div>
             
             <div>
            <div className='text-lg font-bold'>Connect with us</div>
            <div className='py-5'>
            <p >facebook</p>
            <p>instagram</p>
            <p>twitter</p>
            </div>
            </div>

            <div>
            <div className='text-lg font-bold'>Make Money with us</div>
            <div className='py-5'>
            <p >Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            </div>
            </div>

            <div>
            <div className='text-lg font-bold'>AWS</div>
            <div className='py-5'>
            <p >Details</p>
            <p>Guidelines</p>
            <p>Course structure</p>
            </div>
            </div>
            </div>
        </footer>
    
    </div>
  )
}

export default Footer