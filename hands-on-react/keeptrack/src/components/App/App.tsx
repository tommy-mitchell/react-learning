import { Component, ReactNode } from "react";
import logo from "./logo.svg";
import ProjectsPage from "@components/ProjectsPage";

interface AppProps
{

}

interface AppState
{

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
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.tsx</code> and save to reload.</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <ProjectsPage />
                </header>
            </div>
        );
    }
}
