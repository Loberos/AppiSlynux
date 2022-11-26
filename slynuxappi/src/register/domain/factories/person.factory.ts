import { AuditTrail } from '../../../shared/domain/values/audit-trail.value';
import { PersonName } from '../../../shared/domain/values/person-name.value';
import { Person } from '../aggregates/client/person.entity';
import { ClientId } from '../aggregates/client/client-id.value';
import { Dni } from '../../../shared/domain/values/dni.value';
import { CorreoPerson } from 'src/shared/domain/values/person-correo.value';
import { PersonContraseña } from 'src/shared/domain/values/person-contraseña.value';
import { PersonEdad } from 'src/shared/domain/values/edad.value';
import { PersonTelefono } from 'src/shared/domain/values/telefono.value';
import { CodeValidationPerson } from 'src/shared/domain/values/CodeVerification.value';

export class PersonFactory {
  public static withId(id: ClientId, name: PersonName, dni: Dni,edad:PersonEdad,telefono:PersonTelefono,auditTrail: AuditTrail,_correo: CorreoPerson,_contraseña: PersonContraseña,codeValidation:CodeValidationPerson): Person {
    let person: Person = new Person(name, dni,edad,telefono, auditTrail, _correo,_contraseña,codeValidation);
    person.changeId(id);
    return person;
  }

  public static from(id: ClientId, name: PersonName, dni: Dni,edad:PersonEdad,telefono:PersonTelefono,auditTrail: AuditTrail,_correo: CorreoPerson,_contraseña: PersonContraseña,codeValidation:CodeValidationPerson): Person {
    return new Person(name, dni,edad,telefono, auditTrail, _correo,_contraseña,codeValidation);
  }
}