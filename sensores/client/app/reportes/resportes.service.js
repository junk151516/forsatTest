'use strict';
angular.module('sensoresApp.reportes')
.factory('Reporte',function($http, $route, $q){

var servicio = {};



// Servicio para listar reportes
servicio.listar = function (nro_datos) {
	var defered = $q.defer();
	var promise = defered.promise;

https://api.thingspeak.com/update?api_key=FJTOSQEALYACHFTI&field1=0
	$http.get('https://api.thingspeak.com/channels/58242/feeds.json?api_key=FJTOSQEALYACHFTI&results='+nro_datos)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

// Servicio para crear un nuevo reportes
// parametro reporteACrear => objeto estudiante que se va a actualizar
servicio.crear = function (reporteACrear) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.post('/api/reportes', reporteACrear)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

servicio.actualizar = function (estudianteAActualizar) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.put('/api/reportes/'+estudianteAActualizar._id, estudianteAActualizar)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};


servicio.obtenerReportes = function (codigoReportes) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/reportes/codigo/'+ codigoReportes)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

servicio.eliminar = function (idReportes) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.delete('/api/reportes/'+ idReportes)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};



 return servicio;

 });
