import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import router from './Routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';

import { StyledToastConatiner } from './components/toast/toast';
import styled from 'styled-components';
import { BackGroundImg } from './styles/common';

function App() {
    const RouterObject = createBrowserRouter(router);
    let queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });

    return (
        <Suspense fallback={<Wrapper>Loading...중</Wrapper>}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={RouterObject} />
                <StyledToastConatiner limit={1} />
            </QueryClientProvider>
        </Suspense>
    );
}

export default App;

const Wrapper = styled.h1`
    ${BackGroundImg()}
`;
