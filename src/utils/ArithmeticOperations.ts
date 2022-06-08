export default class ArithmeticOperations {
  private opration: string;
  private list: number[];
  private result: number = 0;

  constructor(operation: string, list: number[]) {
    this.opration = operation;
    this.list = list;
  }

  private sum(): number {
    this.result = this.list.reduce((acc, currValue) => acc + currValue, 0);

    return this.result;
  }

  private subtraction(): number {
    this.result = this.list.reduce((acc, currValue) => -acc - currValue, 0);

    return this.result;
  }

  private multiplication(): number {
    this.result = this.list.reduce((acc, currValue) => acc * currValue);

    return this.result;
  }

  private division(): number {
    this.result = this.list.reduce((acc, currValue) => acc / currValue);

    return this.result;
  }

  private percentage(): number {
    this.result = this.list[0] / 100;

    return this.result;
  }

  public performOperation(): number {
    if (this.opration === '+') return this.sum();
    if (this.opration === '-') return this.subtraction();
    if (this.opration === 'x') return this.multiplication();
    if (this.opration === '/') return this.division();
    if (this.opration === '%') return this.percentage();

    return this.result;
  }
}
