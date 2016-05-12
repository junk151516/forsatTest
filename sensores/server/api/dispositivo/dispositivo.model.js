'use strict';

import mongoose from 'mongoose';

var DispositivoSchema = new mongoose.Schema({
  canal: String,
  nombre: String,
  url: String,
  usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

export default mongoose.model('Dispositivo', DispositivoSchema);
