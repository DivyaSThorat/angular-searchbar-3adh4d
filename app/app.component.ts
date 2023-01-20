import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
// import { DomSanitizer } from "@angular/platform-browser";
// import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list = [
    {
      number: 1,
      president: 'Bank Of Baroda',
      birth_year: 1732,
      death_year: 1799,
      took_office: '',
      left_office: '',
      party: '',
    },
    {
      number: 2,
      president: 'Bank Of India',
      birth_year: 1735,
      death_year: 1826,
      took_office: '',
      left_office: '1801-03-04',
      party: '',
    },
    {
      number: 3,
      president: 'Bank Of Maharashtra',
      birth_year: 1743,
      death_year: 1826,
      took_office: '',
      left_office: '1809-03-04',
      party: '',
    },
    {
      number: 4,
      president: 'HDFC Bank',
      birth_year: 1751,
      death_year: 1836,
      took_office: '',
      left_office: '1817-03-04',
      party: '',
    },
    {
      number: 5,
      president: 'IDBI Bank',
      birth_year: 1758,
      death_year: 1831,
      took_office: '',
      left_office: '1825-03-04',
      party: '',
    },
    {
      number: 6,
      president: 'Kotak Mahindra Bank',
      birth_year: 1767,
      death_year: 1848,
      took_office: '',
      left_office: '1829-03-04',
      party: '',
    },
    {
      number: 7,
      president: 'State Bank Of India',
      birth_year: 1767,
      death_year: 1845,
      took_office: '',
      left_office: '1837-03-04',
      party: '',
    },
    {
      number: 8,
      president: 'Union Bank Of India',
      birth_year: 1782,
      death_year: 1862,
      took_office: '',
      left_office: '1841-03-04',
      party: '',
    },
  ];
  @ViewChild('searchbar') searchbar: ElementRef;
  // private readonly SHRINK_TOP_SCROLL_POSITION = 64;
  // shrinkToolbar = false;
  // scrollingSubscription: any;
  // scrollTop: any;
  searchText = '';

  toggleSearch: boolean = false;
  constructor() {}

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
}
