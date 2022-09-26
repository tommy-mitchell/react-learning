import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import styles from "./projects-page.module.scss";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps): JSX.Element
{
    return (
        <div className={ `${ styles.ProjectList } row` }>
            {projects.map(project => (
                <div key={ project.id } className="cols-sm">
                    <ProjectCard project={ project } />
                </div>
            ))}
        </div>
    );
}
