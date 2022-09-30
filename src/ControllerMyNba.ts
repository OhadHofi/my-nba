const modelMyNba = new ModelMyNba()
const viewMyNba = new ViewMyNba()

$("#get_team_button").on("click", function(){
    console.log("click")
    let input = document.getElementById('team_name') as HTMLInputElement | null;
    const team_name = input?.value;
    input = document.getElementById('year') as HTMLInputElement | null;
    const year = input?.value;
    modelMyNba.featchTeam(team_name as string, year as string).then(()=>{
        viewMyNba.render(modelMyNba.team.players)
    })
})





