export class User {
    public _id: string;
    public firstName: string;
    public lastName: string;
    public address: string;
    public email: string;
    public cDate: string;
    public totalMonthlyPrice: number;
    public __v: number;
    public channels: [UserChannel]
}

export class UserChannel {
    public name: string;
    public price: number;
    public channelNumber: number
    public _id: string;
}
export class ReqOne {
    public code: number;
    public data: [User];
}

export class ReqTwo {
    public code: number;
    public data: [
        {
            _id: string;
            channels: [UserChannel];
        }
    ]
}
