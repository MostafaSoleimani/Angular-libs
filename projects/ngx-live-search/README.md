# NgxLiveSearch

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Installation

Install npm i ngm-live-search with npm

```bash
  cd my-project
  npm i npm i ngm-live-search
```

## Usage/Examples

```javascript
import { NgxLiveSearchModule } from "npm i ngm-live-search";

@NgModule({
  imports: [
    .
    .
    .
    NgxLiveSearchModule
  ],
})
export class AppModule {}
```

Then in your component.html

```html
<ngm-live-search (search)="yourSearch()"> </ngm-live-search>
```

```typescript
export class YourComponent {
  yourSearch() {
    // Call api or search locally on your data.
    // this.callApi() In case of call api.
    // this.localSearch() In case of local search.
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
