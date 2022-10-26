import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import styles from "./projects-page.module.scss";

interface ProjectListProps {
    projects: Project[];
    onSave: (project: Project) => void;
}

export default function ProjectList({ projects, onSave }: ProjectListProps): JSX.Element
{
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleSave = (project: Project) => {
        onSave(project);
        setProjectBeingEdited({});
    };

    return (
        <div className={ `${ styles.ProjectList } row` }>
            {projects.map(project => (
                <div key={ project.id } className="cols-sm">
                    {project === projectBeingEdited ? (
                        <ProjectForm project={ project } onCancel={() => setProjectBeingEdited({})} onSave={handleSave} />
                    ) : (
                        <ProjectCard project={ project } onEdit={setProjectBeingEdited} />
                    )}
                </div>
            ))}
        </div>
    );
}
