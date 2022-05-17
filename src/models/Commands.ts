export interface ICommandType {
  name: string | null;
  icon: string | null;
  type: string;
  value: string | number | Function | null;
  row: number;
}
