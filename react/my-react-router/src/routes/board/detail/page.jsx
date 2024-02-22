import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { fetchBoard, fetchCommentList } from '~/store/reducers/board';
import CommentComponent from './comment';
import { useDispatch, useSelector } from 'react-redux';

export default function BoardDetailPage() {
    let { boardId } = useParams();
    const dispatch = useDispatch();
    const boardDetail = useSelector(state => state.board.boardDetail);
    const comments = useSelector(state => state.board.comments);

    useEffect(() => {
        const boardAction = fetchBoard(boardId);
        dispatch(boardAction);

        const commentAction = fetchCommentList(boardId);
        dispatch(commentAction);
    }, []);

    const onAddComment = () => { };

    return (
        <Container className="min-vh-100">
            <h1>{boardDetail?.title}</h1>
            <div style={{ display: "flex", color: "gray", fontSize: "smaller" }}>
                <p>{boardDetail?.author?.nickname}</p>
                &#8195;
                <p>{boardDetail?.createdAt}</p>
            </div>
            <p>{boardDetail?.content}</p>

            <CommentComponent comments={comments} onAddComment={onAddComment} />
        </Container>
    );
}