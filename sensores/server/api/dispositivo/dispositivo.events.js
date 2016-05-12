/**
 * Dispositivo model events
 */

'use strict';

import {EventEmitter} from 'events';
import Dispositivo from './dispositivo.model';
var DispositivoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DispositivoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Dispositivo.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DispositivoEvents.emit(event + ':' + doc._id, doc);
    DispositivoEvents.emit(event, doc);
  }
}

export default DispositivoEvents;
