import { create } from 'zustand';
import { IResumeInfo } from '../ts/interfaces';
export const RESUME_INFO_DEFAULT: IResumeInfo = {
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
};

interface ResumeState {
  resumeInfo: IResumeInfo;
  updateResumeInfo: (info: IResumeInfo) => void;
}

const useResumeStore = create<ResumeState>((set) => ({
  resumeInfo: RESUME_INFO_DEFAULT,
  updateResumeInfo: (info) => set({ resumeInfo: info })
}));

export default useResumeStore;
