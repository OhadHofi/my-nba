"use strict";
class Player {
    constructor(firstName, lastName, shirtNumber, pos) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._shirtNumber = shirtNumber;
        this._pos = pos;
        this._img = `"https://nba-players.herokuapp.com/players/${lastName}/${firstName}"`;
    }
}
