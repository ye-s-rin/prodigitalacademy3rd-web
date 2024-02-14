import React from 'react';
import { useParams } from 'react-router-dom';

export default function BoardDetailPage() {
    let { boardId } = useParams();

    return (
        <>
            <h1>BoardDetail</h1>
            <div>This is BoardDetailPage</div>
        </>
    );
}