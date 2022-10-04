"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ModelMyNba {
    constructor() {
        this._team = new Team();
        this._dreamTeam = new Team();
    }
    featchTeam(team, year) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkbox = document.getElementById('dateOfBirthUtc');
            let url = `/players/${year}/${team}?filter_date_of_birth_utc=`;
            url = (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) ? url + "true" : url + "false";
            yield $.get(url).then((players) => {
                // await $.get(`/players/2017/lakers`).then((players) => {
                this._team.setPlayers(players);
                this._team.players.forEach(player => player.setIsInDreamTeam(false));
            });
        });
    }
    get team() {
        return this._team;
    }
    get deramTeam() {
        return this._dreamTeam;
    }
    addPlayerToDreanTeam(player) {
        return __awaiter(this, void 0, void 0, function* () {
            $.ajax({
                url: "/player/dream/team",
                type: "POST",
                data: JSON.stringify(player),
                success: function () {
                    console.log("Player added successfully");
                }
            });
        });
    }
    removePlayerfromDreanTeam(player) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("fdghjjjjjjjjjj");
            console.log(player);
            $.ajax({
                url: "/player/dream/team",
                type: "DELETE",
                data: JSON.stringify(player),
                success: function () {
                    console.log("Player remove successfully");
                }
            });
        });
    }
    featchDreamTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            yield $.get("/dream/team").then((players) => {
                this._dreamTeam.setPlayers(players);
                this._dreamTeam.players.forEach(player => player.setIsInDreamTeam(true));
            });
        });
    }
}
