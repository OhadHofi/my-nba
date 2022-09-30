"use strict";
const modelMyNba = new ModelMyNba();
const viewMyNba = new ViewMyNba();
$("#get_team_button").on("click", function () {
    console.log("click");
    let input = document.getElementById('team_name');
    const team_name = input === null || input === void 0 ? void 0 : input.value;
    input = document.getElementById('year');
    const year = input === null || input === void 0 ? void 0 : input.value;
    modelMyNba.featchTeam(team_name, year).then(() => {
        viewMyNba.render(modelMyNba.team.players);
    });
});
