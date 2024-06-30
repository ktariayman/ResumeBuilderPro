export interface IExperience {
  title: string;
  companyName: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  workSummery: string;
}
export interface ISkill {
  name: string;
  rating: number;
}
export interface IEducation {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface IPersonalDetails {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phone: string;
  email: string;
  summery: string;
}
export interface IResumeInfo extends IPersonalDetails {
  experience: IExperience[];
  skills: ISkill[];
  education: IEducation[];
}
