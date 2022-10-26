import { useState } from "react";
import { Project } from "./Project";
import { MockProjects } from "./MockProject";
import ProjectList from "./ProjectList";

export default function ProjectsPage()
{
    const [projects, setProjects] = useState<Project[]>(MockProjects);

    const saveProject = (project: Project) => {
        setProjects(projects.map(p => p.id === project.id ? project : p));
    };

    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={ projects } onSave={saveProject} />
        </>
    );
}
