import { AssignConstructor, AssignPropertyDescriptor } from "@helpers/AssignConstructor";

interface ProjectInfo {
    id?: number;
    name: string;
    description: string;
    imageURL: string;
    contractTypeID?: number;
    contractSignedOn: Date | string;
    budget: number;
    isActive: boolean;
}

const defaultInfo: ProjectInfo = {
    name: "",
    description: "",
    imageURL: "",
    contractSignedOn: new Date(),
    budget: 0,
    isActive: false,
};

const setters: AssignPropertyDescriptor<ProjectInfo> = {
    contractSignedOn: {
        set: (value: string) => new Date(value),
    },
};

export default class Project extends AssignConstructor<ProjectInfo>(defaultInfo, setters)
{
    public get isNew(): boolean
    {
        return this.id === undefined;
    }
}
