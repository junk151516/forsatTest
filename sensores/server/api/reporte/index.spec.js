'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var reporteCtrlStub = {
  index: 'reporteCtrl.index',
  show: 'reporteCtrl.show',
  create: 'reporteCtrl.create',
  update: 'reporteCtrl.update',
  destroy: 'reporteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var reporteIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './reporte.controller': reporteCtrlStub
});

describe('Reporte API Router:', function() {

  it('should return an express router instance', function() {
    reporteIndex.should.equal(routerStub);
  });

  describe('GET /api/reportes', function() {

    it('should route to reporte.controller.index', function() {
      routerStub.get
        .withArgs('/', 'reporteCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/reportes/:id', function() {

    it('should route to reporte.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'reporteCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/reportes', function() {

    it('should route to reporte.controller.create', function() {
      routerStub.post
        .withArgs('/', 'reporteCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/reportes/:id', function() {

    it('should route to reporte.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'reporteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/reportes/:id', function() {

    it('should route to reporte.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'reporteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/reportes/:id', function() {

    it('should route to reporte.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'reporteCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
