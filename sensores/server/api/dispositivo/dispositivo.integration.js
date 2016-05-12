'use strict';

var app = require('../..');
import request from 'supertest';

var newDispositivo;

describe('Dispositivo API:', function() {

  describe('GET /api/dispositivos', function() {
    var dispositivos;

    beforeEach(function(done) {
      request(app)
        .get('/api/dispositivos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          dispositivos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      dispositivos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/dispositivos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/dispositivos')
        .send({
          name: 'New Dispositivo',
          info: 'This is the brand new dispositivo!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newDispositivo = res.body;
          done();
        });
    });

    it('should respond with the newly created dispositivo', function() {
      newDispositivo.name.should.equal('New Dispositivo');
      newDispositivo.info.should.equal('This is the brand new dispositivo!!!');
    });

  });

  describe('GET /api/dispositivos/:id', function() {
    var dispositivo;

    beforeEach(function(done) {
      request(app)
        .get('/api/dispositivos/' + newDispositivo._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          dispositivo = res.body;
          done();
        });
    });

    afterEach(function() {
      dispositivo = {};
    });

    it('should respond with the requested dispositivo', function() {
      dispositivo.name.should.equal('New Dispositivo');
      dispositivo.info.should.equal('This is the brand new dispositivo!!!');
    });

  });

  describe('PUT /api/dispositivos/:id', function() {
    var updatedDispositivo;

    beforeEach(function(done) {
      request(app)
        .put('/api/dispositivos/' + newDispositivo._id)
        .send({
          name: 'Updated Dispositivo',
          info: 'This is the updated dispositivo!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedDispositivo = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDispositivo = {};
    });

    it('should respond with the updated dispositivo', function() {
      updatedDispositivo.name.should.equal('Updated Dispositivo');
      updatedDispositivo.info.should.equal('This is the updated dispositivo!!!');
    });

  });

  describe('DELETE /api/dispositivos/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/dispositivos/' + newDispositivo._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when dispositivo does not exist', function(done) {
      request(app)
        .delete('/api/dispositivos/' + newDispositivo._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
