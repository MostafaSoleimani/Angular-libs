# NgmTreeGrid

A tree grid that supports editable fields like Inputs and Checkboxes.

## Demo

You can find [Demo](https://stackblitz.com/edit/angular-ivy-z3d4sk?file=src%2Fapp%2Fapp.component.ts) here.

It shows your kindness if you give star on my github. I will appreciate that.
You can find [Repo](https://github.com/MostafaSoleimani/Angular-libs/blob/main/projects/ngm-tree-grid) here.

## Installation

Install ngm-tree-grid with npm

```bash
  cd my-project
  npm i ngm-tree-grid
  npm i ngm-live-search
```

## Usage/Examples

```javascript
import { NgmTreeGridModule } from "ngm-tree-grid";

@NgModule({
  imports: [NgmTreeGridModule],
})
export class AppModule {}
```

Then in your component.html

```html
<div class="tree-grid">
  <ngm-tree-grid
    [dataSource]="dataSource"
    [config]="treeGridConfig"
    (expand)="onExpand($event)"
    (collapse)="onCollapse($event)"
  >
    <ng-template #treeGridHeader>
      first header
    </ng-template>
    <ng-template #treeGridHeader>
      second
    </ng-template>
    <ng-template #treeGridCell let-item>
      <div>{{ item.title.caption }}</div>
    </ng-template>

    <ng-template #treeGridCell let-item>
      <input type="checkbox" />
    </ng-template>
  </ngm-tree-grid>
</div>
```

Then in your component put

```typescript
export class YourComponent {
  dataSource = new NgmDataSource();
  getChildrenFn = (obj: any) => obj.nodes ?? [];
  treeGridConfig: INgmTreeGridConfig = {
    columns: [
      {
        header: "Title: ",
        width: 50,
      },
      {
        header: "Id: ",
        width: 50,
      },
    ],
    searchFn: (item, text: string) =>
      item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
  };

  data = [
    {
      id: 1,
      name: "Mostafa",
      nodes: [
        {
          id: 2,
          name: "Soleimani",
        },
      ],
    },
  ];

  ngOnInit() {
    this.dataSource.data = this.data;
    this.dataSource.getChildrenFn = (obj: any) => obj.nodes ?? [];
  }

  onExpand(e: INgmExpansion) {
    console.log("expand:   ", e);
  }

  onCollapse(e: INgmExpansion) {
    console.log("collapse:   ", e);
  }
}
```

## API Reference

#### Inputs and Outputs

| Parameter      | Type                 | Description                                      |
| :------------- | :------------------- | :----------------------------------------------- |
| `[config]`     | `INgmTreeGridConfig` | configuration of tree-grid header and search     |
| `[dataSource]` | `INgmDataSource`     | data and a func to get children                  |
| `(expand)`     | `Output`             | emits when user expand a node returns the item   |
| `(collapse)`   | `Output`             | emits when user collapse a node returns the item |
