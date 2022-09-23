import ProjectsPage from "@components/ProjectsPage";
import styles from "./app.module.scss";

interface AppProps {

}

export default function App(props: AppProps)
{
    return (
        <div className={ styles.App }>
            <ProjectsPage />
        </div>
    );
}
