import { ChildEntity, Column } from 'typeorm';
import { ClientType } from '../../../domain/aggregates/client/client-type.enum';
import { CodeVarificationValue } from '../values/codeverification.value';
import { ContraseñaValue } from '../values/contraseña.value';
import { CorreoValue } from '../values/correo.value';
import { DniValue } from '../values/dni.value';
import { EdadValue } from '../values/edad.value';
import { PersonNameValue } from '../values/person-name.value';
import { TelefonoValue } from '../values/telefono.value';
import { ClientEntity } from './client.entity';

@ChildEntity(ClientType.PERSONCOMUN)
export class PersonEntity extends ClientEntity {

  @Column((type) => PersonNameValue, { prefix: false })
  public name: PersonNameValue;

  @Column((type) => DniValue, { prefix: false })
  public dni: DniValue;

  @Column((type) => EdadValue, { prefix: false })
  public edad: EdadValue;

  @Column((type) => TelefonoValue, { prefix: false })
  public telefono: TelefonoValue;
  
  @Column((type) => CorreoValue, { prefix: false })
  public correo: CorreoValue;

  @Column((type) => ContraseñaValue, { prefix: false })
  public contraseña: ContraseñaValue;

  @Column((type) => CodeVarificationValue, { prefix: false })
  public codigoVerification: CodeVarificationValue;
}