import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

//if you want to use a service inside a service, use @Injectable
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];



  constructor(private loggingServce: LoggingService) {

  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status})
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingServce.logStatusChange(status);
  }
}
