import { create } from 'zustand';
import { ResumeInfo } from '../ts/interfaces';

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
