import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Role from 'App/Models/Role'


export default class RoleSeeder extends BaseSeeder {
  public async run () {
    await Role.createMany([
      {
        role: 'admin',
        prioridade: 0
      },
      {
        role: 'employee',
        prioridade: 1
      },
      {
        role: 'user',
        prioridade: 2
      }
    ])
  }
}
