export class UserService {
  active_users: { name: string}[] = [
    {name: 'Test 1'},
    {name: 'Test 2'}
  ];
  inactive_users: { name: string}[] = [
    {name: 'Test 3'},
    {name: 'Test 4'}
  ];

  setToActive(id: number) {
    this.active_users.push(this.inactive_users[id]);
    this.inactive_users.splice(id, 1);
  }

  setToInactive(id: number) {
    this.inactive_users.push(this.active_users[id]);
    this.active_users.splice(id, 1);
  }
}
