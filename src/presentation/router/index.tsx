import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

type RouterProps = {
  makeLogin: React.FC
}

export const Router: React.FC<RouterProps> = ({ makeLogin: Login }: RouterProps) => {
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
