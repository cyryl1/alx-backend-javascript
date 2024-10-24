export default class Building {
    constructor(sqft) {
        if (this.constructor !== Building) {
            if (typeof this.evacuationWarningMessage !== 'function') {
                throw new Error("Class extending Building must overrinde evacuationWarningMessage");
            }
        }
        this.sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(value) {
        if (typeof value !== 'number') {
            throw new TypeError("Sqft must be a number");
        }
        this._sqft = value;
    }

}