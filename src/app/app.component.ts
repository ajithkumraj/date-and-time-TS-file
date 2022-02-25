import { Component, Inject, LOCALE_ID } from '@angular/core';
import { getLocaleDateTimeFormat, FormatWidth, formatDate } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  dateTime = new Date();
  
 constructor(
    @Inject(LOCALE_ID) public locale: string
 ) {

 }

 formatMyDate(){
   const format = getLocaleDateTimeFormat(this.locale, FormatWidth.Long);
   const date = formatDate(this.dateTime, 'y, MM, d', this.locale)
   const time = formatDate(this.dateTime, 'HH:mm', this.locale)
   return format
   .replace("'", "")
   .replace("'", "")
   .replace('{1}',date)
   .replace('{0}', time)
 }
}
