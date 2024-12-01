import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion';

function Card({ data ,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-60 h-72 p-5 bg-zinc-900/90 rounded-[20px] text-white overflow-hidden flex flex-shrink-0">
     <FaRegFileAlt /> 
      <p className="text-sm font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0  w-full">
        <div className="flex w-full h-1/2 items-center justify-between px-5 py-4">
          <h5>{data.fileSize}</h5>
          <span className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center ">
            {data.close ? <IoClose /> : <LuDownload />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full ${data.tag.tagColor === 'green' ? 'bg-green-600' : 'bg-blue-600'} flex items-center justify-center`}
          >
            <h4 className="text-sm font-semibold p-2">{data.tag.tagTitle}</h4>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
