import React from 'react'
import { PlusCircle } from 'lucide-react'

function Accordian({question, answer}) {
    

  const [accordianOpen, setAccordianOpen] = React.useState(false)
  return (
    <div className='p-4'>
    <button className='flex justify-between w-full items-center gap-x-3 '  onClick={()=>{ setAccordianOpen(!accordianOpen)}}>
      <span className='font-semibold text-xl text-left '>{question}</span>
      <span>
        {
          accordianOpen ? <PlusCircle size={24}  className='transform rotate-45 text-green-500' /> : <PlusCircle size={24} className='text-green-500'/>
        }
        </span>
    </button>
    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordianOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
      <div className='overflow-hidden '>
        <p className='text-gray-600 '>{answer}</p>
      </div>
    </div>
  </div>

  )
}

export default Accordian