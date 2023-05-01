class RetroGame:
    def __init__(self):
        self.data = []
# add number
    def add_game_date(self, date):
        self.data.append(date)
# add string
    def add_game_title(self, title):
        self.data.append(title)
# add dictionary
    def add_game_character(self, character):
        self.data.append(character)
# add tuple
    def add_game_record_times(self, recordScores):
        self.data.append(recordScores)
# tuple conversion
    def convert_to_tuple(self):
        self.data = tuple(self.data)


# Example usage:
retro_gaming_list = RetroGame()
retro_gaming_list.add_game_date("June 23, 1991")
retro_gaming_list.add_game_title("Sonic the Hedgehog")
retro_gaming_list.add_game_character({"name": "Sonic", "type": "Hedgehog"})
retro_gaming_list.add_game_record_times((8.6, 8.98, 9.03))

# print list
print(retro_gaming_list.data)

# convert to tuple and print
retro_gaming_list.convert_to_tuple()
print(retro_gaming_list.data)