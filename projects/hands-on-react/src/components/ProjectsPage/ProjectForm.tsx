import { ChangeEvent, SyntheticEvent, useState, HTMLInputTypeAttribute } from "react";
import { Project } from "./Project";
import styles from "./projects-page.module.scss";

interface ExtendedHTMLInputElement extends HTMLInputElement {
    type: HTMLInputTypeAttribute;
}

type ProjectErrors = {
    [key in keyof Pick<Project, "name" | "description" | "budget">]: string;
};

interface ProjectFormProps {
    project: Project;
    onSave: (project: Project) => void;
    onCancel: () => void;
}

export default function ProjectForm({ project: initialProject, onSave, onCancel }: ProjectFormProps): JSX.Element
{
    const [project, setProject] = useState(initialProject);
    const [errors, setErrors] = useState<ProjectErrors>({
        name: "",
        description: "",
        budget: "",
    });
    
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if(!isValid()) return;
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

        setErrors(() => validate(updatedProject));
    };

    const validate = (project: Project) => {
        let errors: ProjectErrors = { name: "", description: "", budget: "" };

        if(project.name.length === 0)
            errors.name = "'Name' is required.";
        if(project.name.length > 0 && project.name.length < 3)
            errors.name = "'Name' must be at least 3 characters long.";
        if(project.description.length === 0)
            errors.description = "'Description' is required.";
        if(project.budget === 0)
            errors.budget = "'Budget' must be greater than 0.";
        
        return errors;
    };

    const isValid = () => (
        errors.name.length === 0 &&
        errors.description.length === 0 &&
        errors.budget.length === 0
    );

    return (
        <form className={`${ styles.ProjectForm } input-group vertical`} onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="Name" value={ project.name } onChange={handleChange} />
            {errors.name.length > 0 && (
                <div className="card error">
                    <p>{ errors.name }</p>
                </div>
            )}
            <label htmlFor="description">Project Description</label>
            <textarea name="description" placeholder="Description" value={ project.description } onChange={handleChange} />
            {errors.description.length > 0 && (
                <div className="card error">
                    <p>{ errors.description }</p>
                </div>
            )}
            <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="Budget" value={ project.budget } onChange={handleChange} />
            {errors.budget.length > 0 && (
                <div className="card error">
                    <p>{ errors.budget }</p>
                </div>
            )}
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
