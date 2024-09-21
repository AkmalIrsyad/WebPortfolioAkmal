import React from 'react'
import Marquee from "@/components/sections/marquee"

function notFound() {
    const items = ['Kayaknya', 'lagi', 'ngumpet ', 'deh.', '404!']
  return (
    <div className='font-base'>
        <div className="grid h-screen place-content-center px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black">404</h1>

    <p className="text-2xl font-bold tracking-tight sm:text-4xl">nyari apa sih? Nih nggak ketemu. 404!</p>
    <Marquee items={items}/>
  </div>
  
  <a
      href="/"
      className="border-border dark:border-darkBorder dark:bg-main dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-main px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
    >
      Go Back Home
    </a>
</div>
    </div>
  )
}

export default notFound
