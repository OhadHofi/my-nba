class ModelMyNba{
    private _team : Team

    constructor(){
        this._team = new Team()
    }

    async featchTeam(team:string, year:string){
        const checkbox = document.getElementById('dateOfBirthUtc') as HTMLInputElement | null;
        let url : string = `/players/${year}/${team}?filter_date_of_birth_utc=`
        url = checkbox?.checked ? url + "true" : url + "false";
        await $.get(url).then((players)=>{
        // await $.get(`/players/2017/lakers`).then((players) => {
            this._team.setPlayers(players)
        })
    }

    get team(): Team{
        return this._team
    }
}