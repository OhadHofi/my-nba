from xmlrpc.client import boolean
from fastapi import FastAPI, Request, Response
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import server_controller
import requests
from Player import Player


# from pydantic import BaseModel
# class Player(BaseModel):
#     first_name: str
#     last_name: str
#     shirt_number: int
#     pos: str
#     img: str


app = FastAPI()

app.mount("/static", StaticFiles(directory="./static"), name="static")


@app.get("/")
def in_load():
    print("maytan")
    return FileResponse('static/index.html')


@app.get("/players/{year}/{team}")
async def get_players_by_year_and_team(year, team, filter_date_of_birth_utc: boolean = False):
    print(filter_date_of_birth_utc)
    players = await server_controller.filter_players(year, team, filter_date_of_birth_utc)
    return players


@app.get('/player/statistic/{first_name}/{last_name}')
async def get_player_statistic(first_name, last_name):
    return await server_controller.add_statistic(first_name, last_name)


@app.get("/teams")
async def show_teams():
    teams = requests.get(
        "http://data.nba.net/data/10s/prod/v1/2020/teams.json")
    return teams.json()


@app.get('/dream/team')
def get_dream_team():
    print(server_controller.get_dream_team())
    return server_controller.get_dream_team()


@app.post('/player/dream/team')
async def add_player_to_dream_team(request: Request):
    new_palyer = await request.json()
    new_palyer = Player(new_palyer)
    print(new_palyer)
    server_controller.add_player_to_deram_team(new_palyer)
    return "Created"


@app.delete('/player/dream/team')
async def remove_player_from_dream_team(request: Request):
    palyer_to_remove = await request.json()
    server_controller.remove_player_from_dream_team(palyer_to_remove)
    return "Remove"


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
