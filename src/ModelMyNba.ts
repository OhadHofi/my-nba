class ModelMyNba{
    private _team : Team

    constructor(){
        this._team = new Team()
    }

    async featchTeam(team:string, year:string){
        // await $.get(`/players/${year}/${team}`).then((players)=>{
        await $.get(`/players/2017/lakers`).then((players) => {
            this._team.setPlayers(players)
        })
    }

    get team(): Team{
        return this._team
    }
}