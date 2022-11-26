export class RegisterPersonResponse {
    constructor(
      public id: number,
      public readonly firstName: string,
      public readonly lastName: string,
      public readonly dni: string,
      public readonly edad: string,
      public readonly telefono: string,
      public readonly createdAt: string,
      public readonly createdBy: number,
      public readonly correo: string,
      public readonly contraseña: string,
      public readonly codeValidation: string
    ) {}
  }