class Player{
    private firstName:string
    private lastName:string
    private jersey:string
    private pos:string
    private img:string
    private isInDreanTeam:boolean

    constructor(firstName:string, lastName:string, jersey:string, pos:string){
        this.firstName = firstName
        this.lastName = lastName
        this.jersey = jersey
        this.pos = pos
        this.img = `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`
        this.isInDreanTeam = false
    }

    setIsInDreamTeam(flag: boolean){
        this.isInDreanTeam = flag
    }

    getFirstName() : string{
        return this.firstName
    }

    getLastName() : string{
        return this.lastName
    }

    
    // get irstName(): string {
    //     return this.firstName;
    // }

    // get astName(): string {
    //     return this.lastName;
    // }




}