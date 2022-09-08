
const _ = require('lodash');
const { Request, Response } = require('express');


const RolesService = {
  getExtendedRoles(role) {
    let myRoles = [];
    if (Array.isArray(role)) {
      role.forEach((r) => {
        myRoles = myRoles.concat(this.getExtendedRoles(r));
      });
      return _.uniq(myRoles);
    }
    if (
      axel.config.framework.roles[role]
      && axel.config.framework.roles[role].inherits
      && Array.isArray(axel.config.framework.roles[role].inherits)
    ) {
      myRoles = myRoles.concat(axel.config.framework.roles[role].inherits);
      axel.config.framework.roles[role].inherits.forEach((r) => {
        myRoles = myRoles.concat(RolesService.getExtendedRoles(r));
      });
    }
    return _.uniq(myRoles);
  },

  userIs(req, role) {
    return req.user && req.user.roles && req.user.roles.indexOf(role) > -1;
  },

  userHasRole(req, role) {
    const roles = req.user && req.user.roles;
    if (!roles) {
      return false;
    }
    const extendedRoles = this.getExtendedRoles(roles);
    return extendedRoles && extendedRoles.indexOf(role) > -1;
  },

  hasAccess(user, requiredRoles) {
    if (!user) {
      return false;
    }
    if (typeof requiredRoles === 'string') {
      requiredRoles = [requiredRoles];
    }
    let myRoles = (user && user.roles) || user;
    // Check if role exists
    for (let i = 0; i < requiredRoles.length; i++) {
      const role = requiredRoles[i];
      if (!axel.config.framework.roles[role]) {
        console.warn(
          'ACTION REQUIRES AN INEXISTING ROLE',
          role,
          Object.keys(axel.config.framework.roles)
        );
        return false;
      }
    }

    myRoles.forEach((role) => {
      myRoles = myRoles.concat(RolesService.getExtendedRoles(role));
    });
    let canAccess = false;
    for (let i = 0; i < requiredRoles.length; i++) {
      const role = requiredRoles[i];
      if (myRoles.indexOf(role) > -1) {
        canAccess = true;
        break;
      }
    }

    return canAccess;
  },
};

module.exports = RolesService;
