import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../public/frontpage.png'
import '../public/bat.png'


import Navbar from '../Subcomponents/Navbar'

 

export default function Home() {
  return (
    <div className=' '>
    <div className="text-gray-600 body-font effect6  bgour3 pt-14">
    <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
       
        <p className="text-3xl text-black fontour sm:text-left sm: ">Make Every Happiness Possible With Deepika Prints, Join us to get the benefits of our awesome packages and the best client experience.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white  justify-start  bg-violet-600 border-0 py-3  rounded-md mt-9 px-8 focus:outline-none hover:bg-indigo-600  text-lg ">KNOW MORE</button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded-3xl" alt="hero" src="frontpage.png"
        />
      </div>
    </div>
    </div> 
    <h1 className='text-center font-bold pt-10 text-4xl decoration-violet-600  '>OUR SPECIALIZATION</h1>
    <div className='  text-gray-900 py-28  grid lg:grid-cols-4 text-center '>
    <div className='font-semibold  fontour3'>
    <h1 className=''></h1> Corporate Giftings <br></br> <p className=''> A Gift to Build Relations</p><br></br><img src='bat.png' className='h-24 pl-32'/>
    </div>
    <div className='font-semibold  fontour3'>
    <h1 className=''></h1> Corporate Giftings <br></br> <p className=''> A Gift to Build Relations</p><br></br><img src='bat.png' className='h-24 pl-32'/>
    </div>
    <div className='font-semibold  fontour3'>
    <h1 className=''></h1> Corporate Giftings <br></br> <p className=''> A Gift to Build Relations</p><br></br><img src='bat.png' className='h-24 pl-32'/>
    </div>
    <div className='font-semibold  fontour3'>
    <h1 className=''></h1> Corporate Giftings <br></br> <p className=''> A Gift to Build Relations</p><br></br><img src='bat.png' className='h-24 pl-32'/>
    </div>
    </div> 
    
      <div className=' text-gray-900 py-28 space-y-10 effect6 grid lg:grid-cols-4 text-center '>
    <div className='font-semibold text-4xl fontour3'>
      100+  <br></br> CLIENTS
        </div>
        <div className='font-semibold text-4xl fontour3'>
        100+ <br></br> CLIENTS
        </div>
        <div className='font-semibold text-4xl fontour3'>
        100+ <br></br> CLIENTS
        </div>
        <div className='font-semibold text-4xl fontour3'>
        100+ <br></br> CLIENTS
        </div>
   
   
        </div>
  

      
     </div>
  
  )
}
