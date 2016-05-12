'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var dispositivoCtrlStub = {
  index: 'dispositivoCtrl.index',
  show: 'dispositivoCtrl.show',
  create: 'dispositivoCtrl.create',
  update: 'dispositivoCtrl.update',
  destroy: 'dispositivoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var dispositivoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './dispositivo.controller': dispositivoCtrlStub
});

describe('Dispositivo API Router:', function() {

  it('should return an express router instance', function() {
    dispositivoIndex.should.equal(routerStub);
  });

  describe('GET /api/dispositivos', function() {

    it('should route to dispositivo.controller.index', function() {
      routerStub.get
        .withArgs('/', 'dispositivoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/dispositivos/:id', function() {

    it('should route to dispositivo.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'dispositivoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/dispositivos', function() {

    it('should route to dispositivo.controller.create', function() {
      routerStub.post
        .withArgs('/', 'dispositivoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/dispositivos/:id', function() {

    it('should route to dispositivo.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'dispositivoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/dispositivos/:id', function() {

    it('should route to dispositivo.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'dispositivoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/dispositivos/:id', function() {

    it('should route to dispositivo.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'dispositivoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
