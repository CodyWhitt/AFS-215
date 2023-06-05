class StringList:
    def __init__(self):
        self._list = []

    def add_string(self, item):
        if isinstance(item, str):
            self._list.append(item)
        else:
            raise ValueError("Item is not a string")

    def search_string(self, item):
        if item in self._list:
            return True
        else:
            return False

    def evaluate_list(self):
        return all(isinstance(item, str) for item in self._list)
