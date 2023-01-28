import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BigO } from 'src/public/course/bigO/BigO.component';
import { Recursion } from 'src/public/course/recursion/Recursion.component';

export const RoutesProvider: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigate to="/bigO" />} />
      <Route path="/bigO" element={<BigO />} />

      {/* Illustration of fibonocci using recursive method */}
      <Route path="/recursion" element={<Recursion />} />
    </Routes>
  </Suspense>
)