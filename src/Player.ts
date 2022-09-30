class Player{
    private _firstName:string
    private _lastName:string
    private _shirtNumber:string
    private _pos:string
    private _img:string

    constructor(firstName:string, lastName:string, shirtNumber:string, pos:string){
        this._firstName = firstName
        this._lastName = lastName
        this._shirtNumber = shirtNumber
        this._pos = pos
        this._img = `"https://nba-players.herokuapp.com/players/${lastName}/${firstName}"`
    }
}