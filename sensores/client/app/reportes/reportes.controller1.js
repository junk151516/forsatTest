// 'use strict';
//
// angular.module('sensoresApp.reportes')
// .controller('ReportesController', function ( Reporte) {
//   // body...
//   var rc = this;
//
//
//
//
//   function drawChart() {
//
//     for (let i = 0; i < rc.contenedores.length; i++) {
//       var idCampo = rc.contenedores[i].id_campo;
//       var label = rc['reportes']['channel'][idCampo];
//       console.log(label);
//       // console.log(rc.contenedores[i].id_campo);
//     // }
//       // body...
//     var chartDiv = document.getElementById(idCampo);
//     var data = new google.visualization.DataTable();
//     data.addColumn('date', 'Fecha');
//     data.addColumn('number', "");
//
//     data.addRows(rc['campos'][idCampo]);
//
//     var materialOptions = {
//       chart: {
//         title: idCampo
//       },
//       width: 600,
//       height: 250,
//       series: {
//         // Gives each series an axis name that matches the Y-axis below.
//         0: {axis: 'Temps'},
//         1: {axis: 'Daylight'}
//       },
//       axes: {
//         // Adds labels to each axis; they don't have to match the axis names.
//         y: {
//           Temps: {label: label},
//           Daylight: {label: 'Daylight'}
//         }
//       }
//     };
//
//     var materialChart = new google.charts.Line(chartDiv);
//     materialChart.draw(data, materialOptions);
//
//   }//fin for
//   }
//
//
//
//
//
//
//
//
//   rc.listarReportes = function (nro_datos) {
//     Reporte.listar(nro_datos)
//     .then(function(data){
//       rc.reportes = data
//       rc.registros = [];
//       rc.campos = {};
//
//       // Inicializando los campos que se van a usar
//       rc.contenedores = [];
//       for(var propiedad in rc.reportes.feeds[0]) {
//         if (propiedad != 'created_at' & propiedad != 'entry_id') {
//           rc['campos'][propiedad] = [];
//           rc.contenedores.push({id_campo:propiedad});
//         }
//       }
//
//       for(var i=0; i<rc.reportes.feeds.length; i++){
//         var feed = rc.reportes.feeds[i];
//         for(var propiedad in feed) {
//           if (propiedad != 'created_at' & propiedad != 'entry_id') {
//             var fecha = new Date(feed.created_at);
//             var valor = parseInt(feed[propiedad]);
//             var registro = [fecha, valor];
//             rc['campos'][propiedad].push(registro);
//           }
//
//         }
//       }
//
//       google.charts.load('current', {'packages':['line', 'corechart']});
//       google.charts.setOnLoadCallback(drawChart);
//
//     })
//     .catch(function(err){
//       console.log(err);
//     });
//   }
//
//   rc.listarReportes(300);
//
//
//
//
//
//
// });
