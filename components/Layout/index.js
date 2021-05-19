import React from 'react'
import Footer from '../Footer'
import Header from '../header'

const Layout = ({ children }) => {

   return (
      <div className=''>
         <div className='' >
            <Header />
            <div className=''>

               {children}
            </div>
         </div>
         <Footer />

      </div>
   )
}

export default Layout