import { ClientType } from 'src/register/domain/aggregates/client/client-type.enum';
import { AuditTrail } from 'src/shared/domain/values/audit-trail.value';
import { PersonName } from 'src/shared/domain/values/person-name.value';
import { ClientId } from './client-id.value';
import { Dni } from '../../../../shared/domain/values/dni.value';
import { Client } from './client.root.entity';
import { PersonRegistered } from '../../events/person-registered.event';
import { CorreoPerson } from 'src/shared/domain/values/person-correo.value';
import { PersonContraseña } from 'src/shared/domain/values/person-contraseña.value';
import { PersonEdad } from 'src/shared/domain/values/edad.value';
import { CodeValidationPerson } from 'src/shared/domain/values/CodeVerification.value';
import { PersonTelefono } from 'src/shared/domain/values/telefono.value';

export class Person extends Client {
  private name: PersonName;
  private dni: Dni;
  private edad: PersonEdad;
  private telefono: PersonTelefono;
  private correo: CorreoPerson; 
  private contraseña: PersonContraseña; 
  private codevalidation:CodeValidationPerson; 

  public constructor(_name: PersonName, _dni: Dni,_edad:PersonEdad,_telefono:PersonTelefono, 
    _auditTrail: AuditTrail, _correo: CorreoPerson,_contraseña: PersonContraseña,
    _codeValidation:CodeValidationPerson) 
    {
    super(ClientType.PERSONCOMUN, _auditTrail);
    this.name = _name;
    this.dni = _dni;
    this.edad = _edad;
    this.telefono = _telefono;
    this.correo = _correo;
    this.contraseña = _contraseña;
    this.codevalidation=_codeValidation; 
  } 

  public register() {
    const event = new PersonRegistered(this.id.getValue(), this.name.getFirstName(), this.name.getLastName(), 
    this.dni.getValue(),this.edad.getTedad(),this.telefono.getTelefono(),this.correo.getCorreo(),
    this.contraseña.getContraseña(),this.codevalidation.getCodeValidation());

    this.apply(event);
  }
  public getCodeValidation(): CodeValidationPerson {
    return this.codevalidation;
  }
  public getId(): ClientId {
    return this.id;
  }
  public getTelefono(): PersonTelefono {
    return this.telefono;;
  }
  public getEdad(): PersonEdad {
    return this.edad;
  }

  public getCorreo(): CorreoPerson {
    return this.correo;
  }
  public getContraseña(): PersonContraseña {
    return this.contraseña;
  }

  public getName(): PersonName {
    return this.name;
  }

  public getDni(): Dni {
    return this.dni;
  }

  public getAuditTrail(): AuditTrail {
    return this.auditTrail;
  }

  public changeName(name: PersonName): void {
    this.name = name;
  }

  public changeDni(dni: Dni): void {
    this.dni = dni;
  }
}