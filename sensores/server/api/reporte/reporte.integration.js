'use strict';

var app = require('../..');
import request from 'supertest';

var newReporte;

describe('Reporte API:', function() {

  describe('GET /api/reportes', function() {
    var reportes;

    beforeEach(function(done) {
      request(app)
        .get('/api/reportes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          reportes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      reportes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/reportes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/reportes')
        .send({
          name: 'New Reporte',
          info: 'This is the brand new reporte!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newReporte = res.body;
          done();
        });
    });

    it('should respond with the newly created reporte', function() {
      newReporte.name.should.equal('New Reporte');
      newReporte.info.should.equal('This is the brand new reporte!!!');
    });

  });

  describe('GET /api/reportes/:id', function() {
    var reporte;

    beforeEach(function(done) {
      request(app)
        .get('/api/reportes/' + newReporte._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          reporte = res.body;
          done();
        });
    });

    afterEach(function() {
      reporte = {};
    });

    it('should respond with the requested reporte', function() {
      reporte.name.should.equal('New Reporte');
      reporte.info.should.equal('This is the brand new reporte!!!');
    });

  });

  describe('PUT /api/reportes/:id', function() {
    var updatedReporte;

    beforeEach(function(done) {
      request(app)
        .put('/api/reportes/' + newReporte._id)
        .send({
          name: 'Updated Reporte',
          info: 'This is the updated reporte!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedReporte = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedReporte = {};
    });

    it('should respond with the updated reporte', function() {
      updatedReporte.name.should.equal('Updated Reporte');
      updatedReporte.info.should.equal('This is the updated reporte!!!');
    });

  });

  describe('DELETE /api/reportes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/reportes/' + newReporte._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when reporte does not exist', function(done) {
      request(app)
        .delete('/api/reportes/' + newReporte._id)
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
