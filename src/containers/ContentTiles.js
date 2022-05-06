import { Helmet } from 'react-helmet';
import Tiles from '../components/Tiles';

const ContentTiles = () => {

  const events = [
    {
      'title': 'Title of the event',
      'dateTime': 'Event Date and Time',
      'speaker': 'Brendan Meachen',
      'speakerJob': 'Web Designer',
      'description': 'Brief description of the event, and why it may be useful for me to attend',
    },
    {
      'title': 'Title of the event',
      'dateTime': 'Event Date and Time',
      'speaker': 'Brendan Meachen',
      'speakerJob': 'Web Designer',
      'description': 'Brief description of the event, and why it may be useful for me to attend',
    },
    {
      'title': 'Title of the event',
      'dateTime': 'Event Date and Time',
      'speaker': 'Brendan Meachen',
      'speakerJob': 'Web Designer',
      'description': 'Brief description of the event, and why it may be useful for me to attend',
    },
  ];

  const videos = [
    {
      'title': 'Title of the video',
      'duration': 'Video duration in minutes',
      'description': 'Brief description of the video and why I should invest the time to watch it.',
    },
    {
      'title': 'Title of the video',
      'duration': '4 minutes 32 seconds',
      'description': 'Brief description of the video and why I should invest the time to watch it.',
    },
    {
      'title': 'Title of the video',
      'duration': '4 minutes 32 seconds',
      'description': 'Brief description of the video and why I should invest the time to watch it.',
    },
  ];

  const articles = [
    {
      'title': 'Title of this article, describing what it’s about',
      'duration': 'Possible reading time',
      'author': 'Brendan Meachen',
      'description': 'Brief description of the article and how it may be useful to me.',
    },
    {
      'title': 'Title of this article, describing what it’s about',
      'duration': 'Possible reading time',
      'author': 'Brendan Meachen',
      'description': 'Brief description of the article and how it may be useful to me.',
    },
    {
      'title': 'Title of this article, describing what it’s about',
      'duration': 'Possible reading time',
      'author': 'Brendan Meachen',
      'description': 'Brief description of the article and how it may be useful to me.',
    },
  ];

  const courses = [
    {
      'title': 'Title of this article, describing what it’s about',
      'duration': 'Possible course duration',
      'rating': [1,1,1,1,0],
      'description': 'Brief description of the article and how it may be useful to me.',
    },
    {
      'title': 'Title of this article, describing what it’s about',
      'duration': 'Possible course duration',
      'rating': [1,1,1,0,0],
      'description': 'Brief description of the article and how it may be useful to me.',
    },
    {
      'title': 'Title of this article, describing what it’s about',
      'duration': 'Possible course duration',
      'rating': [1,1,1,1,1],
      'description': 'Brief description of the article and how it may be useful to me.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Filterable Content</title>
      </Helmet>
      <Tiles content={events} paginated />
      <Tiles content={videos} filtered />
      <Tiles content={articles} filtered />
      <Tiles content={courses} filtered />
    </>
  )
}

export default ContentTiles;