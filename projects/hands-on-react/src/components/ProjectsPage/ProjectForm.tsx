import { ChangeEvent, SyntheticEvent, useState, HTMLInputTypeAttribute } from "react";
import { Project } from "./Project";
import styles from "./projects-page.module.scss";

interface ExtendedHTMLInputElement extends HTMLInputElement {
    type: HTMLInputTypeAttribute;
}

interface ProjectFormProps {
    project: Project;
    onSave: (project: Project) => void;
    onCancel: () => void;
}

export default function ProjectForm({ project: initialProject, onSave, onCancel }: ProjectFormProps): JSX.Element
{
    const [project, setProject] = useState(initialProject);
    
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onSave(project);
    };

    const handleChange = (event: ChangeEvent<ExtendedHTMLInputElement | HTMLTextAreaElement>) => {
        const { type, name, value } = event.target;
        
        const updatedValue = 
            type === "checkbox" ? (event.target as HTMLInputElement).checked : 
            type === "number"   ? Number(value) :
            value;

        const change = {
            [name]: updatedValue,
        };

        let updatedProject: Project;

        setProject(project => {
            updatedProject = new Project({ ...project, ...change });

            return updatedProject;
        });
    };

    return (
        <form className={`${ styles.ProjectForm } input-group vertical`} onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="Name" value={ project.name } onChange={handleChange} />
            <label htmlFor="description">Project Description</label>
            <textarea name="description" placeholder="Description" value={ project.description } onChange={handleChange} />
            <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="Budget" value={ project.budget } onChange={handleChange} />
            <label htmlFor="isActive">Active?</label>
            <input type="checkbox" name="isActive" checked={ project.isActive } onChange={handleChange} />
            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span />
                <button type="button" className="bordered medium" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}
