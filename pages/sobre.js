import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
   return (

      <div className=' space-y-4 text-gray-500 w-3/5 mx-auto justify-center bg-white p-8 max-w-4xl rounded-xl shadow-2xl text-center' >
         <PageTitle title='Sobre' />
         <h1 className='font-bold text-4xl tracking-wide' >Sobre</h1>
         <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? </p>
         <div>
            <Link href='/'>
               <a>Home</a>
            </Link>
         </div>
      </div>

   )
}


export default Sobre
