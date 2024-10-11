
export type User = {
    id: string;
    organization: string;
    userName: string;
    email: string;
    phoneNumber: string;
    date: string;
    status: string;
    personalInformation: PersonalInformation;
    educationEmployment: EducationEmployment;
    bankDetails: BankDetails;
    socials: Socials;
    guarantor: Guarantor;
  };
  
  export type BankDetails = {
    bankName: string;
    accountBalance: string;
    accountNumber: number;
  };
  
  export type EducationEmployment = {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncomeRange: string;
    loanRepayment: string;
  };
  
  export type Guarantor = {
    fullName: string;
    relationship: string;
    phoneNumber: string;
    email: string;
  };
  
  export type PersonalInformation = {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    bvn: number;
    gender: string;
    maritalStatus: string;
    children: number;
    typeOfResidence: string;
  };
  
  export type Socials = {
    facebook: string;
    twitter: string;
    linkedin: string;
  };