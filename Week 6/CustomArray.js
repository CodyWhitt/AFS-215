class CustomArray {
    constructor() {
        this.array = [];
    }

    addItem(item) {
        this.array.push(item);
    }

    getArray() {
        return this.array;
    }

    removeItem(item) {
        const index = this.array.indexOf(item);
        if (index > -1) {
            this.array.splice(index, 1);
        } else {
            throw new Error("Item not found in the array");
        }
    }

    searchItem(item) {
        return this.array.includes(item);
    }
}
