import React from 'react';
import { Container } from 'react-bootstrap';
import MyFooter from '~/components/MyFooter/MyFooter';
import MyNavbar from '~/components/MyNavbar/MyNavbar';

export default function BoardLayout({ children }) {
    return (
        <>
            <MyNavbar brandTitle='My-React-Board' />
            <Container className='min-vh-100'>{children}</Container>
            <MyFooter brandTitle='My-React-Board' />
        </>
    );
}
