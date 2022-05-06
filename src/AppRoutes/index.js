import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import HomeHalves from '../containers/HomeHalves';
import HomeStacked from '../containers/HomeStacked';
import ContentTiles from '../containers/ContentTiles';
import Article from '../containers/Article';
import ArticleCharts from '../containers/ArticleCharts';
import VideoPage from '../containers/VideoPage';
import Course from '../containers/Course';
import Lesson from '../containers/Lesson';
import NotFound from '../containers/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home-halves" element={<HomeHalves />} />
      <Route path="/home-stacked" element={<HomeStacked />} />
      <Route path="/content" element={<ContentTiles />} />
      <Route path="/article" exact element={<Article />} />
      <Route path="/article/charts" element={<ArticleCharts />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/course" exact element={<Course />} />
      <Route path="/course/lesson" element={<Lesson />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;