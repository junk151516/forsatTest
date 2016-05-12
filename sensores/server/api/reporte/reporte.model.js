'use strict';

import mongoose from 'mongoose';

var ReporteSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Reporte', ReporteSchema);
