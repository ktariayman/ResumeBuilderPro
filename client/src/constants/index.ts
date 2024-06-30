import { IResumeInfo } from '../ts/interfaces';
import { PostType, UserType } from '../ts/types';

export const DUMMY_RESUME_INFO: IResumeInfo = {
  firstName: 'John',
  lastName: 'Doe',
  jobTitle: 'Software Developer',
  address: '123 Main St, Anytown, USA',
  phone: '555-1234',
  email: 'john.doe@example.com',
  summery:
    'Experienced Software Developer with expertise in React, Node.js, and developing scalable applications. Proven track record of leading successful projects and mentoring team members.',
  experience: [
    {
      title: 'Senior Software Developer',
      companyName: 'Tech Solutions Inc.',
      city: 'New York',
      state: 'NY',
      startDate: '2020-01-01',
      endDate: 'Present',
      workSummery:
        'Lead the development of several high-profile projects, improved system performance by 40%, and mentored junior developers.'
    },
    {
      title: 'Software Developer',
      companyName: 'Innovative Tech Co.',
      city: 'Boston',
      state: 'MA',
      startDate: '2017-05-01',
      endDate: '2019-12-31',
      workSummery:
        'Developed and maintained features for high-traffic applications, specializing in backend development and database optimization.'
    }
  ],
  skills: [
    { name: 'React', rating: 5 },
    { name: 'Node.js', rating: 4 },
    { name: 'Database Management', rating: 4 }
  ],
  education: [
    {
      institution: 'State University',
      degree: 'Bachelor of Science in Computer Science',
      startDate: '2013-08-01',
      endDate: '2017-05-01'
    }
  ]
};

// dummyData.ts

const dummyUsers: UserType[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
  // Add more users as needed
];

export const dummyPosts: PostType[] = [
  {
    id: 1,
    title: 'Software Engineer Resume',
    description: 'Experienced software engineer proficient in React and Node.js.',
    resumeLink:
      'https://pdfbib.com/exemple/exemple-0745-180-trucs-et-astuces-windows-10.pdf#toolbar=0&view=FitH',
    likes: 15,
    userId: 1,
    userName: 'John Doe',
    comments: [
      { id: 1, text: 'Great resume!', userId: 2, userName: 'Jane Smith' },
      { id: 2, text: 'Could use more projects.', userId: 1, userName: 'John Doe' }
    ]
  },
  {
    id: 2,
    title: 'Data Scientist Resume',
    description: 'Data scientist with expertise in machine learning and data analysis.',
    resumeLink:
      'https://pdfbib.com/exemple/exemple-0745-180-trucs-et-astuces-windows-10.pdf#toolbar=0&view=FitH',
    likes: 10,
    userId: 2,
    userName: 'Jane Smith',
    comments: [
      { id: 1, text: 'Impressive skills!', userId: 1, userName: 'John Doe' },
      { id: 2, text: 'Needs more experience in deep learning.', userId: 2, userName: 'Jane Smith' }
    ]
  }
];
