import { Moment } from 'moment';
import { IProject } from 'app/shared/model/project.model';
import { ILabel } from 'app/shared/model/label.model';

export interface ITicket {
  id?: number;
  title?: string;
  description?: string;
  dueDate?: Moment;
  done?: boolean;
  project?: IProject;
  labels?: ILabel[];
}

export class Ticket implements ITicket {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public dueDate?: Moment,
    public done?: boolean,
    public project?: IProject,
    public labels?: ILabel[]
  ) {
    this.done = this.done || false;
  }
}
