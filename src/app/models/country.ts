
export class countryClass{
    public name!:nameClass;
    public population !: number;
    public region !:string;
    public capital!:string;
    public flags!: flagsClass;
}

class nameClass{
    common!:string;
    official!:string;
}
class flagsClass{
    png!:string;
    svg!:string;
}