import { create } from 'zustand';

export interface ResumeInfo {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phone: string;
  email: string;
  summery: string;
  experience: Array<{
    title: string;
    companyName: string;
    city: string;
    state: string;
    startDate: string;
    endDate: string;
    workSummery: string;
  }>;
  skills: Array<{ name: string; rating: number }>;
  education: Array<{ institution: string; degree: string; startDate: string; endDate: string }>;
}

interface ResumeState {
  resumeInfo: ResumeInfo;
  updateResumeInfo: (info: ResumeInfo) => void;
}

const useResumeStore = create<ResumeState>((set) => ({
  resumeInfo: {
    firstName: '',
    lastName: '',
    jobTitle: '',
    address: '',
    phone: '',
    email: '',
    summery: '',
    experience: [],
    skills: [],
    education: []
  },
  updateResumeInfo: (info) => set({ resumeInfo: info })
}));

export default useResumeStore;

const DUMMY_RESUME_INFO: ResumeInfo = {
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
