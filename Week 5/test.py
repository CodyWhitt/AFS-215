import pytest
from my_module import StringList

@pytest.fixture
def example_stringlist():
    stringlist = StringList()
    stringlist.add_string("hello")
    return stringlist

def test_add_string(example_stringlist):
    example_stringlist.add_string("world")
    assert example_stringlist.search_string("world") == True

def test_search_string(example_stringlist):
    assert example_stringlist.search_string("hello") == True

def test_evaluate_list(example_stringlist):
    assert example_stringlist.evaluate_list() == True
