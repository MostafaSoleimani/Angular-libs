export interface INgmDataSource<T> {
  data: T[];
  getChildrenFn: (obj: T) => T[];
}


export class NgmDataSource<T> implements INgmDataSource<T> {
  data: T[] = [];
  getChildrenFn: (obj: T) => T[] = (obj: any) => {
    return obj['children'];
  };

  constructor(data?: T[], getChildrenFn?: (obj: T) => T[]) {
    if (isNotFalsy(data))
      this.data = data;
    if (isNotFalsy(getChildrenFn))
      this.getChildrenFn = getChildrenFn;
  }
}


export function isNotFalsy<T>(value: T | undefined): value is T {
  return !!value;
}
