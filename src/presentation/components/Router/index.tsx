import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import '@/presentation/styles/global'

const Router: React.FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
        </BrowserRouter>
  )
}

export default Router
