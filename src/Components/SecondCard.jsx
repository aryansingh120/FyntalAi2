// import { li, p } from 'framer-motion/client'
import React from 'react'

const SecondCard = () => {    
    let card2Arr=[{head:"Join Waitlist",icons:["images/SVG8.svg","images/SVG9.svg","images/SVG10.svg"],lists:["Our team will book a call with you","We will understand your business needs and use case","We’ll share what we offer and our product features"]},{head:"Deploy",icons:["images/SVG8.svg","images/SVG9.svg","images/SVG10.svg"],lists:["Integrate your tools or data sources","Choose from our services and activate them","Fine tuned training on your data points and complete set up."]},{head:"Run",icons:["images/SVG8.svg","images/SVG9.svg","images/SVG10.svg"],lists:["Create 1000+ AI agents for specific needs","Put your business on autopilot","Feel tha magic of AI!"]}];

  return (
    <>
    <div className='flex justify-center items-center '>
        <div className='flex justify-start items-center gap-2 px-2 w-[160px] border border-black rounded-xl mb-5' >
            <img className='h-[8px] w-[8px]' src="/images/Background.png" alt="img" />
            <h1 className='text-[16px] font-medium' >Sample Use Case</h1>
        </div>
        </div>
        
        <div className='flex flex-col gap-[1rem]'>
            <p className=' text-center text-4xl font-bold'>Struggle Financial <br  className=' lg:hidden'/> Situations?</p>
            <p className='text-center text-[#666666] text-[1.1rem] font-medium px-[6vw]'>We get it. Payble simplifies the process of tracking, <br  className='hidden lg:block'/> budgeting, and saving, so you can stress less.</p>
        </div>
        
<div className='flex flex-col gap-[1rem] px-[5vw] bg-[#FFFFFF] pt-[5rem] lg:flex-row lg:px-[3rem]'>

{
 card2Arr.map((item1,index)=>{
  let liColor=()=>{
                          if(index===0)
                          return "marker:text-[red]";
                          else if(index===1)
                          return "marker:text-[dodgerblue]";
                          else
                          return "marker:text-[#42AB3B]";
                    }
      return (
          <div key={index} className='bg-[#f3f3f3] p-[1.5rem] rounded-md flex flex-col flex-1 flex-shrink-0 '>
          <div className='flex justify-between'>
              <p className='font-bold text-[1.3rem]'>{item1.head}</p>
              <div className='flex gap-[1rem]'>
              {
                  item1.icons.map((item)=>{
                   return <img src={item} alt="" />
                  })
              }
              </div>

              
          </div>
          <ul className={`list-disc pl-[1.8rem] ${liColor()}  marker:text-[1.3rem] flex flex-col gap-[.7rem] pt-[1rem] text-[#666666] font-medium text-[12px] ` }>
          {
            item1.lists.map((item)=>{
                return <li className=''>{item}</li>
               
            })
          }
          </ul>
        

          </div>
          
      )
  })
}


</div>

   </>
  )
}

export default SecondCard