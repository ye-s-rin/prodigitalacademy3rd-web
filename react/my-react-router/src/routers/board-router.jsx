import BoardListPage from '~/routes/board/page';
import BoardLayout from '~/routes/board/layout';
import BoardWritePage from '~/routes/board/write/page';

const router = boardRouter([
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


