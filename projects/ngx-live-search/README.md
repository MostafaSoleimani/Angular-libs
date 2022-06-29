# NgxLiveSearch

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Installation

Install ngx-live-search with npm

```bash
  cd my-project
  npm i ngx-live-search
```

## Usage/Examples

```javascript
import { NgxLiveSearchModule } from "ngx-live-search";

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
<ngx-live-search (search)="yourSearch()"> </ngx-live-search>
```

```typescript
yourSearch() {
  // Call api or search locally on your data
}
```

## API Reference

#### Inputs

| Parameter | Type            | Description                          |
| :-------- | :-------------- | :----------------------------------- |
| `config`  | `ISearchParams` | debounceTime, minLength, clearOnBlur |
