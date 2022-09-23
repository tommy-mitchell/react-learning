import { Project } from "./Project";
import styles from "./projects-page.module.scss";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps)
{
    console.log(styles)
    return (
        <div className={ `${ styles.ProjectList } row` }>
            {projects.map(project => (
                <div key={ project.id } className="cols-sm">
                    <div className="card">
                        <img src={ project.imageURL } alt={ project.name } />
                        <section className="section dark">
                            <h5 className="strong">
                                <strong>{ project.name }</strong>
                            </h5>
                            <p>{ project.description }</p>
                            <p>Budget : { project.budget.toLocaleString() }</p>
                        </section>
                    </div>
                </div>
            ))}
        </div>
    );
}
