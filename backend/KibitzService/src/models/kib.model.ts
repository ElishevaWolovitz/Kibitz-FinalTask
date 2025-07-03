import {Document, Schema, model} from 'mongoose';
import { KibType } from '../types/kib.type';

const kibSchema: Schema = new Schema({
  kibName: { 
    type: String, 
    required: true,
    index: true,
  },
  shmoozerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'ShmoozerModel',
  },
  text: {
    type: String,
    required: true,
    maxlength: 200,
  },
  media: {
    type: String,
  },
  likes: {
    type: Number, 
    min: 0,
    default: 0,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
  }
},{collection: 'kibs'});

export const KibModel = model<KibType & Document>('KibModel', kibSchema);