export enum TableauScalingBehaviors {
  AUTOMATIC = 'automatic',
  EXACTLY = 'exactly',
  RANGE = 'range',
  ATLEAST = 'atleast',
  ATMOST = 'atmost',
}

export enum TableauDevice {
  desktop = 'desktop',
}

export interface SheetSize {
  width: number;
  height: number;
}

export interface Size {
  behavior: TableauScalingBehaviors;
  maxSize: SheetSize;
  minSize: SheetSize;
}

export interface VizSize {
  sheetSize: Size;
}

export enum SheetType {
  WORKSHEET = 'worksheet',
  DASHBOARD = 'dashboard',
  STORY = 'story',
}

export interface VizResizeEvent {
  getViz: () => Viz;
  getVizSize: () => VizSize;
}

export enum TableauEventName {
  MARKS_SELECTION = 'marksselection',
  CUSTOM_VIEW_LOAD = 'customviewload',
  URL_ACTION = 'urlaction',
}

export interface TableauEvent {
  getViz: () => Viz;
  getWorksheet: () => Worksheet;
  geEventName: () => TableauEventName;
  getUrl: () => string;
}

export type HandleFirstVizSizeKnown = (viz: Viz) => void;
export type HandleFirstInteractive = (viz: Viz) => void;
export type HandleVizDispose = (viz: Viz) => void;
export type AddVizEvent = <TEvent extends TableauEvent>(
  eventName: TableauEventName,
  handler: (evt: TEvent) => void,
) => void;

export interface Sheet {
  getName: () => string;
  getWorksheets: () => Worksheet[];
}

export interface Dashboard extends Sheet {
  getWorksheets: () => Worksheet[];
  getSheetType: () => SheetType.DASHBOARD;
}

export interface Worksheet extends Sheet {
}

export interface Workbook {
  getName: () => string;
  activateSheetAsync: (id: string) => Sheet;
}

export interface Viz {
  getName: () => string;
  getParentElement: () => HTMLElement;
  getVizSize: () => VizSize;
  addEventListener: AddVizEvent;
  removeEventListener: AddVizEvent;
  getWorkbook: () => Workbook;
  dispose: () => void;
  show: () => void;
  setFrameSize: (width: number, height: number) => void;
}

export {};
