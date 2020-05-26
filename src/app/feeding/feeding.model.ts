export class Feeding {
    public feedingId: string;
    public feedingDate: string;
    public feedingTime: string;
    public oz: number;
    public timeSinceLastFeed: string;

    constructor(feedingId, date, time, oz, timeSinceLastFeed) {
        this.feedingId = feedingId
        this.feedingDate = date;
        this.feedingTime = time;
        this.oz = oz;
        this.timeSinceLastFeed = timeSinceLastFeed;
    }
}