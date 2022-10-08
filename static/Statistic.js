"use strict";
class Statistic {
    constructor(statisticProperty, statisticValue) {
        this._statistic = `${statisticProperty} ${statisticValue}`;
    }
    get statistic() {
        return this._statistic;
    }
}
