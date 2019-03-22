import Store from 'store';

const ROLES = {
  ROLE_USER: 'ROLE_USER',
  ROLE_SUPPORTER: 'ROLE_SUPPORTER',
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_ACCOUNTING: 'ROLE_ACCOUNTING',
}

export const checkRoles = (roles) => {
  
  if (!roles || roles.length === 0) {
    return true;
  }
  const user = Store.getState().user;
  const userInfo = user && user.info;
  
  if (!userInfo) {
    return false;
  }
  
  if (!userInfo.roles || userInfo.roles.length === 0) {
    return false;
  }
  
  let result = false;
  userInfo.roles.map((userRole) => {
    roles.map((roleToCheck) => {
      if (userRole.toUpperCase() === roleToCheck.toUpperCase() || roleToCheck === ROLES.ROLE_USER) {
        result = true;
      }
    });
  });
  return result;
};

export default ROLES;
