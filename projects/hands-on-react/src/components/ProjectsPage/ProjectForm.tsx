import Project from "./Project";
import styles from "./projects-page.module.scss";

interface ProjectFormProps {
    onCancel: () => void;
}

export default function ProjectForm({ onCancel }: ProjectFormProps): JSX.Element
{
    return (
        <form className={`${ styles.ProjectForm } input-group vertical`}>
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="Name" />
            <label htmlFor="description">Project Description</label>
            <textarea name="description" placeholder="Description"></textarea>
            <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="Budget" />
            <label htmlFor="isActive">Active?</label>
            <input type="checkbox" name="isActive" />
            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span />
                <button type="button" className="bordered medium" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}
