import { AppNotification } from "src/shared/application/app.notification";
import { Result } from "typescript-result";

export class CodeValidationPerson {
  private readonly codeValidation: string;
  private static MAX_LENGTH: number = 5;

  private constructor(codeValidation: string) {
    this.codeValidation = codeValidation;
  }

  public getCodeValidation(): string {
    return this.codeValidation;
  }

  public static create(codeValidation: string): CodeValidationPerson
  {
    codeValidation = (codeValidation ?? "").trim();
    return new CodeValidationPerson(codeValidation);
  }

  public static createResult(codeValidation: string): Result<AppNotification, CodeValidationPerson>
  {
    let notification: AppNotification = new AppNotification();
    codeValidation = (codeValidation ?? "").trim();
    if (codeValidation === "") {
      notification.addError('Se requiere de un codigo de verificacion', null);
    }
    if (notification.hasErrors()) {
      return Result.error(notification);
    }
    return Result.ok(new CodeValidationPerson(codeValidation));
  }
}