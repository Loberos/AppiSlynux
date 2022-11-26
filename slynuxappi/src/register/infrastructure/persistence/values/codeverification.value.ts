import { Column} from 'typeorm';

export class CodeVarificationValue {
  @Column('varchar', { name: 'codeValidation', length: 5, nullable: true })
  value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static from(value: string): CodeVarificationValue {
    return new CodeVarificationValue(value);
  }
}