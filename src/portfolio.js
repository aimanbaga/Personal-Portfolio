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
  resume: 'https://example.com',
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
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
