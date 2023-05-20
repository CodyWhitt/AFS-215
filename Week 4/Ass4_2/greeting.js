function greetingsOrNumber(n) {
    if (typeof n !== 'number') {
        throw new Error('Input must be a number');
    }

    if (n % 21 === 0) {
        return 'Good Evening';
    } else if (n % 3 === 0) {
        return 'Good Morning';
    } else if (n % 7 === 0) {
        return 'Good Afternoon';
    } else {
        return n.toString();
    }
}
