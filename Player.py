class Player:
    def __init__(self, player):
        self.firstName = player["firstName"]
        self.lastName = player["lastName"]
        self.pos = player["pos"]
        self.jersey = player["jersey"]

    def get_first_name(self):
        return self.firstName

    def get_last_name(self):
        return self.lastName



# TODO: I want to conver player to Jason but it makes {property: "value"}
# so i must to use the json key as property and its bad convention like firstName
