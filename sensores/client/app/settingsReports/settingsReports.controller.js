'use strict';

(function() {

class SettingsReportsController {
  constructor(dispositivo, User, Auth) {
    // Use the User $resource to fetch all users
    this.usuario = Auth.getCurrentUser();
    this.users = User.query();
    this.dispositivoService = dispositivo;
    this.misDispositivos =  this.listarDispositivos();

  }

  listarDispositivos(){
    var response = []
    this.dispositivoService.listar()
    .then(function (data) {
        response = data;
    })
    .catch(function (err) {
      alert("error listando los dispositivos"+err);
      response = null;
    });
    // var nombre =this.getCurrentUser().name;
    return response;
  }

  registrarDispositivo(){
    this.nuevoDispositivo.usuario = this.usuario._id;
    alert(JSON.stringify(this.nuevoDispositivo));
    // this.dispositivoService.registrarDispositivo()
    // .then(function (data) {
    //     response = data;
    // })
    // .catch(function (err) {
    //   alert("error listando los dispositivos"+err);
    //   response = null;
    // });
  }

}

angular.module('sensoresApp')
  .controller('SettingsReportsController', SettingsReportsController);

})();
