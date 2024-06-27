interface Experience {
  title: string;
  companyName: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  workSummery: string;
}
interface Skill {
  name: string;
  rating: number;
}
interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}
export interface ResumeInfo {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phone: string;
  email: string;
  summery: string;
  experience: Experience[];
  skills: Skill[];
  education: Education[];
}
