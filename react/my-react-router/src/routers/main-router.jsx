import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '~/routes/page';
import BoardListPage from '~/routes/board/page';
import BoardLayout from '~/routes/board/layout';
import BoardDetailPage from '~/routes/board/detail/page';
import BoardSigninPage from '~/routes/signin/page';
import BoardSignupPage from '~/routes/signup/page';
import Todo from '../features/todo/Todo';

const router = createBrowserRouter([
    {
        path: "",
        element: <BoardLayout />,
        children:
            [{
                path: '/',
                element: <MainPage />,
                index: true, //해당 라우트의 기본(index) 경로
            },
            {
                path: '/board',
                children: [
                    {
                        path: '',
                        index: true,
                        element: <BoardListPage />,
                    },
                    {
                        path: ':boardId',
                        index: true,
                        element: <BoardDetailPage />,
                    },
                ],
            },
            {
                path: '/signin',
                index: true,
                element: <BoardSigninPage />,
            },
            {
                path: '/signup',
                index: true,
                element: <BoardSignupPage />,
            },
            {
                path: '/todo',
                indx: true,
                element: <Todo />
            },
            ]
    }
]);
export default router;
