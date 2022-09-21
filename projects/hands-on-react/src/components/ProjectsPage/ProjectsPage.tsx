import { Component, ReactNode } from "react";
import { MockProjects } from "./MockProject";
import ProjectList from "./ProjectList";

export default class ProjectsPage extends Component
{
    render(): ReactNode
    {
        return (
            <>
                <h1>Projects</h1>
                <ProjectList projects={ MockProjects } />
            </>
        );
    }
}
