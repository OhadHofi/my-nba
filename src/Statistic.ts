class Statistic{
    private _statistic: string

    constructor(statisticProperty: string, statisticValue: string){
        this._statistic = `${statisticProperty} ${statisticValue}`
    }
    
    get statistic(): string {
        return this._statistic;
    }
}