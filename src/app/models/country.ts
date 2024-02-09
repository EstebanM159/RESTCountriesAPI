
export class countryClass{
    public name!:nameClass;
    public population !: number;
    public region !:string;
    public capital!:string;
    public flags!: flagsClass;
    public currencies!: currenciesClass;
    public subregion!: string;
    public languages!: {name:string}
    public borders!:string;
}
// top level domain  border countries
class nameClass{
    common!:string;
    official!:string;
}
class flagsClass{
    png!:string;
    svg!:string;
}
class currenciesClass{
    public aud!:AUD;
}
class AUD{
    name!:string
    symbol!:string
}