import mongoose, {Document, Schema, model } from 'mongoose';
import { ShmoozerType } from '../types/shmoozer.type';

const shmoozerSchema: Schema = new Schema({
  shmoozerName: { 
    type: String, 
    required: true,
    unique: true,
    index: true,
  },
  displayName: {
    type: String,
    required: true
  }
},{collection: 'shmoozers'});

export const ShmoozerModel = model<ShmoozerType & Document>('ShmoozerModel', shmoozerSchema);