class Player:
    def __init__(self, player):
        self.firstName = player["firstName"]
        self.lastName = player["lastName"]
        self.pos = player["pos"]
        self.jersey = player["jersey"]

# TODO: I want to conver player to Jason but it makes {property: "value"}
# so i must to use the json key as property and its bad convention like firstName
