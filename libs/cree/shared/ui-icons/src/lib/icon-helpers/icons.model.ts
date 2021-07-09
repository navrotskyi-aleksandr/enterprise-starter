export interface Icon {
  [size: string]: {
    descriptor: {
      elem: string;
      attrs: {
        xmlns: string;
        viewBox: string;
        fill: string;
        width: number;
        height: number;
      };
      name: string;
      size: number;
    };
    svg: string;
  };
}

export interface Attrs {
  width: number;
  height: number;
  viewBox: string;
  title?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-hidden'?: boolean;
  focusable?: string;
  role?: string;
  tabindex?: number;
}
