export class User {
  // Optioneel description attribuut

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public birthday: string,
  ) { }
}
