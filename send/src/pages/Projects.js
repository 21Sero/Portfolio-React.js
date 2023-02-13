import React from 'react';
import Project from "../components/project/project";
import {projects} from "../helpers/projects";

const Projects = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((project,index) => {
                            return <Project key={Math.random()}
                                            title={project.title}
                                            img={project.img}
                                            index={index}
                            />
                        })}


                    </ul>
                </div>
            </main>
        </>
    );
};

export default Projects;