import React from 'react'

const ProjectTag = ({name, onClick, isSelectd}) => {
    const buttonStyles = isSelectd 
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white" 
  return (
    <div>
        <button 
            className={`${buttonStyles} rounded-full border-2 border-purple-500 px-6 py-6 text-xl cursor-pointer`}
            onClick={()=>onClick(name)}
        >
            {name}
        </button>
    </div>
  )
}

export default ProjectTag