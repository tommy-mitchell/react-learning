import { Component, ReactNode } from "react";
import ProjectsPage from "@components/ProjectsPage";

interface AppProps {

}

interface AppState {

}

export default class App extends Component<AppProps, AppState>
{
    constructor(props: AppProps)
    {
        super(props);
        this.state = {

        };
    }

    public render(): ReactNode
    {
        return (
            <div className="App">
                <ProjectsPage />
            </div>
        );
    }
}
