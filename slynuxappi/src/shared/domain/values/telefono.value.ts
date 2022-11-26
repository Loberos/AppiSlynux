
import { AppNotification } from 'src/shared/application/app.notification';
import { Result } from 'typescript-result';


export class PersonTelefono {
  private readonly telefono: string;
  private static MAX_LENGTH: number = 9;

  private constructor(telefono: string) {
    this.telefono = telefono;
  }

  public getTelefono(): string {
    return this.telefono;
  }


  public static create(telefono: string): PersonTelefono {
    telefono = (telefono ?? "").trim();
    return new PersonTelefono(telefono);
  }

  public static createv2(telefono: string): Result<AppNotification, PersonTelefono> {
    let notification: AppNotification = new AppNotification();
    telefono = (telefono ?? "").trim();

    if (telefono === "") {
      notification.addError('Inserte un telefono', null);
    }    
    if (notification.hasErrors()) {
      return Result.error(notification);
    }
    return Result.ok(new PersonTelefono(telefono));
  }
}