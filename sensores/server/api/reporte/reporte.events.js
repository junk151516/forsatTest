/**
 * Reporte model events
 */

'use strict';

import {EventEmitter} from 'events';
import Reporte from './reporte.model';
var ReporteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ReporteEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Reporte.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ReporteEvents.emit(event + ':' + doc._id, doc);
    ReporteEvents.emit(event, doc);
  }
}

export default ReporteEvents;
