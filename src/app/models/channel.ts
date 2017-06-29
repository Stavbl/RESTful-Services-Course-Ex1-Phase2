export class Channel {
    public _id: string;
    public name: string;
    public channelNumber: number;
    public description: string;
    public pricePerMonth : number;
    public officeAddress: string;
    public activityHours: string;
    public packageNum: number;
    public cDate: string;
    public _v: number;
    public topShows: [string];
}

export class ReqThree {
    public code:number;
    public data:[Channel];
}