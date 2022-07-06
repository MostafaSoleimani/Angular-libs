export interface INgmTreeGridConfig {
  hasSearch?: boolean;
  searchPlaceHolder?: string;
  searchFn?: (obj: any, text: string) => boolean;
  columns: INgmColumn[]
}

export interface INgmColumn {
  header: string;
  width: number;
}

