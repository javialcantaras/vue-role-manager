import PluginOptions from './_models/PluginOptions'
import _ from 'lodash'

export default class RoleManager {
  private _currentRole: string
  private _roles: string[]
  
  constructor(options: PluginOptions) {
    this._roles = options.roles
  }

  get currentRole(): string {
    return this._currentRole
  }

  set currentRole(value: string) {
    if (!this.checkRole(value)) {
      new Error(`Role ${value} not exist`)
    }

    this._currentRole = value
  }

  public checkRole(roles: string | string[]): boolean {
    const includeRole = role => this._roles.includes(role)
    const isArray = _.isArray(roles)
    
    if (isArray) 
      return (roles as string[]).some(includeRole)
    else
      return includeRole(roles as string)
  }
}