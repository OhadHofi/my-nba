"use strict";
const modelMyNba = new ModelMyNba();
const viewMyNba = new ViewMyNba();
$("#get_team_button").on("click", function () {
    let input = document.getElementById('team_name');
    const team_name = input === null || input === void 0 ? void 0 : input.value;
    input = document.getElementById('year');
    const year = input === null || input === void 0 ? void 0 : input.value;
    modelMyNba.featchTeam(team_name, year).then(() => {
        viewMyNba.renderPlayers(modelMyNba.team.players);
    });
});
$("body").on("click", ".add-to-dream-team", function () {
    const player = getPlayerDetails(this);
    modelMyNba.addPlayerToDreanTeam(player);
});
$("body").on("click", ".remove-from-dream-team", function () {
    const player = getPlayerDetails(this);
    modelMyNba.removePlayerfromDreanTeam(player).then(() => {
        modelMyNba.featchDreamTeam().then(() => {
            viewMyNba.renderPlayers(modelMyNba.deramTeam.players);
        });
    });
});
$("#get_dream_team_button").on("click", function () {
    modelMyNba.featchDreamTeam().then(() => {
        viewMyNba.renderPlayers(modelMyNba.deramTeam.players);
    });
});
$("body").on("click", ".col", function () {
    const player = getPlayerDetails(this);
    modelMyNba.featchStatistic(player.getFirstName(), player.getLastName()).then(() => {
        var statisticContainer = $(this).find(".statistic-container");
        viewMyNba.renderStatistic(modelMyNba.statistics, statisticContainer[0]);
    });
});
$("body").on("mouseout", ".col", function () {
    var statisticContainer = $(this).find(".statistic-container");
    viewMyNba.removeStatistic(statisticContainer[0]);
});
// $("body").on("mouseover", ".col", function(){
//     if(flag){
//         const player:Player = getPlayerDetails(this)
//         modelMyNba.featchStatistic(player.getFirstName(), player.getLastName()).then(()=>{
//             var statisticContainer = $(this).find(".statistic-container")
//             viewMyNba.renderStatistic(modelMyNba.statistics, statisticContainer[0])
//         })
//     }
//     flag = false
// })
// $("body").on("mouseout", ".col", function(){
//     flag = true
//     var statisticContainer = $(this).find(".statistic-container")
//     viewMyNba.removeStatistic(statisticContainer[0])
// })
function getPlayerDetails(refernce) {
    var card = $(refernce).closest(".col");
    var firstName = $(card).find(".first-name").text();
    var lastName = $(card).find(".last-name").text();
    var shirtNumber = $(card).find(".shirt-number").text();
    var pos = $(card).find(".pos").text();
    return new Player(String(firstName), String(lastName), String(shirtNumber), String(pos));
}
