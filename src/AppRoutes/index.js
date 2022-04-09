import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Article from '../containers/Article';
import VideoPage from '../containers/VideoPage';
import Course from '../containers/Course';
import Lesson from '../containers/Lesson';
import NotFound from '../containers/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/course" exact element={<Course />} />
      <Route path="/course/lesson" element={<Lesson />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;