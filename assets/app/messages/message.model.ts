export class Message {
  constructor (
    public title: string,
    public description: string,
    public venue: string,
    public address: string,
    public time: string,
    public date: string,
    public price: string,
    public eventType: string,
    public messageId?: string,
    public userId?: string
  ){}
}
