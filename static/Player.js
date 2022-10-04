"use strict";
class Player {
    constructor(firstName, lastName, jersey, pos) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jersey = jersey;
        this.pos = pos;
        this.img = `"https://nba-players.herokuapp.com/players/${lastName}/${firstName}"`;
        this.isInDreanTeam = false;
    }
    setIsInDreamTeam(flag) {
        this.isInDreanTeam = flag;
    }
}
