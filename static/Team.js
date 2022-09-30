"use strict";
class Team {
    constructor() {
        this._players = [];
    }
    setPlayers(players) {
        this._players = [];
        players.forEach(player => this._players.push(new Player(player.firstName, player.lastName, player.jersey, player.pos)));
    }
    get players() {
        return this._players;
    }
}
