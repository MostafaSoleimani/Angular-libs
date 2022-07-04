# NgmLiveSearch

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Demo

https://stackblitz.com/edit/angular-ivy-kdr5j4?file=src/app/app.component.html

## Installation

Install npm i ngm-live-search with npm

```bash
  cd my-project
  npm i npm i ngm-live-search
```

## Usage/Examples

```javascript
import { NgmLiveSearchModule } from "ngm-live-search";

@NgModule({
  imports: [
    .
    .
    .
    NgmLiveSearchModule
  ],
})
export class AppModule {}
```

Then in your component.html

```html
<ngm-live-search (search)="yourSearch($event)" (searchClosed)="clearSearch()">
</ngm-live-search>
```

Then in your component.ts

```typescript
export class YourComponent {
  /**
   * @params text: the text to search.
   */
  yourSearch(text: string) {
    // Call api or search locally on your data.
    // this.callApi() In case of call api.
    // this.localSearch() In case of local search.
  }

  clearSearch() {
    // Stop filtering your data
  }

  callApi() {}

  localSearch() {}
}
```

## API Reference

#### Inputs

| Parameter | Type            | Description                          |
| :-------- | :-------------- | :----------------------------------- |
| `config`  | `ISearchParams` | debounceTime, minLength, clearOnBlur |

#### Outputs

| Parameter      | Type     | Description                  |
| :------------- | :------- | :--------------------------- |
| `search`       | `string` | Returns the string to search |
| `searchClosed` | `string` | on click on x button         |
