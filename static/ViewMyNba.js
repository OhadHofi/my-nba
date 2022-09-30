"use strict";
class ViewMyNba {
    constructor() { }
    render(players) {
        console.log(players);
        $("#player-container").empty();
        const source = $("#players-template").html();
        const templatePlayer = Handlebars.compile(source);
        $("#player-container").append(templatePlayer({ players }));
    }
}
