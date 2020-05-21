export class Feeding {
    public feedingId: string;
    public date: string;
    public time: string;
    public oz: number;
    public timeSinceLastFeed: string;

    constructor(feedingId, date, time, oz, timeSinceLastFeed) {
        this.feedingId = feedingId
        this.date = date;
        this.time = time;
        this.oz = oz;
        this.timeSinceLastFeed = timeSinceLastFeed;
    }
}