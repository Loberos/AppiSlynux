import { Column } from 'typeorm';

export class TelefonoValue {
  @Column('varchar', { name: 'Telefono', length: 9, nullable: true })
  value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static from(value: string): TelefonoValue {
    return new TelefonoValue(value);
  }
}