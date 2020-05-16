export class Feeding {
    public date: string;
    public time: string;
    public oz: number;
    public timeSinceLastFeed: string;

    constructor(date, time, oz, timeSinceLastFeed) {
        this.date = date;
        this.time = time;
        this.oz = oz;
        this.timeSinceLastFeed = timeSinceLastFeed;
    }
}