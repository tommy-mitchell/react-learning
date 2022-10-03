import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import styles from "./projects-page.module.scss";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps): JSX.Element
{
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    return (
        <div className={ `${ styles.ProjectList } row` }>
            {projects.map(project => (
                <div key={ project.id } className="cols-sm">
                    {project === projectBeingEdited ? (
                        <ProjectForm onCancel={() => setProjectBeingEdited({})} />
                    ) : (
                        <ProjectCard project={ project } onEdit={setProjectBeingEdited} />
                    )}
                </div>
            ))}
        </div>
    );
}
