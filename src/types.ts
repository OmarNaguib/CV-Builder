export type Education = {
  schoolName: string;
  studyType: string;
  finishDate: string;
};

export type Work = {
  company: string;
  position: string;
  startingDate: string;
  finishDate: string;
  jobDescription: string;
};

export type State = {
  name: string;
  email: string;
  phoneNumber: string;
  education: Education[];
  work: Work[];
};
