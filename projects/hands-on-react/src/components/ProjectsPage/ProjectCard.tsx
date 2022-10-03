import Project from "./Project";

const formatDescription = (description: string) => `${ description.substring(0, 60) }...`;

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps): JSX.Element
{
    const handleEditClick = (projectBeingEdited: Project) => console.log(projectBeingEdited.name);

    return (
        <div className="card">
            <img src={ project.imageURL } alt={ project.name } />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{ project.name }</strong>
                </h5>
                <p>{ formatDescription(project.description) }</p>
                <p>Budget : { project.budget.toLocaleString() }</p>
                <button className="bordered" onClick={() => handleEditClick(project)}>
                    <span className="icon-edit" /> Edit
                </button>
            </section>
        </div>
    );
}
