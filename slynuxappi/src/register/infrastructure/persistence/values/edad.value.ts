import { Column } from 'typeorm';

export class EdadValue {
  @Column('varchar', { name: 'Edad', length: 3, nullable: true })
  value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static from(value: string): EdadValue {
    return new EdadValue(value);
  }
}