/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this._bucket = {
    };
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this._bucket[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    if (!this._bucket[key]) {
        return false;
    }
    this._bucket[key] = null;
};

/**
 * Returns true if this set did not already contain the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    if (this._bucket[key]) {
        return true
    } else {
        return false
    }
};