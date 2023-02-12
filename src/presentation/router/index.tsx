import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@/presentation/pages'

export const Router: React.FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/signup"
                    element={<p>signup</p>}
                />
            </Routes>
        </BrowserRouter>
  )
}
