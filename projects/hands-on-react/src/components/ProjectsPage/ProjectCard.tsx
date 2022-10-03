import Project from "./Project";

const formatDescription = (description: string) => `${ description.substring(0, 60) }...`;

interface ProjectCardProps {
    project: Project;
    onEdit: (project: Project) => void;
}

export default function ProjectCard({ project, onEdit }: ProjectCardProps): JSX.Element
{
    const handleEditClick = (projectBeingEdited: Project) => onEdit(projectBeingEdited);

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
