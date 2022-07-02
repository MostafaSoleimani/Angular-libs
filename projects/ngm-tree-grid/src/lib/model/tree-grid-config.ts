export interface INgmTreeGridConfig {
  hasSearch?: boolean;
  searchFn?: (obj: any, text: string) => boolean;
  columns: INgmColumn[]
}

export interface INgmColumn {
  header: string;
  key: string;
  getText?: (item: any) => string
}

