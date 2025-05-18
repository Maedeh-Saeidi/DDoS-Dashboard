export type Units = 'P' | 'T' | 'G' | 'M' | 'K';

export type CommonLayoutsProps = {
  title:string,
  subTitle:string,
  isFetching:boolean,
  maxVolume:number | null,
  maxUnit:Units,
  volumes:number[],
  volumesUnit: Units 
};

export type RawDataItem = {
  lrl: number;
  pps: string;
  t: string;
};

export type ChartDataItem = {
  time: string;
  lrl: number;
  pps: number;
};