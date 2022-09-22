import { MockProjects } from "./MockProject";
import ProjectList from "./ProjectList";

export default function ProjectsPage()
{
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={ MockProjects } />
        </>
    );
}
