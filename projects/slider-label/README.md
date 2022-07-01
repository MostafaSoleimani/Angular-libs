# SliderLabel

Note that this library is for Angular

When you have a text that doesn't fit to your label, You can use this directive.

## Demo

https://stackblitz.com/edit/angular-ivy-dbhlko?file=src/app/app.component.html

## Installation

Install slider-label with npm

```bash
  cd my-project
  npm i slider-label
```

## Usage/Examples

```javascript
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SliderLabelModule } from "slider-label";

@NgModule({
  imports: [BrowserAnimationsModule, SliderLabelModule],
})
export class AppModule {}
```

Then in your component.html

```html
<div ngxSliderLabel>your text that doesn't fit in this div</div>
```

## API Reference

#### Inputs

| Parameter      | Type    | Description           |
| :------------- | :------ | :-------------------- |
| `dir`          | `Input` | rtl or ltr            |
| `dur`          | `Input` | The time of animation |
| `comeBackTime` | `Input` | return to normal time |
| `className`    | `Input` | css class name        |
