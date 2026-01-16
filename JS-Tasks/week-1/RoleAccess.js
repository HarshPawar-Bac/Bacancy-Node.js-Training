const ADMIN = 'ADMIN';
const USER = 'USER';
const MANAGER = 'MANAGER';

function GrantAccess(role) {

  if(typeof role !== 'string')
    return 'invalid role'

  switch (role) {
    case ADMIN:
      console.log(`${ADMIN} -> Full Access`);
      break;
    case USER:
      console.log(`${USER} -> Limited Access`);
      break;
    case MANAGER:
      console.log(`${MANAGER} -> Moderate Access`);
      break;
    default:
      console.log("Invalid Role");
      break;
  }
}

GrantAccess(ADMIN);
GrantAccess(USER);
GrantAccess(MANAGER);
GrantAccess('client');







