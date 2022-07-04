export interface INgmTreeGridConfig {
  hasSearch?: boolean;
  searchFn?: (obj: any, text: string) => boolean;
  columns: string[]
}

// export interface INgmColumn {
//   header: string;
//   key: string;
//   getText?: (item: any) => string
// }

