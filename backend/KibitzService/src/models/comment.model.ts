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
  kibId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'KibModel',
  },
  parentCommentId: {
    type: Schema.Types.ObjectId,
    ref: 'CommentModel',
  },
  text: {
    type: String,
    required: true,
    maxlength: 200,
  },
  media: {
    type: String,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
  }
},{collection: 'comments'});

export const CommentModel = model<CommentType & Document>('CommentModel', commentSchema);