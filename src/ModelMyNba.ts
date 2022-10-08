class ModelMyNba{
    private _team : Team
    private _dreamTeam : Team
    private _statistics : {}[]

    constructor(){
        this._team = new Team()
        this._dreamTeam = new Team()
        this._statistics = []
    }

    async featchTeam(team:string, year:string){
        const checkbox = document.getElementById('dateOfBirthUtc') as HTMLInputElement | null;
        let url : string = `/players/${year}/${team}?filter_date_of_birth_utc=`
        url = checkbox?.checked ? url + "true" : url + "false";
        // await $.get(url).then((players)=>{
        await $.get(`/players/2015/lakers`).then((players) => {
            this._team.setPlayers(players)
            this._team.players.forEach(player => player.setIsInDreamTeam(false));
        })
    }

    async featchStatistic(firstName:string, lastName:string){
        this._statistics = []
        await $.get(`/player/statistic/${firstName}/${lastName}`).then(
        (statistics)=>{
            for (let key in statistics) {
                this._statistics.push({"statistic" : `${key.replace("_"," ")}: ${statistics[key]}`})
            }
        },
        (reason)=>{
            console.error(reason)
        }
        )
    }

    async addPlayerToDreanTeam(player: Player){
        $.ajax({
            url: "/player/dream/team",
            type: "POST",
            data: JSON.stringify(player),
            success: function(){
                console.log("Player added successfully")
            }
        })
    }


    async removePlayerfromDreanTeam(player: Player){
        $.ajax({
            url: "/player/dream/team",
            type: "DELETE",
            data: JSON.stringify(player),
            success: function(){
                console.log("Player remove successfully")
            }
        })
    }


    async featchDreamTeam(){
        await $.get("/dream/team").then((players)=>{
                this._dreamTeam.setPlayers(players)
                this._dreamTeam.players.forEach(player => player.setIsInDreamTeam(true));
            }) 
    }
    // TODO: Why should I keep all the information about it in the model? Why not display straight to the screen and that's it? And if so how do you do it because I return peomise

    get team(): Team{
        return this._team
    }

    get deramTeam(): Team{
        return this._dreamTeam
    }

    get statistics(): string[]{
        return this._statistics
    }
}