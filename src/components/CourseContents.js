const CourseContents = () => {
  const modules = [
    {'title': 'Module 1: Introduction', 'lessons': '2', 'duration': '10'},
    {'title': 'Module 2: Title of Module', 'lessons': '4', 'duration': '30'},
    {'title': 'Module 3: Title of Module', 'lessons': '6', 'duration': '45'},
    {'title': 'Module 4: Conclusion', 'lessons': '2', 'duration': '12'},
  ];

  const lessons = [
    {'title': 'Lesson 1: Title reflexts what I will learn', 'duration': '2.30'},
    {'title': 'Lesson 2: Title reflexts what I will learn', 'duration': '2.30'},
    {'title': 'Lesson 3: Title reflexts what I will learn', 'duration': '2.30'},
  ]

  return (
    <div className="section">
      <div className="content">
        <h2>Course Modules and Content</h2>
        <ul className="course">
          {modules.map(m => {
            return (
              <li>
                <h3>{m.title} <em>{m.lessons} lessons, {m.duration} minutes</em></h3>
                <ul>
                  {lessons.map(l => {
                    return (
                      <li>{l.title} <em>{l.duration}</em></li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CourseContents;