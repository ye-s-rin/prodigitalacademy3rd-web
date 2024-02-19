import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CommentComponent = ({ comments, onAddComment }) => {

    const [newReply, setNewReply] = useState('');
    const [replyingCommentId, setReplyingCommentId] = useState(null);

    const handleReply = (commentId) => {
        setReplyingCommentId(commentId);
    };

    const handleChange = (e) => {
        setNewReply(e.target.value);
    };

    const handleSubmitReply = (e, parentId) => {
        e.preventDefault();
        if (newReply.trim() !== '') {
            onAddComment(newReply, parentId);
            setNewReply('');
            setReplyingCommentId(null);
        }
    };

    const Comment = ({ comment }) => {
        return (
            <>
                <div className="comment" style={{ display: "flex", color: "gray", fontSize: "smaller" }}>
                    <p>{comment.author.nickname}</p>
                    &#8195;
                    <p>{comment.createdAt}</p>
                </div>
                <div><p>{comment.content}</p><hr /></div>
                <Button variant="outline-dark" onClick={() => handleReply(comment._id)}>답글 달기</Button>
                {replyingCommentId === comment._id && (
                    <Form onSubmit={(e) => handleSubmitReply(e, comment._id)}>
                        <Form.Group controlId="replyTextarea">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={newReply}
                                onChange={handleChange}
                                placeholder="대댓글을 입력하세요"
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            대댓글 추가
                        </Button>
                    </Form>
                )}
                {comment.comments.map((subComment, index) => (
                    <div key={index} style={{ marginLeft: "20px" }}>
                        <p>{subComment.author.nickname}</p>
                        <p>{subComment.content}</p>
                        <hr />
                    </div>
                ))}
            </>
        );
    };

    const CommentList = ({ comments }) => {
        return (
            <div className="comment-list">
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        );
    };

    const CommentForm = ({ onAddComment }) => {
        const [newComment, setNewComment] = useState('');

        const handleChange = (e) => {
            setNewComment(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (newComment.trim() !== '') {
                onAddComment(newComment);
                setNewComment('');
            }
        };

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="commentTextarea">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={newComment}
                        onChange={handleChange}
                        placeholder="댓글을 입력하세요"
                    />
                </Form.Group>
                <Button variant="dark" type="submit">
                    댓글 추가
                </Button>
            </Form>
        );
    };

    return (
        <div className="comment-component">
            <hr style={{ background: "black", height: "2px", border: 0 }} />
            <CommentList comments={comments} />
            <CommentForm onAddComment={onAddComment} />
        </div>
    );
};

export default CommentComponent;
