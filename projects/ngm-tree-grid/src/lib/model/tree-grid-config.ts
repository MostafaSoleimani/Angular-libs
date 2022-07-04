export interface INgmTreeGridConfig {
  hasSearch?: boolean;
  searchFn?: (obj: any, text: string) => boolean;
  columns: INgmColumn[]
}

export interface INgmColumn {
  header: string;
  width: number;
}

