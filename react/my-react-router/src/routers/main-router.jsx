import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '~/routes/page';
import BoardListPage from '~/routes/board/page';
import BoardLayout from '~/routes/board/layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        index: true,
    },
    {
        path: '/board',
        element: <BoardLayout />,
        children: [
            {
                path: '',
                index: true,
                element: <BoardListPage />,
            },
        ],
    },
]);
export default router;


