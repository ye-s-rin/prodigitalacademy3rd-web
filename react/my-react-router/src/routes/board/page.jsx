import React, { useState, useEffect } from 'react';
import { fetchBoardList } from '~/lib/apis/board';
import { Link } from 'react-router-dom';
import { ListGroup, Badge, Container } from 'react-bootstrap';

export default function BoardListPage() {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        fetchBoardList().then((res) => setBoardList(res));
    }, []);

    return (
        <Container className="min-vh-100">
            <h1>My Board</h1>
            <ListGroup as='ul'>
                {boardList.map((board) => (
                    <Link to={`/board/${board._id}`} key={board._id} preventScrollReset className='text-decoration-none'>
                        <ListGroup.Item as='li' action className='d-flex justify-content-between align-items-start'>
                            <div className='ms-2 me-auto text-truncate'>
                                <div className='fw-bold'>{board.title}</div>
                                <div>{board.content}</div>
                            </div>
                            <Badge bg='primary' pill>
                            </Badge>
                        </ListGroup.Item>
                    </Link>
                ))}
            </ListGroup>
        </Container>
    );
}

