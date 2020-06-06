export class Feeding {
    public childId: string;
    public feedingId: string;
    public feedingDate: string;
    public feedingStartTime: string;
    public feedingEndTime: string;
    public oz: number;
    public timeSinceLastFeed: string;

    constructor(childId, feedingId, date, startTime, endTime, oz, timeSinceLastFeed) {
        this.childId = childId;
        this.feedingId = feedingId;
        this.feedingDate = date;
        this.feedingStartTime = startTime;
        this.feedingEndTime = endTime,
        this.oz = oz;
        this.timeSinceLastFeed = timeSinceLastFeed;
    }
}