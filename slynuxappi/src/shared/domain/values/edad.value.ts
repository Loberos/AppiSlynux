
import { AppNotification } from 'src/shared/application/app.notification';
import { Result } from 'typescript-result';


export class PersonEdad {
  private readonly edad: string;
  private static MAX_LENGTH: number = 3;

  private constructor(edad: string) {
    this.edad = edad;
  }

  public getTedad(): string {
    return this.edad;
  }


  public static create(edad: string): PersonEdad {
    edad = (edad ?? "").trim();
    return new PersonEdad(edad);
  }

  public static createv2(edad: string): Result<AppNotification, PersonEdad> {
    let notification: AppNotification = new AppNotification();
    edad = (edad ?? "").trim();

    if (edad === "") {
      notification.addError('Inserte su edad', null);
    }    
    if (notification.hasErrors()) {
      return Result.error(notification);
    }
    return Result.ok(new PersonEdad(edad));
  }
}