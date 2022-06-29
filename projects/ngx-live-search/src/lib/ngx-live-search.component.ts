import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map
} from 'rxjs/operators';

export interface ISearchParams {
  // Delay in milliseconds before value should be sent.
  debounceTime: number;
  // Minimum characters to start search. Default is zero.
  minLength: number;
  // an option for make input empty while blur.
  clearOnBlur?: boolean;
}

@Component({
  selector: 'ngm-live-search',
  template: `
    <div class="nosubmit">
        <input class="nosubmit" type="search" [placeholder]="searchLabel" #searchInput/>
      </div>
  `,
  styles: [
    `.container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
    }

    div {
      color: #555;
      display: flex;
      padding: 2px;
      border: 1px solid currentColor;
      border-radius: 5px;
      margin: 0 0 30px;
    }

    input[type="search"] {
      border: none;
      background: transparent;
      margin: 0;
      padding: 7px 8px;
      font-size: 14px;
      color: inherit;
      border: 1px solid transparent;
      border-radius: inherit;
    }

    input[type="search"]::placeholder {
      color: #bbb;
    }

    input[type="search"]:focus {
      box-shadow: 0 0 3px 0 #1183d6;
      border-color: #1183d6;
      outline: none;
    }

    div.nosubmit {
      border: none;
      padding: 0;
    }

    input.nosubmit {
      border: 1px solid #555;
      width: 100%;
      padding: 9px 4px 9px 40px;
      background: transparent
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
        no-repeat 13px center;
    }`
  ]
})
export class NgxLiveSearchComponent implements AfterViewInit, OnDestroy {
  @Input() config: ISearchParams = {
    debounceTime: 700,
    minLength: 2
  };
  @Output() search = new EventEmitter<string>();
  @ViewChild('searchInput')
  searchInput!: ElementRef<any>;
  @Input() searchLabel = 'Search';
  filter = new FormControl('');
  unsubscribes: Subscription[] = [];

  constructor() { }

  ngOnDestroy() {
    this.unsubscribes.forEach((x) => x.unsubscribe());
  }


  ngAfterViewInit(): void {
    const sub = fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        }),
        // if character length greater than this.config.minLength
        filter((res) => res.length >= (this.config?.minLength ?? 0)),

        // Time in milliseconds between key events
        debounceTime(this.config?.debounceTime ?? 700),

        // If previous query is different from current
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.onSearch(text);
      });
    this.unsubscribes.push(sub);
  }

  onSearch(text: string) {
    this.search.emit(text);
  }

  clearSearch() {
    this.filter.setValue('');
    this.search.emit('');
  }
}


