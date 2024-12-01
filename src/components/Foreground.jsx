import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc:'Hello world',
            fileSize:'0.8mb',
            close:true,
            tag:{
                isOpen:true,
                tagTitle:'Download Now',
                tagColor:'green'
            }
        },
        {
            desc:'Hello world New file',
            fileSize:'0.8mb',
            close:false,
            tag:{
                isOpen:false,
                tagTitle:'Download Now',
                tagColor:'blue'
            }
        }
        ,{
            desc:'Hello world',
            fileSize:'0.8mb',
            close:true,
            tag:{
                isOpen:true,
                tagTitle:'Update',
                tagColor:'blue'
            }
        },,
        {
            desc:'Hello world New file',
            fileSize:'0.8mb',
            close:false,
            tag:{
                isOpen:false,
                tagTitle:'Download Now',
                tagColor:'blue'
            }
        }
        ,{
            desc:'Hello world',
            fileSize:'0.8mb',
            close:true,
            tag:{
                isOpen:true,
                tagTitle:'Update',
                tagColor:'blue'
            }
        },,
        {
            desc:'Hello world New file',
            fileSize:'0.8mb',
            close:false,
            tag:{
                isOpen:false,
                tagTitle:'Download Now',
                tagColor:'blue'
            }
        }
        ,{
            desc:'Hello world',
            fileSize:'0.8mb',
            close:true,
            tag:{
                isOpen:true,
                tagTitle:'Update',
                tagColor:'blue'
            }
        },,
        {
            desc:'Hello world New file',
            fileSize:'0.8mb',
            close:false,
            tag:{
                isOpen:false,
                tagTitle:'Download Now',
                tagColor:'blue'
            }
        }
        ,{
            desc:'Hello world',
            fileSize:'0.8mb',
            close:true,
            tag:{
                isOpen:true,
                tagTitle:'Update',
                tagColor:'blue'
            }
        },
    ]
  return (
<div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-5 flex gap-5 flex-wrap justify-center items-center'>
  {
    data.map((item,ind)=>(
        <Card data={item} reference={ref}/>
    ))
  }
</div>
    )
}

export default Foreground