export type CommentType = { 
    _id: string;
    commentName: string;
    shmoozerId: string; 
    kibId: string;
    parentCommentId?: string;
    text: string;
    media?: string;
    createdAt?: Date;
}