class Team{
    private _players : Player[]

    constructor(){
        this._players = []
    }

    setPlayers(players:player[]){
        this._players = []
        players.forEach(player => this._players.push(new Player(player.firstName, player.lastName, player.jersey, player.pos)))
    }

    get players():Player[]{
        return this._players
    }
}

interface player{
    firstName : string
    lastName : string
    jersey : string
    pos : string
}