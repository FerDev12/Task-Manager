export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: Status;
}

export enum Status {
  pending = 'pending',
  inProgress = 'in-progress',
  finished = 'finished',
}
