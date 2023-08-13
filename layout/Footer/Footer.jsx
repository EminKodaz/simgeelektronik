import React from 'react'
import QuickLinks from './QuickLinks'
import CompanyArticle from './CompanyArticle'

function Footer() {
  return (
    <footer className='min-h-[24rem] bg-[#161616] flex flex-col'>
      <section className='w-[95%] grid grid-cols-3 max-lg:grid-cols-1 m-auto '>
        <QuickLinks />
        <CompanyArticle />
      </section>
      <p className='text-white text-center py-3 border-t border-zinc-600'>
        Created by Koer Labs
      </p>
    </footer>
  )
}

export default Footer