"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";


const projectsData = [
    {
        id : 1,
        title : "React Portfolio Website",
        description : "Project 1 description",
        image : "/images/projects/1.png",
        tag : ["All","Web"],
        gitUrl : "/",
        previewUrl : "/"
    },
    {
        id : 2,
        title : "Photography Portfolio Website",
        description : "Project 2 description",
        image : "/images/projects/2.png",
        tag : ["All","Web"],
        gitUrl : "/",
        previewUrl : "/"
    },
    {
        id : 3,
        title : "E-commerce Application",
        description : "Project 3 description",
        image : "/images/projects/3.png",
        tag : ["All","Web"],
        gitUrl : "/",
        previewUrl : "/"
    },
    {
        id : 1,
        title : "Food Ordering Application",
        description : "Project 4 description",
        image : "/images/projects/4.png",
        tag : ["All","Mobile"],
        gitUrl : "/",
        previewUrl : "/"
    },
    {
        id : 5,
        title : "React Firebase Template",
        description : "Authentication and CRUD operations",
        image : "/images/projects/5.png",
        tag : ["All","Web"],
        gitUrl : "/",
        previewUrl : "/"
    },
    {
        id : 6,
        title : "Full-stack Roadmap",
        description : "Project 5 description",
        image : "/images/projects/6.png",
        tag : ["All","Web"],
        gitUrl : "/",
        previewUrl : "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag)=>{
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project)=>
        project.tag.includes(tag)
    );

  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white'>My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelectd={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelectd={tag === "Web"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Mobile" 
                isSelectd={tag === "Mobile"} 
            />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=>(
                <ProjectCard 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags = {project.tag}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </>
  )
}

export default ProjectsSection