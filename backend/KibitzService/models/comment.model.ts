import {Document, Schema, model} from 'mongoose';
import { CommentType } from '../types/comment.type';

const commentSchema: Schema = new Schema({
  commentName: { 
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
  createdAt: {
    type: Date, 
    default: Date.now,
  }
},{collection: 'comments'});

export const CommentModel = model<CommentType & Document>('CommentModel', commentSchema);