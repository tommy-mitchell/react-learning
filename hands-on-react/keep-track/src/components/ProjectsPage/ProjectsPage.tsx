import { Component, ReactNode } from "react";
import { MockProjects } from "./MockProject";

export default class ProjectsPage extends Component
{
    render(): ReactNode
    {
        return (
            <>
                <h1>Projects</h1>
                <pre>{ JSON.stringify(MockProjects, null, 4) }</pre>
            </>
        );
    }
}
