'use strict';

(function() {

class ServiciosController {
  constructor(User) {
    // Use the User $resource to fetch all users
    // this.users = User.query();
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}

angular.module('sensoresApp.servicios')
  .controller('ServiciosController', ServiciosController);

})();
