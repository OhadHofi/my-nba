class ViewMyNba{
    constructor(){}

    renderPlayers(players: Player[]){
        console.log(players)

        $("#player-container").empty()
        const source = $("#players-template").html()
        const templatePlayer = Handlebars.compile(source);
        $("#player-container").append(templatePlayer({players}))
    }

    renderStatistic(statistics: {}[], statisticContainer: any){
        $(statisticContainer).empty()
        const source = $("#statistic-template").html()
        const templateStatistic = Handlebars.compile(source)
        $(statisticContainer).append(templateStatistic({statistics}))
    }

    removeStatistic(statisticContainer: any){
        $(statisticContainer).empty()
    }
}