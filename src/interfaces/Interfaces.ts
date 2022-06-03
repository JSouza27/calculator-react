export interface ICommand {
  label: string | null;
  type: string;
  value: string | number | Function;
  row: number;
  components: any;
}

export interface IButton {
  type: string;
  label: any;
}
