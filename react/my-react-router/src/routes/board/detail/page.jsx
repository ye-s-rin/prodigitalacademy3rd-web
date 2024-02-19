import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { fetchBoard } from '~/lib/apis/board';
import { fetchCommentList } from '~/lib/apis/comment';
import CommentComponent from './comment';

export default function BoardDetailPage() {
    let { boardId } = useParams();
    const [board, setBoard] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchBoard(boardId)
            .then((res) => {
                setBoard(res);
            });
        fetchCommentList(boardId)
            .then((res) => {
                console.log(res);
                setComments(res);
            })
    }, []);

    const onAddComment = () => { };

    return (
        <Container className="min-vh-100">
            <h1>{board?.title}</h1>
            <div style={{ display: "flex", color: "gray", fontSize: "smaller" }}>
                <p>{board?.author?.nickname}</p>
                &#8195;
                <p>{board?.createdAt}</p>
            </div>
            <p>{board?.content}</p>

            <CommentComponent comments={comments} onAddComment={onAddComment} />
        </Container>
    );
}