# SliderLabel

When you have a text that doesn't fit to your label, You can use this directive.

## Installation

Install slider-label with npm

```bash
  cd my-project
  npm i slider-label
```

## Usage/Examples

```javascript
import { SliderLabelModule } from "slider-label";

@NgModule({
  imports: [SliderLabelModule],
})
export class AppModule {}
```

Then in your component.html

```html
<div ngxSliderLabel>your text that doesn't fit in this div</div>
```
