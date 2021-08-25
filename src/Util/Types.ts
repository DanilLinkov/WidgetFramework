export type supportedWidgets = "number" | "list";

export type widget = {
  title: string;
  subtitle?: string;
  type: supportedWidgets;
  api: string;
};

export type column = {
  heading: string;
  size: number;
  widgets: widget[];
};

export type config = {
  columns: column[];
};
