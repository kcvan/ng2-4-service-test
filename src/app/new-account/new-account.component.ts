import { Component } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';


//add service to providers
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  //using the logging service we created. the param can be any name but the
  //type has to be the type that is in your service.
  //by doing this, we create a loggingService variable that you can use
  //throughout the component
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountName);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
