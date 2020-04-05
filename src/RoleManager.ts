export default class RoleManager {
  private _currentRole: string
  
  constructor() {
    this.currentRole = 'kk'
  }

  get currentRole(): string {
    return this._currentRole
  }

  set currentRole(value: string) {
    this._currentRole = value
  }
}