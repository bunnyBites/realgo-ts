import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BigO } from '../../public/course/BigO.component';

export const RoutesProvider: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigate to="/bigO" />} />
      <Route path="/bigO" element={<BigO />} />
    </Routes>
  </Suspense>
)