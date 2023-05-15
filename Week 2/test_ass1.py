def test_PepsiCoke():
    # Test with number 1
    assert PepsiCoke(1) == '1'
    # Test with number 2
    assert PepsiCoke(2) == '2'
    # Test with number 3
    assert PepsiCoke(3) == 'Pepsi'
    # Test with number 5
    assert PepsiCoke(5) == 'Coke'
    # Test with number 6
    assert PepsiCoke(6) == 'Pepsi'
    # Test with number 10
    assert PepsiCoke(10) == 'Coke'
    # Test with number 15
    assert PepsiCoke(15) == 'PepsiCoke'

def PepsiCoke(n):
    # Initialize result
    result = ''
    # Check divisibility by 3
    if n % 3 == 0: 
        result += 'Pepsi'
    # Check divisibility by 5
    if n % 5 == 0: 
        result += 'Coke'
    # Return number if not divisible by 3 or 5
    return result if result else str(n)