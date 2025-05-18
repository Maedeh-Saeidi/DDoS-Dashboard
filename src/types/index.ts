export type Units = 'P' | 'T' | 'G' | 'M' | 'K';
export type CommonLayoutsProps = {
  title:string,
  subTitle:string,
  isFetching:boolean,
  maxVolume:number | null,
  maxUnit:Units,
  volumes:number[],
  volumesUnit: Units 
}