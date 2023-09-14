import React from 'react';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Main from 'components/Main';
import Home from 'pages/Home';
import Booking from 'pages/Booking';
import theme from 'theme';
import { AlertProvider } from 'context/alertContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Main />} errorElement={<Navigate to="/home" />}>
        <Route index={true} element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
