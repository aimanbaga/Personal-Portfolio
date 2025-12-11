const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://aimanbaga.github.io/personal-portfolio/',
  title: 'AB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aiman Baga',
  role: 'Computer Engineer',

  description:
    'A motivated Computer Engineer who thrives on learning, building, and discovering new possibilities.',
  resume: 'https://drive.google.com/file/d/1Udt75QKlQd1Qj9KmYW_qCZgoGpN5ynta/preview',
  social: {
    linkedin: 'https://linkedin.com/aimanbaga',
    github: 'https://github.com/aimanbaga',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Calculator',
    description:
      'A calculator built using CSS, HTML, JavaScript.',
    stack: ['CSS', 'HTML', 'JavaScript'],
    sourceCode: 'https://github.com/aimanbaga/Calculator',
    livePreview: 'https://aimanbaga.github.io/Calculator/',
    image: 'Calculator.png',
  },
  {
    name: 'To Do List',
    description:
      'A responsive To-Do List web app built using HTML, CSS, and JavaScript that lets users easily add or remove tasks to stay organized.',
    stack: ['CSS', 'HTML', 'JavaScript'],
    sourceCode: 'https://github.com/aimanbaga/To-Do-List',
    livePreview: 'https://aimanbaga.github.io/To-Do-List/',
    image: 'To-Do List.png',
  },
  {
    name: 'Number Guessing',
    description:
      'A fun and interactive Number Guessing Game built with HTML, CSS, and JavaScript, where users guess a random number with feedback on their attempts.',
    stack: ['CSS', 'HTML', 'JavaScript'],
    sourceCode: 'https://github.com/aimanbaga/Number-Guessing',
    livePreview: 'https://aimanbaga.github.io/Number-Guessing/',
    image: 'Number Guessing.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'jQuery',
  'Bootstrap',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'baga.aiman21@gmail.com',
}

export { header, about, projects, skills, contact }