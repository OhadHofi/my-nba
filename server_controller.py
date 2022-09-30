import requests
from serverDB import dream_team

teams_id = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}


async def filter_players(year, team_name, is_day_of_birth_utc):
    players = requests.get(
        f'http://data.nba.net/10s/prod/v1/{year}/players.json')
    players = players.json()
    players = players.get("league").get("standard")
    team_id = teams_id.get(team_name)
    players = filter_by_day_of_birth_utc(players, is_day_of_birth_utc)
    players = [{"firstName": player["firstName"],
                "lastName": player["lastName"],
                "jersey": player["jersey"],
                "pos": player["pos"]}
               for player in players
               if did_play_in_team_and_year(player.get("teams"), year, team_id)]

    return players


def filter_by_day_of_birth_utc(players, is_day_of_birth_utc):
    if is_day_of_birth_utc:
        players = [player for player in players if bool(
            player.get("dateOfBirthUTC"))]
    return players


def did_play_in_team_and_year(teams, year, team_id):
    if [team for team in teams if team.get("teamId") == team_id and team.get("teamId") <= year and year <= team.get("seasonEnd")]:
        return True
    else:
        return False


def get_dream_team():
    return dream_team


def add_player_to_deram_team(player):
    dream_team.append(player)


def remove_player_from_dream_team(player):
    dream_team = [
        p for p in dream_team if not (player["firstName"] == p["firstName"] and player["lastName"] == p["lastName"])]
