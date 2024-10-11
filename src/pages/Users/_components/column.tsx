import { ColumnDef } from "@tanstack/react-table";
import { parseISO, format } from "date-fns";
import ColumnDropdownMenu from "./ColumnDropdownMenu";
import styles from "./column.module.scss";


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

enum Status {
  INACTIVE = "Inactive",
  PENDING = "Pending",
  BLACKLISTED = "Blacklisted",
  ACTIVE = "Active",
}

export const userData = [
  {
    "id": "6708e8832a8f2129866e0d3e",
    "organization": "Kegular",
    "userName": "ChristianSims",
    "email": "christiansims@kegular.com",
    "phoneNumber": "+234 (970) 538-2384",
    "date": "2022-04-13T01:46:49-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Cherry Kane",
      "phoneNumber": "+234 (902) 543-3600",
      "emailAddress": "cherrykane@kegular.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "cherrykane@kegular.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Eternis Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GoodwinHughes",
      "twitter": "https://twitter.com/VangOneill",
      "linkedin": "https://linkedin.com/in/CombsLove"
    },
    "guarantor": {
      "fullName": "Cash Kennedy",
      "relationship": "Friend",
      "phoneNumber": "+234 (955) 422-2916",
      "email": "cashkennedy@eternis.com"
    }
  },
  {
    "id": "6708e883b0dc0219119af347",
    "organization": "Crustatia",
    "userName": "LeonaCantrell",
    "email": "leonacantrell@crustatia.com",
    "phoneNumber": "+234 (875) 566-3826",
    "date": "2020-05-14T06:50:14-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Harper Bryant",
      "phoneNumber": "+234 (903) 418-3609",
      "emailAddress": "harperbryant@crustatia.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "harperbryant@crustatia.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Magnina Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AbbyGilbert",
      "twitter": "https://twitter.com/FranklinWolfe",
      "linkedin": "https://linkedin.com/in/SpenceWagner"
    },
    "guarantor": {
      "fullName": "Dunlap Parrish",
      "relationship": "Friend",
      "phoneNumber": "+234 (971) 487-2830",
      "email": "dunlapparrish@magnina.com"
    }
  },
  {
    "id": "6708e8831de6d61aada8eade",
    "organization": "Valreda",
    "userName": "CynthiaHoover",
    "email": "cynthiahoover@valreda.com",
    "phoneNumber": "+234 (976) 435-3353",
    "date": "2024-03-27T09:26:58-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Annabelle Bush",
      "phoneNumber": "+234 (984) 437-2691",
      "emailAddress": "annabellebush@valreda.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "annabellebush@valreda.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Danja Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LydiaBird",
      "twitter": "https://twitter.com/FoxPace",
      "linkedin": "https://linkedin.com/in/LadonnaBruce"
    },
    "guarantor": {
      "fullName": "Mccall Rowe",
      "relationship": "Friend",
      "phoneNumber": "+234 (868) 477-2214",
      "email": "mccallrowe@danja.com"
    }
  },
  {
    "id": "6708e883f2c4c3d37ee31273",
    "organization": "Futuris",
    "userName": "NorrisStafford",
    "email": "norrisstafford@futuris.com",
    "phoneNumber": "+234 (940) 522-3731",
    "date": "2020-01-15T02:52:54-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Moon Juarez",
      "phoneNumber": "+234 (941) 571-3238",
      "emailAddress": "moonjuarez@futuris.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "moonjuarez@futuris.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zenthall Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EvansCobb",
      "twitter": "https://twitter.com/MayCarney",
      "linkedin": "https://linkedin.com/in/TishaCastro"
    },
    "guarantor": {
      "fullName": "June Morgan",
      "relationship": "Colleague",
      "phoneNumber": "+234 (832) 542-2411",
      "email": "junemorgan@zenthall.com"
    }
  },
  {
    "id": "6708e88361f1c4a8cee8d01b",
    "organization": "Ecrater",
    "userName": "PatelWatson",
    "email": "patelwatson@ecrater.com",
    "phoneNumber": "+234 (828) 441-2849",
    "date": "2020-06-04T10:03:35-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Adrienne Dawson",
      "phoneNumber": "+234 (982) 478-3645",
      "emailAddress": "adriennedawson@ecrater.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "adriennedawson@ecrater.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Recognia Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JohnnieCollins",
      "twitter": "https://twitter.com/IsabelWooten",
      "linkedin": "https://linkedin.com/in/LorettaGriffith"
    },
    "guarantor": {
      "fullName": "Maricela Schmidt",
      "relationship": "Colleague",
      "phoneNumber": "+234 (966) 581-3706",
      "email": "maricelaschmidt@recognia.com"
    }
  },
  {
    "id": "6708e883cfb6260b09c383ff",
    "organization": "Zolar",
    "userName": "FannieLee",
    "email": "fannielee@zolar.com",
    "phoneNumber": "+234 (935) 436-2695",
    "date": "2021-08-03T05:17:27-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Violet Lindsay",
      "phoneNumber": "+234 (975) 418-3729",
      "emailAddress": "violetlindsay@zolar.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "violetlindsay@zolar.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Gronk Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MaiBooker",
      "twitter": "https://twitter.com/HolmesBlair",
      "linkedin": "https://linkedin.com/in/JillianBright"
    },
    "guarantor": {
      "fullName": "Lucy Mathews",
      "relationship": "Family",
      "phoneNumber": "+234 (964) 587-3303",
      "email": "lucymathews@gronk.com"
    }
  },
  {
    "id": "6708e88355d72b9eb892b3ad",
    "organization": "Netagy",
    "userName": "LeticiaBerger",
    "email": "leticiaberger@netagy.com",
    "phoneNumber": "+234 (851) 584-2353",
    "date": "2020-07-21T11:27:06-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Horn Jenkins",
      "phoneNumber": "+234 (860) 501-2897",
      "emailAddress": "hornjenkins@netagy.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "hornjenkins@netagy.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Acruex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RamirezBuchanan",
      "twitter": "https://twitter.com/HamptonCarver",
      "linkedin": "https://linkedin.com/in/JoyceAlvarez"
    },
    "guarantor": {
      "fullName": "Welch Christian",
      "relationship": "Friend",
      "phoneNumber": "+234 (970) 486-2915",
      "email": "welchchristian@acruex.com"
    }
  },
  {
    "id": "6708e8836c5e0bd00f5dd23a",
    "organization": "Besto",
    "userName": "PaceMccormick",
    "email": "pacemccormick@besto.com",
    "phoneNumber": "+234 (837) 465-3639",
    "date": "2023-09-11T01:01:52-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Anderson Dennis",
      "phoneNumber": "+234 (971) 425-3365",
      "emailAddress": "andersondennis@besto.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "andersondennis@besto.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Fortean Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LesterBowers",
      "twitter": "https://twitter.com/CaseFrye",
      "linkedin": "https://linkedin.com/in/NitaMendez"
    },
    "guarantor": {
      "fullName": "Langley Holman",
      "relationship": "Friend",
      "phoneNumber": "+234 (915) 508-3014",
      "email": "langleyholman@fortean.com"
    }
  },
  {
    "id": "6708e8833dfea64d58216010",
    "organization": "Equitox",
    "userName": "KellerBattle",
    "email": "kellerbattle@equitox.com",
    "phoneNumber": "+234 (934) 551-3345",
    "date": "2022-08-17T05:41:00-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Jimmie Meadows",
      "phoneNumber": "+234 (914) 542-3129",
      "emailAddress": "jimmiemeadows@equitox.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "jimmiemeadows@equitox.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Temorak Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CassandraSampson",
      "twitter": "https://twitter.com/DeannaEdwards",
      "linkedin": "https://linkedin.com/in/GayCombs"
    },
    "guarantor": {
      "fullName": "Banks Elliott",
      "relationship": "Colleague",
      "phoneNumber": "+234 (966) 533-2205",
      "email": "bankselliott@temorak.com"
    }
  },
  {
    "id": "6708e8830ae3016808530fe5",
    "organization": "Quilk",
    "userName": "TonyaMiddleton",
    "email": "tonyamiddleton@quilk.com",
    "phoneNumber": "+234 (950) 529-3188",
    "date": "2023-01-10T12:05:03-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Leonor Freeman",
      "phoneNumber": "+234 (948) 598-2817",
      "emailAddress": "leonorfreeman@quilk.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "leonorfreeman@quilk.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Avenetro Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/EllisonCraft",
      "twitter": "https://twitter.com/LeonardJones",
      "linkedin": "https://linkedin.com/in/BenjaminYoung"
    },
    "guarantor": {
      "fullName": "Eliza Avery",
      "relationship": "Other",
      "phoneNumber": "+234 (909) 536-3155",
      "email": "elizaavery@avenetro.com"
    }
  },
  {
    "id": "6708e883d7393b0589441876",
    "organization": "Repetwire",
    "userName": "OdessaBarrett",
    "email": "odessabarrett@repetwire.com",
    "phoneNumber": "+234 (806) 401-3486",
    "date": "2024-08-16T04:34:01-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Wilkins Keller",
      "phoneNumber": "+234 (811) 594-2477",
      "emailAddress": "wilkinskeller@repetwire.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "wilkinskeller@repetwire.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Applica Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KathieBurris",
      "twitter": "https://twitter.com/JocelynHenson",
      "linkedin": "https://linkedin.com/in/GambleCooper"
    },
    "guarantor": {
      "fullName": "Humphrey Floyd",
      "relationship": "Friend",
      "phoneNumber": "+234 (846) 586-3804",
      "email": "humphreyfloyd@applica.com"
    }
  },
  {
    "id": "6708e883583b2f618e9240aa",
    "organization": "Bullzone",
    "userName": "FlowersRobbins",
    "email": "flowersrobbins@bullzone.com",
    "phoneNumber": "+234 (828) 477-3272",
    "date": "2024-03-15T03:47:25-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Juana Richards",
      "phoneNumber": "+234 (960) 458-2957",
      "emailAddress": "juanarichards@bullzone.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "juanarichards@bullzone.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Keengen Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DeannJacobson",
      "twitter": "https://twitter.com/HarrisonCooke",
      "linkedin": "https://linkedin.com/in/KnoxTrujillo"
    },
    "guarantor": {
      "fullName": "Greta Foreman",
      "relationship": "Family",
      "phoneNumber": "+234 (884) 466-3316",
      "email": "gretaforeman@keengen.com"
    }
  },
  {
    "id": "6708e88338c1c10b70230587",
    "organization": "Irack",
    "userName": "RiggsRich",
    "email": "riggsrich@irack.com",
    "phoneNumber": "+234 (859) 492-2378",
    "date": "2022-11-07T02:30:31-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Bernadine Woodward",
      "phoneNumber": "+234 (816) 470-3516",
      "emailAddress": "bernadinewoodward@irack.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "bernadinewoodward@irack.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Mitroc Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CaseyLloyd",
      "twitter": "https://twitter.com/WebbCallahan",
      "linkedin": "https://linkedin.com/in/MarshMullins"
    },
    "guarantor": {
      "fullName": "Vega Buck",
      "relationship": "Colleague",
      "phoneNumber": "+234 (890) 582-3198",
      "email": "vegabuck@mitroc.com"
    }
  },
  {
    "id": "6708e883aa89e0cce0286d52",
    "organization": "Exosis",
    "userName": "MackGoodwin",
    "email": "mackgoodwin@exosis.com",
    "phoneNumber": "+234 (841) 423-3458",
    "date": "2022-11-09T04:53:11-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Renee Garrison",
      "phoneNumber": "+234 (979) 551-2532",
      "emailAddress": "reneegarrison@exosis.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "reneegarrison@exosis.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Geekwagon Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HelgaWhitaker",
      "twitter": "https://twitter.com/StephensonMckay",
      "linkedin": "https://linkedin.com/in/JosefinaMcknight"
    },
    "guarantor": {
      "fullName": "Lorraine Wallace",
      "relationship": "Friend",
      "phoneNumber": "+234 (821) 408-2572",
      "email": "lorrainewallace@geekwagon.com"
    }
  },
  {
    "id": "6708e8830e5ffe5cc8a3a08d",
    "organization": "Bicol",
    "userName": "OpheliaCleveland",
    "email": "opheliacleveland@bicol.com",
    "phoneNumber": "+234 (905) 453-2634",
    "date": "2023-03-19T06:58:40-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Neva Murray",
      "phoneNumber": "+234 (859) 427-3264",
      "emailAddress": "nevamurray@bicol.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "nevamurray@bicol.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Enersave Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CandiceCampos",
      "twitter": "https://twitter.com/GillespieBranch",
      "linkedin": "https://linkedin.com/in/LillyRichard"
    },
    "guarantor": {
      "fullName": "Sosa Thomas",
      "relationship": "Other",
      "phoneNumber": "+234 (821) 565-2536",
      "email": "sosathomas@enersave.com"
    }
  },
  {
    "id": "6708e8835f59a1fb5c8478b3",
    "organization": "Snacktion",
    "userName": "SchroederSlater",
    "email": "schroederslater@snacktion.com",
    "phoneNumber": "+234 (946) 566-2815",
    "date": "2023-11-20T01:34:56-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Woodard Cain",
      "phoneNumber": "+234 (846) 424-2079",
      "emailAddress": "woodardcain@snacktion.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "woodardcain@snacktion.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Kineticut Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CareyBritt",
      "twitter": "https://twitter.com/LourdesAguirre",
      "linkedin": "https://linkedin.com/in/GilliamAllen"
    },
    "guarantor": {
      "fullName": "Whitfield Galloway",
      "relationship": "Colleague",
      "phoneNumber": "+234 (853) 497-2756",
      "email": "whitfieldgalloway@kineticut.com"
    }
  },
  {
    "id": "6708e8833c6439336f790cf1",
    "organization": "Combogene",
    "userName": "EliseBell",
    "email": "elisebell@combogene.com",
    "phoneNumber": "+234 (897) 586-3746",
    "date": "2021-09-17T04:59:20-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Amie Mack",
      "phoneNumber": "+234 (931) 484-3163",
      "emailAddress": "amiemack@combogene.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "amiemack@combogene.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zounds Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AtkinsMerritt",
      "twitter": "https://twitter.com/PowellGomez",
      "linkedin": "https://linkedin.com/in/RachaelBridges"
    },
    "guarantor": {
      "fullName": "Doyle Welch",
      "relationship": "Colleague",
      "phoneNumber": "+234 (811) 572-3528",
      "email": "doylewelch@zounds.com"
    }
  },
  {
    "id": "6708e88354f89ad80a786a5c",
    "organization": "Letpro",
    "userName": "LouKent",
    "email": "loukent@letpro.com",
    "phoneNumber": "+234 (874) 569-2989",
    "date": "2021-04-21T12:26:35-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Claudia Knight",
      "phoneNumber": "+234 (888) 575-3778",
      "emailAddress": "claudiaknight@letpro.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "claudiaknight@letpro.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Viagreat Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AlvarezHolland",
      "twitter": "https://twitter.com/FordObrien",
      "linkedin": "https://linkedin.com/in/LiliaSpencer"
    },
    "guarantor": {
      "fullName": "Thompson Norman",
      "relationship": "Family",
      "phoneNumber": "+234 (811) 426-3231",
      "email": "thompsonnorman@viagreat.com"
    }
  },
  {
    "id": "6708e8832e22c0401595a959",
    "organization": "Visalia",
    "userName": "BrandieSherman",
    "email": "brandiesherman@visalia.com",
    "phoneNumber": "+234 (808) 526-2702",
    "date": "2023-03-12T04:18:44-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Celia Wynn",
      "phoneNumber": "+234 (817) 583-3820",
      "emailAddress": "celiawynn@visalia.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "celiawynn@visalia.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Powernet Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DeboraHester",
      "twitter": "https://twitter.com/HerreraCohen",
      "linkedin": "https://linkedin.com/in/ValenzuelaWalters"
    },
    "guarantor": {
      "fullName": "Tommie Downs",
      "relationship": "Other",
      "phoneNumber": "+234 (944) 403-2659",
      "email": "tommiedowns@powernet.com"
    }
  },
  {
    "id": "6708e883caf8ae4358a002bf",
    "organization": "Snips",
    "userName": "DownsMyers",
    "email": "downsmyers@snips.com",
    "phoneNumber": "+234 (821) 557-3236",
    "date": "2022-10-05T01:59:32-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Julianne Mcgee",
      "phoneNumber": "+234 (933) 420-2527",
      "emailAddress": "juliannemcgee@snips.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "juliannemcgee@snips.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Panzent Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RiveraSykes",
      "twitter": "https://twitter.com/EarleneShields",
      "linkedin": "https://linkedin.com/in/GoodmanMichael"
    },
    "guarantor": {
      "fullName": "Guadalupe Hays",
      "relationship": "Friend",
      "phoneNumber": "+234 (870) 515-2054",
      "email": "guadalupehays@panzent.com"
    }
  },
  {
    "id": "6708e8837b3aed4cc7fce3cf",
    "organization": "Comtrak",
    "userName": "TalleyGarner",
    "email": "talleygarner@comtrak.com",
    "phoneNumber": "+234 (858) 546-2647",
    "date": "2023-03-28T04:42:18-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Montgomery Whitney",
      "phoneNumber": "+234 (821) 479-3874",
      "emailAddress": "montgomerywhitney@comtrak.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "montgomerywhitney@comtrak.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Gluid Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RayMiranda",
      "twitter": "https://twitter.com/LaurelEspinoza",
      "linkedin": "https://linkedin.com/in/SarahHansen"
    },
    "guarantor": {
      "fullName": "Lynne Faulkner",
      "relationship": "Colleague",
      "phoneNumber": "+234 (866) 504-3639",
      "email": "lynnefaulkner@gluid.com"
    }
  },
  {
    "id": "6708e8836dccbdeb8071582b",
    "organization": "Orbaxter",
    "userName": "MelindaPorter",
    "email": "melindaporter@orbaxter.com",
    "phoneNumber": "+234 (874) 600-2704",
    "date": "2023-06-07T10:33:45-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Eddie Beach",
      "phoneNumber": "+234 (966) 452-3796",
      "emailAddress": "eddiebeach@orbaxter.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "eddiebeach@orbaxter.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Prismatic Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KathyHampton",
      "twitter": "https://twitter.com/EnglishWard",
      "linkedin": "https://linkedin.com/in/RothLarsen"
    },
    "guarantor": {
      "fullName": "Melton Cannon",
      "relationship": "Colleague",
      "phoneNumber": "+234 (809) 461-3960",
      "email": "meltoncannon@prismatic.com"
    }
  },
  {
    "id": "6708e883d2dfc2c213bb937b",
    "organization": "Combogen",
    "userName": "MillieSandoval",
    "email": "milliesandoval@combogen.com",
    "phoneNumber": "+234 (945) 514-3292",
    "date": "2021-11-18T01:22:32-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Raymond Wilcox",
      "phoneNumber": "+234 (908) 588-3755",
      "emailAddress": "raymondwilcox@combogen.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "raymondwilcox@combogen.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Lyrichord Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BetsyWebb",
      "twitter": "https://twitter.com/CathyTurner",
      "linkedin": "https://linkedin.com/in/MartaHooper"
    },
    "guarantor": {
      "fullName": "Terri Nolan",
      "relationship": "Other",
      "phoneNumber": "+234 (907) 470-2353",
      "email": "terrinolan@lyrichord.com"
    }
  },
  {
    "id": "6708e8830777a76f9c71cc23",
    "organization": "Multiflex",
    "userName": "AlisaMorin",
    "email": "alisamorin@multiflex.com",
    "phoneNumber": "+234 (849) 528-2052",
    "date": "2021-08-31T02:43:54-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Manuela Payne",
      "phoneNumber": "+234 (818) 436-2628",
      "emailAddress": "manuelapayne@multiflex.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "manuelapayne@multiflex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Pharmex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BradfordOrr",
      "twitter": "https://twitter.com/AllisonRyan",
      "linkedin": "https://linkedin.com/in/WhitneyLynch"
    },
    "guarantor": {
      "fullName": "Tyler Solomon",
      "relationship": "Friend",
      "phoneNumber": "+234 (824) 597-2472",
      "email": "tylersolomon@pharmex.com"
    }
  },
  {
    "id": "6708e88371e4a851af9a05b3",
    "organization": "Nixelt",
    "userName": "DeloresZamora",
    "email": "deloreszamora@nixelt.com",
    "phoneNumber": "+234 (940) 600-3267",
    "date": "2022-10-23T03:34:41-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Stanton Dillard",
      "phoneNumber": "+234 (989) 448-2896",
      "emailAddress": "stantondillard@nixelt.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "stantondillard@nixelt.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Isopop Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PaigeHahn",
      "twitter": "https://twitter.com/PrinceHines",
      "linkedin": "https://linkedin.com/in/CandaceRasmussen"
    },
    "guarantor": {
      "fullName": "Francisca Vasquez",
      "relationship": "Other",
      "phoneNumber": "+234 (843) 512-2150",
      "email": "franciscavasquez@isopop.com"
    }
  },
  {
    "id": "6708e883e5778f69e5d2fea5",
    "organization": "Melbacor",
    "userName": "MckinneyRichardson",
    "email": "mckinneyrichardson@melbacor.com",
    "phoneNumber": "+234 (955) 424-2290",
    "date": "2022-10-28T04:42:32-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Hodge Woodard",
      "phoneNumber": "+234 (933) 536-2701",
      "emailAddress": "hodgewoodard@melbacor.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "hodgewoodard@melbacor.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Codact Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MinnieGraves",
      "twitter": "https://twitter.com/PatsyDonovan",
      "linkedin": "https://linkedin.com/in/MejiaDuncan"
    },
    "guarantor": {
      "fullName": "Palmer Simmons",
      "relationship": "Family",
      "phoneNumber": "+234 (878) 440-3541",
      "email": "palmersimmons@codact.com"
    }
  },
  {
    "id": "6708e8830a1f6e406939daf6",
    "organization": "Manglo",
    "userName": "QueenReed",
    "email": "queenreed@manglo.com",
    "phoneNumber": "+234 (886) 471-2910",
    "date": "2023-10-12T01:04:52-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Bentley Woods",
      "phoneNumber": "+234 (875) 480-2967",
      "emailAddress": "bentleywoods@manglo.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "bentleywoods@manglo.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Frosnex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LindseyHogan",
      "twitter": "https://twitter.com/AllysonPhelps",
      "linkedin": "https://linkedin.com/in/BestKnapp"
    },
    "guarantor": {
      "fullName": "Hyde Reyes",
      "relationship": "Other",
      "phoneNumber": "+234 (934) 521-3372",
      "email": "hydereyes@frosnex.com"
    }
  },
  {
    "id": "6708e8833db69d0a3693568f",
    "organization": "Accuprint",
    "userName": "GeorgetteRoss",
    "email": "georgetteross@accuprint.com",
    "phoneNumber": "+234 (867) 552-2588",
    "date": "2020-12-25T08:27:37-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Lucile Rosa",
      "phoneNumber": "+234 (922) 508-2729",
      "emailAddress": "lucilerosa@accuprint.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "lucilerosa@accuprint.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Cytrex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MargretEwing",
      "twitter": "https://twitter.com/PattyWillis",
      "linkedin": "https://linkedin.com/in/VazquezPennington"
    },
    "guarantor": {
      "fullName": "Baxter Melton",
      "relationship": "Family",
      "phoneNumber": "+234 (837) 414-2413",
      "email": "baxtermelton@cytrex.com"
    }
  },
  {
    "id": "6708e883ad3a95374d35044f",
    "organization": "Niquent",
    "userName": "RobersonKeith",
    "email": "robersonkeith@niquent.com",
    "phoneNumber": "+234 (929) 475-3014",
    "date": "2022-10-22T04:00:37-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Collier Higgins",
      "phoneNumber": "+234 (875) 492-3050",
      "emailAddress": "collierhiggins@niquent.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "collierhiggins@niquent.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Magmina Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HancockDotson",
      "twitter": "https://twitter.com/BobbieKnox",
      "linkedin": "https://linkedin.com/in/BarkerRowland"
    },
    "guarantor": {
      "fullName": "Ferguson Patton",
      "relationship": "Family",
      "phoneNumber": "+234 (844) 582-2688",
      "email": "fergusonpatton@magmina.com"
    }
  },
  {
    "id": "6708e8839a6213e64ba68331",
    "organization": "Naxdis",
    "userName": "BeverleySutton",
    "email": "beverleysutton@naxdis.com",
    "phoneNumber": "+234 (857) 509-3722",
    "date": "2023-06-14T11:57:26-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Ina Hubbard",
      "phoneNumber": "+234 (813) 510-2313",
      "emailAddress": "inahubbard@naxdis.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "inahubbard@naxdis.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Synkgen Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DeirdreDaugherty",
      "twitter": "https://twitter.com/SchneiderHorton",
      "linkedin": "https://linkedin.com/in/NobleRodriquez"
    },
    "guarantor": {
      "fullName": "Alberta Clemons",
      "relationship": "Colleague",
      "phoneNumber": "+234 (855) 570-3912",
      "email": "albertaclemons@synkgen.com"
    }
  },
  {
    "id": "6708e883801e0cab010ebf4c",
    "organization": "Enormo",
    "userName": "GwendolynHouston",
    "email": "gwendolynhouston@enormo.com",
    "phoneNumber": "+234 (840) 576-2505",
    "date": "2021-06-22T08:37:22-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Gayle Marshall",
      "phoneNumber": "+234 (936) 513-3206",
      "emailAddress": "gaylemarshall@enormo.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "gaylemarshall@enormo.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zensor Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/GutierrezDecker",
      "twitter": "https://twitter.com/ElsieBoyer",
      "linkedin": "https://linkedin.com/in/ConwayManning"
    },
    "guarantor": {
      "fullName": "Gladys Humphrey",
      "relationship": "Family",
      "phoneNumber": "+234 (958) 476-2954",
      "email": "gladyshumphrey@zensor.com"
    }
  },
  {
    "id": "6708e8838d2397b107794387",
    "organization": "Kenegy",
    "userName": "ShellyBaldwin",
    "email": "shellybaldwin@kenegy.com",
    "phoneNumber": "+234 (861) 498-3389",
    "date": "2024-03-30T04:05:03-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Inez Macdonald",
      "phoneNumber": "+234 (920) 547-3390",
      "emailAddress": "inezmacdonald@kenegy.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "inezmacdonald@kenegy.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Steelfab Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MaudeFrazier",
      "twitter": "https://twitter.com/ReneBailey",
      "linkedin": "https://linkedin.com/in/ChristinaRatliff"
    },
    "guarantor": {
      "fullName": "Tracie Banks",
      "relationship": "Family",
      "phoneNumber": "+234 (968) 546-2215",
      "email": "traciebanks@steelfab.com"
    }
  },
  {
    "id": "6708e88365625bbb9b71d8fb",
    "organization": "Geofarm",
    "userName": "ConsueloFarmer",
    "email": "consuelofarmer@geofarm.com",
    "phoneNumber": "+234 (816) 542-3869",
    "date": "2023-10-10T06:19:07-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Bridgett Snider",
      "phoneNumber": "+234 (833) 522-3042",
      "emailAddress": "bridgettsnider@geofarm.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "bridgettsnider@geofarm.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Parleynet Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HawkinsDuffy",
      "twitter": "https://twitter.com/ShirleyRomero",
      "linkedin": "https://linkedin.com/in/HaysBrennan"
    },
    "guarantor": {
      "fullName": "Carla Bauer",
      "relationship": "Other",
      "phoneNumber": "+234 (956) 580-3111",
      "email": "carlabauer@parleynet.com"
    }
  },
  {
    "id": "6708e8837c39df1c0bf08bc9",
    "organization": "Brainquil",
    "userName": "NormanHartman",
    "email": "normanhartman@brainquil.com",
    "phoneNumber": "+234 (971) 543-2827",
    "date": "2020-05-14T06:45:37-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Petty Ferrell",
      "phoneNumber": "+234 (907) 459-2729",
      "emailAddress": "pettyferrell@brainquil.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "pettyferrell@brainquil.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Fibrodyne Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BushBarber",
      "twitter": "https://twitter.com/LesleyMccoy",
      "linkedin": "https://linkedin.com/in/BeulahHodge"
    },
    "guarantor": {
      "fullName": "Huber Moody",
      "relationship": "Other",
      "phoneNumber": "+234 (932) 599-2000",
      "email": "hubermoody@fibrodyne.com"
    }
  },
  {
    "id": "6708e8830d478e39d6e60a88",
    "organization": "Vortexaco",
    "userName": "JeannieStephens",
    "email": "jeanniestephens@vortexaco.com",
    "phoneNumber": "+234 (848) 504-3762",
    "date": "2023-09-30T07:06:45-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Henrietta Pena",
      "phoneNumber": "+234 (861) 565-2396",
      "emailAddress": "henriettapena@vortexaco.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "henriettapena@vortexaco.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Incubus Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WildaSloan",
      "twitter": "https://twitter.com/BryanBeard",
      "linkedin": "https://linkedin.com/in/PhelpsHaynes"
    },
    "guarantor": {
      "fullName": "Chandra Adams",
      "relationship": "Friend",
      "phoneNumber": "+234 (950) 600-2870",
      "email": "chandraadams@incubus.com"
    }
  },
  {
    "id": "6708e8835f7d3bdc15869340",
    "organization": "Quintity",
    "userName": "StricklandHill",
    "email": "stricklandhill@quintity.com",
    "phoneNumber": "+234 (898) 400-2241",
    "date": "2022-01-24T05:04:33-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Casey Brooks",
      "phoneNumber": "+234 (987) 439-2667",
      "emailAddress": "caseybrooks@quintity.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "caseybrooks@quintity.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zolavo Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BensonKidd",
      "twitter": "https://twitter.com/MirandaIrwin",
      "linkedin": "https://linkedin.com/in/MaloneWade"
    },
    "guarantor": {
      "fullName": "Essie Pope",
      "relationship": "Friend",
      "phoneNumber": "+234 (995) 534-2972",
      "email": "essiepope@zolavo.com"
    }
  },
  {
    "id": "6708e883ffd0dfbdda032dbb",
    "organization": "Acrodance",
    "userName": "AugustaKline",
    "email": "augustakline@acrodance.com",
    "phoneNumber": "+234 (918) 581-3897",
    "date": "2020-04-01T02:06:36-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Wallace Montgomery",
      "phoneNumber": "+234 (842) 548-2346",
      "emailAddress": "wallacemontgomery@acrodance.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "wallacemontgomery@acrodance.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zillanet Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HardinAtkinson",
      "twitter": "https://twitter.com/ViolaFarley",
      "linkedin": "https://linkedin.com/in/RebaCopeland"
    },
    "guarantor": {
      "fullName": "Verna Adkins",
      "relationship": "Friend",
      "phoneNumber": "+234 (994) 441-2424",
      "email": "vernaadkins@zillanet.com"
    }
  },
  {
    "id": "6708e8830009ed2e9de2e6ca",
    "organization": "Namebox",
    "userName": "ValentineCotton",
    "email": "valentinecotton@namebox.com",
    "phoneNumber": "+234 (965) 446-2134",
    "date": "2022-03-24T08:52:33-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Lindsay Horn",
      "phoneNumber": "+234 (830) 465-3540",
      "emailAddress": "lindsayhorn@namebox.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "lindsayhorn@namebox.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Mangelica Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WilkinsonPhillips",
      "twitter": "https://twitter.com/VilmaGreen",
      "linkedin": "https://linkedin.com/in/EllaDonaldson"
    },
    "guarantor": {
      "fullName": "Duncan Leon",
      "relationship": "Friend",
      "phoneNumber": "+234 (878) 401-2369",
      "email": "duncanleon@mangelica.com"
    }
  },
  {
    "id": "6708e8834656557ceeaafe4f",
    "organization": "Ultrasure",
    "userName": "SherryMcclain",
    "email": "sherrymcclain@ultrasure.com",
    "phoneNumber": "+234 (808) 488-2708",
    "date": "2023-07-24T12:39:11-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Jannie Fuentes",
      "phoneNumber": "+234 (839) 523-3954",
      "emailAddress": "janniefuentes@ultrasure.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "janniefuentes@ultrasure.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Quiltigen Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/SantiagoGlenn",
      "twitter": "https://twitter.com/KeithBradford",
      "linkedin": "https://linkedin.com/in/ChanRoberson"
    },
    "guarantor": {
      "fullName": "Flynn Schneider",
      "relationship": "Other",
      "phoneNumber": "+234 (895) 472-3355",
      "email": "flynnschneider@quiltigen.com"
    }
  },
  {
    "id": "6708e8837e7cd0797dba2b21",
    "organization": "Zialactic",
    "userName": "HardingSilva",
    "email": "hardingsilva@zialactic.com",
    "phoneNumber": "+234 (806) 427-2963",
    "date": "2023-07-23T07:07:55-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Pierce Estrada",
      "phoneNumber": "+234 (995) 537-2454",
      "emailAddress": "pierceestrada@zialactic.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "pierceestrada@zialactic.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Savvy Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HeleneLe",
      "twitter": "https://twitter.com/KellyPaul",
      "linkedin": "https://linkedin.com/in/BrittneyPerry"
    },
    "guarantor": {
      "fullName": "Rhea Booth",
      "relationship": "Colleague",
      "phoneNumber": "+234 (828) 591-3464",
      "email": "rheabooth@savvy.com"
    }
  },
  {
    "id": "6708e883d8b3757c382bbfc0",
    "organization": "Accel",
    "userName": "AlmaNorris",
    "email": "almanorris@accel.com",
    "phoneNumber": "+234 (994) 503-3516",
    "date": "2022-03-07T10:36:56-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Tammi Webster",
      "phoneNumber": "+234 (809) 463-2740",
      "emailAddress": "tammiwebster@accel.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "tammiwebster@accel.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zboo Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/McculloughLarson",
      "twitter": "https://twitter.com/DorothySharpe",
      "linkedin": "https://linkedin.com/in/PansyHardin"
    },
    "guarantor": {
      "fullName": "Ruiz Anderson",
      "relationship": "Friend",
      "phoneNumber": "+234 (823) 531-3763",
      "email": "ruizanderson@zboo.com"
    }
  },
  {
    "id": "6708e8831a0ae218089100d1",
    "organization": "Assitia",
    "userName": "BonnieVega",
    "email": "bonnievega@assitia.com",
    "phoneNumber": "+234 (854) 551-2030",
    "date": "2021-09-26T08:05:51-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Nieves Schroeder",
      "phoneNumber": "+234 (823) 462-2171",
      "emailAddress": "nievesschroeder@assitia.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "nievesschroeder@assitia.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Liquicom Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FrostMelendez",
      "twitter": "https://twitter.com/VargasMcmahon",
      "linkedin": "https://linkedin.com/in/AngieHolder"
    },
    "guarantor": {
      "fullName": "Church Frederick",
      "relationship": "Family",
      "phoneNumber": "+234 (968) 458-2324",
      "email": "churchfrederick@liquicom.com"
    }
  },
  {
    "id": "6708e8837cf7fa5787c770fd",
    "organization": "Oatfarm",
    "userName": "WynnRuiz",
    "email": "wynnruiz@oatfarm.com",
    "phoneNumber": "+234 (864) 460-3304",
    "date": "2021-12-20T04:13:37-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Angelica Maddox",
      "phoneNumber": "+234 (886) 514-2630",
      "emailAddress": "angelicamaddox@oatfarm.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "angelicamaddox@oatfarm.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Entropix Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RandiPruitt",
      "twitter": "https://twitter.com/MatthewsRoth",
      "linkedin": "https://linkedin.com/in/LandrySellers"
    },
    "guarantor": {
      "fullName": "Sanchez Vang",
      "relationship": "Family",
      "phoneNumber": "+234 (849) 466-2151",
      "email": "sanchezvang@entropix.com"
    }
  },
  {
    "id": "6708e8834f2552eb0f2b9de1",
    "organization": "Comtrail",
    "userName": "SummersBerry",
    "email": "summersberry@comtrail.com",
    "phoneNumber": "+234 (806) 596-2389",
    "date": "2024-09-29T06:46:51-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Beth Suarez",
      "phoneNumber": "+234 (851) 425-3239",
      "emailAddress": "bethsuarez@comtrail.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "bethsuarez@comtrail.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Micronaut Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RichardsBender",
      "twitter": "https://twitter.com/MosesShort",
      "linkedin": "https://linkedin.com/in/PittmanDorsey"
    },
    "guarantor": {
      "fullName": "Ayers Scott",
      "relationship": "Family",
      "phoneNumber": "+234 (970) 450-3042",
      "email": "ayersscott@micronaut.com"
    }
  },
  {
    "id": "6708e88315bd5054fd8779ab",
    "organization": "Qualitern",
    "userName": "ClaudineKoch",
    "email": "claudinekoch@qualitern.com",
    "phoneNumber": "+234 (965) 417-2383",
    "date": "2020-08-17T10:47:50-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Byers Boyd",
      "phoneNumber": "+234 (893) 428-2615",
      "emailAddress": "byersboyd@qualitern.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "byersboyd@qualitern.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Circum Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MorganHunt",
      "twitter": "https://twitter.com/SashaMonroe",
      "linkedin": "https://linkedin.com/in/RosalindaMckenzie"
    },
    "guarantor": {
      "fullName": "Priscilla Maxwell",
      "relationship": "Colleague",
      "phoneNumber": "+234 (862) 478-2856",
      "email": "priscillamaxwell@circum.com"
    }
  },
  {
    "id": "6708e8839cd6bb859fd2fb1e",
    "organization": "Codax",
    "userName": "DavidMiles",
    "email": "davidmiles@codax.com",
    "phoneNumber": "+234 (910) 464-2980",
    "date": "2022-03-14T05:13:31-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Jasmine Collier",
      "phoneNumber": "+234 (938) 576-3441",
      "emailAddress": "jasminecollier@codax.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "jasminecollier@codax.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Skinserve Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MercedesThompson",
      "twitter": "https://twitter.com/HendersonBaker",
      "linkedin": "https://linkedin.com/in/HarriettWood"
    },
    "guarantor": {
      "fullName": "Robbie Nash",
      "relationship": "Colleague",
      "phoneNumber": "+234 (860) 511-3883",
      "email": "robbienash@skinserve.com"
    }
  },
  {
    "id": "6708e883c5914faa1525c66e",
    "organization": "Isologix",
    "userName": "BookerSolis",
    "email": "bookersolis@isologix.com",
    "phoneNumber": "+234 (834) 506-2352",
    "date": "2023-12-19T11:02:54-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Munoz Key",
      "phoneNumber": "+234 (814) 493-2692",
      "emailAddress": "munozkey@isologix.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "munozkey@isologix.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Geoforma Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/EmersonMatthews",
      "twitter": "https://twitter.com/DixieBenjamin",
      "linkedin": "https://linkedin.com/in/JayneWilder"
    },
    "guarantor": {
      "fullName": "Battle Harrington",
      "relationship": "Colleague",
      "phoneNumber": "+234 (837) 514-3615",
      "email": "battleharrington@geoforma.com"
    }
  },
  {
    "id": "6708e88339e0688ae45b8391",
    "organization": "Ginkle",
    "userName": "JerryHurst",
    "email": "jerryhurst@ginkle.com",
    "phoneNumber": "+234 (953) 449-3819",
    "date": "2024-08-13T03:20:02-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Sharron Everett",
      "phoneNumber": "+234 (996) 580-2104",
      "emailAddress": "sharroneverett@ginkle.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "sharroneverett@ginkle.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Yogasm Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/NunezCash",
      "twitter": "https://twitter.com/BrennanFry",
      "linkedin": "https://linkedin.com/in/MaritzaParsons"
    },
    "guarantor": {
      "fullName": "Reid Riley",
      "relationship": "Other",
      "phoneNumber": "+234 (988) 583-2781",
      "email": "reidriley@yogasm.com"
    }
  },
  {
    "id": "6708e883cb934218c461f58c",
    "organization": "Zaggle",
    "userName": "SalasMorton",
    "email": "salasmorton@zaggle.com",
    "phoneNumber": "+234 (839) 463-3299",
    "date": "2024-02-07T05:38:54-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Lawson Small",
      "phoneNumber": "+234 (924) 431-3435",
      "emailAddress": "lawsonsmall@zaggle.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "lawsonsmall@zaggle.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Trollery Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ElsaCarter",
      "twitter": "https://twitter.com/NatalieWhite",
      "linkedin": "https://linkedin.com/in/ElenaHowell"
    },
    "guarantor": {
      "fullName": "Patrica Lamb",
      "relationship": "Colleague",
      "phoneNumber": "+234 (883) 402-2431",
      "email": "patricalamb@trollery.com"
    }
  },
  {
    "id": "6708e883551cdb0ab358a5a1",
    "organization": "Rameon",
    "userName": "HillaryKim",
    "email": "hillarykim@rameon.com",
    "phoneNumber": "+234 (839) 410-3020",
    "date": "2020-10-23T08:06:41-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Kim Gibbs",
      "phoneNumber": "+234 (848) 477-2069",
      "emailAddress": "kimgibbs@rameon.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "kimgibbs@rameon.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Glukgluk Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BruceDale",
      "twitter": "https://twitter.com/CarrilloBarnett",
      "linkedin": "https://linkedin.com/in/RileyNieves"
    },
    "guarantor": {
      "fullName": "Beck West",
      "relationship": "Other",
      "phoneNumber": "+234 (821) 443-3059",
      "email": "beckwest@glukgluk.com"
    }
  },
  {
    "id": "6708e88301cdd673e509d3a6",
    "organization": "Comtent",
    "userName": "RosalindJohnston",
    "email": "rosalindjohnston@comtent.com",
    "phoneNumber": "+234 (814) 498-3727",
    "date": "2021-10-20T06:21:02-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Elinor Dyer",
      "phoneNumber": "+234 (985) 581-2884",
      "emailAddress": "elinordyer@comtent.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "elinordyer@comtent.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Ecolight Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DejesusWise",
      "twitter": "https://twitter.com/ChristiMosley",
      "linkedin": "https://linkedin.com/in/SkinnerValentine"
    },
    "guarantor": {
      "fullName": "Villarreal Dudley",
      "relationship": "Friend",
      "phoneNumber": "+234 (816) 423-2332",
      "email": "villarrealdudley@ecolight.com"
    }
  },
  {
    "id": "6708e8831332140779812331",
    "organization": "Zogak",
    "userName": "SmallFischer",
    "email": "smallfischer@zogak.com",
    "phoneNumber": "+234 (821) 505-2337",
    "date": "2021-06-05T08:15:00-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Jacqueline Gay",
      "phoneNumber": "+234 (922) 480-2860",
      "emailAddress": "jacquelinegay@zogak.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "jacquelinegay@zogak.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zolarity Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/VivianSweeney",
      "twitter": "https://twitter.com/NatashaHenry",
      "linkedin": "https://linkedin.com/in/WilkersonColeman"
    },
    "guarantor": {
      "fullName": "Tessa Hood",
      "relationship": "Other",
      "phoneNumber": "+234 (996) 463-2063",
      "email": "tessahood@zolarity.com"
    }
  },
  {
    "id": "6708e88360e6709bf6b5cb77",
    "organization": "Medifax",
    "userName": "TerryLambert",
    "email": "terrylambert@medifax.com",
    "phoneNumber": "+234 (876) 594-3476",
    "date": "2020-06-24T01:39:27-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Liza Schultz",
      "phoneNumber": "+234 (876) 514-3308",
      "emailAddress": "lizaschultz@medifax.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "lizaschultz@medifax.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Biflex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/OrtegaMcdonald",
      "twitter": "https://twitter.com/WardHamilton",
      "linkedin": "https://linkedin.com/in/ClaraCamacho"
    },
    "guarantor": {
      "fullName": "Cunningham Hess",
      "relationship": "Family",
      "phoneNumber": "+234 (809) 514-2362",
      "email": "cunninghamhess@biflex.com"
    }
  },
  {
    "id": "6708e883665f364f5e7e6411",
    "organization": "Hivedom",
    "userName": "JanPatrick",
    "email": "janpatrick@hivedom.com",
    "phoneNumber": "+234 (954) 561-3071",
    "date": "2020-05-16T07:57:02-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Nichols Rosales",
      "phoneNumber": "+234 (999) 403-2483",
      "emailAddress": "nicholsrosales@hivedom.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "nicholsrosales@hivedom.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Duflex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MilagrosArnold",
      "twitter": "https://twitter.com/WongFranks",
      "linkedin": "https://linkedin.com/in/WatkinsMontoya"
    },
    "guarantor": {
      "fullName": "Leila Robinson",
      "relationship": "Friend",
      "phoneNumber": "+234 (973) 539-2473",
      "email": "leilarobinson@duflex.com"
    }
  },
  {
    "id": "6708e883ea4bc6fdb1a2875c",
    "organization": "Quinex",
    "userName": "DurhamMoreno",
    "email": "durhammoreno@quinex.com",
    "phoneNumber": "+234 (855) 575-2040",
    "date": "2020-03-03T09:34:52-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Robertson Sparks",
      "phoneNumber": "+234 (816) 540-3143",
      "emailAddress": "robertsonsparks@quinex.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "robertsonsparks@quinex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Moltonic Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FarrellCline",
      "twitter": "https://twitter.com/PopeFleming",
      "linkedin": "https://linkedin.com/in/TateMedina"
    },
    "guarantor": {
      "fullName": "Adeline Gardner",
      "relationship": "Family",
      "phoneNumber": "+234 (948) 420-2642",
      "email": "adelinegardner@moltonic.com"
    }
  },
  {
    "id": "6708e883cb9a260864319bd8",
    "organization": "Pigzart",
    "userName": "MullenJames",
    "email": "mullenjames@pigzart.com",
    "phoneNumber": "+234 (911) 451-3850",
    "date": "2022-12-08T11:48:03-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Wade Butler",
      "phoneNumber": "+234 (942) 465-3695",
      "emailAddress": "wadebutler@pigzart.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "wadebutler@pigzart.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Kiggle Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AlanaBurch",
      "twitter": "https://twitter.com/JeffersonMercer",
      "linkedin": "https://linkedin.com/in/WattsBriggs"
    },
    "guarantor": {
      "fullName": "Marci Ramirez",
      "relationship": "Colleague",
      "phoneNumber": "+234 (912) 457-3729",
      "email": "marciramirez@kiggle.com"
    }
  },
  {
    "id": "6708e883a56ef9809132273f",
    "organization": "Ebidco",
    "userName": "DeanneMckee",
    "email": "deannemckee@ebidco.com",
    "phoneNumber": "+234 (960) 474-2484",
    "date": "2022-02-26T05:26:24-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Hudson Dominguez",
      "phoneNumber": "+234 (840) 476-3910",
      "emailAddress": "hudsondominguez@ebidco.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "hudsondominguez@ebidco.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Anacho Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LoraineConley",
      "twitter": "https://twitter.com/SharpeShelton",
      "linkedin": "https://linkedin.com/in/DillonMcneil"
    },
    "guarantor": {
      "fullName": "Cotton Rogers",
      "relationship": "Friend",
      "phoneNumber": "+234 (836) 516-2871",
      "email": "cottonrogers@anacho.com"
    }
  },
  {
    "id": "6708e8832b6597cbbc6dfaa9",
    "organization": "Cofine",
    "userName": "KinneyFlowers",
    "email": "kinneyflowers@cofine.com",
    "phoneNumber": "+234 (983) 569-3167",
    "date": "2021-08-08T11:06:57-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Kay Osborn",
      "phoneNumber": "+234 (945) 505-2395",
      "emailAddress": "kayosborn@cofine.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "kayosborn@cofine.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zepitope Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LethaYang",
      "twitter": "https://twitter.com/ShawCasey",
      "linkedin": "https://linkedin.com/in/HallMays"
    },
    "guarantor": {
      "fullName": "Hardy Sanford",
      "relationship": "Friend",
      "phoneNumber": "+234 (917) 432-2884",
      "email": "hardysanford@zepitope.com"
    }
  },
  {
    "id": "6708e883c80fce2e6d8876fe",
    "organization": "Cedward",
    "userName": "MelisaBlack",
    "email": "melisablack@cedward.com",
    "phoneNumber": "+234 (824) 400-3573",
    "date": "2024-06-21T06:16:55-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Rosario Pugh",
      "phoneNumber": "+234 (964) 461-3324",
      "emailAddress": "rosariopugh@cedward.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "rosariopugh@cedward.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zuvy Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ThorntonHorne",
      "twitter": "https://twitter.com/GardnerBurke",
      "linkedin": "https://linkedin.com/in/MooneyDelaney"
    },
    "guarantor": {
      "fullName": "Molly Jacobs",
      "relationship": "Other",
      "phoneNumber": "+234 (976) 500-3188",
      "email": "mollyjacobs@zuvy.com"
    }
  },
  {
    "id": "6708e883eb9aeaf9e7739d8d",
    "organization": "Retrotex",
    "userName": "DorisCardenas",
    "email": "doriscardenas@retrotex.com",
    "phoneNumber": "+234 (961) 560-3314",
    "date": "2020-02-04T06:27:34-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Jeanette York",
      "phoneNumber": "+234 (873) 592-3869",
      "emailAddress": "jeanetteyork@retrotex.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "jeanetteyork@retrotex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Kidgrease Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DennisEngland",
      "twitter": "https://twitter.com/DaisyRobles",
      "linkedin": "https://linkedin.com/in/DorseyPark"
    },
    "guarantor": {
      "fullName": "Norton Walls",
      "relationship": "Colleague",
      "phoneNumber": "+234 (918) 482-3080",
      "email": "nortonwalls@kidgrease.com"
    }
  },
  {
    "id": "6708e8836b249ee4e5b902af",
    "organization": "Inear",
    "userName": "StefanieErickson",
    "email": "stefanieerickson@inear.com",
    "phoneNumber": "+234 (822) 538-2793",
    "date": "2024-08-02T04:03:09-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Singleton Chavez",
      "phoneNumber": "+234 (990) 491-2483",
      "emailAddress": "singletonchavez@inear.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "singletonchavez@inear.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zerbina Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RoseannGriffin",
      "twitter": "https://twitter.com/BeatriceFinley",
      "linkedin": "https://linkedin.com/in/StanleyPatterson"
    },
    "guarantor": {
      "fullName": "Conrad Conway",
      "relationship": "Other",
      "phoneNumber": "+234 (818) 599-2530",
      "email": "conradconway@zerbina.com"
    }
  },
  {
    "id": "6708e883629356ed9503eddc",
    "organization": "Pearlessa",
    "userName": "UrsulaWashington",
    "email": "ursulawashington@pearlessa.com",
    "phoneNumber": "+234 (971) 576-2518",
    "date": "2022-02-21T03:06:49-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "White Jackson",
      "phoneNumber": "+234 (893) 530-3382",
      "emailAddress": "whitejackson@pearlessa.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "whitejackson@pearlessa.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zanilla Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WeaverMason",
      "twitter": "https://twitter.com/DawsonFord",
      "linkedin": "https://linkedin.com/in/CharlotteOneil"
    },
    "guarantor": {
      "fullName": "Pate Swanson",
      "relationship": "Colleague",
      "phoneNumber": "+234 (939) 478-2940",
      "email": "pateswanson@zanilla.com"
    }
  },
  {
    "id": "6708e883ba59fb15b5f2be6d",
    "organization": "Vantage",
    "userName": "HoganEllis",
    "email": "hoganellis@vantage.com",
    "phoneNumber": "+234 (908) 527-2931",
    "date": "2024-02-11T04:41:15-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Burch Crawford",
      "phoneNumber": "+234 (946) 577-3477",
      "emailAddress": "burchcrawford@vantage.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "burchcrawford@vantage.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zanity Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HurleyMadden",
      "twitter": "https://twitter.com/WhitneyMullen",
      "linkedin": "https://linkedin.com/in/FrancisNunez"
    },
    "guarantor": {
      "fullName": "Garrett Roberts",
      "relationship": "Colleague",
      "phoneNumber": "+234 (981) 545-2233",
      "email": "garrettroberts@zanity.com"
    }
  },
  {
    "id": "6708e883ef8c97329cbb7014",
    "organization": "Plutorque",
    "userName": "PearlieOchoa",
    "email": "pearlieochoa@plutorque.com",
    "phoneNumber": "+234 (898) 537-3709",
    "date": "2022-04-18T03:40:35-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Muriel Rose",
      "phoneNumber": "+234 (929) 488-2530",
      "emailAddress": "murielrose@plutorque.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "murielrose@plutorque.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Overplex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BrandiChambers",
      "twitter": "https://twitter.com/AlejandraHerman",
      "linkedin": "https://linkedin.com/in/GriffithCurtis"
    },
    "guarantor": {
      "fullName": "Maddox Morris",
      "relationship": "Friend",
      "phoneNumber": "+234 (875) 514-2292",
      "email": "maddoxmorris@overplex.com"
    }
  },
  {
    "id": "6708e8838f753e1d3d9bea93",
    "organization": "Strozen",
    "userName": "MeghanWaters",
    "email": "meghanwaters@strozen.com",
    "phoneNumber": "+234 (802) 411-3910",
    "date": "2020-11-27T03:01:09-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Tabatha Hardy",
      "phoneNumber": "+234 (838) 458-3697",
      "emailAddress": "tabathahardy@strozen.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "tabathahardy@strozen.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Aquasure Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/OdonnellWhitehead",
      "twitter": "https://twitter.com/AlexandriaHolmes",
      "linkedin": "https://linkedin.com/in/LorenaLong"
    },
    "guarantor": {
      "fullName": "Carroll Blevins",
      "relationship": "Other",
      "phoneNumber": "+234 (985) 497-2752",
      "email": "carrollblevins@aquasure.com"
    }
  },
  {
    "id": "6708e883ad3a0eb5d72ca1f9",
    "organization": "Virva",
    "userName": "JonesChaney",
    "email": "joneschaney@virva.com",
    "phoneNumber": "+234 (968) 545-2849",
    "date": "2020-02-18T06:03:41-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Traci Hickman",
      "phoneNumber": "+234 (859) 483-2496",
      "emailAddress": "tracihickman@virva.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "tracihickman@virva.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Everest Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AngelitaCarpenter",
      "twitter": "https://twitter.com/MerrillMathis",
      "linkedin": "https://linkedin.com/in/YeseniaMeyer"
    },
    "guarantor": {
      "fullName": "Bullock Macias",
      "relationship": "Friend",
      "phoneNumber": "+234 (935) 589-2318",
      "email": "bullockmacias@everest.com"
    }
  },
  {
    "id": "6708e883fd3d0996ffd1d4f1",
    "organization": "Musix",
    "userName": "MarinaNichols",
    "email": "marinanichols@musix.com",
    "phoneNumber": "+234 (867) 563-3933",
    "date": "2021-07-19T08:54:13-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Marie Kirkland",
      "phoneNumber": "+234 (918) 517-2170",
      "emailAddress": "mariekirkland@musix.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "mariekirkland@musix.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Comverges Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MasseyCameron",
      "twitter": "https://twitter.com/DonaldsonBradley",
      "linkedin": "https://linkedin.com/in/LatishaWright"
    },
    "guarantor": {
      "fullName": "Leta Maynard",
      "relationship": "Other",
      "phoneNumber": "+234 (832) 458-2721",
      "email": "letamaynard@comverges.com"
    }
  },
  {
    "id": "6708e88363db779ecaea232d",
    "organization": "Zork",
    "userName": "ClarissaHarvey",
    "email": "clarissaharvey@zork.com",
    "phoneNumber": "+234 (964) 413-3525",
    "date": "2023-11-27T09:21:45-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Dickson Alford",
      "phoneNumber": "+234 (873) 462-2019",
      "emailAddress": "dicksonalford@zork.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "dicksonalford@zork.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zillidium Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ClementsMerrill",
      "twitter": "https://twitter.com/CopelandChang",
      "linkedin": "https://linkedin.com/in/MeredithMarsh"
    },
    "guarantor": {
      "fullName": "Thelma Cole",
      "relationship": "Friend",
      "phoneNumber": "+234 (945) 427-2951",
      "email": "thelmacole@zillidium.com"
    }
  },
  {
    "id": "6708e883c8f5beb57d65f873",
    "organization": "Insuresys",
    "userName": "MasonValencia",
    "email": "masonvalencia@insuresys.com",
    "phoneNumber": "+234 (946) 562-3708",
    "date": "2022-05-28T02:48:49-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Molina Owen",
      "phoneNumber": "+234 (971) 591-2424",
      "emailAddress": "molinaowen@insuresys.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "molinaowen@insuresys.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Housedown Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MorenoCrane",
      "twitter": "https://twitter.com/DorthyWiley",
      "linkedin": "https://linkedin.com/in/HoweDelgado"
    },
    "guarantor": {
      "fullName": "Georgina Chandler",
      "relationship": "Friend",
      "phoneNumber": "+234 (819) 425-3249",
      "email": "georginachandler@housedown.com"
    }
  },
  {
    "id": "6708e883925fc53f316d8d0e",
    "organization": "Architax",
    "userName": "RosieBurt",
    "email": "rosieburt@architax.com",
    "phoneNumber": "+234 (903) 429-3413",
    "date": "2024-03-17T12:18:56-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Jewell Smith",
      "phoneNumber": "+234 (842) 552-3162",
      "emailAddress": "jewellsmith@architax.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "jewellsmith@architax.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Liquidoc Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WalkerBlackwell",
      "twitter": "https://twitter.com/EstellaRocha",
      "linkedin": "https://linkedin.com/in/ChavezGuy"
    },
    "guarantor": {
      "fullName": "Amparo Bray",
      "relationship": "Family",
      "phoneNumber": "+234 (953) 469-2055",
      "email": "amparobray@liquidoc.com"
    }
  },
  {
    "id": "6708e8837cb9d55aabb906ac",
    "organization": "Silodyne",
    "userName": "JudithStein",
    "email": "judithstein@silodyne.com",
    "phoneNumber": "+234 (841) 580-3981",
    "date": "2024-01-11T06:33:41-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Dyer Byers",
      "phoneNumber": "+234 (964) 572-3632",
      "emailAddress": "dyerbyers@silodyne.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "dyerbyers@silodyne.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Ludak Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/IrmaTerry",
      "twitter": "https://twitter.com/CampbellSullivan",
      "linkedin": "https://linkedin.com/in/MirandaFlores"
    },
    "guarantor": {
      "fullName": "Andrea Klein",
      "relationship": "Colleague",
      "phoneNumber": "+234 (841) 552-2955",
      "email": "andreaklein@ludak.com"
    }
  },
  {
    "id": "6708e883845cee7805532211",
    "organization": "Nutralab",
    "userName": "HansonTyson",
    "email": "hansontyson@nutralab.com",
    "phoneNumber": "+234 (879) 535-3062",
    "date": "2023-12-10T05:53:11-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Keisha Mclaughlin",
      "phoneNumber": "+234 (921) 519-2650",
      "emailAddress": "keishamclaughlin@nutralab.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "keishamclaughlin@nutralab.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Elentrix Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LevineSharp",
      "twitter": "https://twitter.com/CelesteBaxter",
      "linkedin": "https://linkedin.com/in/McguireShannon"
    },
    "guarantor": {
      "fullName": "Marion Holcomb",
      "relationship": "Family",
      "phoneNumber": "+234 (950) 477-3086",
      "email": "marionholcomb@elentrix.com"
    }
  },
  {
    "id": "6708e883c1b75ecdc9e5873b",
    "organization": "Dentrex",
    "userName": "AbbottFowler",
    "email": "abbottfowler@dentrex.com",
    "phoneNumber": "+234 (999) 422-3872",
    "date": "2022-04-11T01:29:22-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Luisa Huber",
      "phoneNumber": "+234 (961) 512-3834",
      "emailAddress": "luisahuber@dentrex.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "luisahuber@dentrex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Neptide Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CarlsonMcfarland",
      "twitter": "https://twitter.com/GloverLang",
      "linkedin": "https://linkedin.com/in/ErnestineDaniels"
    },
    "guarantor": {
      "fullName": "Nettie Vance",
      "relationship": "Friend",
      "phoneNumber": "+234 (949) 447-2085",
      "email": "nettievance@neptide.com"
    }
  },
  {
    "id": "6708e88395bb0db573fa2765",
    "organization": "Frolix",
    "userName": "WeeksGood",
    "email": "weeksgood@frolix.com",
    "phoneNumber": "+234 (903) 508-3172",
    "date": "2024-08-23T12:27:45-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Bobbi Lindsey",
      "phoneNumber": "+234 (820) 520-2949",
      "emailAddress": "bobbilindsey@frolix.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "bobbilindsey@frolix.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zenolux Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WallerWinters",
      "twitter": "https://twitter.com/RandolphWeber",
      "linkedin": "https://linkedin.com/in/BoydBall"
    },
    "guarantor": {
      "fullName": "Camacho Burnett",
      "relationship": "Friend",
      "phoneNumber": "+234 (905) 517-3034",
      "email": "camachoburnett@zenolux.com"
    }
  },
  {
    "id": "6708e883d84f5498cd174652",
    "organization": "Honotron",
    "userName": "JamesDavis",
    "email": "jamesdavis@honotron.com",
    "phoneNumber": "+234 (912) 526-3422",
    "date": "2020-09-29T04:11:20-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Gina Campbell",
      "phoneNumber": "+234 (921) 484-2001",
      "emailAddress": "ginacampbell@honotron.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "ginacampbell@honotron.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Chillium Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ShafferBurgess",
      "twitter": "https://twitter.com/SusieFisher",
      "linkedin": "https://linkedin.com/in/WorkmanPittman"
    },
    "guarantor": {
      "fullName": "Fisher Stewart",
      "relationship": "Friend",
      "phoneNumber": "+234 (883) 561-2027",
      "email": "fisherstewart@chillium.com"
    }
  },
  {
    "id": "6708e883fbcdf09897166630",
    "organization": "Opticom",
    "userName": "SpencerForbes",
    "email": "spencerforbes@opticom.com",
    "phoneNumber": "+234 (858) 440-3913",
    "date": "2022-06-30T10:15:50-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Bowman Benton",
      "phoneNumber": "+234 (908) 506-2457",
      "emailAddress": "bowmanbenton@opticom.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "bowmanbenton@opticom.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Isbol Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KellyChan",
      "twitter": "https://twitter.com/GenevieveBonner",
      "linkedin": "https://linkedin.com/in/JohnMitchell"
    },
    "guarantor": {
      "fullName": "Sexton Carr",
      "relationship": "Colleague",
      "phoneNumber": "+234 (979) 423-3289",
      "email": "sextoncarr@isbol.com"
    }
  },
  {
    "id": "6708e8833a3377fb9240bdb3",
    "organization": "Datagene",
    "userName": "PaulaVelasquez",
    "email": "paulavelasquez@datagene.com",
    "phoneNumber": "+234 (949) 568-2802",
    "date": "2020-05-15T10:50:38-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Hughes Spears",
      "phoneNumber": "+234 (827) 537-2333",
      "emailAddress": "hughesspears@datagene.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "hughesspears@datagene.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Blanet Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BryantReeves",
      "twitter": "https://twitter.com/RebekahAcevedo",
      "linkedin": "https://linkedin.com/in/FieldsLewis"
    },
    "guarantor": {
      "fullName": "Ester Jordan",
      "relationship": "Family",
      "phoneNumber": "+234 (917) 559-3173",
      "email": "esterjordan@blanet.com"
    }
  },
  {
    "id": "6708e8833fa12e3b1ce06aef",
    "organization": "Futurity",
    "userName": "CarpenterPage",
    "email": "carpenterpage@futurity.com",
    "phoneNumber": "+234 (866) 416-3755",
    "date": "2023-09-24T07:18:08-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Aguilar Gentry",
      "phoneNumber": "+234 (823) 403-2154",
      "emailAddress": "aguilargentry@futurity.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "aguilargentry@futurity.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Neocent Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CantrellNoel",
      "twitter": "https://twitter.com/WatersCharles",
      "linkedin": "https://linkedin.com/in/IrwinEllison"
    },
    "guarantor": {
      "fullName": "Yvette Maldonado",
      "relationship": "Other",
      "phoneNumber": "+234 (908) 441-2440",
      "email": "yvettemaldonado@neocent.com"
    }
  },
  {
    "id": "6708e883b3a00953757e745f",
    "organization": "Rugstars",
    "userName": "BridgetteHall",
    "email": "bridgettehall@rugstars.com",
    "phoneNumber": "+234 (841) 511-2768",
    "date": "2024-06-18T10:45:43-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Alexis Lynn",
      "phoneNumber": "+234 (863) 503-3322",
      "emailAddress": "alexislynn@rugstars.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "alexislynn@rugstars.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Hinway Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AlineMcpherson",
      "twitter": "https://twitter.com/PetersonPetty",
      "linkedin": "https://linkedin.com/in/RoblesRice"
    },
    "guarantor": {
      "fullName": "Elba Tucker",
      "relationship": "Friend",
      "phoneNumber": "+234 (814) 434-3145",
      "email": "elbatucker@hinway.com"
    }
  },
  {
    "id": "6708e8833cd4db9c041a04bf",
    "organization": "Gogol",
    "userName": "CelinaNguyen",
    "email": "celinanguyen@gogol.com",
    "phoneNumber": "+234 (967) 545-3251",
    "date": "2020-04-07T10:18:09-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Patrick Quinn",
      "phoneNumber": "+234 (902) 432-3334",
      "emailAddress": "patrickquinn@gogol.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "patrickquinn@gogol.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Avit Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/PayneChen",
      "twitter": "https://twitter.com/PattiShaffer",
      "linkedin": "https://linkedin.com/in/EttaFoster"
    },
    "guarantor": {
      "fullName": "Blackwell Olson",
      "relationship": "Colleague",
      "phoneNumber": "+234 (862) 433-2642",
      "email": "blackwellolson@avit.com"
    }
  },
  {
    "id": "6708e88396dcdc5d73675218",
    "organization": "Signidyne",
    "userName": "ElnoraMcdowell",
    "email": "elnoramcdowell@signidyne.com",
    "phoneNumber": "+234 (892) 457-2913",
    "date": "2022-04-19T05:24:17-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Megan Mcgowan",
      "phoneNumber": "+234 (937) 411-2893",
      "emailAddress": "meganmcgowan@signidyne.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "meganmcgowan@signidyne.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zilphur Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EileenCote",
      "twitter": "https://twitter.com/BarrCarroll",
      "linkedin": "https://linkedin.com/in/MinervaPratt"
    },
    "guarantor": {
      "fullName": "Olsen Haney",
      "relationship": "Colleague",
      "phoneNumber": "+234 (819) 473-2178",
      "email": "olsenhaney@zilphur.com"
    }
  },
  {
    "id": "6708e883402474ed40919430",
    "organization": "Halap",
    "userName": "DianaArmstrong",
    "email": "dianaarmstrong@halap.com",
    "phoneNumber": "+234 (921) 523-2967",
    "date": "2022-02-22T05:36:14-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Caroline Watts",
      "phoneNumber": "+234 (920) 568-2323",
      "emailAddress": "carolinewatts@halap.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "carolinewatts@halap.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Venoflex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/GuthrieOrtega",
      "twitter": "https://twitter.com/AileenRoman",
      "linkedin": "https://linkedin.com/in/AgnesOlsen"
    },
    "guarantor": {
      "fullName": "Donna Pitts",
      "relationship": "Family",
      "phoneNumber": "+234 (943) 529-2675",
      "email": "donnapitts@venoflex.com"
    }
  },
  {
    "id": "6708e883212f318260d2f426",
    "organization": "Orbixtar",
    "userName": "AnaChurch",
    "email": "anachurch@orbixtar.com",
    "phoneNumber": "+234 (877) 575-2765",
    "date": "2020-05-26T08:16:21-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Gray Browning",
      "phoneNumber": "+234 (966) 405-2009",
      "emailAddress": "graybrowning@orbixtar.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "graybrowning@orbixtar.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Supportal Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ChristensenGarcia",
      "twitter": "https://twitter.com/MerrittBuckner",
      "linkedin": "https://linkedin.com/in/AbigailGould"
    },
    "guarantor": {
      "fullName": "Mosley Sawyer",
      "relationship": "Colleague",
      "phoneNumber": "+234 (993) 465-3527",
      "email": "mosleysawyer@supportal.com"
    }
  },
  {
    "id": "6708e88398ff9b8cc79225af",
    "organization": "Intrawear",
    "userName": "SandovalSears",
    "email": "sandovalsears@intrawear.com",
    "phoneNumber": "+234 (996) 467-3126",
    "date": "2024-10-11T09:08:35-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Dean William",
      "phoneNumber": "+234 (914) 440-2391",
      "emailAddress": "deanwilliam@intrawear.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "deanwilliam@intrawear.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Solaren Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TeriFrench",
      "twitter": "https://twitter.com/CarolinaMccarthy",
      "linkedin": "https://linkedin.com/in/OconnorKelly"
    },
    "guarantor": {
      "fullName": "Camille Oneal",
      "relationship": "Colleague",
      "phoneNumber": "+234 (908) 530-2460",
      "email": "camilleoneal@solaren.com"
    }
  },
  {
    "id": "6708e883600c0fe3bd9d2c72",
    "organization": "Exovent",
    "userName": "GarrisonMcleod",
    "email": "garrisonmcleod@exovent.com",
    "phoneNumber": "+234 (857) 494-3701",
    "date": "2024-05-20T05:13:02-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Katie Sheppard",
      "phoneNumber": "+234 (871) 434-3364",
      "emailAddress": "katiesheppard@exovent.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "katiesheppard@exovent.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Ezent Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EuniceTodd",
      "twitter": "https://twitter.com/RyanPowers",
      "linkedin": "https://linkedin.com/in/HallieFranklin"
    },
    "guarantor": {
      "fullName": "Blanchard Tanner",
      "relationship": "Friend",
      "phoneNumber": "+234 (810) 487-3490",
      "email": "blanchardtanner@ezent.com"
    }
  },
  {
    "id": "6708e883dcfa58b26a24b463",
    "organization": "Bleeko",
    "userName": "MarcieWilliams",
    "email": "marciewilliams@bleeko.com",
    "phoneNumber": "+234 (876) 410-2547",
    "date": "2022-05-13T07:27:43-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Sally Gallagher",
      "phoneNumber": "+234 (873) 490-3060",
      "emailAddress": "sallygallagher@bleeko.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "sallygallagher@bleeko.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zytrac Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/VirginiaPetersen",
      "twitter": "https://twitter.com/BranchPate",
      "linkedin": "https://linkedin.com/in/NadineValenzuela"
    },
    "guarantor": {
      "fullName": "Beverly Rivas",
      "relationship": "Friend",
      "phoneNumber": "+234 (987) 575-2542",
      "email": "beverlyrivas@zytrac.com"
    }
  },
  {
    "id": "6708e8834aebb79404952f3c",
    "organization": "Urbanshee",
    "userName": "RobertBrown",
    "email": "robertbrown@urbanshee.com",
    "phoneNumber": "+234 (929) 598-3111",
    "date": "2022-12-09T04:40:37-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Cervantes Cooley",
      "phoneNumber": "+234 (960) 513-2467",
      "emailAddress": "cervantescooley@urbanshee.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "cervantescooley@urbanshee.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Farmage Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ShanaThornton",
      "twitter": "https://twitter.com/PeckHutchinson",
      "linkedin": "https://linkedin.com/in/CurtisPotter"
    },
    "guarantor": {
      "fullName": "Trisha Clark",
      "relationship": "Family",
      "phoneNumber": "+234 (978) 441-2775",
      "email": "trishaclark@farmage.com"
    }
  },
  {
    "id": "6708e883c8323ee257f75467",
    "organization": "Koogle",
    "userName": "WilmaDavid",
    "email": "wilmadavid@koogle.com",
    "phoneNumber": "+234 (928) 500-2138",
    "date": "2021-09-04T08:57:40-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Wendy Peters",
      "phoneNumber": "+234 (866) 411-3197",
      "emailAddress": "wendypeters@koogle.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "wendypeters@koogle.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Suretech Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ParrishLeonard",
      "twitter": "https://twitter.com/AlvaradoCox",
      "linkedin": "https://linkedin.com/in/AvaGoodman"
    },
    "guarantor": {
      "fullName": "Tara Estes",
      "relationship": "Other",
      "phoneNumber": "+234 (994) 544-2464",
      "email": "taraestes@suretech.com"
    }
  },
  {
    "id": "6708e8835ace677852ebe703",
    "organization": "Magnafone",
    "userName": "ChristineWiggins",
    "email": "christinewiggins@magnafone.com",
    "phoneNumber": "+234 (819) 559-3080",
    "date": "2024-01-31T08:53:39-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Shari Simon",
      "phoneNumber": "+234 (901) 530-2625",
      "emailAddress": "sharisimon@magnafone.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "sharisimon@magnafone.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Shadease Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GuyCross",
      "twitter": "https://twitter.com/CraigRosario",
      "linkedin": "https://linkedin.com/in/JohnstonColon"
    },
    "guarantor": {
      "fullName": "Rojas Castaneda",
      "relationship": "Family",
      "phoneNumber": "+234 (812) 485-3128",
      "email": "rojascastaneda@shadease.com"
    }
  },
  {
    "id": "6708e88380591fdadd059b25",
    "organization": "Intradisk",
    "userName": "GarnerCook",
    "email": "garnercook@intradisk.com",
    "phoneNumber": "+234 (846) 468-3033",
    "date": "2024-02-21T05:43:38-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Bernadette Raymond",
      "phoneNumber": "+234 (882) 469-3066",
      "emailAddress": "bernadetteraymond@intradisk.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "bernadetteraymond@intradisk.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Comstar Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CainVincent",
      "twitter": "https://twitter.com/AltheaDuke",
      "linkedin": "https://linkedin.com/in/RuthSteele"
    },
    "guarantor": {
      "fullName": "Angelina Conrad",
      "relationship": "Family",
      "phoneNumber": "+234 (861) 504-3299",
      "email": "angelinaconrad@comstar.com"
    }
  },
  {
    "id": "6708e883b3b46c90a132bd99",
    "organization": "Geostele",
    "userName": "MayVelazquez",
    "email": "mayvelazquez@geostele.com",
    "phoneNumber": "+234 (956) 400-3543",
    "date": "2022-07-16T02:09:10-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Holt Potts",
      "phoneNumber": "+234 (886) 471-3454",
      "emailAddress": "holtpotts@geostele.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "holtpotts@geostele.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Collaire Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TanyaReilly",
      "twitter": "https://twitter.com/CharmaineTalley",
      "linkedin": "https://linkedin.com/in/DolliePickett"
    },
    "guarantor": {
      "fullName": "Josie Sweet",
      "relationship": "Friend",
      "phoneNumber": "+234 (905) 412-2274",
      "email": "josiesweet@collaire.com"
    }
  },
  {
    "id": "6708e883556fed3454f097d0",
    "organization": "Elemantra",
    "userName": "ButlerWarren",
    "email": "butlerwarren@elemantra.com",
    "phoneNumber": "+234 (958) 419-2377",
    "date": "2023-02-17T06:49:11-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Pearl Nielsen",
      "phoneNumber": "+234 (958) 529-3540",
      "emailAddress": "pearlnielsen@elemantra.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "pearlnielsen@elemantra.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zilla Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RitaBowen",
      "twitter": "https://twitter.com/VanceWaller",
      "linkedin": "https://linkedin.com/in/KaseyHarmon"
    },
    "guarantor": {
      "fullName": "Jolene Harrell",
      "relationship": "Colleague",
      "phoneNumber": "+234 (897) 501-2589",
      "email": "joleneharrell@zilla.com"
    }
  },
  {
    "id": "6708e883340fc1863eadf65e",
    "organization": "Zaya",
    "userName": "WendiRandall",
    "email": "wendirandall@zaya.com",
    "phoneNumber": "+234 (921) 537-3225",
    "date": "2020-02-17T11:34:54-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Boyer Daniel",
      "phoneNumber": "+234 (905) 586-2346",
      "emailAddress": "boyerdaniel@zaya.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "boyerdaniel@zaya.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Aquasseur Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DillardShaw",
      "twitter": "https://twitter.com/RosaliePearson",
      "linkedin": "https://linkedin.com/in/OneillMcdaniel"
    },
    "guarantor": {
      "fullName": "Sophie Mills",
      "relationship": "Other",
      "phoneNumber": "+234 (938) 530-2012",
      "email": "sophiemills@aquasseur.com"
    }
  },
  {
    "id": "6708e8839b751ba44d891462",
    "organization": "Comvene",
    "userName": "MavisLawrence",
    "email": "mavislawrence@comvene.com",
    "phoneNumber": "+234 (954) 415-2730",
    "date": "2023-04-09T06:30:57-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Moore Fox",
      "phoneNumber": "+234 (902) 475-2460",
      "emailAddress": "moorefox@comvene.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "moorefox@comvene.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Assistia Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LornaWatkins",
      "twitter": "https://twitter.com/CoteConner",
      "linkedin": "https://linkedin.com/in/ConcettaBrady"
    },
    "guarantor": {
      "fullName": "Miles Becker",
      "relationship": "Other",
      "phoneNumber": "+234 (933) 545-2844",
      "email": "milesbecker@assistia.com"
    }
  },
  {
    "id": "6708e8832bbbe3e83758094d",
    "organization": "Terrago",
    "userName": "MaddenWilliamson",
    "email": "maddenwilliamson@terrago.com",
    "phoneNumber": "+234 (877) 517-3318",
    "date": "2022-04-22T01:46:06-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Lesa Joseph",
      "phoneNumber": "+234 (935) 527-3291",
      "emailAddress": "lesajoseph@terrago.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "lesajoseph@terrago.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Euron Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BergHopper",
      "twitter": "https://twitter.com/LenoreHarrison",
      "linkedin": "https://linkedin.com/in/CharlesHendrix"
    },
    "guarantor": {
      "fullName": "Desiree Stevens",
      "relationship": "Family",
      "phoneNumber": "+234 (938) 432-2915",
      "email": "desireestevens@euron.com"
    }
  },
  {
    "id": "6708e883b8ecbd084ccbd7e2",
    "organization": "Bristo",
    "userName": "CookeKirby",
    "email": "cookekirby@bristo.com",
    "phoneNumber": "+234 (830) 472-3324",
    "date": "2024-06-03T06:06:52-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Webster Holt",
      "phoneNumber": "+234 (908) 407-2860",
      "emailAddress": "websterholt@bristo.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "websterholt@bristo.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Proflex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KayeGross",
      "twitter": "https://twitter.com/AddieRodriguez",
      "linkedin": "https://linkedin.com/in/BellPreston"
    },
    "guarantor": {
      "fullName": "Gabriela Crosby",
      "relationship": "Colleague",
      "phoneNumber": "+234 (897) 483-2065",
      "email": "gabrielacrosby@proflex.com"
    }
  },
  {
    "id": "6708e88387b319ecff189ee6",
    "organization": "Entroflex",
    "userName": "TabithaVelez",
    "email": "tabithavelez@entroflex.com",
    "phoneNumber": "+234 (980) 551-2372",
    "date": "2024-04-18T05:42:13-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Lucas Walker",
      "phoneNumber": "+234 (943) 532-3084",
      "emailAddress": "lucaswalker@entroflex.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "lucaswalker@entroflex.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Gaptec Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CareyLucas",
      "twitter": "https://twitter.com/BlankenshipGaines",
      "linkedin": "https://linkedin.com/in/TownsendAcosta"
    },
    "guarantor": {
      "fullName": "Yvonne Patel",
      "relationship": "Other",
      "phoneNumber": "+234 (925) 471-2106",
      "email": "yvonnepatel@gaptec.com"
    }
  },
  {
    "id": "6708e883d10bb1af3fdd0876",
    "organization": "Quarex",
    "userName": "KrisCantu",
    "email": "kriscantu@quarex.com",
    "phoneNumber": "+234 (862) 425-2377",
    "date": "2024-08-05T02:50:31-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Bertie Hawkins",
      "phoneNumber": "+234 (842) 487-3086",
      "emailAddress": "bertiehawkins@quarex.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "bertiehawkins@quarex.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Acusage Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LeannAyers",
      "twitter": "https://twitter.com/WinifredWitt",
      "linkedin": "https://linkedin.com/in/ParkerRodgers"
    },
    "guarantor": {
      "fullName": "Rush Herrera",
      "relationship": "Colleague",
      "phoneNumber": "+234 (813) 504-2405",
      "email": "rushherrera@acusage.com"
    }
  },
  {
    "id": "6708e8833704571a0fb949f7",
    "organization": "Cujo",
    "userName": "FreemanRiggs",
    "email": "freemanriggs@cujo.com",
    "phoneNumber": "+234 (963) 472-2217",
    "date": "2020-02-23T09:55:36-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Dee Owens",
      "phoneNumber": "+234 (877) 574-2986",
      "emailAddress": "deeowens@cujo.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "deeowens@cujo.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Papricut Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AnnmarieBond",
      "twitter": "https://twitter.com/DebbieFernandez",
      "linkedin": "https://linkedin.com/in/SloanCase"
    },
    "guarantor": {
      "fullName": "England Lawson",
      "relationship": "Colleague",
      "phoneNumber": "+234 (828) 495-2896",
      "email": "englandlawson@papricut.com"
    }
  },
  {
    "id": "6708e88336b94c11345f7ab2",
    "organization": "Bugsall",
    "userName": "LizzieRush",
    "email": "lizzierush@bugsall.com",
    "phoneNumber": "+234 (896) 594-2466",
    "date": "2024-08-01T04:45:45-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Shawna Skinner",
      "phoneNumber": "+234 (962) 432-2179",
      "emailAddress": "shawnaskinner@bugsall.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "shawnaskinner@bugsall.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Franscene Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/NewmanBullock",
      "twitter": "https://twitter.com/ToniStevenson",
      "linkedin": "https://linkedin.com/in/BarnettNoble"
    },
    "guarantor": {
      "fullName": "Stevenson Hobbs",
      "relationship": "Friend",
      "phoneNumber": "+234 (850) 432-3927",
      "email": "stevensonhobbs@franscene.com"
    }
  },
  {
    "id": "6708e883e7df86627ac80abf",
    "organization": "Handshake",
    "userName": "EdithFranco",
    "email": "edithfranco@handshake.com",
    "phoneNumber": "+234 (894) 437-3988",
    "date": "2024-05-03T07:30:39-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Meyers Wells",
      "phoneNumber": "+234 (886) 522-2839",
      "emailAddress": "meyerswells@handshake.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "meyerswells@handshake.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Tourmania Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MarleneYates",
      "twitter": "https://twitter.com/JanaGeorge",
      "linkedin": "https://linkedin.com/in/ObrienOconnor"
    },
    "guarantor": {
      "fullName": "Kendra Mejia",
      "relationship": "Friend",
      "phoneNumber": "+234 (937) 424-3150",
      "email": "kendramejia@tourmania.com"
    }
  },
  {
    "id": "6708e883dda512937ab110fb",
    "organization": "Infotrips",
    "userName": "LetitiaHead",
    "email": "letitiahead@infotrips.com",
    "phoneNumber": "+234 (845) 517-2581",
    "date": "2024-01-19T03:39:46-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Kellie Norton",
      "phoneNumber": "+234 (937) 597-2504",
      "emailAddress": "kellienorton@infotrips.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "kellienorton@infotrips.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Andershun Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BaldwinLevy",
      "twitter": "https://twitter.com/CathrynCaldwell",
      "linkedin": "https://linkedin.com/in/ChelseaGrimes"
    },
    "guarantor": {
      "fullName": "Florence Calderon",
      "relationship": "Friend",
      "phoneNumber": "+234 (805) 474-3784",
      "email": "florencecalderon@andershun.com"
    }
  },
  {
    "id": "6708e8833acfcc5f4423aa7f",
    "organization": "Digigen",
    "userName": "HollieMercado",
    "email": "holliemercado@digigen.com",
    "phoneNumber": "+234 (843) 557-3007",
    "date": "2023-01-24T06:10:56-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Sonja Cervantes",
      "phoneNumber": "+234 (848) 438-2436",
      "emailAddress": "sonjacervantes@digigen.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "sonjacervantes@digigen.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Orbean Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RoslynStanley",
      "twitter": "https://twitter.com/BeckerHenderson",
      "linkedin": "https://linkedin.com/in/LeannaTownsend"
    },
    "guarantor": {
      "fullName": "Clayton Atkins",
      "relationship": "Family",
      "phoneNumber": "+234 (957) 590-3685",
      "email": "claytonatkins@orbean.com"
    }
  },
  {
    "id": "6708e883df17a98af4b65c0c",
    "organization": "Ecratic",
    "userName": "KristinOsborne",
    "email": "kristinosborne@ecratic.com",
    "phoneNumber": "+234 (863) 520-2810",
    "date": "2023-05-29T12:59:57-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Nguyen Clarke",
      "phoneNumber": "+234 (952) 438-3086",
      "emailAddress": "nguyenclarke@ecratic.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "nguyenclarke@ecratic.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Confrenzy Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ChrisLane",
      "twitter": "https://twitter.com/AimeeBaird",
      "linkedin": "https://linkedin.com/in/ReynoldsMorrow"
    },
    "guarantor": {
      "fullName": "Lambert Carey",
      "relationship": "Friend",
      "phoneNumber": "+234 (888) 539-2823",
      "email": "lambertcarey@confrenzy.com"
    }
  },
  {
    "id": "6708e883cfcb06744c50d255",
    "organization": "Marketoid",
    "userName": "HouseParks",
    "email": "houseparks@marketoid.com",
    "phoneNumber": "+234 (915) 457-3306",
    "date": "2023-10-09T01:37:24-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Dina Hale",
      "phoneNumber": "+234 (903) 503-2718",
      "emailAddress": "dinahale@marketoid.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "dinahale@marketoid.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Deminimum Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ElvaStrong",
      "twitter": "https://twitter.com/HolcombHouse",
      "linkedin": "https://linkedin.com/in/EmmaDiaz"
    },
    "guarantor": {
      "fullName": "Corinne Kemp",
      "relationship": "Family",
      "phoneNumber": "+234 (805) 514-2120",
      "email": "corinnekemp@deminimum.com"
    }
  },
  {
    "id": "6708e883dd4007812ef944ec",
    "organization": "Manufact",
    "userName": "HaneyJarvis",
    "email": "haneyjarvis@manufact.com",
    "phoneNumber": "+234 (836) 573-3114",
    "date": "2022-12-28T07:48:05-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Maureen Allison",
      "phoneNumber": "+234 (841) 568-3857",
      "emailAddress": "maureenallison@manufact.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "maureenallison@manufact.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Sequitur Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/StarkMartin",
      "twitter": "https://twitter.com/KaylaMoore",
      "linkedin": "https://linkedin.com/in/MyrnaZimmerman"
    },
    "guarantor": {
      "fullName": "Latasha Kramer",
      "relationship": "Colleague",
      "phoneNumber": "+234 (965) 447-2900",
      "email": "latashakramer@sequitur.com"
    }
  },
  {
    "id": "6708e883b201d3386e113ff9",
    "organization": "Comtours",
    "userName": "DelacruzWeeks",
    "email": "delacruzweeks@comtours.com",
    "phoneNumber": "+234 (911) 546-3528",
    "date": "2024-09-12T10:41:21-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Lynda Frank",
      "phoneNumber": "+234 (983) 570-3294",
      "emailAddress": "lyndafrank@comtours.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "lyndafrank@comtours.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Springbee Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DonaBernard",
      "twitter": "https://twitter.com/VickyFerguson",
      "linkedin": "https://linkedin.com/in/RichardBarry"
    },
    "guarantor": {
      "fullName": "Connie Villarreal",
      "relationship": "Family",
      "phoneNumber": "+234 (987) 541-2155",
      "email": "connievillarreal@springbee.com"
    }
  },
  {
    "id": "6708e883b23dc96811956441",
    "organization": "Velos",
    "userName": "CassieGuzman",
    "email": "cassieguzman@velos.com",
    "phoneNumber": "+234 (958) 419-3832",
    "date": "2023-05-29T04:00:19-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Juliana Morse",
      "phoneNumber": "+234 (893) 469-2812",
      "emailAddress": "julianamorse@velos.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "julianamorse@velos.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Sulfax Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/StellaHanson",
      "twitter": "https://twitter.com/FrancineBowman",
      "linkedin": "https://linkedin.com/in/ShannonCherry"
    },
    "guarantor": {
      "fullName": "Tanisha Bass",
      "relationship": "Colleague",
      "phoneNumber": "+234 (973) 446-3522",
      "email": "tanishabass@sulfax.com"
    }
  },
  {
    "id": "6708e883d40952e4f3064672",
    "organization": "Omnigog",
    "userName": "GoodMcbride",
    "email": "goodmcbride@omnigog.com",
    "phoneNumber": "+234 (950) 515-3565",
    "date": "2020-07-10T09:17:45-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Amelia Soto",
      "phoneNumber": "+234 (974) 551-3665",
      "emailAddress": "ameliasoto@omnigog.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "ameliasoto@omnigog.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Tripsch Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AishaAustin",
      "twitter": "https://twitter.com/BarlowMckinney",
      "linkedin": "https://linkedin.com/in/ColonLeach"
    },
    "guarantor": {
      "fullName": "Potter Wilkerson",
      "relationship": "Family",
      "phoneNumber": "+234 (883) 412-2311",
      "email": "potterwilkerson@tripsch.com"
    }
  },
  {
    "id": "6708e88329b995ecfd4d3966",
    "organization": "Proxsoft",
    "userName": "AcevedoLuna",
    "email": "acevedoluna@proxsoft.com",
    "phoneNumber": "+234 (815) 488-3212",
    "date": "2020-01-14T08:30:11-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Rivas Aguilar",
      "phoneNumber": "+234 (969) 467-2308",
      "emailAddress": "rivasaguilar@proxsoft.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "rivasaguilar@proxsoft.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Puria Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KristenJennings",
      "twitter": "https://twitter.com/LeanneCarson",
      "linkedin": "https://linkedin.com/in/LaraDrake"
    },
    "guarantor": {
      "fullName": "Marian Gibson",
      "relationship": "Other",
      "phoneNumber": "+234 (803) 573-3216",
      "email": "mariangibson@puria.com"
    }
  },
  {
    "id": "6708e8838611ed77963027c3",
    "organization": "Miracula",
    "userName": "GlennSalas",
    "email": "glennsalas@miracula.com",
    "phoneNumber": "+234 (822) 560-3667",
    "date": "2020-10-02T12:32:32-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Madelyn Wolf",
      "phoneNumber": "+234 (886) 542-2572",
      "emailAddress": "madelynwolf@miracula.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "madelynwolf@miracula.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Yurture Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MitziDunn",
      "twitter": "https://twitter.com/YoungSaunders",
      "linkedin": "https://linkedin.com/in/GlassBenson"
    },
    "guarantor": {
      "fullName": "Kaitlin Rojas",
      "relationship": "Friend",
      "phoneNumber": "+234 (851) 435-3122",
      "email": "kaitlinrojas@yurture.com"
    }
  },
  {
    "id": "6708e883b2b30525ad0c1100",
    "organization": "Zeam",
    "userName": "DeidreWilson",
    "email": "deidrewilson@zeam.com",
    "phoneNumber": "+234 (846) 573-2146",
    "date": "2022-03-11T08:09:17-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Frieda Fitzpatrick",
      "phoneNumber": "+234 (965) 576-2898",
      "emailAddress": "friedafitzpatrick@zeam.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "friedafitzpatrick@zeam.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Coriander Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WilliamsonBurns",
      "twitter": "https://twitter.com/MullinsGreene",
      "linkedin": "https://linkedin.com/in/JacobsonMiller"
    },
    "guarantor": {
      "fullName": "Mclaughlin Robertson",
      "relationship": "Family",
      "phoneNumber": "+234 (856) 537-2265",
      "email": "mclaughlinrobertson@coriander.com"
    }
  },
  {
    "id": "6708e883805af100875df1e5",
    "organization": "Tellifly",
    "userName": "LidiaDurham",
    "email": "lidiadurham@tellifly.com",
    "phoneNumber": "+234 (900) 592-3024",
    "date": "2020-08-27T02:07:51-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Floyd Mccray",
      "phoneNumber": "+234 (871) 523-3488",
      "emailAddress": "floydmccray@tellifly.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "floydmccray@tellifly.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Rubadub Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FosterKelley",
      "twitter": "https://twitter.com/ChenHernandez",
      "linkedin": "https://linkedin.com/in/MatildaDavidson"
    },
    "guarantor": {
      "fullName": "Mcfarland Rivers",
      "relationship": "Colleague",
      "phoneNumber": "+234 (908) 485-3761",
      "email": "mcfarlandrivers@rubadub.com"
    }
  },
  {
    "id": "6708e8833c3c1ecd895bd5b8",
    "organization": "Solgan",
    "userName": "ChaneyBarnes",
    "email": "chaneybarnes@solgan.com",
    "phoneNumber": "+234 (802) 516-3876",
    "date": "2021-10-19T10:28:55-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Cohen Blankenship",
      "phoneNumber": "+234 (967) 412-2612",
      "emailAddress": "cohenblankenship@solgan.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "cohenblankenship@solgan.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Digitalus Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KnightTorres",
      "twitter": "https://twitter.com/MillerBerg",
      "linkedin": "https://linkedin.com/in/SheltonAbbott"
    },
    "guarantor": {
      "fullName": "Colette Nixon",
      "relationship": "Family",
      "phoneNumber": "+234 (840) 449-3921",
      "email": "colettenixon@digitalus.com"
    }
  },
  {
    "id": "6708e8835b4ed9e58fd11455",
    "organization": "Emoltra",
    "userName": "IdaBurks",
    "email": "idaburks@emoltra.com",
    "phoneNumber": "+234 (895) 492-2645",
    "date": "2022-06-20T08:39:26-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Carmella Powell",
      "phoneNumber": "+234 (895) 565-2779",
      "emailAddress": "carmellapowell@emoltra.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "carmellapowell@emoltra.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Artworlds Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/EarlineWorkman",
      "twitter": "https://twitter.com/MoniqueGreer",
      "linkedin": "https://linkedin.com/in/NikkiWeaver"
    },
    "guarantor": {
      "fullName": "Sonya Contreras",
      "relationship": "Friend",
      "phoneNumber": "+234 (850) 558-3957",
      "email": "sonyacontreras@artworlds.com"
    }
  },
  {
    "id": "6708e883c826d67d846768d7",
    "organization": "Uniworld",
    "userName": "HillTravis",
    "email": "hilltravis@uniworld.com",
    "phoneNumber": "+234 (904) 443-3614",
    "date": "2022-05-10T04:27:13-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Jordan Walsh",
      "phoneNumber": "+234 (822) 531-3958",
      "emailAddress": "jordanwalsh@uniworld.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "jordanwalsh@uniworld.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Harmoney Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HewittMcguire",
      "twitter": "https://twitter.com/JewelLevine",
      "linkedin": "https://linkedin.com/in/PenaWilkins"
    },
    "guarantor": {
      "fullName": "Terrie Meyers",
      "relationship": "Colleague",
      "phoneNumber": "+234 (920) 565-2175",
      "email": "terriemeyers@harmoney.com"
    }
  },
  {
    "id": "6708e883503bef7c24d982c8",
    "organization": "Polaria",
    "userName": "EugeniaBoone",
    "email": "eugeniaboone@polaria.com",
    "phoneNumber": "+234 (960) 493-2784",
    "date": "2021-02-16T01:23:59-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Hood Hurley",
      "phoneNumber": "+234 (868) 524-3484",
      "emailAddress": "hoodhurley@polaria.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "hoodhurley@polaria.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Recritube Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/OrtizDejesus",
      "twitter": "https://twitter.com/HeadAyala",
      "linkedin": "https://linkedin.com/in/SteinRussell"
    },
    "guarantor": {
      "fullName": "Scott Hopkins",
      "relationship": "Colleague",
      "phoneNumber": "+234 (901) 578-3515",
      "email": "scotthopkins@recritube.com"
    }
  },
  {
    "id": "6708e88311551af550d49406",
    "organization": "Slofast",
    "userName": "FloresHart",
    "email": "floreshart@slofast.com",
    "phoneNumber": "+234 (822) 441-2404",
    "date": "2020-02-14T01:13:12-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Simpson Dunlap",
      "phoneNumber": "+234 (882) 549-3734",
      "emailAddress": "simpsondunlap@slofast.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "simpsondunlap@slofast.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Vixo Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GlennaJoyner",
      "twitter": "https://twitter.com/EvelynMarquez",
      "linkedin": "https://linkedin.com/in/JamiStone"
    },
    "guarantor": {
      "fullName": "Willie Wyatt",
      "relationship": "Friend",
      "phoneNumber": "+234 (855) 598-3330",
      "email": "williewyatt@vixo.com"
    }
  },
  {
    "id": "6708e88389f9defac840c5fe",
    "organization": "Brainclip",
    "userName": "RaeCastillo",
    "email": "raecastillo@brainclip.com",
    "phoneNumber": "+234 (918) 506-2525",
    "date": "2021-01-23T07:55:50-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Coffey Gordon",
      "phoneNumber": "+234 (899) 481-3415",
      "emailAddress": "coffeygordon@brainclip.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "coffeygordon@brainclip.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Marvane Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CatalinaHewitt",
      "twitter": "https://twitter.com/KristyTate",
      "linkedin": "https://linkedin.com/in/ClayGutierrez"
    },
    "guarantor": {
      "fullName": "Diaz Nicholson",
      "relationship": "Friend",
      "phoneNumber": "+234 (873) 565-3970",
      "email": "diaznicholson@marvane.com"
    }
  },
  {
    "id": "6708e883e12ca32fc5975479",
    "organization": "Xerex",
    "userName": "GenevaHunter",
    "email": "genevahunter@xerex.com",
    "phoneNumber": "+234 (975) 413-2871",
    "date": "2021-08-24T12:44:52-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Kristine Barton",
      "phoneNumber": "+234 (991) 576-2818",
      "emailAddress": "kristinebarton@xerex.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "kristinebarton@xerex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Qaboos Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HeathRoach",
      "twitter": "https://twitter.com/RhodaPierce",
      "linkedin": "https://linkedin.com/in/WinnieAnthony"
    },
    "guarantor": {
      "fullName": "Luella Alston",
      "relationship": "Other",
      "phoneNumber": "+234 (849) 599-2324",
      "email": "luellaalston@qaboos.com"
    }
  },
  {
    "id": "6708e883fdb3d4689425697c",
    "organization": "Unia",
    "userName": "TravisTyler",
    "email": "travistyler@unia.com",
    "phoneNumber": "+234 (858) 501-3341",
    "date": "2021-07-23T03:37:26-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Benton Fuller",
      "phoneNumber": "+234 (927) 454-2742",
      "emailAddress": "bentonfuller@unia.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "bentonfuller@unia.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Netplax Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HopeSexton",
      "twitter": "https://twitter.com/JodyHyde",
      "linkedin": "https://linkedin.com/in/DollyPerez"
    },
    "guarantor": {
      "fullName": "Susana Jefferson",
      "relationship": "Family",
      "phoneNumber": "+234 (813) 570-3201",
      "email": "susanajefferson@netplax.com"
    }
  },
  {
    "id": "6708e883bf8c124b3f33bce8",
    "organization": "Decratex",
    "userName": "BrendaCarrillo",
    "email": "brendacarrillo@decratex.com",
    "phoneNumber": "+234 (925) 479-3014",
    "date": "2021-05-04T03:46:21-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "French Davenport",
      "phoneNumber": "+234 (921) 572-3486",
      "emailAddress": "frenchdavenport@decratex.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "frenchdavenport@decratex.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Musaphics Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TrujilloHicks",
      "twitter": "https://twitter.com/TammieRamos",
      "linkedin": "https://linkedin.com/in/RobbinsGuthrie"
    },
    "guarantor": {
      "fullName": "Hodges Rutledge",
      "relationship": "Colleague",
      "phoneNumber": "+234 (943) 489-3503",
      "email": "hodgesrutledge@musaphics.com"
    }
  },
  {
    "id": "6708e883e0a30153ee875fdd",
    "organization": "Duoflex",
    "userName": "HattieFarrell",
    "email": "hattiefarrell@duoflex.com",
    "phoneNumber": "+234 (945) 454-2225",
    "date": "2023-03-11T06:56:50-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Marsha Graham",
      "phoneNumber": "+234 (953) 589-3347",
      "emailAddress": "marshagraham@duoflex.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "marshagraham@duoflex.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Podunk Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KathrineLeblanc",
      "twitter": "https://twitter.com/HensleyClayton",
      "linkedin": "https://linkedin.com/in/HaleyGill"
    },
    "guarantor": {
      "fullName": "Castro Blackburn",
      "relationship": "Family",
      "phoneNumber": "+234 (973) 522-2290",
      "email": "castroblackburn@podunk.com"
    }
  },
  {
    "id": "6708e883c265e6f50acfe12b",
    "organization": "Apex",
    "userName": "HullAlexander",
    "email": "hullalexander@apex.com",
    "phoneNumber": "+234 (984) 551-2870",
    "date": "2022-09-19T01:57:22-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Briggs Joyce",
      "phoneNumber": "+234 (860) 445-3910",
      "emailAddress": "briggsjoyce@apex.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "briggsjoyce@apex.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Calcu Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MendezHarding",
      "twitter": "https://twitter.com/KeriVazquez",
      "linkedin": "https://linkedin.com/in/FischerKirk"
    },
    "guarantor": {
      "fullName": "Tania Justice",
      "relationship": "Family",
      "phoneNumber": "+234 (913) 425-3336",
      "email": "taniajustice@calcu.com"
    }
  },
  {
    "id": "6708e883e54cd10547bf29a3",
    "organization": "Xelegyl",
    "userName": "KatherynLivingston",
    "email": "katherynlivingston@xelegyl.com",
    "phoneNumber": "+234 (894) 468-2427",
    "date": "2024-07-26T06:54:50-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Shepherd Finch",
      "phoneNumber": "+234 (931) 441-2020",
      "emailAddress": "shepherdfinch@xelegyl.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "shepherdfinch@xelegyl.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Eyeris Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MyraStephenson",
      "twitter": "https://twitter.com/RobinSerrano",
      "linkedin": "https://linkedin.com/in/SavageBarrera"
    },
    "guarantor": {
      "fullName": "Aurora Weiss",
      "relationship": "Other",
      "phoneNumber": "+234 (856) 600-3303",
      "email": "auroraweiss@eyeris.com"
    }
  },
  {
    "id": "6708e883147f0f45d7a3acdb",
    "organization": "Fitcore",
    "userName": "GildaLara",
    "email": "gildalara@fitcore.com",
    "phoneNumber": "+234 (802) 438-2046",
    "date": "2021-04-11T03:10:00-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Sheri Lowery",
      "phoneNumber": "+234 (968) 496-3446",
      "emailAddress": "sherilowery@fitcore.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "sherilowery@fitcore.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zensus Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MarcyWarner",
      "twitter": "https://twitter.com/AdamsHodges",
      "linkedin": "https://linkedin.com/in/SchultzSosa"
    },
    "guarantor": {
      "fullName": "Buck Logan",
      "relationship": "Colleague",
      "phoneNumber": "+234 (816) 497-2552",
      "email": "bucklogan@zensus.com"
    }
  },
  {
    "id": "6708e883b0c1a948ef3be1aa",
    "organization": "Cemention",
    "userName": "EmiliaWhitfield",
    "email": "emiliawhitfield@cemention.com",
    "phoneNumber": "+234 (834) 449-3367",
    "date": "2020-10-03T05:34:59-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Wanda Santiago",
      "phoneNumber": "+234 (804) 539-3973",
      "emailAddress": "wandasantiago@cemention.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "wandasantiago@cemention.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Biotica Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KariHudson",
      "twitter": "https://twitter.com/DianneSimpson",
      "linkedin": "https://linkedin.com/in/JohannaRamsey"
    },
    "guarantor": {
      "fullName": "Wagner Santos",
      "relationship": "Other",
      "phoneNumber": "+234 (834) 405-3855",
      "email": "wagnersantos@biotica.com"
    }
  },
  {
    "id": "6708e883446954618df0c0d9",
    "organization": "Utara",
    "userName": "CherryCortez",
    "email": "cherrycortez@utara.com",
    "phoneNumber": "+234 (809) 530-3097",
    "date": "2021-09-14T09:39:52-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Noelle Glass",
      "phoneNumber": "+234 (896) 524-3814",
      "emailAddress": "noelleglass@utara.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "noelleglass@utara.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Boink Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EthelBradshaw",
      "twitter": "https://twitter.com/BowersHull",
      "linkedin": "https://linkedin.com/in/MaggieCoffey"
    },
    "guarantor": {
      "fullName": "Carr Dillon",
      "relationship": "Other",
      "phoneNumber": "+234 (982) 559-2443",
      "email": "carrdillon@boink.com"
    }
  },
  {
    "id": "6708e8831ed1044b25702945",
    "organization": "Telepark",
    "userName": "PattonGlover",
    "email": "pattonglover@telepark.com",
    "phoneNumber": "+234 (893) 578-2301",
    "date": "2021-06-14T12:33:15-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Douglas Beasley",
      "phoneNumber": "+234 (922) 593-3661",
      "emailAddress": "douglasbeasley@telepark.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "douglasbeasley@telepark.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Securia Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/PittsBrock",
      "twitter": "https://twitter.com/SandersMurphy",
      "linkedin": "https://linkedin.com/in/MurphyPeterson"
    },
    "guarantor": {
      "fullName": "Leola Calhoun",
      "relationship": "Family",
      "phoneNumber": "+234 (801) 503-2835",
      "email": "leolacalhoun@securia.com"
    }
  },
  {
    "id": "6708e883d8ac0c01481939d5",
    "organization": "Undertap",
    "userName": "MonaBean",
    "email": "monabean@undertap.com",
    "phoneNumber": "+234 (802) 405-2012",
    "date": "2022-05-05T08:37:48-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Lynnette Reynolds",
      "phoneNumber": "+234 (836) 531-3629",
      "emailAddress": "lynnettereynolds@undertap.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "lynnettereynolds@undertap.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Gazak Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/EvangelineBryan",
      "twitter": "https://twitter.com/JohnsonStokes",
      "linkedin": "https://linkedin.com/in/CarleneLowe"
    },
    "guarantor": {
      "fullName": "Tyson Gillespie",
      "relationship": "Other",
      "phoneNumber": "+234 (827) 411-2947",
      "email": "tysongillespie@gazak.com"
    }
  },
  {
    "id": "6708e883ad1cbca4c3573529",
    "organization": "Sealoud",
    "userName": "JanellValdez",
    "email": "janellvaldez@sealoud.com",
    "phoneNumber": "+234 (918) 492-2478",
    "date": "2021-06-18T06:11:34-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Helen Moses",
      "phoneNumber": "+234 (874) 490-2772",
      "emailAddress": "helenmoses@sealoud.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "helenmoses@sealoud.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Plasmos Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HartWalter",
      "twitter": "https://twitter.com/GretchenLangley",
      "linkedin": "https://linkedin.com/in/MorinHayes"
    },
    "guarantor": {
      "fullName": "Bianca Gregory",
      "relationship": "Colleague",
      "phoneNumber": "+234 (954) 424-3622",
      "email": "biancagregory@plasmos.com"
    }
  },
  {
    "id": "6708e883868cc2b39b2bb764",
    "organization": "Exospeed",
    "userName": "MableUnderwood",
    "email": "mableunderwood@exospeed.com",
    "phoneNumber": "+234 (881) 585-3860",
    "date": "2024-08-20T05:05:00-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Martinez Heath",
      "phoneNumber": "+234 (906) 470-3501",
      "emailAddress": "martinezheath@exospeed.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "martinezheath@exospeed.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Medicroix Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RobertsEaton",
      "twitter": "https://twitter.com/MontoyaMalone",
      "linkedin": "https://linkedin.com/in/CasandraGiles"
    },
    "guarantor": {
      "fullName": "Dotson Barr",
      "relationship": "Other",
      "phoneNumber": "+234 (928) 568-3316",
      "email": "dotsonbarr@medicroix.com"
    }
  },
  {
    "id": "6708e8833064f3fd95092040",
    "organization": "Pivitol",
    "userName": "PearsonMcmillan",
    "email": "pearsonmcmillan@pivitol.com",
    "phoneNumber": "+234 (976) 427-2196",
    "date": "2023-07-21T12:42:51-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Slater Gonzales",
      "phoneNumber": "+234 (856) 485-2968",
      "emailAddress": "slatergonzales@pivitol.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "slatergonzales@pivitol.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Rooforia Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SadieGuerra",
      "twitter": "https://twitter.com/SullivanPacheco",
      "linkedin": "https://linkedin.com/in/RowenaMay"
    },
    "guarantor": {
      "fullName": "Willa Fulton",
      "relationship": "Other",
      "phoneNumber": "+234 (975) 445-2519",
      "email": "willafulton@rooforia.com"
    }
  },
  {
    "id": "6708e883ac12a1b0c134994f",
    "organization": "Toyletry",
    "userName": "MccarthyFlynn",
    "email": "mccarthyflynn@toyletry.com",
    "phoneNumber": "+234 (851) 436-3034",
    "date": "2023-03-27T09:53:51-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Erma Puckett",
      "phoneNumber": "+234 (829) 473-2266",
      "emailAddress": "ermapuckett@toyletry.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "ermapuckett@toyletry.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Globoil Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KentReid",
      "twitter": "https://twitter.com/HutchinsonMcfadden",
      "linkedin": "https://linkedin.com/in/RatliffReese"
    },
    "guarantor": {
      "fullName": "Cooley Buckley",
      "relationship": "Colleague",
      "phoneNumber": "+234 (935) 412-3893",
      "email": "cooleybuckley@globoil.com"
    }
  },
  {
    "id": "6708e8832c50cb0034ad414f",
    "organization": "Boilcat",
    "userName": "FryKerr",
    "email": "frykerr@boilcat.com",
    "phoneNumber": "+234 (946) 445-2595",
    "date": "2020-11-21T07:52:05-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Hazel Lester",
      "phoneNumber": "+234 (846) 555-2689",
      "emailAddress": "hazellester@boilcat.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "hazellester@boilcat.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Genmy Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HuffmanClements",
      "twitter": "https://twitter.com/VictoriaMooney",
      "linkedin": "https://linkedin.com/in/EstradaPrince"
    },
    "guarantor": {
      "fullName": "Bates Gamble",
      "relationship": "Other",
      "phoneNumber": "+234 (802) 411-3451",
      "email": "batesgamble@genmy.com"
    }
  },
  {
    "id": "6708e883fa259007b028a290",
    "organization": "Accusage",
    "userName": "LaneSnyder",
    "email": "lanesnyder@accusage.com",
    "phoneNumber": "+234 (853) 523-2737",
    "date": "2024-07-24T03:52:19-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Dominguez Pollard",
      "phoneNumber": "+234 (856) 579-2514",
      "emailAddress": "dominguezpollard@accusage.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "dominguezpollard@accusage.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zentility Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KatharinePoole",
      "twitter": "https://twitter.com/AveryStout",
      "linkedin": "https://linkedin.com/in/SawyerHuff"
    },
    "guarantor": {
      "fullName": "Herminia Rios",
      "relationship": "Other",
      "phoneNumber": "+234 (947) 551-3352",
      "email": "herminiarios@zentility.com"
    }
  },
  {
    "id": "6708e88399d3118aa5d3a581",
    "organization": "Junipoor",
    "userName": "NonaNewton",
    "email": "nonanewton@junipoor.com",
    "phoneNumber": "+234 (885) 441-3884",
    "date": "2020-04-05T08:48:30-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Vincent Garrett",
      "phoneNumber": "+234 (896) 479-3739",
      "emailAddress": "vincentgarrett@junipoor.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "vincentgarrett@junipoor.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Escenta Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LaurenMcconnell",
      "twitter": "https://twitter.com/HollowayGuerrero",
      "linkedin": "https://linkedin.com/in/JamieFitzgerald"
    },
    "guarantor": {
      "fullName": "Darlene Oliver",
      "relationship": "Family",
      "phoneNumber": "+234 (984) 535-3932",
      "email": "darleneoliver@escenta.com"
    }
  },
  {
    "id": "6708e88387d7bf2eb8c1209c",
    "organization": "Remold",
    "userName": "JaclynMartinez",
    "email": "jaclynmartinez@remold.com",
    "phoneNumber": "+234 (937) 415-3319",
    "date": "2022-01-15T02:22:30-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Lorene Golden",
      "phoneNumber": "+234 (877) 469-3052",
      "emailAddress": "lorenegolden@remold.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "lorenegolden@remold.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Updat Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MossSummers",
      "twitter": "https://twitter.com/ErikaMcintyre",
      "linkedin": "https://linkedin.com/in/SheliaSalinas"
    },
    "guarantor": {
      "fullName": "Tameka Moss",
      "relationship": "Friend",
      "phoneNumber": "+234 (823) 442-3664",
      "email": "tamekamoss@updat.com"
    }
  },
  {
    "id": "6708e8839ce0ebd727cf8e42",
    "organization": "Medesign",
    "userName": "SerranoDouglas",
    "email": "serranodouglas@medesign.com",
    "phoneNumber": "+234 (806) 439-2032",
    "date": "2024-08-01T05:14:23-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Colleen Mayer",
      "phoneNumber": "+234 (822) 498-2770",
      "emailAddress": "colleenmayer@medesign.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "colleenmayer@medesign.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Eclipsent Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/StaceyWilkinson",
      "twitter": "https://twitter.com/FranksWare",
      "linkedin": "https://linkedin.com/in/DuranMoran"
    },
    "guarantor": {
      "fullName": "Ochoa Hayden",
      "relationship": "Other",
      "phoneNumber": "+234 (956) 469-3693",
      "email": "ochoahayden@eclipsent.com"
    }
  },
  {
    "id": "6708e8830e9e26633be273c6",
    "organization": "Peticular",
    "userName": "AntoniaGarza",
    "email": "antoniagarza@peticular.com",
    "phoneNumber": "+234 (851) 455-2057",
    "date": "2024-08-17T09:29:15-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Green Mcintosh",
      "phoneNumber": "+234 (855) 461-3742",
      "emailAddress": "greenmcintosh@peticular.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "greenmcintosh@peticular.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Prosely Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CamposShepherd",
      "twitter": "https://twitter.com/AnneKinney",
      "linkedin": "https://linkedin.com/in/GuzmanCompton"
    },
    "guarantor": {
      "fullName": "Clare Santana",
      "relationship": "Other",
      "phoneNumber": "+234 (933) 586-3672",
      "email": "claresantana@prosely.com"
    }
  },
  {
    "id": "6708e88372321e7c78a314ec",
    "organization": "Exoplode",
    "userName": "JenniferGallegos",
    "email": "jennifergallegos@exoplode.com",
    "phoneNumber": "+234 (951) 450-2791",
    "date": "2020-04-23T03:56:40-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Angela Alvarado",
      "phoneNumber": "+234 (833) 496-2771",
      "emailAddress": "angelaalvarado@exoplode.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "angelaalvarado@exoplode.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Lingoage Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CameronMassey",
      "twitter": "https://twitter.com/MaraPalmer",
      "linkedin": "https://linkedin.com/in/SheppardFletcher"
    },
    "guarantor": {
      "fullName": "Janice Gray",
      "relationship": "Family",
      "phoneNumber": "+234 (916) 451-3640",
      "email": "janicegray@lingoage.com"
    }
  },
  {
    "id": "6708e883a9a76968b0618487",
    "organization": "Premiant",
    "userName": "FeleciaMorales",
    "email": "feleciamorales@premiant.com",
    "phoneNumber": "+234 (815) 593-3045",
    "date": "2023-11-08T09:15:14-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Howell Bennett",
      "phoneNumber": "+234 (983) 522-3490",
      "emailAddress": "howellbennett@premiant.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "howellbennett@premiant.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Enaut Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BurnettSpence",
      "twitter": "https://twitter.com/EffieChase",
      "linkedin": "https://linkedin.com/in/LucindaRivera"
    },
    "guarantor": {
      "fullName": "Rodriquez Fields",
      "relationship": "Family",
      "phoneNumber": "+234 (834) 427-3079",
      "email": "rodriquezfields@enaut.com"
    }
  },
  {
    "id": "6708e883e91d3c117ba39198",
    "organization": "Slumberia",
    "userName": "LynnAlbert",
    "email": "lynnalbert@slumberia.com",
    "phoneNumber": "+234 (817) 479-3636",
    "date": "2020-02-10T04:29:10-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Nash Mccullough",
      "phoneNumber": "+234 (903) 412-2698",
      "emailAddress": "nashmccullough@slumberia.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "nashmccullough@slumberia.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Lyria Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BaileyWall",
      "twitter": "https://twitter.com/StaffordIngram",
      "linkedin": "https://linkedin.com/in/HesterHammond"
    },
    "guarantor": {
      "fullName": "Trevino Frost",
      "relationship": "Friend",
      "phoneNumber": "+234 (892) 536-3913",
      "email": "trevinofrost@lyria.com"
    }
  },
  {
    "id": "6708e883e9d117132c4606e7",
    "organization": "Concility",
    "userName": "KarlaHebert",
    "email": "karlahebert@concility.com",
    "phoneNumber": "+234 (965) 448-3175",
    "date": "2023-06-18T10:14:36-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Mills Cruz",
      "phoneNumber": "+234 (906) 595-3076",
      "emailAddress": "millscruz@concility.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "millscruz@concility.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Centuria Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BarronBlake",
      "twitter": "https://twitter.com/DanielsMayo",
      "linkedin": "https://linkedin.com/in/FranMueller"
    },
    "guarantor": {
      "fullName": "Rachel Peck",
      "relationship": "Other",
      "phoneNumber": "+234 (869) 551-2280",
      "email": "rachelpeck@centuria.com"
    }
  },
  {
    "id": "6708e8832c010d7a6067dbdc",
    "organization": "Magnemo",
    "userName": "MayoNeal",
    "email": "mayoneal@magnemo.com",
    "phoneNumber": "+234 (996) 510-2734",
    "date": "2021-06-12T11:22:54-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Ollie Hinton",
      "phoneNumber": "+234 (968) 418-2024",
      "emailAddress": "olliehinton@magnemo.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "olliehinton@magnemo.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Krag Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GracieLopez",
      "twitter": "https://twitter.com/LelaLott",
      "linkedin": "https://linkedin.com/in/GrimesRichmond"
    },
    "guarantor": {
      "fullName": "Newton Perkins",
      "relationship": "Family",
      "phoneNumber": "+234 (849) 518-2382",
      "email": "newtonperkins@krag.com"
    }
  },
  {
    "id": "6708e883d00d1bd6d37ec468",
    "organization": "Turnabout",
    "userName": "LenaBarlow",
    "email": "lenabarlow@turnabout.com",
    "phoneNumber": "+234 (871) 479-2582",
    "date": "2021-09-22T09:30:04-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Reed Curry",
      "phoneNumber": "+234 (955) 431-3927",
      "emailAddress": "reedcurry@turnabout.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "reedcurry@turnabout.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Exodoc Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AnnaHarper",
      "twitter": "https://twitter.com/LeeRhodes",
      "linkedin": "https://linkedin.com/in/CharityRay"
    },
    "guarantor": {
      "fullName": "Hamilton Munoz",
      "relationship": "Colleague",
      "phoneNumber": "+234 (989) 546-3437",
      "email": "hamiltonmunoz@exodoc.com"
    }
  },
  {
    "id": "6708e88393f1b9764a4fc48c",
    "organization": "Joviold",
    "userName": "RaquelNewman",
    "email": "raquelnewman@joviold.com",
    "phoneNumber": "+234 (935) 460-2295",
    "date": "2024-01-09T08:33:34-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Pamela Byrd",
      "phoneNumber": "+234 (994) 425-2477",
      "emailAddress": "pamelabyrd@joviold.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "pamelabyrd@joviold.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Furnafix Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MartinaGilliam",
      "twitter": "https://twitter.com/SolomonAndrews",
      "linkedin": "https://linkedin.com/in/DawnWheeler"
    },
    "guarantor": {
      "fullName": "Esperanza Terrell",
      "relationship": "Colleague",
      "phoneNumber": "+234 (949) 588-2530",
      "email": "esperanzaterrell@furnafix.com"
    }
  },
  {
    "id": "6708e8839e95da72141c982c",
    "organization": "Geologix",
    "userName": "MelissaHendricks",
    "email": "melissahendricks@geologix.com",
    "phoneNumber": "+234 (935) 568-2825",
    "date": "2023-09-09T07:35:58-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Bridges Bishop",
      "phoneNumber": "+234 (861) 492-2602",
      "emailAddress": "bridgesbishop@geologix.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "bridgesbishop@geologix.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zillatide Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JensenOrtiz",
      "twitter": "https://twitter.com/AnitaTillman",
      "linkedin": "https://linkedin.com/in/BlackburnNavarro"
    },
    "guarantor": {
      "fullName": "Finley Stuart",
      "relationship": "Colleague",
      "phoneNumber": "+234 (860) 515-3498",
      "email": "finleystuart@zillatide.com"
    }
  },
  {
    "id": "6708e883cc7fdab8113042de",
    "organization": "Anarco",
    "userName": "FlossieBlanchard",
    "email": "flossieblanchard@anarco.com",
    "phoneNumber": "+234 (903) 480-2098",
    "date": "2024-04-21T05:34:30-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Fleming Knowles",
      "phoneNumber": "+234 (826) 499-2207",
      "emailAddress": "flemingknowles@anarco.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "flemingknowles@anarco.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Portalis Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/NicholsonPadilla",
      "twitter": "https://twitter.com/ShawnBoyle",
      "linkedin": "https://linkedin.com/in/GallagherWalton"
    },
    "guarantor": {
      "fullName": "Drake Beck",
      "relationship": "Colleague",
      "phoneNumber": "+234 (973) 566-3486",
      "email": "drakebeck@portalis.com"
    }
  },
  {
    "id": "6708e883ac4a9ac57c75af9d",
    "organization": "Zillan",
    "userName": "MarvaHolden",
    "email": "marvaholden@zillan.com",
    "phoneNumber": "+234 (848) 544-2026",
    "date": "2022-01-20T12:15:21-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Georgia Harris",
      "phoneNumber": "+234 (872) 598-3948",
      "emailAddress": "georgiaharris@zillan.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "georgiaharris@zillan.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Otherway Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/SherrieShepard",
      "twitter": "https://twitter.com/BartonDodson",
      "linkedin": "https://linkedin.com/in/CarlyKaufman"
    },
    "guarantor": {
      "fullName": "Lina Cunningham",
      "relationship": "Colleague",
      "phoneNumber": "+234 (807) 507-3490",
      "email": "linacunningham@otherway.com"
    }
  },
  {
    "id": "6708e883f0f2c7dbe8309ab8",
    "organization": "Recrisys",
    "userName": "MarylouBarron",
    "email": "maryloubarron@recrisys.com",
    "phoneNumber": "+234 (923) 549-3867",
    "date": "2024-07-14T11:04:27-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Juarez Foley",
      "phoneNumber": "+234 (971) 543-2170",
      "emailAddress": "juarezfoley@recrisys.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "juarezfoley@recrisys.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Rotodyne Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/McdanielHoffman",
      "twitter": "https://twitter.com/AdaSnow",
      "linkedin": "https://linkedin.com/in/WareJohns"
    },
    "guarantor": {
      "fullName": "Courtney Best",
      "relationship": "Other",
      "phoneNumber": "+234 (890) 556-3297",
      "email": "courtneybest@rotodyne.com"
    }
  },
  {
    "id": "6708e88355afd6d19f2347c3",
    "organization": "Ontagene",
    "userName": "MarissaSanchez",
    "email": "marissasanchez@ontagene.com",
    "phoneNumber": "+234 (816) 422-2890",
    "date": "2023-05-03T03:13:29-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Alyce Rollins",
      "phoneNumber": "+234 (865) 592-2269",
      "emailAddress": "alycerollins@ontagene.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "alycerollins@ontagene.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Daycore Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BergerEmerson",
      "twitter": "https://twitter.com/LessieGoff",
      "linkedin": "https://linkedin.com/in/GilmoreVargas"
    },
    "guarantor": {
      "fullName": "Frances Marks",
      "relationship": "Friend",
      "phoneNumber": "+234 (877) 591-2520",
      "email": "francesmarks@daycore.com"
    }
  },
  {
    "id": "6708e883fcafe82a9dcebfa4",
    "organization": "Voratak",
    "userName": "AmaliaMann",
    "email": "amaliamann@voratak.com",
    "phoneNumber": "+234 (919) 592-2761",
    "date": "2020-04-21T04:05:47-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Alice Savage",
      "phoneNumber": "+234 (873) 582-2599",
      "emailAddress": "alicesavage@voratak.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "alicesavage@voratak.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Elita Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CalhounBentley",
      "twitter": "https://twitter.com/JodieBartlett",
      "linkedin": "https://linkedin.com/in/JaneParker"
    },
    "guarantor": {
      "fullName": "Marisa Cochran",
      "relationship": "Colleague",
      "phoneNumber": "+234 (898) 511-2465",
      "email": "marisacochran@elita.com"
    }
  },
  {
    "id": "6708e883f87fc2439c4d801b",
    "organization": "Vidto",
    "userName": "HarveyAvila",
    "email": "harveyavila@vidto.com",
    "phoneNumber": "+234 (993) 583-3334",
    "date": "2021-09-04T06:32:26-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Katelyn Jimenez",
      "phoneNumber": "+234 (991) 437-3321",
      "emailAddress": "katelynjimenez@vidto.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "katelynjimenez@vidto.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Optyk Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GeorgeOdonnell",
      "twitter": "https://twitter.com/HintonVaughn",
      "linkedin": "https://linkedin.com/in/GonzalezKing"
    },
    "guarantor": {
      "fullName": "Karin Russo",
      "relationship": "Family",
      "phoneNumber": "+234 (963) 500-3877",
      "email": "karinrusso@optyk.com"
    }
  },
  {
    "id": "6708e883973a644733728953",
    "organization": "Mixers",
    "userName": "MarthaMorrison",
    "email": "marthamorrison@mixers.com",
    "phoneNumber": "+234 (890) 465-3132",
    "date": "2024-01-23T03:46:54-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Greene Vaughan",
      "phoneNumber": "+234 (827) 442-3345",
      "emailAddress": "greenevaughan@mixers.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "greenevaughan@mixers.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Orbiflex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SalinasHaley",
      "twitter": "https://twitter.com/DellaCummings",
      "linkedin": "https://linkedin.com/in/WyattSargent"
    },
    "guarantor": {
      "fullName": "Sheree Carlson",
      "relationship": "Family",
      "phoneNumber": "+234 (872) 469-3704",
      "email": "shereecarlson@orbiflex.com"
    }
  },
  {
    "id": "6708e8830d60565f44cf782c",
    "organization": "Comvey",
    "userName": "GayGilmore",
    "email": "gaygilmore@comvey.com",
    "phoneNumber": "+234 (816) 544-2770",
    "date": "2023-03-03T11:28:03-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Maxine Duran",
      "phoneNumber": "+234 (867) 459-3798",
      "emailAddress": "maxineduran@comvey.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "maxineduran@comvey.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zilodyne Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MorseChapman",
      "twitter": "https://twitter.com/MadelineHoward",
      "linkedin": "https://linkedin.com/in/KnowlesFigueroa"
    },
    "guarantor": {
      "fullName": "Anthony Ballard",
      "relationship": "Colleague",
      "phoneNumber": "+234 (838) 497-2532",
      "email": "anthonyballard@zilodyne.com"
    }
  },
  {
    "id": "6708e883355807cd8272c493",
    "organization": "Aclima",
    "userName": "MaryanneLancaster",
    "email": "maryannelancaster@aclima.com",
    "phoneNumber": "+234 (913) 447-3575",
    "date": "2022-05-09T06:44:46-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Petersen Moon",
      "phoneNumber": "+234 (804) 486-2030",
      "emailAddress": "petersenmoon@aclima.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "petersenmoon@aclima.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Progenex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AyalaDean",
      "twitter": "https://twitter.com/StaciEvans",
      "linkedin": "https://linkedin.com/in/SilviaVinson"
    },
    "guarantor": {
      "fullName": "Juanita Odom",
      "relationship": "Colleague",
      "phoneNumber": "+234 (889) 594-3627",
      "email": "juanitaodom@progenex.com"
    }
  },
  {
    "id": "6708e883f2a1056a626eaf0a",
    "organization": "Combot",
    "userName": "SellersHuffman",
    "email": "sellershuffman@combot.com",
    "phoneNumber": "+234 (851) 569-3494",
    "date": "2021-08-25T04:42:10-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Mcclure Molina",
      "phoneNumber": "+234 (860) 444-2413",
      "emailAddress": "mccluremolina@combot.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "mccluremolina@combot.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zentix Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AlfordJensen",
      "twitter": "https://twitter.com/CardenasPrice",
      "linkedin": "https://linkedin.com/in/McknightWong"
    },
    "guarantor": {
      "fullName": "Mercado Dalton",
      "relationship": "Colleague",
      "phoneNumber": "+234 (851) 465-3272",
      "email": "mercadodalton@zentix.com"
    }
  },
  {
    "id": "6708e883d7514a419746c091",
    "organization": "Xplor",
    "userName": "BriannaMclean",
    "email": "briannamclean@xplor.com",
    "phoneNumber": "+234 (898) 507-3250",
    "date": "2023-05-12T01:35:50-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Maria Holloway",
      "phoneNumber": "+234 (945) 560-3437",
      "emailAddress": "mariaholloway@xplor.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "mariaholloway@xplor.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Xixan Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/SelmaDay",
      "twitter": "https://twitter.com/DuffyRandolph",
      "linkedin": "https://linkedin.com/in/JoyceCraig"
    },
    "guarantor": {
      "fullName": "Sallie Deleon",
      "relationship": "Family",
      "phoneNumber": "+234 (951) 440-3100",
      "email": "salliedeleon@xixan.com"
    }
  },
  {
    "id": "6708e8832ba7fdbde06025aa",
    "organization": "Menbrain",
    "userName": "MarcellaNelson",
    "email": "marcellanelson@menbrain.com",
    "phoneNumber": "+234 (866) 400-2840",
    "date": "2022-05-19T04:02:36-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Billie Strickland",
      "phoneNumber": "+234 (846) 585-3739",
      "emailAddress": "billiestrickland@menbrain.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "billiestrickland@menbrain.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Fiberox Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MartinGrant",
      "twitter": "https://twitter.com/LoriCabrera",
      "linkedin": "https://linkedin.com/in/SimonMccall"
    },
    "guarantor": {
      "fullName": "Garcia Dickerson",
      "relationship": "Family",
      "phoneNumber": "+234 (872) 512-2282",
      "email": "garciadickerson@fiberox.com"
    }
  },
  {
    "id": "6708e8830df381956adb0306",
    "organization": "Isoswitch",
    "userName": "JeannetteWhitley",
    "email": "jeannettewhitley@isoswitch.com",
    "phoneNumber": "+234 (881) 542-3251",
    "date": "2023-05-17T02:45:49-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Wolf Taylor",
      "phoneNumber": "+234 (806) 581-3079",
      "emailAddress": "wolftaylor@isoswitch.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "wolftaylor@isoswitch.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Talkola Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HolderHancock",
      "twitter": "https://twitter.com/GentryLandry",
      "linkedin": "https://linkedin.com/in/FitzgeraldClay"
    },
    "guarantor": {
      "fullName": "Mcintosh Mccarty",
      "relationship": "Family",
      "phoneNumber": "+234 (924) 538-3164",
      "email": "mcintoshmccarty@talkola.com"
    }
  },
  {
    "id": "6708e883691cd49606c99112",
    "organization": "Darwinium",
    "userName": "AlyssaSanders",
    "email": "alyssasanders@darwinium.com",
    "phoneNumber": "+234 (856) 454-3900",
    "date": "2020-09-18T11:19:52-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Kelley Mcclure",
      "phoneNumber": "+234 (805) 593-2866",
      "emailAddress": "kelleymcclure@darwinium.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "kelleymcclure@darwinium.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Extrawear Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ElaineBurton",
      "twitter": "https://twitter.com/TaylorTran",
      "linkedin": "https://linkedin.com/in/WigginsSchwartz"
    },
    "guarantor": {
      "fullName": "Josephine Christensen",
      "relationship": "Colleague",
      "phoneNumber": "+234 (802) 555-2792",
      "email": "josephinechristensen@extrawear.com"
    }
  },
  {
    "id": "6708e88383271cb20bb3787e",
    "organization": "Caxt",
    "userName": "JosephSingleton",
    "email": "josephsingleton@caxt.com",
    "phoneNumber": "+234 (849) 574-3150",
    "date": "2020-07-23T04:33:25-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Elvia Hatfield",
      "phoneNumber": "+234 (980) 507-2974",
      "emailAddress": "elviahatfield@caxt.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "elviahatfield@caxt.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Rodeomad Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JusticeDickson",
      "twitter": "https://twitter.com/RiversFrancis",
      "linkedin": "https://linkedin.com/in/NinaJohnson"
    },
    "guarantor": {
      "fullName": "Joan Dixon",
      "relationship": "Other",
      "phoneNumber": "+234 (840) 488-2617",
      "email": "joandixon@rodeomad.com"
    }
  },
  {
    "id": "6708e883e3c2f0322d0e61d7",
    "organization": "Bulljuice",
    "userName": "LauraDoyle",
    "email": "lauradoyle@bulljuice.com",
    "phoneNumber": "+234 (823) 525-3319",
    "date": "2022-09-14T03:00:32-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Corrine Gates",
      "phoneNumber": "+234 (969) 450-2920",
      "emailAddress": "corrinegates@bulljuice.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "corrinegates@bulljuice.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Aquazure Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JulieRiddle",
      "twitter": "https://twitter.com/MedinaStanton",
      "linkedin": "https://linkedin.com/in/DiannaHensley"
    },
    "guarantor": {
      "fullName": "Kidd Mendoza",
      "relationship": "Family",
      "phoneNumber": "+234 (830) 483-3984",
      "email": "kiddmendoza@aquazure.com"
    }
  },
  {
    "id": "6708e883d178c991fb8d4668",
    "organization": "Comvex",
    "userName": "MccrayTrevino",
    "email": "mccraytrevino@comvex.com",
    "phoneNumber": "+234 (948) 483-2117",
    "date": "2020-10-24T10:57:38-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Roman Bolton",
      "phoneNumber": "+234 (930) 527-2231",
      "emailAddress": "romanbolton@comvex.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "romanbolton@comvex.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Kneedles Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ShannaSalazar",
      "twitter": "https://twitter.com/CatherineHerring",
      "linkedin": "https://linkedin.com/in/LangHowe"
    },
    "guarantor": {
      "fullName": "Holly Delacruz",
      "relationship": "Family",
      "phoneNumber": "+234 (878) 404-2546",
      "email": "hollydelacruz@kneedles.com"
    }
  },
  {
    "id": "6708e8836541c650deab78ae",
    "organization": "Uberlux",
    "userName": "SharpLyons",
    "email": "sharplyons@uberlux.com",
    "phoneNumber": "+234 (848) 516-2339",
    "date": "2021-03-25T09:02:56-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Murray Bates",
      "phoneNumber": "+234 (956) 470-3301",
      "emailAddress": "murraybates@uberlux.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "murraybates@uberlux.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Pulze Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LeighBrewer",
      "twitter": "https://twitter.com/OrrGonzalez",
      "linkedin": "https://linkedin.com/in/MarilynStark"
    },
    "guarantor": {
      "fullName": "Sims Little",
      "relationship": "Friend",
      "phoneNumber": "+234 (881) 562-3451",
      "email": "simslittle@pulze.com"
    }
  },
  {
    "id": "6708e88304806c8c9fcbfe37",
    "organization": "Paprikut",
    "userName": "ElliottAshley",
    "email": "elliottashley@paprikut.com",
    "phoneNumber": "+234 (927) 531-3405",
    "date": "2022-10-29T04:20:54-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Hilary Roy",
      "phoneNumber": "+234 (993) 441-2958",
      "emailAddress": "hilaryroy@paprikut.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "hilaryroy@paprikut.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Empirica Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LatonyaEnglish",
      "twitter": "https://twitter.com/RollinsSims",
      "linkedin": "https://linkedin.com/in/CochranKane"
    },
    "guarantor": {
      "fullName": "Leach Hughes",
      "relationship": "Friend",
      "phoneNumber": "+234 (993) 401-2749",
      "email": "leachhughes@empirica.com"
    }
  },
  {
    "id": "6708e883b7f5a38a1f404c69",
    "organization": "Squish",
    "userName": "WileyOneill",
    "email": "wileyoneill@squish.com",
    "phoneNumber": "+234 (850) 463-3418",
    "date": "2021-11-18T07:34:15-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Nellie Love",
      "phoneNumber": "+234 (995) 505-2767",
      "emailAddress": "nellielove@squish.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "nellielove@squish.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Navir Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ShaunaKennedy",
      "twitter": "https://twitter.com/HensonCantrell",
      "linkedin": "https://linkedin.com/in/ShermanBryant"
    },
    "guarantor": {
      "fullName": "Lottie Gilbert",
      "relationship": "Colleague",
      "phoneNumber": "+234 (848) 576-2901",
      "email": "lottiegilbert@navir.com"
    }
  },
  {
    "id": "6708e883298ee95008e62722",
    "organization": "Ovium",
    "userName": "SniderWolfe",
    "email": "sniderwolfe@ovium.com",
    "phoneNumber": "+234 (919) 545-2302",
    "date": "2021-07-25T08:50:36-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Taylor Wagner",
      "phoneNumber": "+234 (924) 563-3237",
      "emailAddress": "taylorwagner@ovium.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "taylorwagner@ovium.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Exospace Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/PruittParrish",
      "twitter": "https://twitter.com/AllisonHoover",
      "linkedin": "https://linkedin.com/in/DudleyBush"
    },
    "guarantor": {
      "fullName": "Tasha Bird",
      "relationship": "Other",
      "phoneNumber": "+234 (920) 561-2798",
      "email": "tashabird@exospace.com"
    }
  },
  {
    "id": "6708e883947412a3522db916",
    "organization": "Teraprene",
    "userName": "MyersPace",
    "email": "myerspace@teraprene.com",
    "phoneNumber": "+234 (836) 470-2759",
    "date": "2020-02-26T05:46:14-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Gallegos Bruce",
      "phoneNumber": "+234 (871) 513-3485",
      "emailAddress": "gallegosbruce@teraprene.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "gallegosbruce@teraprene.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Ohmnet Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JacklynRowe",
      "twitter": "https://twitter.com/EstherStafford",
      "linkedin": "https://linkedin.com/in/OlsonJuarez"
    },
    "guarantor": {
      "fullName": "Carney Cobb",
      "relationship": "Family",
      "phoneNumber": "+234 (992) 432-3741",
      "email": "carneycobb@ohmnet.com"
    }
  },
  {
    "id": "6708e883704dfe2e6b67e4d1",
    "organization": "Eyewax",
    "userName": "ElviraCarney",
    "email": "elviracarney@eyewax.com",
    "phoneNumber": "+234 (894) 435-3418",
    "date": "2022-08-07T08:24:53-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Calderon Castro",
      "phoneNumber": "+234 (986) 553-2355",
      "emailAddress": "calderoncastro@eyewax.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "calderoncastro@eyewax.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Namegen Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JillMorgan",
      "twitter": "https://twitter.com/KeyWatson",
      "linkedin": "https://linkedin.com/in/MitchellDawson"
    },
    "guarantor": {
      "fullName": "Erica Collins",
      "relationship": "Colleague",
      "phoneNumber": "+234 (905) 421-3838",
      "email": "ericacollins@namegen.com"
    }
  },
  {
    "id": "6708e88347ba2a832709c39d",
    "organization": "Oronoko",
    "userName": "BlakeWooten",
    "email": "blakewooten@oronoko.com",
    "phoneNumber": "+234 (841) 407-2948",
    "date": "2021-06-07T02:42:28-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Lindsey Griffith",
      "phoneNumber": "+234 (985) 450-3391",
      "emailAddress": "lindseygriffith@oronoko.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "lindseygriffith@oronoko.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Obones Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/NancySchmidt",
      "twitter": "https://twitter.com/ContrerasLee",
      "linkedin": "https://linkedin.com/in/RoachLindsay"
    },
    "guarantor": {
      "fullName": "Herring Booker",
      "relationship": "Family",
      "phoneNumber": "+234 (885) 430-3660",
      "email": "herringbooker@obones.com"
    }
  },
  {
    "id": "6708e8838ba3d46f3192fc64",
    "organization": "Earthmark",
    "userName": "TammyBlair",
    "email": "tammyblair@earthmark.com",
    "phoneNumber": "+234 (966) 425-3322",
    "date": "2024-10-01T09:26:34-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Blanche Bright",
      "phoneNumber": "+234 (961) 508-2601",
      "emailAddress": "blanchebright@earthmark.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "blanchebright@earthmark.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Zillacom Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/TraceyMathews",
      "twitter": "https://twitter.com/BeachBerger",
      "linkedin": "https://linkedin.com/in/ThomasJenkins"
    },
    "guarantor": {
      "fullName": "Young Buchanan",
      "relationship": "Colleague",
      "phoneNumber": "+234 (817) 425-3321",
      "email": "youngbuchanan@zillacom.com"
    }
  },
  {
    "id": "6708e8833040a84ccb77be79",
    "organization": "Ovolo",
    "userName": "LeahCarver",
    "email": "leahcarver@ovolo.com",
    "phoneNumber": "+234 (903) 561-3518",
    "date": "2020-11-02T10:52:16-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Rhonda Alvarez",
      "phoneNumber": "+234 (976) 431-3965",
      "emailAddress": "rhondaalvarez@ovolo.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "rhondaalvarez@ovolo.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Norsup Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MargaritaChristian",
      "twitter": "https://twitter.com/MarlaMccormick",
      "linkedin": "https://linkedin.com/in/RichDennis"
    },
    "guarantor": {
      "fullName": "Jarvis Bowers",
      "relationship": "Family",
      "phoneNumber": "+234 (893) 557-2317",
      "email": "jarvisbowers@norsup.com"
    }
  },
  {
    "id": "6708e88300247839c4edde46",
    "organization": "Eventix",
    "userName": "WhiteheadFrye",
    "email": "whiteheadfrye@eventix.com",
    "phoneNumber": "+234 (800) 555-3819",
    "date": "2024-07-29T02:47:57-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Erickson Mendez",
      "phoneNumber": "+234 (872) 573-3440",
      "emailAddress": "ericksonmendez@eventix.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "ericksonmendez@eventix.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Zentia Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KerryHolman",
      "twitter": "https://twitter.com/AltaBattle",
      "linkedin": "https://linkedin.com/in/PeggyMeadows"
    },
    "guarantor": {
      "fullName": "Mcbride Sampson",
      "relationship": "Colleague",
      "phoneNumber": "+234 (945) 547-2678",
      "email": "mcbridesampson@zentia.com"
    }
  },
  {
    "id": "6708e88367294f939a726f25",
    "organization": "Austex",
    "userName": "RiceEdwards",
    "email": "riceedwards@austex.com",
    "phoneNumber": "+234 (946) 467-2789",
    "date": "2022-03-03T07:17:12-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Jackie Combs",
      "phoneNumber": "+234 (902) 471-3444",
      "emailAddress": "jackiecombs@austex.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "jackiecombs@austex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Amtas Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CindyElliott",
      "twitter": "https://twitter.com/BlackMiddleton",
      "linkedin": "https://linkedin.com/in/HinesFreeman"
    },
    "guarantor": {
      "fullName": "Sandra Craft",
      "relationship": "Other",
      "phoneNumber": "+234 (939) 587-3049",
      "email": "sandracraft@amtas.com"
    }
  },
  {
    "id": "6708e883699678aa7f2d09ce",
    "organization": "Zoarere",
    "userName": "CrystalJones",
    "email": "crystaljones@zoarere.com",
    "phoneNumber": "+234 (892) 555-2525",
    "date": "2021-01-01T03:00:33-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Faye Young",
      "phoneNumber": "+234 (861) 565-2415",
      "emailAddress": "fayeyoung@zoarere.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "fayeyoung@zoarere.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Hometown Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HunterAvery",
      "twitter": "https://twitter.com/ColeBarrett",
      "linkedin": "https://linkedin.com/in/YangKeller"
    },
    "guarantor": {
      "fullName": "Dunn Burris",
      "relationship": "Other",
      "phoneNumber": "+234 (970) 527-3209",
      "email": "dunnburris@hometown.com"
    }
  },
  {
    "id": "6708e8831d930825e475dad7",
    "organization": "Indexia",
    "userName": "GibbsHenson",
    "email": "gibbshenson@indexia.com",
    "phoneNumber": "+234 (954) 519-2877",
    "date": "2021-04-23T10:34:59-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Sylvia Cooper",
      "phoneNumber": "+234 (892) 563-3489",
      "emailAddress": "sylviacooper@indexia.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "sylviacooper@indexia.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Unq Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WhitakerFloyd",
      "twitter": "https://twitter.com/MaciasRobbins",
      "linkedin": "https://linkedin.com/in/ChristianRichards"
    },
    "guarantor": {
      "fullName": "Bettie Jacobson",
      "relationship": "Friend",
      "phoneNumber": "+234 (876) 502-3676",
      "email": "bettiejacobson@unq.com"
    }
  },
  {
    "id": "6708e883db12cdc5540a658e",
    "organization": "Idealis",
    "userName": "GabrielleCooke",
    "email": "gabriellecooke@idealis.com",
    "phoneNumber": "+234 (817) 533-2808",
    "date": "2024-09-25T09:52:42-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Lynette Trujillo",
      "phoneNumber": "+234 (920) 488-2401",
      "emailAddress": "lynettetrujillo@idealis.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "lynettetrujillo@idealis.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Bitendrex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HansenForeman",
      "twitter": "https://twitter.com/CharleneRich",
      "linkedin": "https://linkedin.com/in/DaleWoodward"
    },
    "guarantor": {
      "fullName": "Arline Lloyd",
      "relationship": "Other",
      "phoneNumber": "+234 (988) 400-2835",
      "email": "arlinelloyd@bitendrex.com"
    }
  },
  {
    "id": "6708e883dc58ae17f7023c5d",
    "organization": "Quizka",
    "userName": "RowlandCallahan",
    "email": "rowlandcallahan@quizka.com",
    "phoneNumber": "+234 (860) 507-2159",
    "date": "2023-10-03T10:09:39-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Wilcox Mullins",
      "phoneNumber": "+234 (884) 579-2033",
      "emailAddress": "wilcoxmullins@quizka.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "wilcoxmullins@quizka.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Endipine Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MargoBuck",
      "twitter": "https://twitter.com/DarlaGoodwin",
      "linkedin": "https://linkedin.com/in/PooleGarrison"
    },
    "guarantor": {
      "fullName": "Cheryl Whitaker",
      "relationship": "Friend",
      "phoneNumber": "+234 (881) 585-3113",
      "email": "cherylwhitaker@endipine.com"
    }
  },
  {
    "id": "6708e883391e508186da5736",
    "organization": "Tropoli",
    "userName": "MckayMckay",
    "email": "mckaymckay@tropoli.com",
    "phoneNumber": "+234 (873) 430-2535",
    "date": "2020-10-26T05:33:41-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Mann Mcknight",
      "phoneNumber": "+234 (862) 559-3408",
      "emailAddress": "mannmcknight@tropoli.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "mannmcknight@tropoli.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Interloo Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BrigitteWallace",
      "twitter": "https://twitter.com/WilliamsCleveland",
      "linkedin": "https://linkedin.com/in/AlexanderMurray"
    },
    "guarantor": {
      "fullName": "Cherie Campos",
      "relationship": "Colleague",
      "phoneNumber": "+234 (869) 473-3847",
      "email": "cheriecampos@interloo.com"
    }
  },
  {
    "id": "6708e8836e8ee0d17da25184",
    "organization": "Enomen",
    "userName": "MichaelBranch",
    "email": "michaelbranch@enomen.com",
    "phoneNumber": "+234 (878) 466-3981",
    "date": "2022-04-07T09:02:34-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Burt Richard",
      "phoneNumber": "+234 (873) 509-3950",
      "emailAddress": "burtrichard@enomen.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "burtrichard@enomen.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Norali Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/PhyllisThomas",
      "twitter": "https://twitter.com/FarmerSlater",
      "linkedin": "https://linkedin.com/in/DeenaCain"
    },
    "guarantor": {
      "fullName": "Hopper Britt",
      "relationship": "Colleague",
      "phoneNumber": "+234 (904) 585-2114",
      "email": "hopperbritt@norali.com"
    }
  },
  {
    "id": "6708e883c29d7ff5740242db",
    "organization": "Netbook",
    "userName": "JustineAguirre",
    "email": "justineaguirre@netbook.com",
    "phoneNumber": "+234 (925) 480-3017",
    "date": "2022-06-20T10:58:23-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Mckenzie Allen",
      "phoneNumber": "+234 (904) 475-3266",
      "emailAddress": "mckenzieallen@netbook.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "mckenzieallen@netbook.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Photobin Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RandallGalloway",
      "twitter": "https://twitter.com/EdnaBell",
      "linkedin": "https://linkedin.com/in/HarrietMack"
    },
    "guarantor": {
      "fullName": "Mueller Merritt",
      "relationship": "Other",
      "phoneNumber": "+234 (838) 540-3285",
      "email": "muellermerritt@photobin.com"
    }
  },
  {
    "id": "6708e8830429036d9d1027a8",
    "organization": "Vinch",
    "userName": "AtkinsonGomez",
    "email": "atkinsongomez@vinch.com",
    "phoneNumber": "+234 (858) 523-3115",
    "date": "2021-09-06T08:08:55-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Mccarty Bridges",
      "phoneNumber": "+234 (855) 458-3244",
      "emailAddress": "mccartybridges@vinch.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "mccartybridges@vinch.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Isologics Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JacquelynWelch",
      "twitter": "https://twitter.com/JeniferKent",
      "linkedin": "https://linkedin.com/in/GilesKnight"
    },
    "guarantor": {
      "fullName": "Adele Holland",
      "relationship": "Friend",
      "phoneNumber": "+234 (974) 481-3186",
      "email": "adeleholland@isologics.com"
    }
  },
  {
    "id": "6708e883cf11d9288f557d60",
    "organization": "Comtext",
    "userName": "TriciaObrien",
    "email": "triciaobrien@comtext.com",
    "phoneNumber": "+234 (920) 454-3171",
    "date": "2024-07-25T12:30:56-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Kitty Spencer",
      "phoneNumber": "+234 (981) 546-3462",
      "emailAddress": "kittyspencer@comtext.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "kittyspencer@comtext.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Opportech Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BarrettNorman",
      "twitter": "https://twitter.com/AshleeSherman",
      "linkedin": "https://linkedin.com/in/MathewsWynn"
    },
    "guarantor": {
      "fullName": "Chambers Hester",
      "relationship": "Family",
      "phoneNumber": "+234 (841) 546-3548",
      "email": "chambershester@opportech.com"
    }
  },
  {
    "id": "6708e88372bf536dd1faf647",
    "organization": "Uneeq",
    "userName": "JordanCohen",
    "email": "jordancohen@uneeq.com",
    "phoneNumber": "+234 (801) 462-2575",
    "date": "2020-05-31T10:56:03-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Pat Walters",
      "phoneNumber": "+234 (998) 578-2939",
      "emailAddress": "patwalters@uneeq.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "patwalters@uneeq.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Freakin Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/OliviaDowns",
      "twitter": "https://twitter.com/SchmidtMyers",
      "linkedin": "https://linkedin.com/in/CarterMcgee"
    },
    "guarantor": {
      "fullName": "Cecile Sykes",
      "relationship": "Friend",
      "phoneNumber": "+234 (900) 436-2320",
      "email": "cecilesykes@freakin.com"
    }
  },
  {
    "id": "6708e8837f3ae6992c13e806",
    "organization": "Gallaxia",
    "userName": "GoldenShields",
    "email": "goldenshields@gallaxia.com",
    "phoneNumber": "+234 (903) 503-3020",
    "date": "2020-08-12T06:11:09-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Debra Michael",
      "phoneNumber": "+234 (811) 407-3450",
      "emailAddress": "debramichael@gallaxia.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "debramichael@gallaxia.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Sarasonic Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EverettHays",
      "twitter": "https://twitter.com/FrancoGarner",
      "linkedin": "https://linkedin.com/in/AureliaWhitney"
    },
    "guarantor": {
      "fullName": "Vera Miranda",
      "relationship": "Friend",
      "phoneNumber": "+234 (810) 490-2923",
      "email": "veramiranda@sarasonic.com"
    }
  },
  {
    "id": "6708e8837af1a1151b404311",
    "organization": "Intergeek",
    "userName": "AudreyEspinoza",
    "email": "audreyespinoza@intergeek.com",
    "phoneNumber": "+234 (932) 595-3132",
    "date": "2024-03-03T04:01:40-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Grace Hansen",
      "phoneNumber": "+234 (888) 589-3900",
      "emailAddress": "gracehansen@intergeek.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "gracehansen@intergeek.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Colaire Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BishopFaulkner",
      "twitter": "https://twitter.com/ValenciaPorter",
      "linkedin": "https://linkedin.com/in/RussoBeach"
    },
    "guarantor": {
      "fullName": "Phillips Hampton",
      "relationship": "Colleague",
      "phoneNumber": "+234 (887) 435-2075",
      "email": "phillipshampton@colaire.com"
    }
  },
  {
    "id": "6708e88337830c9682c99562",
    "organization": "Spacewax",
    "userName": "BernardWard",
    "email": "bernardward@spacewax.com",
    "phoneNumber": "+234 (879) 449-3530",
    "date": "2020-09-25T07:47:39-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Suarez Larsen",
      "phoneNumber": "+234 (998) 470-2293",
      "emailAddress": "suarezlarsen@spacewax.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "suarezlarsen@spacewax.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Newcube Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AmandaCannon",
      "twitter": "https://twitter.com/AlfredaSandoval",
      "linkedin": "https://linkedin.com/in/EbonyWilcox"
    },
    "guarantor": {
      "fullName": "Candy Webb",
      "relationship": "Friend",
      "phoneNumber": "+234 (820) 538-3968",
      "email": "candywebb@newcube.com"
    }
  },
  {
    "id": "6708e883e033f0b8559c5368",
    "organization": "Canopoly",
    "userName": "IleneTurner",
    "email": "ileneturner@canopoly.com",
    "phoneNumber": "+234 (891) 439-3019",
    "date": "2020-08-03T11:49:29-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Kerri Hooper",
      "phoneNumber": "+234 (872) 511-2572",
      "emailAddress": "kerrihooper@canopoly.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "kerrihooper@canopoly.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Virxo Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BurgessNolan",
      "twitter": "https://twitter.com/OliverMorin",
      "linkedin": "https://linkedin.com/in/StephensPayne"
    },
    "guarantor": {
      "fullName": "Maribel Orr",
      "relationship": "Family",
      "phoneNumber": "+234 (890) 530-3287",
      "email": "maribelorr@virxo.com"
    }
  },
  {
    "id": "6708e8837b3b228d4cb623cc",
    "organization": "Acium",
    "userName": "LorrieRyan",
    "email": "lorrieryan@acium.com",
    "phoneNumber": "+234 (978) 534-3579",
    "date": "2021-09-03T07:15:21-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Page Lynch",
      "phoneNumber": "+234 (927) 546-3029",
      "emailAddress": "pagelynch@acium.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "pagelynch@acium.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Motovate Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BritneySolomon",
      "twitter": "https://twitter.com/HaydenZamora",
      "linkedin": "https://linkedin.com/in/MildredDillard"
    },
    "guarantor": {
      "fullName": "Mcneil Hahn",
      "relationship": "Family",
      "phoneNumber": "+234 (882) 426-2369",
      "email": "mcneilhahn@motovate.com"
    }
  },
  {
    "id": "6708e88396830e7a501f1792",
    "organization": "Qnekt",
    "userName": "FryeHines",
    "email": "fryehines@qnekt.com",
    "phoneNumber": "+234 (804) 549-2656",
    "date": "2024-06-01T03:33:11-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Nelson Rasmussen",
      "phoneNumber": "+234 (867) 441-3811",
      "emailAddress": "nelsonrasmussen@qnekt.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "nelsonrasmussen@qnekt.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Blurrybus Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CleoVasquez",
      "twitter": "https://twitter.com/MamieRichardson",
      "linkedin": "https://linkedin.com/in/ColeenWoodard"
    },
    "guarantor": {
      "fullName": "Jennie Graves",
      "relationship": "Family",
      "phoneNumber": "+234 (894) 414-2569",
      "email": "jenniegraves@blurrybus.com"
    }
  },
  {
    "id": "6708e883b2cdc16dc0d4ee4d",
    "organization": "Sonique",
    "userName": "LenoraDonovan",
    "email": "lenoradonovan@sonique.com",
    "phoneNumber": "+234 (915) 439-2998",
    "date": "2021-06-14T03:11:17-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Merle Duncan",
      "phoneNumber": "+234 (876) 409-3891",
      "emailAddress": "merleduncan@sonique.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "merleduncan@sonique.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Gorganic Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TillmanSimmons",
      "twitter": "https://twitter.com/ClineReed",
      "linkedin": "https://linkedin.com/in/VaughanWoods"
    },
    "guarantor": {
      "fullName": "Fay Hogan",
      "relationship": "Family",
      "phoneNumber": "+234 (946) 469-2203",
      "email": "fayhogan@gorganic.com"
    }
  },
  {
    "id": "6708e8834ac1cce31382efeb",
    "organization": "Geekfarm",
    "userName": "BurkePhelps",
    "email": "burkephelps@geekfarm.com",
    "phoneNumber": "+234 (837) 491-2978",
    "date": "2023-10-31T03:49:28-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Neal Knapp",
      "phoneNumber": "+234 (801) 560-2089",
      "emailAddress": "nealknapp@geekfarm.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "nealknapp@geekfarm.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Snowpoke Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LilianReyes",
      "twitter": "https://twitter.com/DelorisRoss",
      "linkedin": "https://linkedin.com/in/RichmondRosa"
    },
    "guarantor": {
      "fullName": "Florine Ewing",
      "relationship": "Family",
      "phoneNumber": "+234 (971) 464-3835",
      "email": "florineewing@snowpoke.com"
    }
  },
  {
    "id": "6708e883d33d9a612dc8d5d7",
    "organization": "Acumentor",
    "userName": "LindaWillis",
    "email": "lindawillis@acumentor.com",
    "phoneNumber": "+234 (974) 577-2270",
    "date": "2023-12-04T02:38:36-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Lawanda Pennington",
      "phoneNumber": "+234 (804) 442-2302",
      "emailAddress": "lawandapennington@acumentor.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "lawandapennington@acumentor.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Kongle Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KlineMelton",
      "twitter": "https://twitter.com/EarnestineKeith",
      "linkedin": "https://linkedin.com/in/TheresaHiggins"
    },
    "guarantor": {
      "fullName": "Avila Dotson",
      "relationship": "Family",
      "phoneNumber": "+234 (964) 535-3652",
      "email": "aviladotson@kongle.com"
    }
  },
  {
    "id": "6708e883e4fc615f99f6b21e",
    "organization": "Cablam",
    "userName": "McleanKnox",
    "email": "mcleanknox@cablam.com",
    "phoneNumber": "+234 (802) 559-2774",
    "date": "2024-04-10T09:24:49-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Rodgers Rowland",
      "phoneNumber": "+234 (989) 490-2395",
      "emailAddress": "rodgersrowland@cablam.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "rodgersrowland@cablam.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Extro Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LePatton",
      "twitter": "https://twitter.com/PerezSutton",
      "linkedin": "https://linkedin.com/in/BrooksHubbard"
    },
    "guarantor": {
      "fullName": "Hobbs Daugherty",
      "relationship": "Family",
      "phoneNumber": "+234 (973) 546-3904",
      "email": "hobbsdaugherty@extro.com"
    }
  },
  {
    "id": "6708e8830fcfd14c2ea7077b",
    "organization": "Zilch",
    "userName": "KnappHorton",
    "email": "knapphorton@zilch.com",
    "phoneNumber": "+234 (814) 449-3267",
    "date": "2024-03-27T07:00:47-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Adriana Rodriquez",
      "phoneNumber": "+234 (913) 476-2597",
      "emailAddress": "adrianarodriquez@zilch.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "adrianarodriquez@zilch.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Viocular Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ComptonClemons",
      "twitter": "https://twitter.com/BirdHouston",
      "linkedin": "https://linkedin.com/in/ClemonsMarshall"
    },
    "guarantor": {
      "fullName": "Wheeler Decker",
      "relationship": "Other",
      "phoneNumber": "+234 (847) 420-2883",
      "email": "wheelerdecker@viocular.com"
    }
  },
  {
    "id": "6708e8830ffcb1df134bbfcd",
    "organization": "Datagen",
    "userName": "StoneBoyer",
    "email": "stoneboyer@datagen.com",
    "phoneNumber": "+234 (958) 428-3317",
    "date": "2023-01-17T01:04:58-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Melba Manning",
      "phoneNumber": "+234 (818) 476-3457",
      "emailAddress": "melbamanning@datagen.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "melbamanning@datagen.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Plasmox Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RoseHumphrey",
      "twitter": "https://twitter.com/CarmelaBaldwin",
      "linkedin": "https://linkedin.com/in/TamraMacdonald"
    },
    "guarantor": {
      "fullName": "Hilda Frazier",
      "relationship": "Family",
      "phoneNumber": "+234 (877) 410-2901",
      "email": "hildafrazier@plasmox.com"
    }
  },
  {
    "id": "6708e883a724d4cd42320aa1",
    "organization": "Splinx",
    "userName": "HoffmanBailey",
    "email": "hoffmanbailey@splinx.com",
    "phoneNumber": "+234 (916) 439-2963",
    "date": "2023-01-23T09:28:06-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Josefa Ratliff",
      "phoneNumber": "+234 (938) 410-2334",
      "emailAddress": "josefaratliff@splinx.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "josefaratliff@splinx.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Gonkle Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BartlettBanks",
      "twitter": "https://twitter.com/LynnFarmer",
      "linkedin": "https://linkedin.com/in/WiseSnider"
    },
    "guarantor": {
      "fullName": "Flora Duffy",
      "relationship": "Friend",
      "phoneNumber": "+234 (964) 485-3248",
      "email": "floraduffy@gonkle.com"
    }
  },
  {
    "id": "6708e883b151c1eaff5afc36",
    "organization": "Microluxe",
    "userName": "MelendezRomero",
    "email": "melendezromero@microluxe.com",
    "phoneNumber": "+234 (882) 533-2416",
    "date": "2022-08-05T03:48:05-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Morris Brennan",
      "phoneNumber": "+234 (870) 477-2228",
      "emailAddress": "morrisbrennan@microluxe.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "morrisbrennan@microluxe.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Idetica Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WaltersBauer",
      "twitter": "https://twitter.com/SandyHartman",
      "linkedin": "https://linkedin.com/in/ColemanFerrell"
    },
    "guarantor": {
      "fullName": "Saundra Barber",
      "relationship": "Family",
      "phoneNumber": "+234 (895) 440-2957",
      "email": "saundrabarber@idetica.com"
    }
  },
  {
    "id": "6708e88392b5bfeafd6cb213",
    "organization": "Portica",
    "userName": "KatinaMccoy",
    "email": "katinamccoy@portica.com",
    "phoneNumber": "+234 (973) 404-3529",
    "date": "2023-03-05T08:21:02-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Bean Hodge",
      "phoneNumber": "+234 (960) 524-3328",
      "emailAddress": "beanhodge@portica.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "beanhodge@portica.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Pheast Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AmyMoody",
      "twitter": "https://twitter.com/ByrdStephens",
      "linkedin": "https://linkedin.com/in/TiaPena"
    },
    "guarantor": {
      "fullName": "Rutledge Sloan",
      "relationship": "Other",
      "phoneNumber": "+234 (840) 412-2022",
      "email": "rutledgesloan@pheast.com"
    }
  },
  {
    "id": "6708e8838c52e7ebe6708972",
    "organization": "Ezentia",
    "userName": "BonnerBeard",
    "email": "bonnerbeard@ezentia.com",
    "phoneNumber": "+234 (922) 564-3781",
    "date": "2020-12-01T09:31:48-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Delia Haynes",
      "phoneNumber": "+234 (881) 414-3020",
      "emailAddress": "deliahaynes@ezentia.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "deliahaynes@ezentia.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Netur Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BakerAdams",
      "twitter": "https://twitter.com/OraHill",
      "linkedin": "https://linkedin.com/in/HoldenBrooks"
    },
    "guarantor": {
      "fullName": "Moran Kidd",
      "relationship": "Other",
      "phoneNumber": "+234 (860) 596-3406",
      "email": "morankidd@netur.com"
    }
  },
  {
    "id": "6708e88346383a14f741ab53",
    "organization": "Tribalog",
    "userName": "JoniIrwin",
    "email": "joniirwin@tribalog.com",
    "phoneNumber": "+234 (905) 564-2452",
    "date": "2021-01-03T07:20:38-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Barrera Wade",
      "phoneNumber": "+234 (972) 511-2128",
      "emailAddress": "barrerawade@tribalog.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "barrerawade@tribalog.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Interodeo Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TracyPope",
      "twitter": "https://twitter.com/SocorroKline",
      "linkedin": "https://linkedin.com/in/BlevinsMontgomery"
    },
    "guarantor": {
      "fullName": "Susanne Atkinson",
      "relationship": "Other",
      "phoneNumber": "+234 (839) 446-2605",
      "email": "susanneatkinson@interodeo.com"
    }
  },
  {
    "id": "6708e8833762c05d4cfa4dc3",
    "organization": "Immunics",
    "userName": "CannonFarley",
    "email": "cannonfarley@immunics.com",
    "phoneNumber": "+234 (804) 444-3781",
    "date": "2021-10-23T11:36:27-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Virgie Copeland",
      "phoneNumber": "+234 (820) 481-3791",
      "emailAddress": "virgiecopeland@immunics.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "virgiecopeland@immunics.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Isologica Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JessicaAdkins",
      "twitter": "https://twitter.com/SantosCotton",
      "linkedin": "https://linkedin.com/in/RochelleHorn"
    },
    "guarantor": {
      "fullName": "Annie Phillips",
      "relationship": "Other",
      "phoneNumber": "+234 (857) 487-2032",
      "email": "anniephillips@isologica.com"
    }
  },
  {
    "id": "6708e883c8a73c5d6aae46f7",
    "organization": "Slambda",
    "userName": "SophiaGreen",
    "email": "sophiagreen@slambda.com",
    "phoneNumber": "+234 (927) 566-3503",
    "date": "2023-08-28T03:52:15-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Garza Donaldson",
      "phoneNumber": "+234 (943) 507-3858",
      "emailAddress": "garzadonaldson@slambda.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "garzadonaldson@slambda.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Orbalix Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MckeeLeon",
      "twitter": "https://twitter.com/GertrudeMcclain",
      "linkedin": "https://linkedin.com/in/MccoyFuentes"
    },
    "guarantor": {
      "fullName": "Ewing Glenn",
      "relationship": "Other",
      "phoneNumber": "+234 (933) 488-3820",
      "email": "ewingglenn@orbalix.com"
    }
  },
  {
    "id": "6708e88349549ab528050c3c",
    "organization": "Vurbo",
    "userName": "BarberBradford",
    "email": "barberbradford@vurbo.com",
    "phoneNumber": "+234 (832) 481-2366",
    "date": "2022-09-28T10:47:21-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Edwards Roberson",
      "phoneNumber": "+234 (877) 598-3052",
      "emailAddress": "edwardsroberson@vurbo.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "edwardsroberson@vurbo.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Singavera Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GuerreroSchneider",
      "twitter": "https://twitter.com/ChrystalSilva",
      "linkedin": "https://linkedin.com/in/BurrisEstrada"
    },
    "guarantor": {
      "fullName": "Castillo Le",
      "relationship": "Family",
      "phoneNumber": "+234 (807) 600-3234",
      "email": "castillole@singavera.com"
    }
  },
  {
    "id": "6708e883af45b65e824a85f7",
    "organization": "Optique",
    "userName": "SuePaul",
    "email": "suepaul@optique.com",
    "phoneNumber": "+234 (906) 424-2436",
    "date": "2021-10-30T10:21:14-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Marks Perry",
      "phoneNumber": "+234 (939) 557-2997",
      "emailAddress": "marksperry@optique.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "marksperry@optique.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Dancity Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WalshBooth",
      "twitter": "https://twitter.com/LacyNorris",
      "linkedin": "https://linkedin.com/in/RochaWebster"
    },
    "guarantor": {
      "fullName": "Kimberly Larson",
      "relationship": "Friend",
      "phoneNumber": "+234 (983) 404-3713",
      "email": "kimberlylarson@dancity.com"
    }
  },
  {
    "id": "6708e8831b71c6d489807c8b",
    "organization": "Quarx",
    "userName": "WilderSharpe",
    "email": "wildersharpe@quarx.com",
    "phoneNumber": "+234 (885) 565-2786",
    "date": "2021-11-19T04:55:49-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Katrina Hardin",
      "phoneNumber": "+234 (972) 567-2944",
      "emailAddress": "katrinahardin@quarx.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "katrinahardin@quarx.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Tingles Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WalterAnderson",
      "twitter": "https://twitter.com/FerrellVega",
      "linkedin": "https://linkedin.com/in/FaulknerSchroeder"
    },
    "guarantor": {
      "fullName": "Mcgowan Melendez",
      "relationship": "Family",
      "phoneNumber": "+234 (804) 515-3554",
      "email": "mcgowanmelendez@tingles.com"
    }
  },
  {
    "id": "6708e883accc0594271a0206",
    "organization": "Flumbo",
    "userName": "FaithMcmahon",
    "email": "faithmcmahon@flumbo.com",
    "phoneNumber": "+234 (824) 536-3375",
    "date": "2023-03-26T10:32:43-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Livingston Holder",
      "phoneNumber": "+234 (804) 535-3220",
      "emailAddress": "livingstonholder@flumbo.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "livingstonholder@flumbo.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Momentia Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/GlendaFrederick",
      "twitter": "https://twitter.com/CarrieRuiz",
      "linkedin": "https://linkedin.com/in/CarmenMaddox"
    },
    "guarantor": {
      "fullName": "Patricia Pruitt",
      "relationship": "Other",
      "phoneNumber": "+234 (883) 587-2470",
      "email": "patriciapruitt@momentia.com"
    }
  },
  {
    "id": "6708e883e718866f6474e7b2",
    "organization": "Pasturia",
    "userName": "RasmussenRoth",
    "email": "rasmussenroth@pasturia.com",
    "phoneNumber": "+234 (901) 529-2202",
    "date": "2020-10-23T08:46:49-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Vinson Sellers",
      "phoneNumber": "+234 (997) 412-2409",
      "emailAddress": "vinsonsellers@pasturia.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "vinsonsellers@pasturia.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Suremax Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ForemanVang",
      "twitter": "https://twitter.com/FernandezBerry",
      "linkedin": "https://linkedin.com/in/LeaSuarez"
    },
    "guarantor": {
      "fullName": "Rosetta Bender",
      "relationship": "Family",
      "phoneNumber": "+234 (808) 503-2509",
      "email": "rosettabender@suremax.com"
    }
  },
  {
    "id": "6708e883baa8e433302f7c9c",
    "organization": "Voipa",
    "userName": "ClaireShort",
    "email": "claireshort@voipa.com",
    "phoneNumber": "+234 (940) 522-2642",
    "date": "2021-07-22T04:30:50-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Leslie Dorsey",
      "phoneNumber": "+234 (944) 578-2073",
      "emailAddress": "lesliedorsey@voipa.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "lesliedorsey@voipa.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Bolax Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TerrellScott",
      "twitter": "https://twitter.com/GracielaKoch",
      "linkedin": "https://linkedin.com/in/MeyerBoyd"
    },
    "guarantor": {
      "fullName": "Brock Hunt",
      "relationship": "Family",
      "phoneNumber": "+234 (905) 510-3497",
      "email": "brockhunt@bolax.com"
    }
  },
  {
    "id": "6708e883b48cba7118e46de2",
    "organization": "Krog",
    "userName": "ReyesMonroe",
    "email": "reyesmonroe@krog.com",
    "phoneNumber": "+234 (994) 518-2075",
    "date": "2022-09-21T07:47:14-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Janna Mckenzie",
      "phoneNumber": "+234 (944) 598-2341",
      "emailAddress": "jannamckenzie@krog.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "jannamckenzie@krog.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Corecom Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MarquitaMaxwell",
      "twitter": "https://twitter.com/RoxieMiles",
      "linkedin": "https://linkedin.com/in/LilaCollier"
    },
    "guarantor": {
      "fullName": "Nell Thompson",
      "relationship": "Friend",
      "phoneNumber": "+234 (949) 473-3066",
      "email": "nellthompson@corecom.com"
    }
  },
  {
    "id": "6708e883e2ccec860a0a6de0",
    "organization": "Biohab",
    "userName": "ConnerBaker",
    "email": "connerbaker@biohab.com",
    "phoneNumber": "+234 (997) 550-3542",
    "date": "2024-07-04T06:53:52-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Clarice Wood",
      "phoneNumber": "+234 (935) 444-3716",
      "emailAddress": "claricewood@biohab.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "claricewood@biohab.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Pathways Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/FinchNash",
      "twitter": "https://twitter.com/YolandaSolis",
      "linkedin": "https://linkedin.com/in/LevyKey"
    },
    "guarantor": {
      "fullName": "Harmon Matthews",
      "relationship": "Family",
      "phoneNumber": "+234 (926) 594-2816",
      "email": "harmonmatthews@pathways.com"
    }
  },
  {
    "id": "6708e8831f494b7130dadecc",
    "organization": "Dymi",
    "userName": "BarryBenjamin",
    "email": "barrybenjamin@dymi.com",
    "phoneNumber": "+234 (887) 552-2546",
    "date": "2022-12-26T12:58:35-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Chasity Wilder",
      "phoneNumber": "+234 (966) 470-3300",
      "emailAddress": "chasitywilder@dymi.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "chasitywilder@dymi.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Geeknet Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/NoraHarrington",
      "twitter": "https://twitter.com/WrightHurst",
      "linkedin": "https://linkedin.com/in/JeanneEverett"
    },
    "guarantor": {
      "fullName": "Samantha Cash",
      "relationship": "Family",
      "phoneNumber": "+234 (891) 574-2720",
      "email": "samanthacash@geeknet.com"
    }
  },
  {
    "id": "6708e883de0e951919f55ac2",
    "organization": "Quantasis",
    "userName": "BuckleyFry",
    "email": "buckleyfry@quantasis.com",
    "phoneNumber": "+234 (866) 492-3665",
    "date": "2022-11-05T09:09:29-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Kirsten Parsons",
      "phoneNumber": "+234 (855) 401-2497",
      "emailAddress": "kirstenparsons@quantasis.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "kirstenparsons@quantasis.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Nexgene Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HartmanRiley",
      "twitter": "https://twitter.com/HooverMorton",
      "linkedin": "https://linkedin.com/in/StokesSmall"
    },
    "guarantor": {
      "fullName": "Ronda Carter",
      "relationship": "Friend",
      "phoneNumber": "+234 (908) 457-2625",
      "email": "rondacarter@nexgene.com"
    }
  },
  {
    "id": "6708e883d504ad9675f2f514",
    "organization": "Edecine",
    "userName": "BrianaWhite",
    "email": "brianawhite@edecine.com",
    "phoneNumber": "+234 (959) 568-3675",
    "date": "2021-10-28T11:36:49-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Freda Howell",
      "phoneNumber": "+234 (865) 579-3625",
      "emailAddress": "fredahowell@edecine.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "fredahowell@edecine.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Steeltab Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MarjorieLamb",
      "twitter": "https://twitter.com/AnnKim",
      "linkedin": "https://linkedin.com/in/EstelleGibbs"
    },
    "guarantor": {
      "fullName": "Lewis Dale",
      "relationship": "Other",
      "phoneNumber": "+234 (877) 480-3479",
      "email": "lewisdale@steeltab.com"
    }
  },
  {
    "id": "6708e883acbbd09cc1ddaa21",
    "organization": "Eventex",
    "userName": "TinaBarnett",
    "email": "tinabarnett@eventex.com",
    "phoneNumber": "+234 (940) 529-2441",
    "date": "2023-11-29T12:59:56-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Navarro Nieves",
      "phoneNumber": "+234 (855) 545-2314",
      "emailAddress": "navarronieves@eventex.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "navarronieves@eventex.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Xeronk Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RhodesWest",
      "twitter": "https://twitter.com/McmahonJohnston",
      "linkedin": "https://linkedin.com/in/CarissaDyer"
    },
    "guarantor": {
      "fullName": "Cummings Wise",
      "relationship": "Other",
      "phoneNumber": "+234 (825) 590-3186",
      "email": "cummingswise@xeronk.com"
    }
  },
  {
    "id": "6708e88343b67e39322633ca",
    "organization": "Supremia",
    "userName": "UnderwoodMosley",
    "email": "underwoodmosley@supremia.com",
    "phoneNumber": "+234 (842) 532-2912",
    "date": "2021-01-01T08:49:23-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Jeannine Valentine",
      "phoneNumber": "+234 (825) 495-2436",
      "emailAddress": "jeanninevalentine@supremia.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "jeanninevalentine@supremia.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Eargo Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KelliDudley",
      "twitter": "https://twitter.com/OnealFischer",
      "linkedin": "https://linkedin.com/in/LunaGay"
    },
    "guarantor": {
      "fullName": "Collins Sweeney",
      "relationship": "Colleague",
      "phoneNumber": "+234 (902) 582-3228",
      "email": "collinssweeney@eargo.com"
    }
  },
  {
    "id": "6708e8831438ace703e55caa",
    "organization": "Insectus",
    "userName": "ImogeneHenry",
    "email": "imogenehenry@insectus.com",
    "phoneNumber": "+234 (808) 548-3093",
    "date": "2022-07-29T07:20:36-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Romero Coleman",
      "phoneNumber": "+234 (993) 428-2982",
      "emailAddress": "romerocoleman@insectus.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "romerocoleman@insectus.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Medalert Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AlisonHood",
      "twitter": "https://twitter.com/NormaLambert",
      "linkedin": "https://linkedin.com/in/WeissSchultz"
    },
    "guarantor": {
      "fullName": "Schwartz Mcdonald",
      "relationship": "Colleague",
      "phoneNumber": "+234 (956) 424-3691",
      "email": "schwartzmcdonald@medalert.com"
    }
  },
  {
    "id": "6708e88363289ef47a0df803",
    "organization": "Viasia",
    "userName": "JerriHamilton",
    "email": "jerrihamilton@viasia.com",
    "phoneNumber": "+234 (866) 541-3272",
    "date": "2021-06-01T07:55:45-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Boone Camacho",
      "phoneNumber": "+234 (933) 566-3579",
      "emailAddress": "boonecamacho@viasia.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "boonecamacho@viasia.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Biospan Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KochHess",
      "twitter": "https://twitter.com/EvePatrick",
      "linkedin": "https://linkedin.com/in/NielsenRosales"
    },
    "guarantor": {
      "fullName": "Osborn Arnold",
      "relationship": "Other",
      "phoneNumber": "+234 (884) 488-2543",
      "email": "osbornarnold@biospan.com"
    }
  },
  {
    "id": "6708e883f17e622662510926",
    "organization": "Insurity",
    "userName": "BarbaraFranks",
    "email": "barbarafranks@insurity.com",
    "phoneNumber": "+234 (839) 514-3717",
    "date": "2022-03-05T09:10:42-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Patterson Montoya",
      "phoneNumber": "+234 (905) 415-3954",
      "emailAddress": "pattersonmontoya@insurity.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "pattersonmontoya@insurity.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Rodemco Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LilyRobinson",
      "twitter": "https://twitter.com/MariMoreno",
      "linkedin": "https://linkedin.com/in/McdonaldSparks"
    },
    "guarantor": {
      "fullName": "Susanna Cline",
      "relationship": "Colleague",
      "phoneNumber": "+234 (826) 587-2574",
      "email": "susannacline@rodemco.com"
    }
  },
  {
    "id": "6708e883f720e9da74901eaa",
    "organization": "Furnitech",
    "userName": "NicholeFleming",
    "email": "nicholefleming@furnitech.com",
    "phoneNumber": "+234 (919) 420-2806",
    "date": "2021-08-28T11:13:40-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Cruz Medina",
      "phoneNumber": "+234 (877) 463-3579",
      "emailAddress": "cruzmedina@furnitech.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "cruzmedina@furnitech.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Digirang Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HatfieldGardner",
      "twitter": "https://twitter.com/VelezJames",
      "linkedin": "https://linkedin.com/in/McgeeButler"
    },
    "guarantor": {
      "fullName": "Burns Burch",
      "relationship": "Family",
      "phoneNumber": "+234 (987) 508-2779",
      "email": "burnsburch@digirang.com"
    }
  },
  {
    "id": "6708e8830c6ac326324f734c",
    "organization": "Martgo",
    "userName": "AndrewsMercer",
    "email": "andrewsmercer@martgo.com",
    "phoneNumber": "+234 (874) 478-2079",
    "date": "2024-02-21T12:49:00-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Ila Briggs",
      "phoneNumber": "+234 (939) 471-3738",
      "emailAddress": "ilabriggs@martgo.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "ilabriggs@martgo.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Fuelworks Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GibsonRamirez",
      "twitter": "https://twitter.com/AshleyMckee",
      "linkedin": "https://linkedin.com/in/VaughnDominguez"
    },
    "guarantor": {
      "fullName": "Suzanne Conley",
      "relationship": "Colleague",
      "phoneNumber": "+234 (869) 457-3368",
      "email": "suzanneconley@fuelworks.com"
    }
  },
  {
    "id": "6708e883c32065674b2e0846",
    "organization": "Miraclis",
    "userName": "SuttonShelton",
    "email": "suttonshelton@miraclis.com",
    "phoneNumber": "+234 (907) 546-2668",
    "date": "2024-04-21T09:27:28-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Bethany Mcneil",
      "phoneNumber": "+234 (904) 566-3160",
      "emailAddress": "bethanymcneil@miraclis.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "bethanymcneil@miraclis.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Ozean Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AlbaRogers",
      "twitter": "https://twitter.com/ChandlerFlowers",
      "linkedin": "https://linkedin.com/in/BenderOsborn"
    },
    "guarantor": {
      "fullName": "Guerra Yang",
      "relationship": "Other",
      "phoneNumber": "+234 (953) 492-3215",
      "email": "guerrayang@ozean.com"
    }
  },
  {
    "id": "6708e8830da2ac738a8e2202",
    "organization": "Isotrack",
    "userName": "JoynerCasey",
    "email": "joynercasey@isotrack.com",
    "phoneNumber": "+234 (936) 588-2554",
    "date": "2020-05-26T11:40:41-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Ines Mays",
      "phoneNumber": "+234 (982) 579-3042",
      "emailAddress": "inesmays@isotrack.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "inesmays@isotrack.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Talae Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WestSanford",
      "twitter": "https://twitter.com/AcostaBlack",
      "linkedin": "https://linkedin.com/in/StephaniePugh"
    },
    "guarantor": {
      "fullName": "Rowe Horne",
      "relationship": "Family",
      "phoneNumber": "+234 (945) 569-3049",
      "email": "rowehorne@talae.com"
    }
  },
  {
    "id": "6708e8839d629edb3172defe",
    "organization": "Cosmosis",
    "userName": "MaryannBurke",
    "email": "maryannburke@cosmosis.com",
    "phoneNumber": "+234 (928) 448-2581",
    "date": "2021-12-20T11:16:15-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Daugherty Delaney",
      "phoneNumber": "+234 (963) 464-3356",
      "emailAddress": "daughertydelaney@cosmosis.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "daughertydelaney@cosmosis.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Atomica Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/SaraJacobs",
      "twitter": "https://twitter.com/JoyCardenas",
      "linkedin": "https://linkedin.com/in/BrayYork"
    },
    "guarantor": {
      "fullName": "Chase England",
      "relationship": "Family",
      "phoneNumber": "+234 (986) 405-3062",
      "email": "chaseengland@atomica.com"
    }
  },
  {
    "id": "6708e88312cef5bb9a759049",
    "organization": "Extragen",
    "userName": "TamiRobles",
    "email": "tamirobles@extragen.com",
    "phoneNumber": "+234 (966) 416-2882",
    "date": "2020-02-05T05:39:18-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Lucia Park",
      "phoneNumber": "+234 (813) 495-2935",
      "emailAddress": "luciapark@extragen.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "luciapark@extragen.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Qualitex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/OpalWalls",
      "twitter": "https://twitter.com/NanetteErickson",
      "linkedin": "https://linkedin.com/in/BeckyChavez"
    },
    "guarantor": {
      "fullName": "Johns Griffin",
      "relationship": "Other",
      "phoneNumber": "+234 (946) 455-3077",
      "email": "johnsgriffin@qualitex.com"
    }
  },
  {
    "id": "6708e88336891310f9bf88fb",
    "organization": "Interfind",
    "userName": "PaulFinley",
    "email": "paulfinley@interfind.com",
    "phoneNumber": "+234 (971) 566-3984",
    "date": "2024-09-24T04:40:07-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Kristie Patterson",
      "phoneNumber": "+234 (847) 593-3433",
      "emailAddress": "kristiepatterson@interfind.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "kristiepatterson@interfind.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Extremo Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LolitaConway",
      "twitter": "https://twitter.com/CabreraWashington",
      "linkedin": "https://linkedin.com/in/RossJackson"
    },
    "guarantor": {
      "fullName": "Luz Mason",
      "relationship": "Colleague",
      "phoneNumber": "+234 (961) 413-3037",
      "email": "luzmason@extremo.com"
    }
  },
  {
    "id": "6708e883c106d01b63cd8d21",
    "organization": "Quilm",
    "userName": "SargentFord",
    "email": "sargentford@quilm.com",
    "phoneNumber": "+234 (997) 517-2283",
    "date": "2021-05-30T08:05:34-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Bowen Oneil",
      "phoneNumber": "+234 (889) 518-2775",
      "emailAddress": "bowenoneil@quilm.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "bowenoneil@quilm.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Ersum Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MandySwanson",
      "twitter": "https://twitter.com/EstesEllis",
      "linkedin": "https://linkedin.com/in/StevensCrawford"
    },
    "guarantor": {
      "fullName": "Reese Madden",
      "relationship": "Colleague",
      "phoneNumber": "+234 (933) 564-3442",
      "email": "reesemadden@ersum.com"
    }
  },
  {
    "id": "6708e883d639812cce15180e",
    "organization": "Diginetic",
    "userName": "DanaMullen",
    "email": "danamullen@diginetic.com",
    "phoneNumber": "+234 (904) 523-3277",
    "date": "2021-12-30T12:31:48-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Mcfadden Nunez",
      "phoneNumber": "+234 (925) 597-2538",
      "emailAddress": "mcfaddennunez@diginetic.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "mcfaddennunez@diginetic.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Wrapture Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MargaretRoberts",
      "twitter": "https://twitter.com/DarcyOchoa",
      "linkedin": "https://linkedin.com/in/KarinaRose"
    },
    "guarantor": {
      "fullName": "Eaton Chambers",
      "relationship": "Family",
      "phoneNumber": "+234 (898) 412-3295",
      "email": "eatonchambers@wrapture.com"
    }
  },
  {
    "id": "6708e883158d2cab01d50e64",
    "organization": "Zensure",
    "userName": "KaufmanHerman",
    "email": "kaufmanherman@zensure.com",
    "phoneNumber": "+234 (836) 456-2611",
    "date": "2020-12-03T01:33:37-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Nelda Curtis",
      "phoneNumber": "+234 (805) 409-2679",
      "emailAddress": "neldacurtis@zensure.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "neldacurtis@zensure.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Opticall Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KatyMorris",
      "twitter": "https://twitter.com/RebeccaWaters",
      "linkedin": "https://linkedin.com/in/WolfeHardy"
    },
    "guarantor": {
      "fullName": "Angelia Whitehead",
      "relationship": "Family",
      "phoneNumber": "+234 (817) 494-3247",
      "email": "angeliawhitehead@opticall.com"
    }
  },
  {
    "id": "6708e883b6cd1a8b18bc517d",
    "organization": "Retrack",
    "userName": "VasquezHolmes",
    "email": "vasquezholmes@retrack.com",
    "phoneNumber": "+234 (941) 577-2857",
    "date": "2022-12-25T12:00:11-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Ballard Long",
      "phoneNumber": "+234 (964) 422-2116",
      "emailAddress": "ballardlong@retrack.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "ballardlong@retrack.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Pyrami Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JimenezBlevins",
      "twitter": "https://twitter.com/SuzetteChaney",
      "linkedin": "https://linkedin.com/in/McclainHickman"
    },
    "guarantor": {
      "fullName": "Ginger Carpenter",
      "relationship": "Other",
      "phoneNumber": "+234 (997) 561-2142",
      "email": "gingercarpenter@pyrami.com"
    }
  },
  {
    "id": "6708e883b2926cacc75bc92e",
    "organization": "Talendula",
    "userName": "ChapmanMathis",
    "email": "chapmanmathis@talendula.com",
    "phoneNumber": "+234 (842) 594-3153",
    "date": "2022-01-20T07:28:39-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Gill Meyer",
      "phoneNumber": "+234 (991) 428-3197",
      "emailAddress": "gillmeyer@talendula.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "gillmeyer@talendula.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Geekosis Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ShieldsMacias",
      "twitter": "https://twitter.com/PenelopeNichols",
      "linkedin": "https://linkedin.com/in/ClarkKirkland"
    },
    "guarantor": {
      "fullName": "Sheila Cameron",
      "relationship": "Other",
      "phoneNumber": "+234 (819) 560-3936",
      "email": "sheilacameron@geekosis.com"
    }
  },
  {
    "id": "6708e883599d4834e2d13985",
    "organization": "Neurocell",
    "userName": "HopkinsBradley",
    "email": "hopkinsbradley@neurocell.com",
    "phoneNumber": "+234 (833) 559-2230",
    "date": "2022-09-01T08:54:20-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Sears Wright",
      "phoneNumber": "+234 (865) 566-3295",
      "emailAddress": "searswright@neurocell.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "searswright@neurocell.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Playce Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SotoMaynard",
      "twitter": "https://twitter.com/SweetHarvey",
      "linkedin": "https://linkedin.com/in/AnnetteAlford"
    },
    "guarantor": {
      "fullName": "Graham Merrill",
      "relationship": "Friend",
      "phoneNumber": "+234 (979) 533-3954",
      "email": "grahammerrill@playce.com"
    }
  },
  {
    "id": "6708e8837919e482d6178fac",
    "organization": "Phuel",
    "userName": "HolmanChang",
    "email": "holmanchang@phuel.com",
    "phoneNumber": "+234 (972) 441-3851",
    "date": "2021-03-28T01:49:47-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Savannah Marsh",
      "phoneNumber": "+234 (891) 551-2454",
      "emailAddress": "savannahmarsh@phuel.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "savannahmarsh@phuel.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Apextri Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/OneilCole",
      "twitter": "https://twitter.com/BetteValencia",
      "linkedin": "https://linkedin.com/in/FullerOwen"
    },
    "guarantor": {
      "fullName": "Kane Crane",
      "relationship": "Friend",
      "phoneNumber": "+234 (860) 513-2451",
      "email": "kanecrane@apextri.com"
    }
  },
  {
    "id": "6708e88370b6d68c7ceac068",
    "organization": "Capscreen",
    "userName": "LongWiley",
    "email": "longwiley@capscreen.com",
    "phoneNumber": "+234 (929) 412-3060",
    "date": "2021-01-16T05:32:25-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Constance Delgado",
      "phoneNumber": "+234 (837) 412-2391",
      "emailAddress": "constancedelgado@capscreen.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "constancedelgado@capscreen.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Limage Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FowlerChandler",
      "twitter": "https://twitter.com/TiffanyBurt",
      "linkedin": "https://linkedin.com/in/JanieSmith"
    },
    "guarantor": {
      "fullName": "Monica Blackwell",
      "relationship": "Colleague",
      "phoneNumber": "+234 (840) 430-3094",
      "email": "monicablackwell@limage.com"
    }
  },
  {
    "id": "6708e883f64afe861b3dc018",
    "organization": "Aquamate",
    "userName": "YorkRocha",
    "email": "yorkrocha@aquamate.com",
    "phoneNumber": "+234 (962) 506-2197",
    "date": "2020-10-09T01:58:30-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Hayes Guy",
      "phoneNumber": "+234 (893) 422-3460",
      "emailAddress": "hayesguy@aquamate.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "hayesguy@aquamate.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Aeora Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HahnBray",
      "twitter": "https://twitter.com/IsabelleStein",
      "linkedin": "https://linkedin.com/in/FoleyByers"
    },
    "guarantor": {
      "fullName": "Kramer Terry",
      "relationship": "Other",
      "phoneNumber": "+234 (975) 453-2715",
      "email": "kramerterry@aeora.com"
    }
  },
  {
    "id": "6708e88355c6d343cd73eca7",
    "organization": "Volax",
    "userName": "DavidsonSullivan",
    "email": "davidsonsullivan@volax.com",
    "phoneNumber": "+234 (828) 567-2296",
    "date": "2022-06-13T06:27:07-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Mcleod Flores",
      "phoneNumber": "+234 (805) 464-2129",
      "emailAddress": "mcleodflores@volax.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "mcleodflores@volax.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Quotezart Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LoisKlein",
      "twitter": "https://twitter.com/PenningtonTyson",
      "linkedin": "https://linkedin.com/in/LillieMclaughlin"
    },
    "guarantor": {
      "fullName": "Carole Sharp",
      "relationship": "Other",
      "phoneNumber": "+234 (982) 571-2042",
      "email": "carolesharp@quotezart.com"
    }
  },
  {
    "id": "6708e883ed881d97297bdb11",
    "organization": "Enerforce",
    "userName": "SabrinaBaxter",
    "email": "sabrinabaxter@enerforce.com",
    "phoneNumber": "+234 (934) 586-3665",
    "date": "2021-02-21T03:13:28-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Grant Shannon",
      "phoneNumber": "+234 (857) 591-3014",
      "emailAddress": "grantshannon@enerforce.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "grantshannon@enerforce.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Amtap Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JeanineHolcomb",
      "twitter": "https://twitter.com/MoodyFowler",
      "linkedin": "https://linkedin.com/in/WittHuber"
    },
    "guarantor": {
      "fullName": "Susan Mcfarland",
      "relationship": "Other",
      "phoneNumber": "+234 (939) 599-2552",
      "email": "susanmcfarland@amtap.com"
    }
  },
  {
    "id": "6708e883878fe4347819e216",
    "organization": "Comcur",
    "userName": "BradyLang",
    "email": "bradylang@comcur.com",
    "phoneNumber": "+234 (879) 534-3361",
    "date": "2024-03-08T09:26:42-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Deborah Daniels",
      "phoneNumber": "+234 (997) 517-3964",
      "emailAddress": "deborahdaniels@comcur.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "deborahdaniels@comcur.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Surelogic Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DonovanVance",
      "twitter": "https://twitter.com/FrankGood",
      "linkedin": "https://linkedin.com/in/ShelbyLindsey"
    },
    "guarantor": {
      "fullName": "Ellen Winters",
      "relationship": "Other",
      "phoneNumber": "+234 (914) 581-3653",
      "email": "ellenwinters@surelogic.com"
    }
  },
  {
    "id": "6708e8832af6f31ce08c8687",
    "organization": "Kinetica",
    "userName": "CrosbyWeber",
    "email": "crosbyweber@kinetica.com",
    "phoneNumber": "+234 (921) 569-3788",
    "date": "2024-08-13T11:49:00-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Noemi Ball",
      "phoneNumber": "+234 (875) 525-3713",
      "emailAddress": "noemiball@kinetica.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "noemiball@kinetica.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Bluplanet Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DanielBurnett",
      "twitter": "https://twitter.com/CurryDavis",
      "linkedin": "https://linkedin.com/in/ConleyCampbell"
    },
    "guarantor": {
      "fullName": "Valerie Burgess",
      "relationship": "Colleague",
      "phoneNumber": "+234 (898) 445-3599",
      "email": "valerieburgess@bluplanet.com"
    }
  },
  {
    "id": "6708e8833d7da7067f7b137f",
    "organization": "Ewaves",
    "userName": "PrattFisher",
    "email": "prattfisher@ewaves.com",
    "phoneNumber": "+234 (921) 594-2831",
    "date": "2024-04-26T04:24:32-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Ingrid Pittman",
      "phoneNumber": "+234 (968) 481-2265",
      "emailAddress": "ingridpittman@ewaves.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "ingridpittman@ewaves.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Maineland Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HubbardStewart",
      "twitter": "https://twitter.com/BradshawForbes",
      "linkedin": "https://linkedin.com/in/MoralesBenton"
    },
    "guarantor": {
      "fullName": "Salazar Chan",
      "relationship": "Other",
      "phoneNumber": "+234 (831) 545-3197",
      "email": "salazarchan@maineland.com"
    }
  },
  {
    "id": "6708e883e6f99a5e40f419c4",
    "organization": "Exotechno",
    "userName": "DayBonner",
    "email": "daybonner@exotechno.com",
    "phoneNumber": "+234 (974) 569-3618",
    "date": "2022-11-28T03:40:54-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Araceli Mitchell",
      "phoneNumber": "+234 (882) 431-3252",
      "emailAddress": "aracelimitchell@exotechno.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "aracelimitchell@exotechno.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Illumity Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MyrtleCarr",
      "twitter": "https://twitter.com/MercerVelasquez",
      "linkedin": "https://linkedin.com/in/HenrySpears"
    },
    "guarantor": {
      "fullName": "Goff Reeves",
      "relationship": "Friend",
      "phoneNumber": "+234 (882) 453-3062",
      "email": "goffreeves@illumity.com"
    }
  },
  {
    "id": "6708e88319c5f2800b383e5c",
    "organization": "Quailcom",
    "userName": "GenaAcevedo",
    "email": "genaacevedo@quailcom.com",
    "phoneNumber": "+234 (853) 582-2100",
    "date": "2020-01-13T11:59:21-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Aida Lewis",
      "phoneNumber": "+234 (968) 551-3577",
      "emailAddress": "aidalewis@quailcom.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "aidalewis@quailcom.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Baluba Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/FannyJordan",
      "twitter": "https://twitter.com/DoreenPage",
      "linkedin": "https://linkedin.com/in/LouisaGentry"
    },
    "guarantor": {
      "fullName": "Velasquez Noel",
      "relationship": "Family",
      "phoneNumber": "+234 (892) 564-2308",
      "email": "velasqueznoel@baluba.com"
    }
  },
  {
    "id": "6708e88387487552549cd43d",
    "organization": "Zinca",
    "userName": "ConcepcionCharles",
    "email": "concepcioncharles@zinca.com",
    "phoneNumber": "+234 (813) 488-2475",
    "date": "2024-08-14T12:21:02-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Holland Ellison",
      "phoneNumber": "+234 (942) 430-2900",
      "emailAddress": "hollandellison@zinca.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "hollandellison@zinca.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Ecosys Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SpearsMaldonado",
      "twitter": "https://twitter.com/HessHall",
      "linkedin": "https://linkedin.com/in/DavisLynn"
    },
    "guarantor": {
      "fullName": "Haynes Mcpherson",
      "relationship": "Family",
      "phoneNumber": "+234 (942) 530-2289",
      "email": "haynesmcpherson@ecosys.com"
    }
  },
  {
    "id": "6708e883dab24ff4d13e3c13",
    "organization": "Quadeebo",
    "userName": "MaxwellPetty",
    "email": "maxwellpetty@quadeebo.com",
    "phoneNumber": "+234 (891) 586-2128",
    "date": "2023-09-01T06:06:31-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Boyle Rice",
      "phoneNumber": "+234 (901) 417-3853",
      "emailAddress": "boylerice@quadeebo.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "boylerice@quadeebo.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Earbang Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RuthieTucker",
      "twitter": "https://twitter.com/SheenaNguyen",
      "linkedin": "https://linkedin.com/in/JamesQuinn"
    },
    "guarantor": {
      "fullName": "Elizabeth Chen",
      "relationship": "Family",
      "phoneNumber": "+234 (935) 451-2159",
      "email": "elizabethchen@earbang.com"
    }
  },
  {
    "id": "6708e883fc9a80deb86dc695",
    "organization": "Chorizon",
    "userName": "MayerShaffer",
    "email": "mayershaffer@chorizon.com",
    "phoneNumber": "+234 (905) 578-3034",
    "date": "2021-09-25T09:11:03-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Imelda Foster",
      "phoneNumber": "+234 (903) 534-3372",
      "emailAddress": "imeldafoster@chorizon.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "imeldafoster@chorizon.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Bizmatic Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LyonsOlson",
      "twitter": "https://twitter.com/MarciaMcdowell",
      "linkedin": "https://linkedin.com/in/FarleyMcgowan"
    },
    "guarantor": {
      "fullName": "Saunders Cote",
      "relationship": "Colleague",
      "phoneNumber": "+234 (973) 578-3239",
      "email": "saunderscote@bizmatic.com"
    }
  },
  {
    "id": "6708e883dfcaefd65e42e581",
    "organization": "Portico",
    "userName": "DoloresCarroll",
    "email": "dolorescarroll@portico.com",
    "phoneNumber": "+234 (959) 521-2215",
    "date": "2022-08-13T03:07:27-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Wood Pratt",
      "phoneNumber": "+234 (946) 425-3570",
      "emailAddress": "woodpratt@portico.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "woodpratt@portico.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Eplosion Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CeceliaHaney",
      "twitter": "https://twitter.com/NoelArmstrong",
      "linkedin": "https://linkedin.com/in/WintersWatts"
    },
    "guarantor": {
      "fullName": "Price Ortega",
      "relationship": "Friend",
      "phoneNumber": "+234 (852) 416-3542",
      "email": "priceortega@eplosion.com"
    }
  },
  {
    "id": "6708e883434b728f7f1237ca",
    "organization": "Plasmosis",
    "userName": "MagdalenaRoman",
    "email": "magdalenaroman@plasmosis.com",
    "phoneNumber": "+234 (941) 520-2252",
    "date": "2022-12-25T11:05:40-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Felicia Olsen",
      "phoneNumber": "+234 (965) 431-2758",
      "emailAddress": "feliciaolsen@plasmosis.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "feliciaolsen@plasmosis.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Imaginart Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DianePitts",
      "twitter": "https://twitter.com/TamaraChurch",
      "linkedin": "https://linkedin.com/in/SilvaBrowning"
    },
    "guarantor": {
      "fullName": "Rosa Garcia",
      "relationship": "Family",
      "phoneNumber": "+234 (854) 589-3649",
      "email": "rosagarcia@imaginart.com"
    }
  },
  {
    "id": "6708e8834b1b3f707cda0689",
    "organization": "Verton",
    "userName": "SantanaBuckner",
    "email": "santanabuckner@verton.com",
    "phoneNumber": "+234 (801) 582-3427",
    "date": "2023-11-14T09:50:06-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Beard Gould",
      "phoneNumber": "+234 (864) 552-2689",
      "emailAddress": "beardgould@verton.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "beardgould@verton.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Automon Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EloiseSawyer",
      "twitter": "https://twitter.com/WarnerSears",
      "linkedin": "https://linkedin.com/in/SwansonWilliam"
    },
    "guarantor": {
      "fullName": "Craft French",
      "relationship": "Friend",
      "phoneNumber": "+234 (935) 507-2016",
      "email": "craftfrench@automon.com"
    }
  },
  {
    "id": "6708e883adf5ad3c0b3d5d22",
    "organization": "Delphide",
    "userName": "IsabellaMccarthy",
    "email": "isabellamccarthy@delphide.com",
    "phoneNumber": "+234 (839) 518-2171",
    "date": "2020-01-14T02:18:32-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Francis Kelly",
      "phoneNumber": "+234 (936) 548-2304",
      "emailAddress": "franciskelly@delphide.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "franciskelly@delphide.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Telpod Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/PerryOneal",
      "twitter": "https://twitter.com/LeeMcleod",
      "linkedin": "https://linkedin.com/in/PatriceSheppard"
    },
    "guarantor": {
      "fullName": "Lakisha Todd",
      "relationship": "Family",
      "phoneNumber": "+234 (903) 429-3908",
      "email": "lakishatodd@telpod.com"
    }
  },
  {
    "id": "6708e8834dc3fb0d52b4c374",
    "organization": "Earthwax",
    "userName": "JessiePowers",
    "email": "jessiepowers@earthwax.com",
    "phoneNumber": "+234 (828) 579-3509",
    "date": "2022-11-20T04:15:19-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Larson Franklin",
      "phoneNumber": "+234 (996) 563-2352",
      "emailAddress": "larsonfranklin@earthwax.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "larsonfranklin@earthwax.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Sloganaut Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FletcherTanner",
      "twitter": "https://twitter.com/MadeleineWilliams",
      "linkedin": "https://linkedin.com/in/RenaGallagher"
    },
    "guarantor": {
      "fullName": "Ramona Petersen",
      "relationship": "Family",
      "phoneNumber": "+234 (984) 516-3883",
      "email": "ramonapetersen@sloganaut.com"
    }
  },
  {
    "id": "6708e88322dc68d9842b2ff5",
    "organization": "Kangle",
    "userName": "DaphnePate",
    "email": "daphnepate@kangle.com",
    "phoneNumber": "+234 (888) 552-2978",
    "date": "2022-01-03T03:17:20-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Melva Valenzuela",
      "phoneNumber": "+234 (872) 432-2143",
      "emailAddress": "melvavalenzuela@kangle.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "melvavalenzuela@kangle.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Kozgene Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RodriguezRivas",
      "twitter": "https://twitter.com/FigueroaBrown",
      "linkedin": "https://linkedin.com/in/LucilleCooley"
    },
    "guarantor": {
      "fullName": "Frazier Thornton",
      "relationship": "Family",
      "phoneNumber": "+234 (878) 569-3781",
      "email": "frazierthornton@kozgene.com"
    }
  },
  {
    "id": "6708e883d5bd78067adcb638",
    "organization": "Zaggles",
    "userName": "SondraHutchinson",
    "email": "sondrahutchinson@zaggles.com",
    "phoneNumber": "+234 (831) 494-3635",
    "date": "2022-05-07T10:56:18-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Mindy Potter",
      "phoneNumber": "+234 (843) 453-2519",
      "emailAddress": "mindypotter@zaggles.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "mindypotter@zaggles.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zillar Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WilliamClark",
      "twitter": "https://twitter.com/FitzpatrickDavid",
      "linkedin": "https://linkedin.com/in/FrankiePeters"
    },
    "guarantor": {
      "fullName": "Freida Leonard",
      "relationship": "Friend",
      "phoneNumber": "+234 (902) 554-3889",
      "email": "freidaleonard@zillar.com"
    }
  },
  {
    "id": "6708e883cbd03c8394138d56",
    "organization": "Plasto",
    "userName": "FrancescaCox",
    "email": "francescacox@plasto.com",
    "phoneNumber": "+234 (896) 578-2750",
    "date": "2022-03-26T05:05:54-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Christie Goodman",
      "phoneNumber": "+234 (813) 535-3718",
      "emailAddress": "christiegoodman@plasto.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "christiegoodman@plasto.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Flotonic Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KingEstes",
      "twitter": "https://twitter.com/RosemaryWiggins",
      "linkedin": "https://linkedin.com/in/WillisSimon"
    },
    "guarantor": {
      "fullName": "Polly Cross",
      "relationship": "Friend",
      "phoneNumber": "+234 (918) 577-3715",
      "email": "pollycross@flotonic.com"
    }
  },
  {
    "id": "6708e8839f49a8f574ef5f7c",
    "organization": "Hairport",
    "userName": "EleanorRosario",
    "email": "eleanorrosario@hairport.com",
    "phoneNumber": "+234 (972) 494-2291",
    "date": "2022-03-27T05:54:47-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Selena Colon",
      "phoneNumber": "+234 (982) 476-2735",
      "emailAddress": "selenacolon@hairport.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "selenacolon@hairport.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Konnect Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HernandezCastaneda",
      "twitter": "https://twitter.com/DoraCook",
      "linkedin": "https://linkedin.com/in/DaltonRaymond"
    },
    "guarantor": {
      "fullName": "Wooten Vincent",
      "relationship": "Colleague",
      "phoneNumber": "+234 (969) 507-3307",
      "email": "wootenvincent@konnect.com"
    }
  },
  {
    "id": "6708e883ccb52c0fc0e39b99",
    "organization": "Gushkool",
    "userName": "OwensDuke",
    "email": "owensduke@gushkool.com",
    "phoneNumber": "+234 (940) 547-3554",
    "date": "2023-04-09T07:35:56-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Mcdowell Steele",
      "phoneNumber": "+234 (989) 441-2441",
      "emailAddress": "mcdowellsteele@gushkool.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "mcdowellsteele@gushkool.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Xymonk Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JeanConrad",
      "twitter": "https://twitter.com/MonroeVelazquez",
      "linkedin": "https://linkedin.com/in/CeciliaPotts"
    },
    "guarantor": {
      "fullName": "Sonia Reilly",
      "relationship": "Other",
      "phoneNumber": "+234 (926) 494-3311",
      "email": "soniareilly@xymonk.com"
    }
  },
  {
    "id": "6708e883458a93ee39750c91",
    "organization": "Vitricomp",
    "userName": "LoveTalley",
    "email": "lovetalley@vitricomp.com",
    "phoneNumber": "+234 (998) 407-2616",
    "date": "2020-12-19T11:39:26-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Kirby Pickett",
      "phoneNumber": "+234 (821) 483-3577",
      "emailAddress": "kirbypickett@vitricomp.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "kirbypickett@vitricomp.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Rockyard Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/IrisSweet",
      "twitter": "https://twitter.com/RevaWarren",
      "linkedin": "https://linkedin.com/in/EspinozaNielsen"
    },
    "guarantor": {
      "fullName": "Bessie Bowen",
      "relationship": "Other",
      "phoneNumber": "+234 (988) 548-3860",
      "email": "bessiebowen@rockyard.com"
    }
  },
  {
    "id": "6708e883557cbe8e6ac0c114",
    "organization": "Cubix",
    "userName": "LoraWaller",
    "email": "lorawaller@cubix.com",
    "phoneNumber": "+234 (898) 466-2373",
    "date": "2020-07-31T09:56:49-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Short Harmon",
      "phoneNumber": "+234 (979) 454-3789",
      "emailAddress": "shortharmon@cubix.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "shortharmon@cubix.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Terascape Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PennyHarrell",
      "twitter": "https://twitter.com/NicoleRandall",
      "linkedin": "https://linkedin.com/in/MathisDaniel"
    },
    "guarantor": {
      "fullName": "Dodson Shaw",
      "relationship": "Colleague",
      "phoneNumber": "+234 (891) 475-2549",
      "email": "dodsonshaw@terascape.com"
    }
  },
  {
    "id": "6708e88362ccf83fa3815bae",
    "organization": "Conferia",
    "userName": "CantuPearson",
    "email": "cantupearson@conferia.com",
    "phoneNumber": "+234 (801) 563-3021",
    "date": "2022-04-02T04:54:07-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Valeria Mcdaniel",
      "phoneNumber": "+234 (989) 571-2472",
      "emailAddress": "valeriamcdaniel@conferia.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "valeriamcdaniel@conferia.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Animalia Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AngelMills",
      "twitter": "https://twitter.com/PaulineLawrence",
      "linkedin": "https://linkedin.com/in/HurstFox"
    },
    "guarantor": {
      "fullName": "Hooper Watkins",
      "relationship": "Other",
      "phoneNumber": "+234 (958) 452-3418",
      "email": "hooperwatkins@animalia.com"
    }
  },
  {
    "id": "6708e883111e958b848a2adb",
    "organization": "Dogspa",
    "userName": "MiaConner",
    "email": "miaconner@dogspa.com",
    "phoneNumber": "+234 (893) 538-3613",
    "date": "2023-01-29T09:04:16-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Arlene Brady",
      "phoneNumber": "+234 (913) 562-2685",
      "emailAddress": "arlenebrady@dogspa.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "arlenebrady@dogspa.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Skybold Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LancasterBecker",
      "twitter": "https://twitter.com/MelodyWilliamson",
      "linkedin": "https://linkedin.com/in/PadillaJoseph"
    },
    "guarantor": {
      "fullName": "Russell Hopper",
      "relationship": "Family",
      "phoneNumber": "+234 (995) 420-3474",
      "email": "russellhopper@skybold.com"
    }
  },
  {
    "id": "6708e883651998ecde85059d",
    "organization": "Minga",
    "userName": "DelgadoHarrison",
    "email": "delgadoharrison@minga.com",
    "phoneNumber": "+234 (805) 550-2467",
    "date": "2023-10-01T06:21:04-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Lorie Hendrix",
      "phoneNumber": "+234 (871) 584-2569",
      "emailAddress": "loriehendrix@minga.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "loriehendrix@minga.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Zaphire Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WoodwardStevens",
      "twitter": "https://twitter.com/KirklandKirby",
      "linkedin": "https://linkedin.com/in/NoreenHolt"
    },
    "guarantor": {
      "fullName": "Turner Gross",
      "relationship": "Colleague",
      "phoneNumber": "+234 (962) 592-3274",
      "email": "turnergross@zaphire.com"
    }
  },
  {
    "id": "6708e88368d8a3e8319436d3",
    "organization": "Zerology",
    "userName": "KristiRodriguez",
    "email": "kristirodriguez@zerology.com",
    "phoneNumber": "+234 (908) 402-3822",
    "date": "2021-02-16T12:53:55-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Lupe Preston",
      "phoneNumber": "+234 (894) 477-2852",
      "emailAddress": "lupepreston@zerology.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "lupepreston@zerology.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Geekus Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ErickaCrosby",
      "twitter": "https://twitter.com/DeleonVelez",
      "linkedin": "https://linkedin.com/in/LakeishaWalker"
    },
    "guarantor": {
      "fullName": "Crawford Lucas",
      "relationship": "Family",
      "phoneNumber": "+234 (966) 403-3068",
      "email": "crawfordlucas@geekus.com"
    }
  },
  {
    "id": "6708e8837f05ae5b919ed015",
    "organization": "Zidant",
    "userName": "LoganGaines",
    "email": "logangaines@zidant.com",
    "phoneNumber": "+234 (822) 470-2202",
    "date": "2023-05-02T12:17:04-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Snow Acosta",
      "phoneNumber": "+234 (912) 410-3271",
      "emailAddress": "snowacosta@zidant.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "snowacosta@zidant.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Sportan Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AntoinettePatel",
      "twitter": "https://twitter.com/MichelleCantu",
      "linkedin": "https://linkedin.com/in/GaleHawkins"
    },
    "guarantor": {
      "fullName": "Lavonne Ayers",
      "relationship": "Other",
      "phoneNumber": "+234 (875) 530-3633",
      "email": "lavonneayers@sportan.com"
    }
  },
  {
    "id": "6708e8834a1ad3b9e5d1e5dc",
    "organization": "Cubicide",
    "userName": "GregoryWitt",
    "email": "gregorywitt@cubicide.com",
    "phoneNumber": "+234 (870) 402-3504",
    "date": "2024-08-17T09:13:31-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Buchanan Rodgers",
      "phoneNumber": "+234 (939) 406-2234",
      "emailAddress": "buchananrodgers@cubicide.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "buchananrodgers@cubicide.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zentry Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/GonzalesHerrera",
      "twitter": "https://twitter.com/TrudyRiggs",
      "linkedin": "https://linkedin.com/in/DiannOwens"
    },
    "guarantor": {
      "fullName": "Kemp Bond",
      "relationship": "Family",
      "phoneNumber": "+234 (828) 431-2905",
      "email": "kempbond@zentry.com"
    }
  },
  {
    "id": "6708e883cbfb41a9ac4d9623",
    "organization": "Gynk",
    "userName": "LauriFernandez",
    "email": "laurifernandez@gynk.com",
    "phoneNumber": "+234 (826) 455-2728",
    "date": "2022-03-30T06:28:56-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Dena Case",
      "phoneNumber": "+234 (943) 544-3217",
      "emailAddress": "denacase@gynk.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "denacase@gynk.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Geekko Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DelaneyLawson",
      "twitter": "https://twitter.com/SolisRush",
      "linkedin": "https://linkedin.com/in/HaleSkinner"
    },
    "guarantor": {
      "fullName": "Alston Bullock",
      "relationship": "Family",
      "phoneNumber": "+234 (980) 550-2322",
      "email": "alstonbullock@geekko.com"
    }
  },
  {
    "id": "6708e883677bc311ca8cdaf3",
    "organization": "Digique",
    "userName": "LolaStevenson",
    "email": "lolastevenson@digique.com",
    "phoneNumber": "+234 (811) 561-3686",
    "date": "2022-05-09T01:26:51-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Perkins Noble",
      "phoneNumber": "+234 (831) 553-3612",
      "emailAddress": "perkinsnoble@digique.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "perkinsnoble@digique.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Pyramax Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/EllisHobbs",
      "twitter": "https://twitter.com/BrittFranco",
      "linkedin": "https://linkedin.com/in/SimoneWells"
    },
    "guarantor": {
      "fullName": "Pollard Yates",
      "relationship": "Colleague",
      "phoneNumber": "+234 (810) 589-3361",
      "email": "pollardyates@pyramax.com"
    }
  },
  {
    "id": "6708e883afcc71421c9ba556",
    "organization": "Tersanki",
    "userName": "CarverGeorge",
    "email": "carvergeorge@tersanki.com",
    "phoneNumber": "+234 (807) 499-2077",
    "date": "2022-11-10T05:32:02-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Greer Oconnor",
      "phoneNumber": "+234 (945) 436-3155",
      "emailAddress": "greeroconnor@tersanki.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "greeroconnor@tersanki.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Polarax Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ValarieMejia",
      "twitter": "https://twitter.com/TerraHead",
      "linkedin": "https://linkedin.com/in/KimberleyNorton"
    },
    "guarantor": {
      "fullName": "Elisa Levy",
      "relationship": "Colleague",
      "phoneNumber": "+234 (907) 515-3312",
      "email": "elisalevy@polarax.com"
    }
  },
  {
    "id": "6708e883561a61b4d42a6a3b",
    "organization": "Extragene",
    "userName": "MorrowCaldwell",
    "email": "morrowcaldwell@extragene.com",
    "phoneNumber": "+234 (959) 474-2595",
    "date": "2023-05-01T10:58:11-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Pacheco Grimes",
      "phoneNumber": "+234 (867) 574-2448",
      "emailAddress": "pachecogrimes@extragene.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "pachecogrimes@extragene.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Emtrak Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AmberCalderon",
      "twitter": "https://twitter.com/LoweryMercado",
      "linkedin": "https://linkedin.com/in/KarynCervantes"
    },
    "guarantor": {
      "fullName": "Callie Stanley",
      "relationship": "Other",
      "phoneNumber": "+234 (970) 588-2234",
      "email": "calliestanley@emtrak.com"
    }
  },
  {
    "id": "6708e883318b0fe8acd71f49",
    "organization": "Nikuda",
    "userName": "CorineHenderson",
    "email": "corinehenderson@nikuda.com",
    "phoneNumber": "+234 (980) 567-3861",
    "date": "2023-06-20T12:48:24-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Nadia Townsend",
      "phoneNumber": "+234 (993) 422-2211",
      "emailAddress": "nadiatownsend@nikuda.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "nadiatownsend@nikuda.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Billmed Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JoanneAtkins",
      "twitter": "https://twitter.com/DionneOsborne",
      "linkedin": "https://linkedin.com/in/GatesClarke"
    },
    "guarantor": {
      "fullName": "Haley Lane",
      "relationship": "Friend",
      "phoneNumber": "+234 (917) 542-2345",
      "email": "haleylane@billmed.com"
    }
  },
  {
    "id": "6708e88355953fe570e3a201",
    "organization": "Beadzza",
    "userName": "KleinBaird",
    "email": "kleinbaird@beadzza.com",
    "phoneNumber": "+234 (871) 486-3066",
    "date": "2024-08-08T03:23:09-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Aguirre Morrow",
      "phoneNumber": "+234 (844) 469-3352",
      "emailAddress": "aguirremorrow@beadzza.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "aguirremorrow@beadzza.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Bleendot Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RogersCarey",
      "twitter": "https://twitter.com/TranParks",
      "linkedin": "https://linkedin.com/in/RamosHale"
    },
    "guarantor": {
      "fullName": "Juliette Strong",
      "relationship": "Family",
      "phoneNumber": "+234 (857) 520-3571",
      "email": "juliettestrong@bleendot.com"
    }
  },
  {
    "id": "6708e883d1b55fb8411feae3",
    "organization": "Genesynk",
    "userName": "OliveHouse",
    "email": "olivehouse@genesynk.com",
    "phoneNumber": "+234 (846) 532-3589",
    "date": "2022-02-15T08:28:15-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Bradley Diaz",
      "phoneNumber": "+234 (853) 594-3008",
      "emailAddress": "bradleydiaz@genesynk.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "bradleydiaz@genesynk.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Terrasys Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LizKemp",
      "twitter": "https://twitter.com/HuntJarvis",
      "linkedin": "https://linkedin.com/in/SteeleAllison"
    },
    "guarantor": {
      "fullName": "Reilly Martin",
      "relationship": "Friend",
      "phoneNumber": "+234 (972) 439-2954",
      "email": "reillymartin@terrasys.com"
    }
  },
  {
    "id": "6708e88365d7ab35a63857b5",
    "organization": "Pharmacon",
    "userName": "ToddMoore",
    "email": "toddmoore@pharmacon.com",
    "phoneNumber": "+234 (986) 431-2895",
    "date": "2023-11-19T10:16:20-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Parks Zimmerman",
      "phoneNumber": "+234 (831) 536-3370",
      "emailAddress": "parkszimmerman@pharmacon.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "parkszimmerman@pharmacon.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Pearlesex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KristinaKramer",
      "twitter": "https://twitter.com/RiosWeeks",
      "linkedin": "https://linkedin.com/in/AdkinsFrank"
    },
    "guarantor": {
      "fullName": "Simmons Bernard",
      "relationship": "Friend",
      "phoneNumber": "+234 (829) 524-2393",
      "email": "simmonsbernard@pearlesex.com"
    }
  },
  {
    "id": "6708e8835a98a004b072da0c",
    "organization": "Songbird",
    "userName": "MariettaFerguson",
    "email": "mariettaferguson@songbird.com",
    "phoneNumber": "+234 (816) 560-2999",
    "date": "2024-02-18T11:39:09-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Cobb Barry",
      "phoneNumber": "+234 (925) 459-3212",
      "emailAddress": "cobbbarry@songbird.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "cobbbarry@songbird.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Mediot Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MichaelVillarreal",
      "twitter": "https://twitter.com/CorinaGuzman",
      "linkedin": "https://linkedin.com/in/WhitleyMorse"
    },
    "guarantor": {
      "fullName": "Melanie Hanson",
      "relationship": "Other",
      "phoneNumber": "+234 (816) 526-2907",
      "email": "melaniehanson@mediot.com"
    }
  },
  {
    "id": "6708e883313f3fe0f2233296",
    "organization": "Zillacon",
    "userName": "GainesBowman",
    "email": "gainesbowman@zillacon.com",
    "phoneNumber": "+234 (808) 581-3023",
    "date": "2023-03-09T04:33:02-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Lindsay Cherry",
      "phoneNumber": "+234 (914) 547-2717",
      "emailAddress": "lindsaycherry@zillacon.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "lindsaycherry@zillacon.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Myopium Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AlbertBass",
      "twitter": "https://twitter.com/ReynaMcbride",
      "linkedin": "https://linkedin.com/in/MollieSoto"
    },
    "guarantor": {
      "fullName": "Hebert Austin",
      "relationship": "Family",
      "phoneNumber": "+234 (864) 552-2311",
      "email": "hebertaustin@myopium.com"
    }
  },
  {
    "id": "6708e8830b63d6df224f4117",
    "organization": "Medcom",
    "userName": "EmilyMckinney",
    "email": "emilymckinney@medcom.com",
    "phoneNumber": "+234 (858) 410-3002",
    "date": "2021-05-10T03:54:56-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Kerr Leach",
      "phoneNumber": "+234 (869) 456-3566",
      "emailAddress": "kerrleach@medcom.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "kerrleach@medcom.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Calcula Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RosannaWilkerson",
      "twitter": "https://twitter.com/OfeliaLuna",
      "linkedin": "https://linkedin.com/in/BucknerAguilar"
    },
    "guarantor": {
      "fullName": "Kate Jennings",
      "relationship": "Friend",
      "phoneNumber": "+234 (952) 551-3883",
      "email": "katejennings@calcula.com"
    }
  },
  {
    "id": "6708e88338954e04e646ec2f",
    "organization": "Ronelon",
    "userName": "CraneCarson",
    "email": "cranecarson@ronelon.com",
    "phoneNumber": "+234 (902) 543-2118",
    "date": "2020-05-04T08:43:16-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Kara Drake",
      "phoneNumber": "+234 (949) 493-2052",
      "emailAddress": "karadrake@ronelon.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "karadrake@ronelon.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Songlines Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BeasleyGibson",
      "twitter": "https://twitter.com/EsmeraldaSalas",
      "linkedin": "https://linkedin.com/in/TameraWolf"
    },
    "guarantor": {
      "fullName": "Adela Dunn",
      "relationship": "Colleague",
      "phoneNumber": "+234 (854) 590-3299",
      "email": "adeladunn@songlines.com"
    }
  },
  {
    "id": "6708e88306dd59075e046a89",
    "organization": "Izzby",
    "userName": "JeriSaunders",
    "email": "jerisaunders@izzby.com",
    "phoneNumber": "+234 (924) 580-3659",
    "date": "2022-05-15T01:04:11-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Leblanc Benson",
      "phoneNumber": "+234 (995) 416-3125",
      "emailAddress": "leblancbenson@izzby.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "leblancbenson@izzby.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Dognost Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JenningsRojas",
      "twitter": "https://twitter.com/MaryWilson",
      "linkedin": "https://linkedin.com/in/LynchFitzpatrick"
    },
    "guarantor": {
      "fullName": "Porter Burns",
      "relationship": "Colleague",
      "phoneNumber": "+234 (993) 578-3694",
      "email": "porterburns@dognost.com"
    }
  },
  {
    "id": "6708e8838710562a996564ac",
    "organization": "Xanide",
    "userName": "AlissaGreene",
    "email": "alissagreene@xanide.com",
    "phoneNumber": "+234 (853) 416-2387",
    "date": "2020-05-12T10:55:07-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Denise Miller",
      "phoneNumber": "+234 (937) 504-3814",
      "emailAddress": "denisemiller@xanide.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "denisemiller@xanide.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Hawkster Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TannerRobertson",
      "twitter": "https://twitter.com/ClarkeDurham",
      "linkedin": "https://linkedin.com/in/MargeryMccray"
    },
    "guarantor": {
      "fullName": "Mcmillan Kelley",
      "relationship": "Friend",
      "phoneNumber": "+234 (855) 405-3531",
      "email": "mcmillankelley@hawkster.com"
    }
  },
  {
    "id": "6708e88356dc187f50c5e33a",
    "organization": "Genmex",
    "userName": "StoutHernandez",
    "email": "stouthernandez@genmex.com",
    "phoneNumber": "+234 (903) 581-3210",
    "date": "2023-08-12T06:38:19-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Bond Davidson",
      "phoneNumber": "+234 (800) 445-2379",
      "emailAddress": "bonddavidson@genmex.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "bonddavidson@genmex.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Marqet Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BrightRivers",
      "twitter": "https://twitter.com/GeraldineBarnes",
      "linkedin": "https://linkedin.com/in/VeronicaBlankenship"
    },
    "guarantor": {
      "fullName": "Rosanne Torres",
      "relationship": "Colleague",
      "phoneNumber": "+234 (907) 593-2626",
      "email": "rosannetorres@marqet.com"
    }
  },
  {
    "id": "6708e883f2df30effe9c4d21",
    "organization": "Slax",
    "userName": "MorganBerg",
    "email": "morganberg@slax.com",
    "phoneNumber": "+234 (930) 587-2608",
    "date": "2024-03-06T11:06:24-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Elma Abbott",
      "phoneNumber": "+234 (942) 492-2570",
      "emailAddress": "elmaabbott@slax.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "elmaabbott@slax.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Scenty Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LuannNixon",
      "twitter": "https://twitter.com/AudraBurks",
      "linkedin": "https://linkedin.com/in/HendricksPowell"
    },
    "guarantor": {
      "fullName": "Erin Workman",
      "relationship": "Family",
      "phoneNumber": "+234 (972) 529-2616",
      "email": "erinworkman@scenty.com"
    }
  },
  {
    "id": "6708e8833c51cc8b827cc021",
    "organization": "Kindaloo",
    "userName": "SnyderGreer",
    "email": "snydergreer@kindaloo.com",
    "phoneNumber": "+234 (802) 509-3935",
    "date": "2022-04-03T04:37:34-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Cortez Weaver",
      "phoneNumber": "+234 (987) 457-3038",
      "emailAddress": "cortezweaver@kindaloo.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "cortezweaver@kindaloo.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Exoblue Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BerthaContreras",
      "twitter": "https://twitter.com/BennettTravis",
      "linkedin": "https://linkedin.com/in/CathleenWalsh"
    },
    "guarantor": {
      "fullName": "Gross Mcguire",
      "relationship": "Other",
      "phoneNumber": "+234 (935) 423-3552",
      "email": "grossmcguire@exoblue.com"
    }
  },
  {
    "id": "6708e8831a0ab528ee019524",
    "organization": "Macronaut",
    "userName": "MendozaLevine",
    "email": "mendozalevine@macronaut.com",
    "phoneNumber": "+234 (882) 484-2870",
    "date": "2020-04-09T03:16:49-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Liliana Wilkins",
      "phoneNumber": "+234 (855) 502-3850",
      "emailAddress": "lilianawilkins@macronaut.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "lilianawilkins@macronaut.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Essensia Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HorneMeyers",
      "twitter": "https://twitter.com/BertaBoone",
      "linkedin": "https://linkedin.com/in/GouldHurley"
    },
    "guarantor": {
      "fullName": "Horton Dejesus",
      "relationship": "Friend",
      "phoneNumber": "+234 (888) 409-2684",
      "email": "hortondejesus@essensia.com"
    }
  },
  {
    "id": "6708e883348542ea0d73ba89",
    "organization": "Uni",
    "userName": "MeadowsAyala",
    "email": "meadowsayala@uni.com",
    "phoneNumber": "+234 (858) 476-2335",
    "date": "2021-02-22T06:31:55-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Janelle Russell",
      "phoneNumber": "+234 (832) 485-3583",
      "emailAddress": "janellerussell@uni.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "janellerussell@uni.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Hopeli Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EstelaHopkins",
      "twitter": "https://twitter.com/OwenHart",
      "linkedin": "https://linkedin.com/in/CheriDunlap"
    },
    "guarantor": {
      "fullName": "Alexandra Joyner",
      "relationship": "Colleague",
      "phoneNumber": "+234 (828) 449-3255",
      "email": "alexandrajoyner@hopeli.com"
    }
  },
  {
    "id": "6708e883d1842ea1e5546faa",
    "organization": "Geekol",
    "userName": "HowardMarquez",
    "email": "howardmarquez@geekol.com",
    "phoneNumber": "+234 (966) 405-2771",
    "date": "2024-07-28T03:33:45-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Joanna Stone",
      "phoneNumber": "+234 (918) 464-3037",
      "emailAddress": "joannastone@geekol.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "joannastone@geekol.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Goko Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RosellaWyatt",
      "twitter": "https://twitter.com/JanineCastillo",
      "linkedin": "https://linkedin.com/in/KenyaGordon"
    },
    "guarantor": {
      "fullName": "Serena Hewitt",
      "relationship": "Other",
      "phoneNumber": "+234 (989) 494-2167",
      "email": "serenahewitt@goko.com"
    }
  },
  {
    "id": "6708e883828a08618f9f6d5a",
    "organization": "Vertide",
    "userName": "GloriaTate",
    "email": "gloriatate@vertide.com",
    "phoneNumber": "+234 (951) 431-3792",
    "date": "2021-09-11T01:29:13-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Marianne Gutierrez",
      "phoneNumber": "+234 (835) 547-3886",
      "emailAddress": "mariannegutierrez@vertide.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "mariannegutierrez@vertide.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Isonus Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/EvangelinaNicholson",
      "twitter": "https://twitter.com/MillicentHunter",
      "linkedin": "https://linkedin.com/in/LeonBarton"
    },
    "guarantor": {
      "fullName": "Odom Roach",
      "relationship": "Colleague",
      "phoneNumber": "+234 (923) 429-2055",
      "email": "odomroach@isonus.com"
    }
  },
  {
    "id": "6708e883e5e71ef7e7a8aaaa",
    "organization": "Zilencio",
    "userName": "HickmanPierce",
    "email": "hickmanpierce@zilencio.com",
    "phoneNumber": "+234 (801) 591-2084",
    "date": "2024-07-04T07:37:10-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Kelley Anthony",
      "phoneNumber": "+234 (807) 572-2639",
      "emailAddress": "kelleyanthony@zilencio.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "kelleyanthony@zilencio.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zoinage Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LawrenceAlston",
      "twitter": "https://twitter.com/LisaTyler",
      "linkedin": "https://linkedin.com/in/MccormickFuller"
    },
    "guarantor": {
      "fullName": "Maldonado Sexton",
      "relationship": "Family",
      "phoneNumber": "+234 (930) 591-3034",
      "email": "maldonadosexton@zoinage.com"
    }
  },
  {
    "id": "6708e883828dff5501eb61f3",
    "organization": "Xsports",
    "userName": "BeatrizHyde",
    "email": "beatrizhyde@xsports.com",
    "phoneNumber": "+234 (855) 600-2434",
    "date": "2024-09-12T12:05:46-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Booth Perez",
      "phoneNumber": "+234 (859) 507-2234",
      "emailAddress": "boothperez@xsports.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "boothperez@xsports.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Buzzmaker Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WallsJefferson",
      "twitter": "https://twitter.com/LambCarrillo",
      "linkedin": "https://linkedin.com/in/BrookeDavenport"
    },
    "guarantor": {
      "fullName": "Sykes Hicks",
      "relationship": "Colleague",
      "phoneNumber": "+234 (833) 427-2648",
      "email": "sykeshicks@buzzmaker.com"
    }
  },
  {
    "id": "6708e88327ca1f0af2523c6a",
    "organization": "Grupoli",
    "userName": "IvaRamos",
    "email": "ivaramos@grupoli.com",
    "phoneNumber": "+234 (803) 514-3700",
    "date": "2021-02-11T07:35:07-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Larsen Guthrie",
      "phoneNumber": "+234 (921) 517-2759",
      "emailAddress": "larsenguthrie@grupoli.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "larsenguthrie@grupoli.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Zomboid Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ZamoraRutledge",
      "twitter": "https://twitter.com/HammondFarrell",
      "linkedin": "https://linkedin.com/in/BrowningGraham"
    },
    "guarantor": {
      "fullName": "Mattie Leblanc",
      "relationship": "Other",
      "phoneNumber": "+234 (875) 417-2724",
      "email": "mattieleblanc@zomboid.com"
    }
  },
  {
    "id": "6708e883e8a26fba70ca4fa8",
    "organization": "Exozent",
    "userName": "BurtonClayton",
    "email": "burtonclayton@exozent.com",
    "phoneNumber": "+234 (828) 455-3818",
    "date": "2024-04-20T05:12:16-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Zelma Gill",
      "phoneNumber": "+234 (835) 434-2040",
      "emailAddress": "zelmagill@exozent.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "zelmagill@exozent.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Isodrive Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BoltonBlackburn",
      "twitter": "https://twitter.com/ManningAlexander",
      "linkedin": "https://linkedin.com/in/BrewerJoyce"
    },
    "guarantor": {
      "fullName": "Tucker Harding",
      "relationship": "Colleague",
      "phoneNumber": "+234 (944) 431-3900",
      "email": "tuckerharding@isodrive.com"
    }
  },
  {
    "id": "6708e88367fcb3be0a3b6aed",
    "organization": "Sureplex",
    "userName": "MacdonaldVazquez",
    "email": "macdonaldvazquez@sureplex.com",
    "phoneNumber": "+234 (812) 418-3978",
    "date": "2022-03-21T05:41:34-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Fulton Kirk",
      "phoneNumber": "+234 (893) 544-2738",
      "emailAddress": "fultonkirk@sureplex.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "fultonkirk@sureplex.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Ecraze Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RobinsonJustice",
      "twitter": "https://twitter.com/OlaLivingston",
      "linkedin": "https://linkedin.com/in/JeanieFinch"
    },
    "guarantor": {
      "fullName": "Ramsey Stephenson",
      "relationship": "Friend",
      "phoneNumber": "+234 (931) 481-2902",
      "email": "ramseystephenson@ecraze.com"
    }
  },
  {
    "id": "6708e8837acb2d02aa6f61ca",
    "organization": "Imageflow",
    "userName": "MiriamSerrano",
    "email": "miriamserrano@imageflow.com",
    "phoneNumber": "+234 (896) 535-2960",
    "date": "2022-09-30T10:12:05-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Griffin Barrera",
      "phoneNumber": "+234 (968) 412-3386",
      "emailAddress": "griffinbarrera@imageflow.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "griffinbarrera@imageflow.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Senmao Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MauraWeiss",
      "twitter": "https://twitter.com/ReevesLara",
      "linkedin": "https://linkedin.com/in/CoraLowery"
    },
    "guarantor": {
      "fullName": "Lopez Warner",
      "relationship": "Colleague",
      "phoneNumber": "+234 (872) 457-3737",
      "email": "lopezwarner@senmao.com"
    }
  },
  {
    "id": "6708e8839b2e847f4d860ea7",
    "organization": "Cogentry",
    "userName": "KimHodges",
    "email": "kimhodges@cogentry.com",
    "phoneNumber": "+234 (899) 485-2722",
    "date": "2022-11-03T11:06:30-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Ashley Sosa",
      "phoneNumber": "+234 (958) 491-3893",
      "emailAddress": "ashleysosa@cogentry.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "ashleysosa@cogentry.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Luxuria Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HarrellLogan",
      "twitter": "https://twitter.com/TrinaWhitfield",
      "linkedin": "https://linkedin.com/in/JoSantiago"
    },
    "guarantor": {
      "fullName": "Mae Hudson",
      "relationship": "Friend",
      "phoneNumber": "+234 (937) 494-3158",
      "email": "maehudson@luxuria.com"
    }
  },
  {
    "id": "6708e8836236ef0bdb796b3c",
    "organization": "Matrixity",
    "userName": "WoodsSimpson",
    "email": "woodssimpson@matrixity.com",
    "phoneNumber": "+234 (949) 574-2292",
    "date": "2023-05-07T07:26:57-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Gordon Ramsey",
      "phoneNumber": "+234 (992) 455-2994",
      "emailAddress": "gordonramsey@matrixity.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "gordonramsey@matrixity.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Eventage Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TwilaSantos",
      "twitter": "https://twitter.com/VickieCortez",
      "linkedin": "https://linkedin.com/in/MadgeGlass"
    },
    "guarantor": {
      "fullName": "Meagan Bradshaw",
      "relationship": "Family",
      "phoneNumber": "+234 (995) 459-2978",
      "email": "meaganbradshaw@eventage.com"
    }
  },
  {
    "id": "6708e8833dce01ad65a7c516",
    "organization": "Imperium",
    "userName": "LillianHull",
    "email": "lillianhull@imperium.com",
    "phoneNumber": "+234 (911) 417-2018",
    "date": "2022-09-26T11:58:02-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Zimmerman Coffey",
      "phoneNumber": "+234 (959) 583-2246",
      "emailAddress": "zimmermancoffey@imperium.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "zimmermancoffey@imperium.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Bovis Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PetraDillon",
      "twitter": "https://twitter.com/WaltonGlover",
      "linkedin": "https://linkedin.com/in/WallBeasley"
    },
    "guarantor": {
      "fullName": "Mallory Brock",
      "relationship": "Other",
      "phoneNumber": "+234 (842) 460-2836",
      "email": "mallorybrock@bovis.com"
    }
  },
  {
    "id": "6708e883254483c1fc46e7bb",
    "organization": "Accupharm",
    "userName": "JennyMurphy",
    "email": "jennymurphy@accupharm.com",
    "phoneNumber": "+234 (911) 565-3537",
    "date": "2022-08-05T12:29:36-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Torres Peterson",
      "phoneNumber": "+234 (831) 503-3938",
      "emailAddress": "torrespeterson@accupharm.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "torrespeterson@accupharm.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zolarex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AprilCalhoun",
      "twitter": "https://twitter.com/BallBean",
      "linkedin": "https://linkedin.com/in/PowersReynolds"
    },
    "guarantor": {
      "fullName": "Helena Bryan",
      "relationship": "Colleague",
      "phoneNumber": "+234 (975) 499-2694",
      "email": "helenabryan@zolarex.com"
    }
  },
  {
    "id": "6708e8837a14c862adb0768a",
    "organization": "Jetsilk",
    "userName": "LaceyStokes",
    "email": "laceystokes@jetsilk.com",
    "phoneNumber": "+234 (947) 549-3629",
    "date": "2021-07-17T05:58:20-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Nannie Lowe",
      "phoneNumber": "+234 (864) 551-2927",
      "emailAddress": "nannielowe@jetsilk.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "nannielowe@jetsilk.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Netropic Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/IreneGillespie",
      "twitter": "https://twitter.com/BettyValdez",
      "linkedin": "https://linkedin.com/in/PamMoses"
    },
    "guarantor": {
      "fullName": "Rose Walter",
      "relationship": "Family",
      "phoneNumber": "+234 (981) 417-2976",
      "email": "rosewalter@netropic.com"
    }
  },
  {
    "id": "6708e88359f4fbdb78184efe",
    "organization": "Oceanica",
    "userName": "McintyreLangley",
    "email": "mcintyrelangley@oceanica.com",
    "phoneNumber": "+234 (996) 449-3565",
    "date": "2024-05-11T04:23:28-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Teresa Hayes",
      "phoneNumber": "+234 (802) 430-2803",
      "emailAddress": "teresahayes@oceanica.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "teresahayes@oceanica.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Lotron Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/NaomiGregory",
      "twitter": "https://twitter.com/OlgaUnderwood",
      "linkedin": "https://linkedin.com/in/VelmaHeath"
    },
    "guarantor": {
      "fullName": "Carson Eaton",
      "relationship": "Friend",
      "phoneNumber": "+234 (938) 552-2135",
      "email": "carsoneaton@lotron.com"
    }
  },
  {
    "id": "6708e8838c79c385b687ac81",
    "organization": "Keeg",
    "userName": "DorotheaMalone",
    "email": "dorotheamalone@keeg.com",
    "phoneNumber": "+234 (856) 416-3819",
    "date": "2022-12-17T08:58:17-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Sweeney Giles",
      "phoneNumber": "+234 (843) 523-3776",
      "emailAddress": "sweeneygiles@keeg.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "sweeneygiles@keeg.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Cowtown Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CarolBarr",
      "twitter": "https://twitter.com/MarshallMcmillan",
      "linkedin": "https://linkedin.com/in/StrongGonzales"
    },
    "guarantor": {
      "fullName": "Blanca Guerra",
      "relationship": "Colleague",
      "phoneNumber": "+234 (908) 452-2481",
      "email": "blancaguerra@cowtown.com"
    }
  },
  {
    "id": "6708e883725c3ebc54a386fe",
    "organization": "Isosphere",
    "userName": "VelazquezPacheco",
    "email": "velazquezpacheco@isosphere.com",
    "phoneNumber": "+234 (888) 541-3979",
    "date": "2024-05-17T04:35:46-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Natalia May",
      "phoneNumber": "+234 (977) 504-3528",
      "emailAddress": "nataliamay@isosphere.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "nataliamay@isosphere.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Amril Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/McphersonFulton",
      "twitter": "https://twitter.com/HuffFlynn",
      "linkedin": "https://linkedin.com/in/LottPuckett"
    },
    "guarantor": {
      "fullName": "Christy Reid",
      "relationship": "Family",
      "phoneNumber": "+234 (813) 550-3503",
      "email": "christyreid@amril.com"
    }
  },
  {
    "id": "6708e883c85f70a64d362410",
    "organization": "Olucore",
    "userName": "LloydMcfadden",
    "email": "lloydmcfadden@olucore.com",
    "phoneNumber": "+234 (997) 505-2634",
    "date": "2021-07-28T10:22:25-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Harrington Reese",
      "phoneNumber": "+234 (890) 561-3389",
      "emailAddress": "harringtonreese@olucore.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "harringtonreese@olucore.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Enquility Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SanfordBuckley",
      "twitter": "https://twitter.com/RiddleKerr",
      "linkedin": "https://linkedin.com/in/McconnellLester"
    },
    "guarantor": {
      "fullName": "Cornelia Clements",
      "relationship": "Family",
      "phoneNumber": "+234 (913) 480-3744",
      "email": "corneliaclements@enquility.com"
    }
  },
  {
    "id": "6708e883e53a4a0d2fa1d425",
    "organization": "Fishland",
    "userName": "PuckettMooney",
    "email": "puckettmooney@fishland.com",
    "phoneNumber": "+234 (958) 526-2212",
    "date": "2023-12-20T09:53:58-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Maynard Prince",
      "phoneNumber": "+234 (831) 537-3885",
      "emailAddress": "maynardprince@fishland.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "maynardprince@fishland.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Tubalum Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HannahGamble",
      "twitter": "https://twitter.com/PickettSnyder",
      "linkedin": "https://linkedin.com/in/HoustonPollard"
    },
    "guarantor": {
      "fullName": "Julia Poole",
      "relationship": "Other",
      "phoneNumber": "+234 (970) 485-3635",
      "email": "juliapoole@tubalum.com"
    }
  },
  {
    "id": "6708e88374ab5d5ca0a319d3",
    "organization": "Tubesys",
    "userName": "BrandyStout",
    "email": "brandystout@tubesys.com",
    "phoneNumber": "+234 (906) 419-2475",
    "date": "2020-01-16T08:46:24-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Anastasia Huff",
      "phoneNumber": "+234 (871) 471-3468",
      "emailAddress": "anastasiahuff@tubesys.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "anastasiahuff@tubesys.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Twiggery Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/FernRios",
      "twitter": "https://twitter.com/PrestonNewton",
      "linkedin": "https://linkedin.com/in/BairdGarrett"
    },
    "guarantor": {
      "fullName": "Richardson Mcconnell",
      "relationship": "Family",
      "phoneNumber": "+234 (887) 469-3345",
      "email": "richardsonmcconnell@twiggery.com"
    }
  },
  {
    "id": "6708e883e66cae58bceab801",
    "organization": "Eweville",
    "userName": "ArmstrongGuerrero",
    "email": "armstrongguerrero@eweville.com",
    "phoneNumber": "+234 (821) 522-3633",
    "date": "2021-08-07T03:38:09-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Janet Fitzgerald",
      "phoneNumber": "+234 (828) 415-3466",
      "emailAddress": "janetfitzgerald@eweville.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "janetfitzgerald@eweville.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Flexigen Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/QuinnOliver",
      "twitter": "https://twitter.com/StacyMartinez",
      "linkedin": "https://linkedin.com/in/AdrianGolden"
    },
    "guarantor": {
      "fullName": "Misty Summers",
      "relationship": "Friend",
      "phoneNumber": "+234 (894) 550-3637",
      "email": "mistysummers@flexigen.com"
    }
  },
  {
    "id": "6708e88343833619efc13af8",
    "organization": "Enersol",
    "userName": "MiddletonMcintyre",
    "email": "middletonmcintyre@enersol.com",
    "phoneNumber": "+234 (970) 426-3108",
    "date": "2020-04-20T03:13:09-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Lara Salinas",
      "phoneNumber": "+234 (870) 567-3178",
      "emailAddress": "larasalinas@enersol.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "larasalinas@enersol.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Gink Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BarnesMoss",
      "twitter": "https://twitter.com/HigginsDouglas",
      "linkedin": "https://linkedin.com/in/BauerMayer"
    },
    "guarantor": {
      "fullName": "Lowe Wilkinson",
      "relationship": "Other",
      "phoneNumber": "+234 (885) 571-3888",
      "email": "lowewilkinson@gink.com"
    }
  },
  {
    "id": "6708e883f7d20977df0242bf",
    "organization": "Artiq",
    "userName": "CrossWare",
    "email": "crossware@artiq.com",
    "phoneNumber": "+234 (831) 508-3055",
    "date": "2022-01-04T09:23:01-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Callahan Moran",
      "phoneNumber": "+234 (981) 428-2058",
      "emailAddress": "callahanmoran@artiq.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "callahanmoran@artiq.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Uxmox Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ShepardHayden",
      "twitter": "https://twitter.com/GwenGarza",
      "linkedin": "https://linkedin.com/in/LulaMcintosh"
    },
    "guarantor": {
      "fullName": "Beryl Shepherd",
      "relationship": "Colleague",
      "phoneNumber": "+234 (934) 529-2333",
      "email": "berylshepherd@uxmox.com"
    }
  },
  {
    "id": "6708e8834121d82f3c6bcd76",
    "organization": "Envire",
    "userName": "IvyKinney",
    "email": "ivykinney@envire.com",
    "phoneNumber": "+234 (986) 458-3976",
    "date": "2020-08-24T11:36:57-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Park Compton",
      "phoneNumber": "+234 (878) 470-2938",
      "emailAddress": "parkcompton@envire.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "parkcompton@envire.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Translink Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LouellaSantana",
      "twitter": "https://twitter.com/MayraGallegos",
      "linkedin": "https://linkedin.com/in/MaysAlvarado"
    },
    "guarantor": {
      "fullName": "Rosario Massey",
      "relationship": "Friend",
      "phoneNumber": "+234 (893) 400-2382",
      "email": "rosariomassey@translink.com"
    }
  },
  {
    "id": "6708e88315578af512490754",
    "organization": "Gracker",
    "userName": "OsbornePalmer",
    "email": "osbornepalmer@gracker.com",
    "phoneNumber": "+234 (810) 488-2427",
    "date": "2022-10-30T11:52:11-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Berry Fletcher",
      "phoneNumber": "+234 (822) 465-3776",
      "emailAddress": "berryfletcher@gracker.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "berryfletcher@gracker.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Unisure Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PetersGray",
      "twitter": "https://twitter.com/ClevelandMorales",
      "linkedin": "https://linkedin.com/in/ForbesBennett"
    },
    "guarantor": {
      "fullName": "Gilbert Spence",
      "relationship": "Friend",
      "phoneNumber": "+234 (886) 437-3836",
      "email": "gilbertspence@unisure.com"
    }
  },
  {
    "id": "6708e883df28c413ee9989c9",
    "organization": "Grok",
    "userName": "AvisChase",
    "email": "avischase@grok.com",
    "phoneNumber": "+234 (977) 446-3058",
    "date": "2020-07-05T11:26:13-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Dickerson Rivera",
      "phoneNumber": "+234 (812) 505-2524",
      "emailAddress": "dickersonrivera@grok.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "dickersonrivera@grok.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Isosure Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LatoyaFields",
      "twitter": "https://twitter.com/LittleAlbert",
      "linkedin": "https://linkedin.com/in/ParsonsMccullough"
    },
    "guarantor": {
      "fullName": "Nixon Wall",
      "relationship": "Other",
      "phoneNumber": "+234 (961) 479-3269",
      "email": "nixonwall@isosure.com"
    }
  },
  {
    "id": "6708e883f4d4bd786101cad7",
    "organization": "Homelux",
    "userName": "ChangIngram",
    "email": "changingram@homelux.com",
    "phoneNumber": "+234 (827) 517-3477",
    "date": "2021-06-12T04:23:40-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Michele Hammond",
      "phoneNumber": "+234 (862) 565-3460",
      "emailAddress": "michelehammond@homelux.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "michelehammond@homelux.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Bisba Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WatsonFrost",
      "twitter": "https://twitter.com/PottsHebert",
      "linkedin": "https://linkedin.com/in/BarbraCruz"
    },
    "guarantor": {
      "fullName": "Burks Blake",
      "relationship": "Other",
      "phoneNumber": "+234 (836) 527-2164",
      "email": "burksblake@bisba.com"
    }
  },
  {
    "id": "6708e88305988aa8dd40a37d",
    "organization": "Daisu",
    "userName": "MarisolMayo",
    "email": "marisolmayo@daisu.com",
    "phoneNumber": "+234 (899) 438-2440",
    "date": "2024-02-09T06:07:50-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Angeline Mueller",
      "phoneNumber": "+234 (917) 526-2767",
      "emailAddress": "angelinemueller@daisu.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "angelinemueller@daisu.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Comcubine Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KarenPeck",
      "twitter": "https://twitter.com/RoyNeal",
      "linkedin": "https://linkedin.com/in/KelseyHinton"
    },
    "guarantor": {
      "fullName": "Margie Lopez",
      "relationship": "Colleague",
      "phoneNumber": "+234 (954) 478-3998",
      "email": "margielopez@comcubine.com"
    }
  },
  {
    "id": "6708e8831a488a2d67e9fbbe",
    "organization": "Dogtown",
    "userName": "CaitlinLott",
    "email": "caitlinlott@dogtown.com",
    "phoneNumber": "+234 (887) 423-3986",
    "date": "2023-07-13T03:30:28-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Wilson Richmond",
      "phoneNumber": "+234 (878) 403-2159",
      "emailAddress": "wilsonrichmond@dogtown.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "wilsonrichmond@dogtown.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Autograte Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SharlenePerkins",
      "twitter": "https://twitter.com/AllieBarlow",
      "linkedin": "https://linkedin.com/in/MarianaCurry"
    },
    "guarantor": {
      "fullName": "Bettye Harper",
      "relationship": "Other",
      "phoneNumber": "+234 (878) 505-2992",
      "email": "bettyeharper@autograte.com"
    }
  },
  {
    "id": "6708e88376e3456ebb40aea9",
    "organization": "Gleamink",
    "userName": "FuentesRhodes",
    "email": "fuentesrhodes@gleamink.com",
    "phoneNumber": "+234 (872) 570-3282",
    "date": "2024-02-27T11:36:18-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Deana Ray",
      "phoneNumber": "+234 (991) 536-3808",
      "emailAddress": "deanaray@gleamink.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "deanaray@gleamink.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Affluex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CookMunoz",
      "twitter": "https://twitter.com/SherylNewman",
      "linkedin": "https://linkedin.com/in/SofiaByrd"
    },
    "guarantor": {
      "fullName": "Alyson Gilliam",
      "relationship": "Family",
      "phoneNumber": "+234 (899) 465-3809",
      "email": "alysongilliam@affluex.com"
    }
  },
  {
    "id": "6708e883e7161cedd08424ea",
    "organization": "Equicom",
    "userName": "BrownAndrews",
    "email": "brownandrews@equicom.com",
    "phoneNumber": "+234 (916) 410-3617",
    "date": "2022-01-02T07:07:07-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Marquez Wheeler",
      "phoneNumber": "+234 (993) 516-2615",
      "emailAddress": "marquezwheeler@equicom.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "marquezwheeler@equicom.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Earthplex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ErnaTerrell",
      "twitter": "https://twitter.com/DaleHendricks",
      "linkedin": "https://linkedin.com/in/NolaBishop"
    },
    "guarantor": {
      "fullName": "Bass Ortiz",
      "relationship": "Other",
      "phoneNumber": "+234 (845) 570-3245",
      "email": "bassortiz@earthplex.com"
    }
  },
  {
    "id": "6708e883aec778dcdfe94ef2",
    "organization": "Sustenza",
    "userName": "JennaTillman",
    "email": "jennatillman@sustenza.com",
    "phoneNumber": "+234 (844) 429-2796",
    "date": "2021-07-15T01:28:58-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Shelley Navarro",
      "phoneNumber": "+234 (890) 555-3686",
      "emailAddress": "shelleynavarro@sustenza.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "shelleynavarro@sustenza.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Realysis Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JanisStuart",
      "twitter": "https://twitter.com/ReginaBlanchard",
      "linkedin": "https://linkedin.com/in/AngeliqueKnowles"
    },
    "guarantor": {
      "fullName": "Smith Padilla",
      "relationship": "Other",
      "phoneNumber": "+234 (959) 417-2403",
      "email": "smithpadilla@realysis.com"
    }
  },
  {
    "id": "6708e88379714afa10492679",
    "organization": "Shopabout",
    "userName": "WeberBoyle",
    "email": "weberboyle@shopabout.com",
    "phoneNumber": "+234 (886) 539-3125",
    "date": "2024-09-18T03:28:57-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Janette Walton",
      "phoneNumber": "+234 (979) 500-3356",
      "emailAddress": "janettewalton@shopabout.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "janettewalton@shopabout.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Entogrok Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RosaBeck",
      "twitter": "https://twitter.com/MorrisonHolden",
      "linkedin": "https://linkedin.com/in/MortonHarris"
    },
    "guarantor": {
      "fullName": "Allen Shepard",
      "relationship": "Other",
      "phoneNumber": "+234 (865) 420-2796",
      "email": "allenshepard@entogrok.com"
    }
  },
  {
    "id": "6708e883ffe92dcb1d3a4009",
    "organization": "Pyramis",
    "userName": "FrederickDodson",
    "email": "frederickdodson@pyramis.com",
    "phoneNumber": "+234 (984) 420-3741",
    "date": "2024-01-10T06:01:45-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Valdez Kaufman",
      "phoneNumber": "+234 (826) 464-3787",
      "emailAddress": "valdezkaufman@pyramis.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "valdezkaufman@pyramis.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Quantalia Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BerniceCunningham",
      "twitter": "https://twitter.com/AustinBarron",
      "linkedin": "https://linkedin.com/in/BelindaFoley"
    },
    "guarantor": {
      "fullName": "Juliet Hoffman",
      "relationship": "Colleague",
      "phoneNumber": "+234 (978) 536-2092",
      "email": "juliethoffman@quantalia.com"
    }
  },
  {
    "id": "6708e88391008057b6f1d8f2",
    "organization": "Jumpstack",
    "userName": "ChristaSnow",
    "email": "christasnow@jumpstack.com",
    "phoneNumber": "+234 (949) 432-3677",
    "date": "2022-04-14T11:46:12-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Hicks Johns",
      "phoneNumber": "+234 (829) 509-2278",
      "emailAddress": "hicksjohns@jumpstack.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "hicksjohns@jumpstack.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Perkle Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/GomezBest",
      "twitter": "https://twitter.com/JodiSanchez",
      "linkedin": "https://linkedin.com/in/EnidRollins"
    },
    "guarantor": {
      "fullName": "Eva Emerson",
      "relationship": "Friend",
      "phoneNumber": "+234 (849) 476-3884",
      "email": "evaemerson@perkle.com"
    }
  },
  {
    "id": "6708e883d4b48c8432f8757f",
    "organization": "Bittor",
    "userName": "MaryellenGoff",
    "email": "maryellengoff@bittor.com",
    "phoneNumber": "+234 (989) 423-2428",
    "date": "2023-02-18T04:24:08-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Duke Vargas",
      "phoneNumber": "+234 (956) 596-2228",
      "emailAddress": "dukevargas@bittor.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "dukevargas@bittor.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Hydrocom Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ArnoldMarks",
      "twitter": "https://twitter.com/KathleenMann",
      "linkedin": "https://linkedin.com/in/BrittanySavage"
    },
    "guarantor": {
      "fullName": "Benita Bentley",
      "relationship": "Family",
      "phoneNumber": "+234 (912) 423-3482",
      "email": "benitabentley@hydrocom.com"
    }
  },
  {
    "id": "6708e88353dee38aa867b237",
    "organization": "Quilch",
    "userName": "GravesBartlett",
    "email": "gravesbartlett@quilch.com",
    "phoneNumber": "+234 (878) 572-2383",
    "date": "2020-03-13T04:36:32-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Shannon Parker",
      "phoneNumber": "+234 (887) 414-3389",
      "emailAddress": "shannonparker@quilch.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "shannonparker@quilch.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Farmex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HendrixCochran",
      "twitter": "https://twitter.com/RobynAvila",
      "linkedin": "https://linkedin.com/in/JudyJimenez"
    },
    "guarantor": {
      "fullName": "Yates Odonnell",
      "relationship": "Friend",
      "phoneNumber": "+234 (956) 479-3904",
      "email": "yatesodonnell@farmex.com"
    }
  },
  {
    "id": "6708e883cf224e9a23ecef8d",
    "organization": "Knowlysis",
    "userName": "NolanVaughn",
    "email": "nolanvaughn@knowlysis.com",
    "phoneNumber": "+234 (943) 480-2065",
    "date": "2022-02-07T01:58:03-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Jacobs King",
      "phoneNumber": "+234 (992) 444-2244",
      "emailAddress": "jacobsking@knowlysis.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "jacobsking@knowlysis.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Opticon Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/VanessaRusso",
      "twitter": "https://twitter.com/AlishaMorrison",
      "linkedin": "https://linkedin.com/in/RosalesVaughan"
    },
    "guarantor": {
      "fullName": "Stewart Haley",
      "relationship": "Family",
      "phoneNumber": "+234 (816) 409-2890",
      "email": "stewarthaley@opticon.com"
    }
  },
  {
    "id": "6708e883af7a6502031d0f60",
    "organization": "Comfirm",
    "userName": "JenkinsCummings",
    "email": "jenkinscummings@comfirm.com",
    "phoneNumber": "+234 (910) 481-2140",
    "date": "2023-01-19T06:22:07-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Krystal Sargent",
      "phoneNumber": "+234 (992) 529-3242",
      "emailAddress": "krystalsargent@comfirm.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "krystalsargent@comfirm.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Quarmony Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GallowayCarlson",
      "twitter": "https://twitter.com/EulaGilmore",
      "linkedin": "https://linkedin.com/in/JaimeDuran"
    },
    "guarantor": {
      "fullName": "Cox Chapman",
      "relationship": "Other",
      "phoneNumber": "+234 (953) 451-2234",
      "email": "coxchapman@quarmony.com"
    }
  },
  {
    "id": "6708e8837891f26970f61b95",
    "organization": "Comdom",
    "userName": "KristaHoward",
    "email": "kristahoward@comdom.com",
    "phoneNumber": "+234 (938) 544-3549",
    "date": "2024-03-02T08:05:34-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Wells Figueroa",
      "phoneNumber": "+234 (969) 586-3671",
      "emailAddress": "wellsfigueroa@comdom.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "wellsfigueroa@comdom.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Arctiq Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PhoebeBallard",
      "twitter": "https://twitter.com/HermanLancaster",
      "linkedin": "https://linkedin.com/in/WashingtonMoon"
    },
    "guarantor": {
      "fullName": "Claudette Dean",
      "relationship": "Friend",
      "phoneNumber": "+234 (957) 489-3613",
      "email": "claudettedean@arctiq.com"
    }
  },
  {
    "id": "6708e8833d82ff23a9151ba9",
    "organization": "Hyplex",
    "userName": "DavenportEvans",
    "email": "davenportevans@hyplex.com",
    "phoneNumber": "+234 (813) 402-3005",
    "date": "2021-03-28T04:13:04-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Goldie Vinson",
      "phoneNumber": "+234 (984) 479-2060",
      "emailAddress": "goldievinson@hyplex.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "goldievinson@hyplex.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Geoform Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LouiseOdom",
      "twitter": "https://twitter.com/KirkHuffman",
      "linkedin": "https://linkedin.com/in/StacieMolina"
    },
    "guarantor": {
      "fullName": "Laverne Jensen",
      "relationship": "Other",
      "phoneNumber": "+234 (953) 580-2001",
      "email": "lavernejensen@geoform.com"
    }
  },
  {
    "id": "6708e8833201a0c8ada9f5a1",
    "organization": "Xiix",
    "userName": "RosemariePrice",
    "email": "rosemarieprice@xiix.com",
    "phoneNumber": "+234 (998) 554-2429",
    "date": "2024-05-13T09:14:57-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Laurie Wong",
      "phoneNumber": "+234 (805) 562-2932",
      "emailAddress": "lauriewong@xiix.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "lauriewong@xiix.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Syntac Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SampsonDalton",
      "twitter": "https://twitter.com/RosalynMclean",
      "linkedin": "https://linkedin.com/in/CastanedaHolloway"
    },
    "guarantor": {
      "fullName": "Harris Day",
      "relationship": "Colleague",
      "phoneNumber": "+234 (816) 487-2891",
      "email": "harrisday@syntac.com"
    }
  },
  {
    "id": "6708e8838d68c51014e24dfc",
    "organization": "Comtest",
    "userName": "RoxanneRandolph",
    "email": "roxannerandolph@comtest.com",
    "phoneNumber": "+234 (972) 504-2554",
    "date": "2022-06-08T10:18:10-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Caldwell Craig",
      "phoneNumber": "+234 (982) 494-2599",
      "emailAddress": "caldwellcraig@comtest.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "caldwellcraig@comtest.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Xurban Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/StuartDeleon",
      "twitter": "https://twitter.com/BlairNelson",
      "linkedin": "https://linkedin.com/in/JacksonStrickland"
    },
    "guarantor": {
      "fullName": "Sparks Grant",
      "relationship": "Other",
      "phoneNumber": "+234 (921) 408-3524",
      "email": "sparksgrant@xurban.com"
    }
  },
  {
    "id": "6708e883892a52fa05b5c295",
    "organization": "Deviltoe",
    "userName": "JoannCabrera",
    "email": "joanncabrera@deviltoe.com",
    "phoneNumber": "+234 (841) 563-2352",
    "date": "2021-02-16T02:36:40-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Sherri Mccall",
      "phoneNumber": "+234 (820) 414-2375",
      "emailAddress": "sherrimccall@deviltoe.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "sherrimccall@deviltoe.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Zappix Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KennedyDickerson",
      "twitter": "https://twitter.com/CooperWhitley",
      "linkedin": "https://linkedin.com/in/MabelTaylor"
    },
    "guarantor": {
      "fullName": "Roberta Hancock",
      "relationship": "Colleague",
      "phoneNumber": "+234 (993) 419-2841",
      "email": "robertahancock@zappix.com"
    }
  },
  {
    "id": "6708e88360b0915426c73c7b",
    "organization": "Maxemia",
    "userName": "KatherineLandry",
    "email": "katherinelandry@maxemia.com",
    "phoneNumber": "+234 (984) 598-3896",
    "date": "2024-04-08T07:17:07-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Pugh Clay",
      "phoneNumber": "+234 (899) 402-3277",
      "emailAddress": "pughclay@maxemia.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "pughclay@maxemia.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Emergent Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PauletteMccarty",
      "twitter": "https://twitter.com/DixonSanders",
      "linkedin": "https://linkedin.com/in/DeckerMcclure"
    },
    "guarantor": {
      "fullName": "Autumn Burton",
      "relationship": "Family",
      "phoneNumber": "+234 (837) 595-2450",
      "email": "autumnburton@emergent.com"
    }
  },
  {
    "id": "6708e8837a8a11b812af5544",
    "organization": "Anivet",
    "userName": "IngramTran",
    "email": "ingramtran@anivet.com",
    "phoneNumber": "+234 (990) 535-3610",
    "date": "2022-10-22T01:28:37-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Goodwin Schwartz",
      "phoneNumber": "+234 (827) 430-2054",
      "emailAddress": "goodwinschwartz@anivet.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "goodwinschwartz@anivet.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Kyagoro Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HesterChristensen",
      "twitter": "https://twitter.com/VickiSingleton",
      "linkedin": "https://linkedin.com/in/VangHatfield"
    },
    "guarantor": {
      "fullName": "Combs Dickson",
      "relationship": "Family",
      "phoneNumber": "+234 (915) 406-3439",
      "email": "combsdickson@kyagoro.com"
    }
  },
  {
    "id": "6708e883e4247f266beb9a5d",
    "organization": "Xumonk",
    "userName": "EdwinaFrancis",
    "email": "edwinafrancis@xumonk.com",
    "phoneNumber": "+234 (947) 445-2212",
    "date": "2024-01-03T04:55:40-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Cash Johnson",
      "phoneNumber": "+234 (841) 592-3356",
      "emailAddress": "cashjohnson@xumonk.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "cashjohnson@xumonk.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Datacator Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HarperDixon",
      "twitter": "https://twitter.com/FranklinDoyle",
      "linkedin": "https://linkedin.com/in/SpenceGates"
    },
    "guarantor": {
      "fullName": "Dunlap Riddle",
      "relationship": "Colleague",
      "phoneNumber": "+234 (958) 546-3697",
      "email": "dunlapriddle@datacator.com"
    }
  },
  {
    "id": "6708e883ce0c42a98ce6caaf",
    "organization": "Assistix",
    "userName": "SharonStanton",
    "email": "sharonstanton@assistix.com",
    "phoneNumber": "+234 (805) 570-3727",
    "date": "2022-07-31T11:27:58-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Fox Hensley",
      "phoneNumber": "+234 (977) 445-3369",
      "emailAddress": "foxhensley@assistix.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "foxhensley@assistix.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Mazuda Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MccallMendoza",
      "twitter": "https://twitter.com/NorrisTrevino",
      "linkedin": "https://linkedin.com/in/BonitaBolton"
    },
    "guarantor": {
      "fullName": "Sybil Salazar",
      "relationship": "Friend",
      "phoneNumber": "+234 (924) 481-3689",
      "email": "sybilsalazar@mazuda.com"
    }
  },
  {
    "id": "6708e883118380b08cf83596",
    "organization": "Genmom",
    "userName": "RubyHerring",
    "email": "rubyherring@genmom.com",
    "phoneNumber": "+234 (863) 432-2466",
    "date": "2023-01-27T04:16:39-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Moon Howe",
      "phoneNumber": "+234 (959) 495-3990",
      "emailAddress": "moonhowe@genmom.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "moonhowe@genmom.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Centice Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EvansDelacruz",
      "twitter": "https://twitter.com/ThereseLyons",
      "linkedin": "https://linkedin.com/in/MalindaBates"
    },
    "guarantor": {
      "fullName": "Patel Brewer",
      "relationship": "Other",
      "phoneNumber": "+234 (846) 593-3576",
      "email": "patelbrewer@centice.com"
    }
  },
  {
    "id": "6708e88367c1e753bd7e1d22",
    "organization": "Typhonica",
    "userName": "DominiqueGonzalez",
    "email": "dominiquegonzalez@typhonica.com",
    "phoneNumber": "+234 (962) 542-2082",
    "date": "2023-01-02T06:14:14-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Vonda Stark",
      "phoneNumber": "+234 (956) 422-2886",
      "emailAddress": "vondastark@typhonica.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "vondastark@typhonica.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Furnigeer Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HolmesLittle",
      "twitter": "https://twitter.com/KathrynAshley",
      "linkedin": "https://linkedin.com/in/HornRoy"
    },
    "guarantor": {
      "fullName": "Cara English",
      "relationship": "Family",
      "phoneNumber": "+234 (920) 523-3072",
      "email": "caraenglish@furnigeer.com"
    }
  },
  {
    "id": "6708e8839431a879e6dd2451",
    "organization": "Pushcart",
    "userName": "RamirezSims",
    "email": "ramirezsims@pushcart.com",
    "phoneNumber": "+234 (918) 587-2121",
    "date": "2021-03-11T07:36:39-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Tamika Kane",
      "phoneNumber": "+234 (913) 422-2262",
      "emailAddress": "tamikakane@pushcart.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "tamikakane@pushcart.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Pholio Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HamptonHughes",
      "twitter": "https://twitter.com/WelchOneill",
      "linkedin": "https://linkedin.com/in/PaceLove"
    },
    "guarantor": {
      "fullName": "Heidi Kennedy",
      "relationship": "Other",
      "phoneNumber": "+234 (865) 553-2453",
      "email": "heidikennedy@pholio.com"
    }
  },
  {
    "id": "6708e883d260a38a9bba4cda",
    "organization": "Obliq",
    "userName": "AndersonCantrell",
    "email": "andersoncantrell@obliq.com",
    "phoneNumber": "+234 (973) 447-3114",
    "date": "2020-03-20T03:37:35-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Lester Bryant",
      "phoneNumber": "+234 (868) 401-3472",
      "emailAddress": "lesterbryant@obliq.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "lesterbryant@obliq.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Jamnation Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CaseGilbert",
      "twitter": "https://twitter.com/LangleyWolfe",
      "linkedin": "https://linkedin.com/in/KellerWagner"
    },
    "guarantor": {
      "fullName": "Rachelle Parrish",
      "relationship": "Other",
      "phoneNumber": "+234 (854) 465-3803",
      "email": "rachelleparrish@jamnation.com"
    }
  },
  {
    "id": "6708e883df744058d2b6650c",
    "organization": "Kidstock",
    "userName": "GayHoover",
    "email": "gayhoover@kidstock.com",
    "phoneNumber": "+234 (955) 576-2010",
    "date": "2021-05-17T06:06:34-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Terry Bush",
      "phoneNumber": "+234 (932) 494-2985",
      "emailAddress": "terrybush@kidstock.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "terrybush@kidstock.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Exoteric Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BanksBird",
      "twitter": "https://twitter.com/EllisonPace",
      "linkedin": "https://linkedin.com/in/CristinaBruce"
    },
    "guarantor": {
      "fullName": "Leonard Rowe",
      "relationship": "Other",
      "phoneNumber": "+234 (939) 443-2332",
      "email": "leonardrowe@exoteric.com"
    }
  },
  {
    "id": "6708e883e4e375d03f86bdc7",
    "organization": "Buzzopia",
    "userName": "GailStafford",
    "email": "gailstafford@buzzopia.com",
    "phoneNumber": "+234 (907) 537-2918",
    "date": "2024-01-26T11:53:04-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Alicia Juarez",
      "phoneNumber": "+234 (894) 413-2976",
      "emailAddress": "aliciajuarez@buzzopia.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "aliciajuarez@buzzopia.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Octocore Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CarolynCobb",
      "twitter": "https://twitter.com/SummerCarney",
      "linkedin": "https://linkedin.com/in/HeatherCastro"
    },
    "guarantor": {
      "fullName": "Benjamin Morgan",
      "relationship": "Friend",
      "phoneNumber": "+234 (886) 504-3143",
      "email": "benjaminmorgan@octocore.com"
    }
  },
  {
    "id": "6708e883214fd688ac066ad9",
    "organization": "Comtrek",
    "userName": "LeliaWatson",
    "email": "leliawatson@comtrek.com",
    "phoneNumber": "+234 (973) 410-3731",
    "date": "2020-11-02T11:55:45-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Wilkins Dawson",
      "phoneNumber": "+234 (933) 541-3037",
      "emailAddress": "wilkinsdawson@comtrek.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "wilkinsdawson@comtrek.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Cuizine Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/GambleCollins",
      "twitter": "https://twitter.com/ToniaWooten",
      "linkedin": "https://linkedin.com/in/ElisabethGriffith"
    },
    "guarantor": {
      "fullName": "Humphrey Schmidt",
      "relationship": "Other",
      "phoneNumber": "+234 (850) 498-2649",
      "email": "humphreyschmidt@cuizine.com"
    }
  },
  {
    "id": "6708e8833d8734a3cdaad547",
    "organization": "Lovepad",
    "userName": "LanaLee",
    "email": "lanalee@lovepad.com",
    "phoneNumber": "+234 (980) 590-2313",
    "date": "2023-04-25T12:03:00-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Danielle Lindsay",
      "phoneNumber": "+234 (828) 515-2702",
      "emailAddress": "daniellelindsay@lovepad.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "daniellelindsay@lovepad.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Inquala Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FlowersBooker",
      "twitter": "https://twitter.com/MargueriteBlair",
      "linkedin": "https://linkedin.com/in/ChristianBright"
    },
    "guarantor": {
      "fullName": "Harrison Mathews",
      "relationship": "Other",
      "phoneNumber": "+234 (867) 493-2888",
      "email": "harrisonmathews@inquala.com"
    }
  },
  {
    "id": "6708e88399d5c8b8d1b4db2c",
    "organization": "Corpulse",
    "userName": "KnoxBerger",
    "email": "knoxberger@corpulse.com",
    "phoneNumber": "+234 (952) 469-2817",
    "date": "2020-07-03T06:18:44-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Riggs Jenkins",
      "phoneNumber": "+234 (943) 527-2178",
      "emailAddress": "riggsjenkins@corpulse.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "riggsjenkins@corpulse.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Waterbaby Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CaseyBuchanan",
      "twitter": "https://twitter.com/CherryCarver",
      "linkedin": "https://linkedin.com/in/LeonaAlvarez"
    },
    "guarantor": {
      "fullName": "Abby Christian",
      "relationship": "Family",
      "phoneNumber": "+234 (885) 499-2946",
      "email": "abbychristian@waterbaby.com"
    }
  },
  {
    "id": "6708e8835f0ebf7098f40f5d",
    "organization": "Iplax",
    "userName": "CynthiaMccormick",
    "email": "cynthiamccormick@iplax.com",
    "phoneNumber": "+234 (958) 483-2281",
    "date": "2023-01-04T03:20:21-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Webb Dennis",
      "phoneNumber": "+234 (801) 519-3795",
      "emailAddress": "webbdennis@iplax.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "webbdennis@iplax.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Helixo Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MarshBowers",
      "twitter": "https://twitter.com/AnnabelleFrye",
      "linkedin": "https://linkedin.com/in/LydiaMendez"
    },
    "guarantor": {
      "fullName": "Ladonna Holman",
      "relationship": "Colleague",
      "phoneNumber": "+234 (979) 552-3328",
      "email": "ladonnaholman@helixo.com"
    }
  },
  {
    "id": "6708e8839fe2db26cba114c1",
    "organization": "Qiao",
    "userName": "VegaBattle",
    "email": "vegabattle@qiao.com",
    "phoneNumber": "+234 (831) 476-3427",
    "date": "2021-07-06T10:17:33-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Mack Meadows",
      "phoneNumber": "+234 (885) 422-3640",
      "emailAddress": "mackmeadows@qiao.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "mackmeadows@qiao.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Soprano Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/StephensonSampson",
      "twitter": "https://twitter.com/GillespieEdwards",
      "linkedin": "https://linkedin.com/in/SosaCombs"
    },
    "guarantor": {
      "fullName": "Schroeder Elliott",
      "relationship": "Friend",
      "phoneNumber": "+234 (994) 477-2051",
      "email": "schroederelliott@soprano.com"
    }
  },
  {
    "id": "6708e883e77f84d21b1cffb1",
    "organization": "Centregy",
    "userName": "MayMiddleton",
    "email": "maymiddleton@centregy.com",
    "phoneNumber": "+234 (894) 591-3570",
    "date": "2022-03-12T05:12:57-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Woodard Freeman",
      "phoneNumber": "+234 (907) 545-3071",
      "emailAddress": "woodardfreeman@centregy.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "woodardfreeman@centregy.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Klugger Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TishaCraft",
      "twitter": "https://twitter.com/GilliamJones",
      "linkedin": "https://linkedin.com/in/WhitfieldYoung"
    },
    "guarantor": {
      "fullName": "Atkins Avery",
      "relationship": "Friend",
      "phoneNumber": "+234 (961) 591-2438",
      "email": "atkinsavery@klugger.com"
    }
  },
  {
    "id": "6708e8831387fd2f626fef00",
    "organization": "Dadabase",
    "userName": "PowellBarrett",
    "email": "powellbarrett@dadabase.com",
    "phoneNumber": "+234 (849) 430-3034",
    "date": "2022-12-31T09:06:14-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "June Keller",
      "phoneNumber": "+234 (969) 561-3583",
      "emailAddress": "junekeller@dadabase.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "junekeller@dadabase.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Comtour Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AdrienneBurris",
      "twitter": "https://twitter.com/JohnnieHenson",
      "linkedin": "https://linkedin.com/in/DoyleCooper"
    },
    "guarantor": {
      "fullName": "Alvarez Floyd",
      "relationship": "Friend",
      "phoneNumber": "+234 (913) 539-3615",
      "email": "alvarezfloyd@comtour.com"
    }
  },
  {
    "id": "6708e88388d6187b5e253000",
    "organization": "Veraq",
    "userName": "IsabelRobbins",
    "email": "isabelrobbins@veraq.com",
    "phoneNumber": "+234 (933) 484-3968",
    "date": "2021-07-06T08:32:46-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Loretta Richards",
      "phoneNumber": "+234 (927) 419-2207",
      "emailAddress": "lorettarichards@veraq.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "lorettarichards@veraq.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Austech Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/FordJacobson",
      "twitter": "https://twitter.com/MaricelaCooke",
      "linkedin": "https://linkedin.com/in/FannieTrujillo"
    },
    "guarantor": {
      "fullName": "Thompson Foreman",
      "relationship": "Family",
      "phoneNumber": "+234 (996) 585-3446",
      "email": "thompsonforeman@austech.com"
    }
  },
  {
    "id": "6708e883a0181a8fb1fd2132",
    "organization": "Lumbrex",
    "userName": "VioletRich",
    "email": "violetrich@lumbrex.com",
    "phoneNumber": "+234 (994) 440-3021",
    "date": "2022-12-15T08:36:24-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Herrera Woodward",
      "phoneNumber": "+234 (923) 580-3016",
      "emailAddress": "herrerawoodward@lumbrex.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "herrerawoodward@lumbrex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Turnling Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MaiLloyd",
      "twitter": "https://twitter.com/JillianCallahan",
      "linkedin": "https://linkedin.com/in/LucyMullins"
    },
    "guarantor": {
      "fullName": "Valenzuela Buck",
      "relationship": "Friend",
      "phoneNumber": "+234 (947) 600-2907",
      "email": "valenzuelabuck@turnling.com"
    }
  },
  {
    "id": "6708e883479b98b7c5d6c307",
    "organization": "Koffee",
    "userName": "LeticiaGoodwin",
    "email": "leticiagoodwin@koffee.com",
    "phoneNumber": "+234 (816) 533-3826",
    "date": "2021-06-17T12:32:26-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Joyce Garrison",
      "phoneNumber": "+234 (821) 571-2752",
      "emailAddress": "joycegarrison@koffee.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "joycegarrison@koffee.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Petigems Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DownsWhitaker",
      "twitter": "https://twitter.com/RiveraMckay",
      "linkedin": "https://linkedin.com/in/NitaMcknight"
    },
    "guarantor": {
      "fullName": "Goodman Wallace",
      "relationship": "Colleague",
      "phoneNumber": "+234 (922) 444-2445",
      "email": "goodmanwallace@petigems.com"
    }
  },
  {
    "id": "6708e88380df31f1e3e53c18",
    "organization": "Geekular",
    "userName": "TalleyCleveland",
    "email": "talleycleveland@geekular.com",
    "phoneNumber": "+234 (940) 541-2165",
    "date": "2022-08-20T05:23:56-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Jimmie Murray",
      "phoneNumber": "+234 (925) 596-3747",
      "emailAddress": "jimmiemurray@geekular.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "jimmiemurray@geekular.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Vendblend Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CassandraCampos",
      "twitter": "https://twitter.com/DeannaBranch",
      "linkedin": "https://linkedin.com/in/TonyaRichard"
    },
    "guarantor": {
      "fullName": "Montgomery Thomas",
      "relationship": "Friend",
      "phoneNumber": "+234 (838) 503-2918",
      "email": "montgomerythomas@vendblend.com"
    }
  },
  {
    "id": "6708e88390afc4844ce6d578",
    "organization": "Sunclipse",
    "userName": "LeonorSlater",
    "email": "leonorslater@sunclipse.com",
    "phoneNumber": "+234 (927) 482-2443",
    "date": "2023-09-23T03:22:11-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Eliza Cain",
      "phoneNumber": "+234 (870) 585-2832",
      "emailAddress": "elizacain@sunclipse.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "elizacain@sunclipse.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Egypto Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RayBritt",
      "twitter": "https://twitter.com/OdessaAguirre",
      "linkedin": "https://linkedin.com/in/EnglishAllen"
    },
    "guarantor": {
      "fullName": "Roth Galloway",
      "relationship": "Colleague",
      "phoneNumber": "+234 (838) 455-2635",
      "email": "rothgalloway@egypto.com"
    }
  },
  {
    "id": "6708e883839f60cc34d6dbca",
    "organization": "Enthaze",
    "userName": "KathieBell",
    "email": "kathiebell@enthaze.com",
    "phoneNumber": "+234 (910) 467-2245",
    "date": "2020-08-05T12:15:43-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Melton Mack",
      "phoneNumber": "+234 (802) 406-3068",
      "emailAddress": "meltonmack@enthaze.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "meltonmack@enthaze.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Equitax Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RaymondMerritt",
      "twitter": "https://twitter.com/BradfordGomez",
      "linkedin": "https://linkedin.com/in/JocelynBridges"
    },
    "guarantor": {
      "fullName": "Whitney Welch",
      "relationship": "Colleague",
      "phoneNumber": "+234 (901) 548-3854",
      "email": "whitneywelch@equitax.com"
    }
  },
  {
    "id": "6708e88372963e63c96d7583",
    "organization": "Dreamia",
    "userName": "JuanaKent",
    "email": "juanakent@dreamia.com",
    "phoneNumber": "+234 (889) 576-3824",
    "date": "2020-09-14T08:34:10-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Tyler Knight",
      "phoneNumber": "+234 (848) 469-2784",
      "emailAddress": "tylerknight@dreamia.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "tylerknight@dreamia.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Waab Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/StantonHolland",
      "twitter": "https://twitter.com/PrinceObrien",
      "linkedin": "https://linkedin.com/in/DeannSpencer"
    },
    "guarantor": {
      "fullName": "Greta Norman",
      "relationship": "Friend",
      "phoneNumber": "+234 (836) 561-3802",
      "email": "gretanorman@waab.com"
    }
  },
  {
    "id": "6708e8834ced4b4436fa77c9",
    "organization": "Apexia",
    "userName": "BernadineSherman",
    "email": "bernadinesherman@apexia.com",
    "phoneNumber": "+234 (836) 445-2877",
    "date": "2020-08-16T02:28:31-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Renee Wynn",
      "phoneNumber": "+234 (994) 440-3437",
      "emailAddress": "reneewynn@apexia.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "reneewynn@apexia.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Nurali Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HelgaHester",
      "twitter": "https://twitter.com/JosefinaCohen",
      "linkedin": "https://linkedin.com/in/MckinneyWalters"
    },
    "guarantor": {
      "fullName": "Hodge Downs",
      "relationship": "Friend",
      "phoneNumber": "+234 (988) 460-3202",
      "email": "hodgedowns@nurali.com"
    }
  },
  {
    "id": "6708e8834026bc0f856a19d5",
    "organization": "Comvoy",
    "userName": "LorraineMyers",
    "email": "lorrainemyers@comvoy.com",
    "phoneNumber": "+234 (908) 492-2686",
    "date": "2020-06-29T12:41:10-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Ophelia Mcgee",
      "phoneNumber": "+234 (878) 558-2337",
      "emailAddress": "opheliamcgee@comvoy.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "opheliamcgee@comvoy.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Cytrek Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MejiaSykes",
      "twitter": "https://twitter.com/PalmerShields",
      "linkedin": "https://linkedin.com/in/NevaMichael"
    },
    "guarantor": {
      "fullName": "Bentley Hays",
      "relationship": "Colleague",
      "phoneNumber": "+234 (810) 569-2015",
      "email": "bentleyhays@cytrek.com"
    }
  },
  {
    "id": "6708e883add4682ac734fc48",
    "organization": "Quonk",
    "userName": "CandiceGarner",
    "email": "candicegarner@quonk.com",
    "phoneNumber": "+234 (912) 419-2066",
    "date": "2024-06-18T05:48:12-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Lindsey Whitney",
      "phoneNumber": "+234 (952) 581-2683",
      "emailAddress": "lindseywhitney@quonk.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "lindseywhitney@quonk.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Aquoavo Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BestMiranda",
      "twitter": "https://twitter.com/HydeEspinoza",
      "linkedin": "https://linkedin.com/in/LillyHansen"
    },
    "guarantor": {
      "fullName": "Vazquez Faulkner",
      "relationship": "Friend",
      "phoneNumber": "+234 (945) 549-3864",
      "email": "vazquezfaulkner@aquoavo.com"
    }
  },
  {
    "id": "6708e8836ca44eaf7819b88b",
    "organization": "Wazzu",
    "userName": "BaxterPorter",
    "email": "baxterporter@wazzu.com",
    "phoneNumber": "+234 (891) 409-3701",
    "date": "2024-01-01T03:39:38-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Roberson Beach",
      "phoneNumber": "+234 (917) 562-3604",
      "emailAddress": "robersonbeach@wazzu.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "robersonbeach@wazzu.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Uplinx Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CollierHampton",
      "twitter": "https://twitter.com/CareyWard",
      "linkedin": "https://linkedin.com/in/HancockLarsen"
    },
    "guarantor": {
      "fullName": "Barker Cannon",
      "relationship": "Other",
      "phoneNumber": "+234 (892) 460-2503",
      "email": "barkercannon@uplinx.com"
    }
  },
  {
    "id": "6708e8835d7a66eef12ad559",
    "organization": "Zidox",
    "userName": "LourdesSandoval",
    "email": "lourdessandoval@zidox.com",
    "phoneNumber": "+234 (963) 595-2633",
    "date": "2024-07-06T09:38:34-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Elise Wilcox",
      "phoneNumber": "+234 (808) 420-2025",
      "emailAddress": "elisewilcox@zidox.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "elisewilcox@zidox.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Electonic Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FergusonWebb",
      "twitter": "https://twitter.com/AmieTurner",
      "linkedin": "https://linkedin.com/in/SchneiderHooper"
    },
    "guarantor": {
      "fullName": "Noble Nolan",
      "relationship": "Friend",
      "phoneNumber": "+234 (987) 525-2880",
      "email": "noblenolan@electonic.com"
    }
  },
  {
    "id": "6708e883b506d5f6ba385ce1",
    "organization": "Andryx",
    "userName": "GutierrezMorin",
    "email": "gutierrezmorin@andryx.com",
    "phoneNumber": "+234 (982) 563-3761",
    "date": "2021-10-02T01:55:54-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Rachael Payne",
      "phoneNumber": "+234 (894) 499-3072",
      "emailAddress": "rachaelpayne@andryx.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "rachaelpayne@andryx.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Oulu Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ConwayOrr",
      "twitter": "https://twitter.com/LouRyan",
      "linkedin": "https://linkedin.com/in/HawkinsLynch"
    },
    "guarantor": {
      "fullName": "Hays Solomon",
      "relationship": "Other",
      "phoneNumber": "+234 (817) 591-2662",
      "email": "hayssolomon@oulu.com"
    }
  },
  {
    "id": "6708e883dade7c491b0a47cb",
    "organization": "Musanpoly",
    "userName": "NormanZamora",
    "email": "normanzamora@musanpoly.com",
    "phoneNumber": "+234 (931) 561-3899",
    "date": "2023-06-03T11:57:39-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Petty Dillard",
      "phoneNumber": "+234 (864) 409-2517",
      "emailAddress": "pettydillard@musanpoly.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "pettydillard@musanpoly.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Zentury Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ClaudiaHahn",
      "twitter": "https://twitter.com/BushHines",
      "linkedin": "https://linkedin.com/in/HuberRasmussen"
    },
    "guarantor": {
      "fullName": "Lilia Vasquez",
      "relationship": "Other",
      "phoneNumber": "+234 (836) 496-3855",
      "email": "liliavasquez@zentury.com"
    }
  },
  {
    "id": "6708e8832e56433a2217cd91",
    "organization": "Zanymax",
    "userName": "BrandieRichardson",
    "email": "brandierichardson@zanymax.com",
    "phoneNumber": "+234 (955) 407-3050",
    "date": "2023-10-09T12:56:23-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Celia Woodard",
      "phoneNumber": "+234 (920) 570-3605",
      "emailAddress": "celiawoodard@zanymax.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "celiawoodard@zanymax.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Ronbert Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BryanGraves",
      "twitter": "https://twitter.com/PhelpsDonovan",
      "linkedin": "https://linkedin.com/in/StricklandDuncan"
    },
    "guarantor": {
      "fullName": "Benson Simmons",
      "relationship": "Colleague",
      "phoneNumber": "+234 (832) 593-2865",
      "email": "bensonsimmons@ronbert.com"
    }
  },
  {
    "id": "6708e883fa820e638a28cf48",
    "organization": "Earwax",
    "userName": "DeboraReed",
    "email": "deborareed@earwax.com",
    "phoneNumber": "+234 (865) 415-3630",
    "date": "2021-04-19T11:26:36-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Miranda Woods",
      "phoneNumber": "+234 (896) 518-3462",
      "emailAddress": "mirandawoods@earwax.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "mirandawoods@earwax.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Realmo Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TommieHogan",
      "twitter": "https://twitter.com/MalonePhelps",
      "linkedin": "https://linkedin.com/in/JulianneKnapp"
    },
    "guarantor": {
      "fullName": "Earlene Reyes",
      "relationship": "Family",
      "phoneNumber": "+234 (941) 556-3234",
      "email": "earlenereyes@realmo.com"
    }
  },
  {
    "id": "6708e88389f5280463e03f1d",
    "organization": "Assurity",
    "userName": "GuadalupeRoss",
    "email": "guadalupeross@assurity.com",
    "phoneNumber": "+234 (858) 583-2931",
    "date": "2020-05-13T09:39:02-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Wallace Rosa",
      "phoneNumber": "+234 (839) 448-3319",
      "emailAddress": "wallacerosa@assurity.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "wallacerosa@assurity.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Anocha Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HardinEwing",
      "twitter": "https://twitter.com/ValentineWillis",
      "linkedin": "https://linkedin.com/in/LindsayPennington"
    },
    "guarantor": {
      "fullName": "Laurel Melton",
      "relationship": "Family",
      "phoneNumber": "+234 (832) 404-3780",
      "email": "laurelmelton@anocha.com"
    }
  },
  {
    "id": "6708e883bd5d33b112f8e015",
    "organization": "Geekmosis",
    "userName": "SarahKeith",
    "email": "sarahkeith@geekmosis.com",
    "phoneNumber": "+234 (988) 528-3909",
    "date": "2022-11-14T04:31:21-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Lynne Higgins",
      "phoneNumber": "+234 (838) 402-2648",
      "emailAddress": "lynnehiggins@geekmosis.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "lynnehiggins@geekmosis.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Mantro Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WilkinsonDotson",
      "twitter": "https://twitter.com/MelindaKnox",
      "linkedin": "https://linkedin.com/in/EddieRowland"
    },
    "guarantor": {
      "fullName": "Duncan Patton",
      "relationship": "Family",
      "phoneNumber": "+234 (810) 542-3749",
      "email": "duncanpatton@mantro.com"
    }
  },
  {
    "id": "6708e88351f03263ad2fa83b",
    "organization": "Nebulean",
    "userName": "KathySutton",
    "email": "kathysutton@nebulean.com",
    "phoneNumber": "+234 (839) 466-3630",
    "date": "2024-04-27T08:11:00-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Santiago Hubbard",
      "phoneNumber": "+234 (898) 502-2392",
      "emailAddress": "santiagohubbard@nebulean.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "santiagohubbard@nebulean.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Ovation Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KeithDaugherty",
      "twitter": "https://twitter.com/MillieHorton",
      "linkedin": "https://linkedin.com/in/BetsyRodriquez"
    },
    "guarantor": {
      "fullName": "Chan Clemons",
      "relationship": "Family",
      "phoneNumber": "+234 (832) 405-2966",
      "email": "chanclemons@ovation.com"
    }
  },
  {
    "id": "6708e883dfbbe5a94231f3e7",
    "organization": "Neteria",
    "userName": "FlynnHouston",
    "email": "flynnhouston@neteria.com",
    "phoneNumber": "+234 (835) 543-3303",
    "date": "2022-04-07T08:21:42-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Harding Marshall",
      "phoneNumber": "+234 (959) 427-3025",
      "emailAddress": "hardingmarshall@neteria.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "hardingmarshall@neteria.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Multron Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CathyDecker",
      "twitter": "https://twitter.com/MartaBoyer",
      "linkedin": "https://linkedin.com/in/TerriManning"
    },
    "guarantor": {
      "fullName": "Pierce Humphrey",
      "relationship": "Other",
      "phoneNumber": "+234 (968) 445-2467",
      "email": "piercehumphrey@multron.com"
    }
  },
  {
    "id": "6708e88329524247091d7e46",
    "organization": "Flum",
    "userName": "McculloughBaldwin",
    "email": "mcculloughbaldwin@flum.com",
    "phoneNumber": "+234 (819) 595-3995",
    "date": "2024-02-05T04:47:19-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Ruiz Macdonald",
      "phoneNumber": "+234 (861) 462-3548",
      "emailAddress": "ruizmacdonald@flum.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "ruizmacdonald@flum.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Dancerity Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AlisaFrazier",
      "twitter": "https://twitter.com/ManuelaBailey",
      "linkedin": "https://linkedin.com/in/AllisonRatliff"
    },
    "guarantor": {
      "fullName": "Nieves Banks",
      "relationship": "Friend",
      "phoneNumber": "+234 (855) 554-3814",
      "email": "nievesbanks@dancerity.com"
    }
  },
  {
    "id": "6708e8838fdf4ae576a5164a",
    "organization": "Balooba",
    "userName": "DeloresFarmer",
    "email": "deloresfarmer@balooba.com",
    "phoneNumber": "+234 (897) 511-2427",
    "date": "2022-07-17T06:18:25-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Frost Snider",
      "phoneNumber": "+234 (988) 404-3121",
      "emailAddress": "frostsnider@balooba.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "frostsnider@balooba.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Inrt Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/VargasDuffy",
      "twitter": "https://twitter.com/PaigeRomero",
      "linkedin": "https://linkedin.com/in/ChurchBrennan"
    },
    "guarantor": {
      "fullName": "Wynn Bauer",
      "relationship": "Friend",
      "phoneNumber": "+234 (824) 522-2068",
      "email": "wynnbauer@inrt.com"
    }
  },
  {
    "id": "6708e8830e5bbe737eecdcdc",
    "organization": "Permadyne",
    "userName": "CandaceHartman",
    "email": "candacehartman@permadyne.com",
    "phoneNumber": "+234 (846) 581-3904",
    "date": "2021-03-25T09:46:29-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Matthews Ferrell",
      "phoneNumber": "+234 (830) 484-2583",
      "emailAddress": "matthewsferrell@permadyne.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "matthewsferrell@permadyne.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Centrexin Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FranciscaBarber",
      "twitter": "https://twitter.com/MinnieMccoy",
      "linkedin": "https://linkedin.com/in/PatsyHodge"
    },
    "guarantor": {
      "fullName": "Queen Moody",
      "relationship": "Friend",
      "phoneNumber": "+234 (912) 556-2119",
      "email": "queenmoody@centrexin.com"
    }
  },
  {
    "id": "6708e88307fc655dc2c08581",
    "organization": "Filodyne",
    "userName": "AllysonStephens",
    "email": "allysonstephens@filodyne.com",
    "phoneNumber": "+234 (943) 597-2099",
    "date": "2023-01-11T01:18:20-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Landry Pena",
      "phoneNumber": "+234 (838) 459-2670",
      "emailAddress": "landrypena@filodyne.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "landrypena@filodyne.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Netility Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SanchezSloan",
      "twitter": "https://twitter.com/GeorgetteBeard",
      "linkedin": "https://linkedin.com/in/SummersHaynes"
    },
    "guarantor": {
      "fullName": "Richards Adams",
      "relationship": "Friend",
      "phoneNumber": "+234 (914) 542-2958",
      "email": "richardsadams@netility.com"
    }
  },
  {
    "id": "6708e88393a3ff5aa03ffef7",
    "organization": "Cosmetex",
    "userName": "MosesHill",
    "email": "moseshill@cosmetex.com",
    "phoneNumber": "+234 (995) 496-3946",
    "date": "2020-03-06T01:07:27-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Lucile Brooks",
      "phoneNumber": "+234 (835) 598-2630",
      "emailAddress": "lucilebrooks@cosmetex.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "lucilebrooks@cosmetex.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Atgen Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PittmanKidd",
      "twitter": "https://twitter.com/AyersIrwin",
      "linkedin": "https://linkedin.com/in/MargretWade"
    },
    "guarantor": {
      "fullName": "Byers Pope",
      "relationship": "Friend",
      "phoneNumber": "+234 (812) 534-2078",
      "email": "byerspope@atgen.com"
    }
  },
  {
    "id": "6708e8838fa95000a5eee68a",
    "organization": "Kage",
    "userName": "PattyKline",
    "email": "pattykline@kage.com",
    "phoneNumber": "+234 (834) 550-2376",
    "date": "2022-12-02T02:19:52-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Morgan Montgomery",
      "phoneNumber": "+234 (956) 567-3079",
      "emailAddress": "morganmontgomery@kage.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "morganmontgomery@kage.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Tetratrex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DavidAtkinson",
      "twitter": "https://twitter.com/HendersonFarley",
      "linkedin": "https://linkedin.com/in/BobbieCopeland"
    },
    "guarantor": {
      "fullName": "Beverley Adkins",
      "relationship": "Colleague",
      "phoneNumber": "+234 (949) 560-2428",
      "email": "beverleyadkins@tetratrex.com"
    }
  },
  {
    "id": "6708e883bdfae94e79d612fa",
    "organization": "Zentime",
    "userName": "InaCotton",
    "email": "inacotton@zentime.com",
    "phoneNumber": "+234 (837) 514-2040",
    "date": "2021-07-08T09:59:18-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Deirdre Horn",
      "phoneNumber": "+234 (834) 475-3065",
      "emailAddress": "deirdrehorn@zentime.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "deirdrehorn@zentime.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zenco Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BookerPhillips",
      "twitter": "https://twitter.com/MunozGreen",
      "linkedin": "https://linkedin.com/in/AlbertaDonaldson"
    },
    "guarantor": {
      "fullName": "Emerson Leon",
      "relationship": "Colleague",
      "phoneNumber": "+234 (828) 596-3492",
      "email": "emersonleon@zenco.com"
    }
  },
  {
    "id": "6708e883ea76d25a5773f744",
    "organization": "Isologia",
    "userName": "BattleMcclain",
    "email": "battlemcclain@isologia.com",
    "phoneNumber": "+234 (881) 565-2743",
    "date": "2020-03-26T02:42:14-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Gwendolyn Fuentes",
      "phoneNumber": "+234 (930) 585-3540",
      "emailAddress": "gwendolynfuentes@isologia.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "gwendolynfuentes@isologia.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Ontality Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/NunezGlenn",
      "twitter": "https://twitter.com/GayleBradford",
      "linkedin": "https://linkedin.com/in/ElsieRoberson"
    },
    "guarantor": {
      "fullName": "Brennan Schneider",
      "relationship": "Colleague",
      "phoneNumber": "+234 (948) 593-3419",
      "email": "brennanschneider@ontality.com"
    }
  },
  {
    "id": "6708e883a4f10e6f7e013a75",
    "organization": "Geekola",
    "userName": "ReidSilva",
    "email": "reidsilva@geekola.com",
    "phoneNumber": "+234 (902) 518-2935",
    "date": "2022-11-05T08:08:07-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Salas Estrada",
      "phoneNumber": "+234 (914) 492-3185",
      "emailAddress": "salasestrada@geekola.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "salasestrada@geekola.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Nitracyr Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GladysLe",
      "twitter": "https://twitter.com/LawsonPaul",
      "linkedin": "https://linkedin.com/in/ShellyPerry"
    },
    "guarantor": {
      "fullName": "Inez Booth",
      "relationship": "Family",
      "phoneNumber": "+234 (887) 530-2854",
      "email": "inezbooth@nitracyr.com"
    }
  },
  {
    "id": "6708e88320cde95c02f09375",
    "organization": "Zedalis",
    "userName": "MaudeNorris",
    "email": "maudenorris@zedalis.com",
    "phoneNumber": "+234 (870) 578-2867",
    "date": "2024-05-31T09:22:05-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Rene Webster",
      "phoneNumber": "+234 (816) 432-2097",
      "emailAddress": "renewebster@zedalis.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "renewebster@zedalis.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Adornica Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/KimLarson",
      "twitter": "https://twitter.com/BruceSharpe",
      "linkedin": "https://linkedin.com/in/CarrilloHardin"
    },
    "guarantor": {
      "fullName": "Christina Anderson",
      "relationship": "Friend",
      "phoneNumber": "+234 (985) 527-3512",
      "email": "christinaanderson@adornica.com"
    }
  },
  {
    "id": "6708e8834a312d8792560ba3",
    "organization": "Ziggles",
    "userName": "TracieVega",
    "email": "tracievega@ziggles.com",
    "phoneNumber": "+234 (919) 583-2329",
    "date": "2020-09-06T08:04:00-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Riley Schroeder",
      "phoneNumber": "+234 (911) 431-2402",
      "emailAddress": "rileyschroeder@ziggles.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "rileyschroeder@ziggles.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Applidec Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BeckMelendez",
      "twitter": "https://twitter.com/ConsueloMcmahon",
      "linkedin": "https://linkedin.com/in/BridgettHolder"
    },
    "guarantor": {
      "fullName": "Dejesus Frederick",
      "relationship": "Friend",
      "phoneNumber": "+234 (961) 574-3311",
      "email": "dejesusfrederick@applidec.com"
    }
  },
  {
    "id": "6708e883290072867c67cb79",
    "organization": "Thredz",
    "userName": "ShirleyRuiz",
    "email": "shirleyruiz@thredz.com",
    "phoneNumber": "+234 (987) 542-2008",
    "date": "2020-03-20T07:05:31-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Skinner Maddox",
      "phoneNumber": "+234 (906) 492-3856",
      "emailAddress": "skinnermaddox@thredz.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "skinnermaddox@thredz.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Fuelton Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CarlaPruitt",
      "twitter": "https://twitter.com/VillarrealRoth",
      "linkedin": "https://linkedin.com/in/SmallSellers"
    },
    "guarantor": {
      "fullName": "Wilkerson Vang",
      "relationship": "Other",
      "phoneNumber": "+234 (956) 465-3255",
      "email": "wilkersonvang@fuelton.com"
    }
  },
  {
    "id": "6708e8836885de80507946e8",
    "organization": "Olympix",
    "userName": "TerryBerry",
    "email": "terryberry@olympix.com",
    "phoneNumber": "+234 (833) 405-3322",
    "date": "2020-04-23T12:39:58-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Ortega Suarez",
      "phoneNumber": "+234 (899) 539-3124",
      "emailAddress": "ortegasuarez@olympix.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "ortegasuarez@olympix.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Enjola Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LesleyBender",
      "twitter": "https://twitter.com/BeulahShort",
      "linkedin": "https://linkedin.com/in/JeannieDorsey"
    },
    "guarantor": {
      "fullName": "Ward Scott",
      "relationship": "Friend",
      "phoneNumber": "+234 (889) 595-2028",
      "email": "wardscott@enjola.com"
    }
  },
  {
    "id": "6708e8838bcc3217a94fd196",
    "organization": "Kyaguru",
    "userName": "HenriettaKoch",
    "email": "henriettakoch@kyaguru.com",
    "phoneNumber": "+234 (916) 556-3502",
    "date": "2024-03-26T07:39:18-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Wilda Boyd",
      "phoneNumber": "+234 (848) 462-3785",
      "emailAddress": "wildaboyd@kyaguru.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "wildaboyd@kyaguru.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Hotcakes Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ChandraHunt",
      "twitter": "https://twitter.com/CaseyMonroe",
      "linkedin": "https://linkedin.com/in/EssieMckenzie"
    },
    "guarantor": {
      "fullName": "Augusta Maxwell",
      "relationship": "Other",
      "phoneNumber": "+234 (946) 423-2894",
      "email": "augustamaxwell@hotcakes.com"
    }
  },
  {
    "id": "6708e8837ca32e681ad925a0",
    "organization": "Senmei",
    "userName": "ViolaMiles",
    "email": "violamiles@senmei.com",
    "phoneNumber": "+234 (938) 564-3204",
    "date": "2024-08-18T02:08:47-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Reba Collier",
      "phoneNumber": "+234 (829) 460-3267",
      "emailAddress": "rebacollier@senmei.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "rebacollier@senmei.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Candecor Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CunninghamThompson",
      "twitter": "https://twitter.com/VernaBaker",
      "linkedin": "https://linkedin.com/in/VilmaWood"
    },
    "guarantor": {
      "fullName": "Ella Nash",
      "relationship": "Family",
      "phoneNumber": "+234 (875) 599-2354",
      "email": "ellanash@candecor.com"
    }
  },
  {
    "id": "6708e883280e0a29c460e4b4",
    "organization": "Plexia",
    "userName": "SherrySolis",
    "email": "sherrysolis@plexia.com",
    "phoneNumber": "+234 (905) 526-3751",
    "date": "2020-09-10T04:50:31-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Jannie Key",
      "phoneNumber": "+234 (869) 454-3856",
      "emailAddress": "janniekey@plexia.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "janniekey@plexia.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Quonata Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HeleneMatthews",
      "twitter": "https://twitter.com/KellyBenjamin",
      "linkedin": "https://linkedin.com/in/BrittneyWilder"
    },
    "guarantor": {
      "fullName": "Rhea Harrington",
      "relationship": "Colleague",
      "phoneNumber": "+234 (843) 467-2770",
      "email": "rheaharrington@quonata.com"
    }
  },
  {
    "id": "6708e883bc191b829ced43ea",
    "organization": "Quizmo",
    "userName": "NicholsHurst",
    "email": "nicholshurst@quizmo.com",
    "phoneNumber": "+234 (829) 437-3693",
    "date": "2024-07-06T01:24:42-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Wong Everett",
      "phoneNumber": "+234 (984) 420-3511",
      "emailAddress": "wongeverett@quizmo.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "wongeverett@quizmo.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Stralum Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WatkinsCash",
      "twitter": "https://twitter.com/AlmaFry",
      "linkedin": "https://linkedin.com/in/DurhamParsons"
    },
    "guarantor": {
      "fullName": "Tammi Riley",
      "relationship": "Family",
      "phoneNumber": "+234 (832) 425-2784",
      "email": "tammiriley@stralum.com"
    }
  },
  {
    "id": "6708e883d17f5c76feecff2b",
    "organization": "Biolive",
    "userName": "DorothyMorton",
    "email": "dorothymorton@biolive.com",
    "phoneNumber": "+234 (987) 454-2639",
    "date": "2021-02-25T04:35:13-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Robertson Small",
      "phoneNumber": "+234 (926) 578-3050",
      "emailAddress": "robertsonsmall@biolive.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "robertsonsmall@biolive.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Exostream Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/PansyCarter",
      "twitter": "https://twitter.com/BonnieWhite",
      "linkedin": "https://linkedin.com/in/FarrellHowell"
    },
    "guarantor": {
      "fullName": "Pope Lamb",
      "relationship": "Family",
      "phoneNumber": "+234 (807) 581-3049",
      "email": "popelamb@exostream.com"
    }
  },
  {
    "id": "6708e88386b42a4cf5ba5a9c",
    "organization": "Uncorp",
    "userName": "AngieKim",
    "email": "angiekim@uncorp.com",
    "phoneNumber": "+234 (925) 470-3386",
    "date": "2021-01-04T10:06:54-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Angelica Gibbs",
      "phoneNumber": "+234 (801) 561-2728",
      "emailAddress": "angelicagibbs@uncorp.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "angelicagibbs@uncorp.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Printspan Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RandiDale",
      "twitter": "https://twitter.com/BethBarnett",
      "linkedin": "https://linkedin.com/in/ClaudineNieves"
    },
    "guarantor": {
      "fullName": "Sasha West",
      "relationship": "Other",
      "phoneNumber": "+234 (901) 423-2389",
      "email": "sashawest@printspan.com"
    }
  },
  {
    "id": "6708e88396328d30abe0766d",
    "organization": "Dragbot",
    "userName": "TateJohnston",
    "email": "tatejohnston@dragbot.com",
    "phoneNumber": "+234 (956) 535-2365",
    "date": "2022-01-19T05:31:30-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Mullen Dyer",
      "phoneNumber": "+234 (862) 531-3793",
      "emailAddress": "mullendyer@dragbot.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "mullendyer@dragbot.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Comveyor Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WadeWise",
      "twitter": "https://twitter.com/RosalindaMosley",
      "linkedin": "https://linkedin.com/in/JeffersonValentine"
    },
    "guarantor": {
      "fullName": "Priscilla Dudley",
      "relationship": "Friend",
      "phoneNumber": "+234 (930) 406-3372",
      "email": "priscilladudley@comveyor.com"
    }
  },
  {
    "id": "6708e8833ad39f8d7d61b2a3",
    "organization": "Bunga",
    "userName": "JasmineFischer",
    "email": "jasminefischer@bunga.com",
    "phoneNumber": "+234 (831) 440-3466",
    "date": "2024-06-06T07:36:46-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Mercedes Gay",
      "phoneNumber": "+234 (896) 553-2287",
      "emailAddress": "mercedesgay@bunga.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "mercedesgay@bunga.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Lexicondo Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WattsSweeney",
      "twitter": "https://twitter.com/HudsonHenry",
      "linkedin": "https://linkedin.com/in/HarriettColeman"
    },
    "guarantor": {
      "fullName": "Sharpe Hood",
      "relationship": "Other",
      "phoneNumber": "+234 (824) 598-3085",
      "email": "sharpehood@lexicondo.com"
    }
  },
  {
    "id": "6708e8832441f234a60a1355",
    "organization": "Corporana",
    "userName": "DillonLambert",
    "email": "dillonlambert@corporana.com",
    "phoneNumber": "+234 (998) 471-3268",
    "date": "2021-12-18T06:45:34-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Robbie Schultz",
      "phoneNumber": "+234 (828) 592-3772",
      "emailAddress": "robbieschultz@corporana.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "robbieschultz@corporana.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Imkan Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CottonMcdonald",
      "twitter": "https://twitter.com/KinneyHamilton",
      "linkedin": "https://linkedin.com/in/DixieCamacho"
    },
    "guarantor": {
      "fullName": "Shaw Hess",
      "relationship": "Colleague",
      "phoneNumber": "+234 (846) 545-3069",
      "email": "shawhess@imkan.com"
    }
  },
  {
    "id": "6708e883418ebf162b2ec84b",
    "organization": "Overfork",
    "userName": "HallPatrick",
    "email": "hallpatrick@overfork.com",
    "phoneNumber": "+234 (800) 572-3995",
    "date": "2022-05-07T12:33:32-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Jayne Rosales",
      "phoneNumber": "+234 (892) 498-3386",
      "emailAddress": "jaynerosales@overfork.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "jaynerosales@overfork.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Daido Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JerryArnold",
      "twitter": "https://twitter.com/SharronFranks",
      "linkedin": "https://linkedin.com/in/HardyMontoya"
    },
    "guarantor": {
      "fullName": "Rosario Robinson",
      "relationship": "Friend",
      "phoneNumber": "+234 (825) 506-2335",
      "email": "rosariorobinson@daido.com"
    }
  },
  {
    "id": "6708e8831b03a9a95d4a13ba",
    "organization": "Omatom",
    "userName": "ThorntonMoreno",
    "email": "thorntonmoreno@omatom.com",
    "phoneNumber": "+234 (887) 569-2353",
    "date": "2022-01-14T08:40:34-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Gardner Sparks",
      "phoneNumber": "+234 (885) 488-3016",
      "emailAddress": "gardnersparks@omatom.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "gardnersparks@omatom.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Gadtron Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MooneyCline",
      "twitter": "https://twitter.com/DennisFleming",
      "linkedin": "https://linkedin.com/in/DorseyMedina"
    },
    "guarantor": {
      "fullName": "Maritza Gardner",
      "relationship": "Colleague",
      "phoneNumber": "+234 (875) 595-2188",
      "email": "maritzagardner@gadtron.com"
    }
  },
  {
    "id": "6708e88306d938790e69fce3",
    "organization": "Organica",
    "userName": "ElsaJames",
    "email": "elsajames@organica.com",
    "phoneNumber": "+234 (925) 551-3597",
    "date": "2023-12-26T12:39:21-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Natalie Butler",
      "phoneNumber": "+234 (835) 558-3715",
      "emailAddress": "nataliebutler@organica.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "nataliebutler@organica.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Digigene Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/NortonBurch",
      "twitter": "https://twitter.com/SingletonMercer",
      "linkedin": "https://linkedin.com/in/ElenaBriggs"
    },
    "guarantor": {
      "fullName": "Stanley Ramirez",
      "relationship": "Other",
      "phoneNumber": "+234 (827) 532-3712",
      "email": "stanleyramirez@digigene.com"
    }
  },
  {
    "id": "6708e8835a7f2135a431231f",
    "organization": "Speedbolt",
    "userName": "ConradMckee",
    "email": "conradmckee@speedbolt.com",
    "phoneNumber": "+234 (818) 596-3429",
    "date": "2024-08-21T09:05:11-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Patrica Dominguez",
      "phoneNumber": "+234 (866) 547-2859",
      "emailAddress": "patricadominguez@speedbolt.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "patricadominguez@speedbolt.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Geekology Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HillaryConley",
      "twitter": "https://twitter.com/WhiteShelton",
      "linkedin": "https://linkedin.com/in/RosalindMcneil"
    },
    "guarantor": {
      "fullName": "Elinor Rogers",
      "relationship": "Friend",
      "phoneNumber": "+234 (962) 421-2671",
      "email": "elinorrogers@geekology.com"
    }
  },
  {
    "id": "6708e88396ca9a0456d8d769",
    "organization": "Megall",
    "userName": "WeaverFlowers",
    "email": "weaverflowers@megall.com",
    "phoneNumber": "+234 (951) 556-3683",
    "date": "2023-09-01T03:43:46-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Dawson Osborn",
      "phoneNumber": "+234 (947) 507-2776",
      "emailAddress": "dawsonosborn@megall.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "dawsonosborn@megall.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Protodyne Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ChristiYang",
      "twitter": "https://twitter.com/PateCasey",
      "linkedin": "https://linkedin.com/in/HoganMays"
    },
    "guarantor": {
      "fullName": "Burch Sanford",
      "relationship": "Colleague",
      "phoneNumber": "+234 (951) 574-3951",
      "email": "burchsanford@protodyne.com"
    }
  },
  {
    "id": "6708e883237afaf32d047385",
    "organization": "Entality",
    "userName": "JacquelineBlack",
    "email": "jacquelineblack@entality.com",
    "phoneNumber": "+234 (889) 499-3318",
    "date": "2023-05-21T07:39:53-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Vivian Pugh",
      "phoneNumber": "+234 (849) 494-3777",
      "emailAddress": "vivianpugh@entality.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "vivianpugh@entality.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Orbin Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/NatashaHorne",
      "twitter": "https://twitter.com/HurleyBurke",
      "linkedin": "https://linkedin.com/in/GarrettDelaney"
    },
    "guarantor": {
      "fullName": "Tessa Jacobs",
      "relationship": "Family",
      "phoneNumber": "+234 (935) 420-3948",
      "email": "tessajacobs@orbin.com"
    }
  },
  {
    "id": "6708e8833d09519e8ff750c9",
    "organization": "Applideck",
    "userName": "LizaCardenas",
    "email": "lizacardenas@applideck.com",
    "phoneNumber": "+234 (936) 501-3550",
    "date": "2023-10-20T06:17:05-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Clara York",
      "phoneNumber": "+234 (993) 538-3286",
      "emailAddress": "clarayork@applideck.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "clarayork@applideck.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Parcoe Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/JanEngland",
      "twitter": "https://twitter.com/GriffithRobles",
      "linkedin": "https://linkedin.com/in/MaddoxPark"
    },
    "guarantor": {
      "fullName": "Milagros Walls",
      "relationship": "Family",
      "phoneNumber": "+234 (809) 569-3962",
      "email": "milagroswalls@parcoe.com"
    }
  },
  {
    "id": "6708e8837d148ad33f2062a1",
    "organization": "Spherix",
    "userName": "LeilaErickson",
    "email": "leilaerickson@spherix.com",
    "phoneNumber": "+234 (986) 548-3730",
    "date": "2022-12-11T07:09:52-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Adeline Chavez",
      "phoneNumber": "+234 (952) 510-2190",
      "emailAddress": "adelinechavez@spherix.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "adelinechavez@spherix.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Kengen Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/OdonnellGriffin",
      "twitter": "https://twitter.com/CarrollFinley",
      "linkedin": "https://linkedin.com/in/JonesPatterson"
    },
    "guarantor": {
      "fullName": "Alana Conway",
      "relationship": "Colleague",
      "phoneNumber": "+234 (970) 406-2580",
      "email": "alanaconway@kengen.com"
    }
  },
  {
    "id": "6708e8830e24291608e3c67b",
    "organization": "Orboid",
    "userName": "MerrillWashington",
    "email": "merrillwashington@orboid.com",
    "phoneNumber": "+234 (933) 446-3875",
    "date": "2020-03-29T03:46:23-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Bullock Jackson",
      "phoneNumber": "+234 (820) 574-3091",
      "emailAddress": "bullockjackson@orboid.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "bullockjackson@orboid.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Prowaste Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MarciMason",
      "twitter": "https://twitter.com/MasseyFord",
      "linkedin": "https://linkedin.com/in/DeanneOneil"
    },
    "guarantor": {
      "fullName": "Loraine Swanson",
      "relationship": "Friend",
      "phoneNumber": "+234 (977) 428-3307",
      "email": "loraineswanson@prowaste.com"
    }
  },
  {
    "id": "6708e883b26c73f206391a8e",
    "organization": "Zilladyne",
    "userName": "DonaldsonEllis",
    "email": "donaldsonellis@zilladyne.com",
    "phoneNumber": "+234 (857) 413-3972",
    "date": "2021-05-18T11:14:32-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Dickson Crawford",
      "phoneNumber": "+234 (985) 566-3401",
      "emailAddress": "dicksoncrawford@zilladyne.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "dicksoncrawford@zilladyne.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Eclipto Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KayMadden",
      "twitter": "https://twitter.com/LethaMullen",
      "linkedin": "https://linkedin.com/in/MelisaNunez"
    },
    "guarantor": {
      "fullName": "Molly Roberts",
      "relationship": "Friend",
      "phoneNumber": "+234 (925) 575-3769",
      "email": "mollyroberts@eclipto.com"
    }
  },
  {
    "id": "6708e88353db6ec9d9ad374d",
    "organization": "Pyramia",
    "userName": "ClementsOchoa",
    "email": "clementsochoa@pyramia.com",
    "phoneNumber": "+234 (813) 430-2051",
    "date": "2023-07-27T02:51:34-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Doris Rose",
      "phoneNumber": "+234 (918) 425-3577",
      "emailAddress": "dorisrose@pyramia.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "dorisrose@pyramia.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Bluegrain Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JeanetteChambers",
      "twitter": "https://twitter.com/CopelandHerman",
      "linkedin": "https://linkedin.com/in/DaisyCurtis"
    },
    "guarantor": {
      "fullName": "Mason Morris",
      "relationship": "Other",
      "phoneNumber": "+234 (881) 586-3778",
      "email": "masonmorris@bluegrain.com"
    }
  },
  {
    "id": "6708e883a9d883e34abaa205",
    "organization": "Strezzo",
    "userName": "MolinaWaters",
    "email": "molinawaters@strezzo.com",
    "phoneNumber": "+234 (822) 415-2530",
    "date": "2021-07-21T07:52:56-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Moreno Hardy",
      "phoneNumber": "+234 (966) 471-3774",
      "emailAddress": "morenohardy@strezzo.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "morenohardy@strezzo.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Insurety Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/HoweWhitehead",
      "twitter": "https://twitter.com/StefanieHolmes",
      "linkedin": "https://linkedin.com/in/RoseannLong"
    },
    "guarantor": {
      "fullName": "Beatrice Blevins",
      "relationship": "Colleague",
      "phoneNumber": "+234 (810) 527-3334",
      "email": "beatriceblevins@insurety.com"
    }
  },
  {
    "id": "6708e8839692179318bb2652",
    "organization": "Exerta",
    "userName": "UrsulaChaney",
    "email": "ursulachaney@exerta.com",
    "phoneNumber": "+234 (957) 503-3539",
    "date": "2021-02-23T05:30:48-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Walker Hickman",
      "phoneNumber": "+234 (921) 422-3060",
      "emailAddress": "walkerhickman@exerta.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "walkerhickman@exerta.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Rockabye Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ChavezCarpenter",
      "twitter": "https://twitter.com/DyerMathis",
      "linkedin": "https://linkedin.com/in/CharlotteMeyer"
    },
    "guarantor": {
      "fullName": "Whitney Macias",
      "relationship": "Friend",
      "phoneNumber": "+234 (930) 471-3395",
      "email": "whitneymacias@rockabye.com"
    }
  },
  {
    "id": "6708e883ac40bbff03a0b8f1",
    "organization": "Velity",
    "userName": "CampbellNichols",
    "email": "campbellnichols@velity.com",
    "phoneNumber": "+234 (947) 545-2882",
    "date": "2022-11-24T04:08:31-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Hanson Kirkland",
      "phoneNumber": "+234 (834) 557-2189",
      "emailAddress": "hansonkirkland@velity.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "hansonkirkland@velity.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Xinware Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FrancisCameron",
      "twitter": "https://twitter.com/PearlieBradley",
      "linkedin": "https://linkedin.com/in/LevineWright"
    },
    "guarantor": {
      "fullName": "Muriel Maynard",
      "relationship": "Family",
      "phoneNumber": "+234 (861) 416-3057",
      "email": "murielmaynard@xinware.com"
    }
  },
  {
    "id": "6708e8839adee34d0a08782a",
    "organization": "Bytrex",
    "userName": "BrandiHarvey",
    "email": "brandiharvey@bytrex.com",
    "phoneNumber": "+234 (826) 595-3752",
    "date": "2020-04-06T03:21:59-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Mcguire Alford",
      "phoneNumber": "+234 (977) 553-3093",
      "emailAddress": "mcguirealford@bytrex.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "mcguirealford@bytrex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Asimiline Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AbbottMerrill",
      "twitter": "https://twitter.com/CarlsonChang",
      "linkedin": "https://linkedin.com/in/AlejandraMarsh"
    },
    "guarantor": {
      "fullName": "Meghan Cole",
      "relationship": "Other",
      "phoneNumber": "+234 (953) 463-3173",
      "email": "meghancole@asimiline.com"
    }
  },
  {
    "id": "6708e883f9aca7e475643118",
    "organization": "Sentia",
    "userName": "GloverValencia",
    "email": "glovervalencia@sentia.com",
    "phoneNumber": "+234 (981) 539-2161",
    "date": "2022-07-26T07:24:24-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Tabatha Owen",
      "phoneNumber": "+234 (861) 456-3040",
      "emailAddress": "tabathaowen@sentia.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "tabathaowen@sentia.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Nspire Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WeeksCrane",
      "twitter": "https://twitter.com/WallerWiley",
      "linkedin": "https://linkedin.com/in/AlexandriaDelgado"
    },
    "guarantor": {
      "fullName": "Randolph Chandler",
      "relationship": "Other",
      "phoneNumber": "+234 (897) 413-3364",
      "email": "randolphchandler@nspire.com"
    }
  },
  {
    "id": "6708e883b946b7507cec4223",
    "organization": "Xleen",
    "userName": "BoydBurt",
    "email": "boydburt@xleen.com",
    "phoneNumber": "+234 (897) 513-3727",
    "date": "2023-03-29T12:26:34-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Lorena Smith",
      "phoneNumber": "+234 (945) 511-2634",
      "emailAddress": "lorenasmith@xleen.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "lorenasmith@xleen.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Quility Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/CamachoBlackwell",
      "twitter": "https://twitter.com/TraciRocha",
      "linkedin": "https://linkedin.com/in/ShafferGuy"
    },
    "guarantor": {
      "fullName": "Workman Bray",
      "relationship": "Friend",
      "phoneNumber": "+234 (913) 429-3223",
      "email": "workmanbray@quility.com"
    }
  },
  {
    "id": "6708e88337ec5b0c8f10a781",
    "organization": "Zytrek",
    "userName": "FisherStein",
    "email": "fisherstein@zytrek.com",
    "phoneNumber": "+234 (972) 464-2388",
    "date": "2023-03-20T12:32:46-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Angelita Byers",
      "phoneNumber": "+234 (912) 548-2880",
      "emailAddress": "angelitabyers@zytrek.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "angelitabyers@zytrek.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Genekom Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/YeseniaTerry",
      "twitter": "https://twitter.com/SpencerSullivan",
      "linkedin": "https://linkedin.com/in/BowmanFlores"
    },
    "guarantor": {
      "fullName": "Kelly Klein",
      "relationship": "Friend",
      "phoneNumber": "+234 (895) 583-2365",
      "email": "kellyklein@genekom.com"
    }
  },
  {
    "id": "6708e88366e1af2ce82ecb1f",
    "organization": "Cincyr",
    "userName": "MarinaTyson",
    "email": "marinatyson@cincyr.com",
    "phoneNumber": "+234 (985) 562-2692",
    "date": "2020-07-07T09:20:01-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Marie Mclaughlin",
      "phoneNumber": "+234 (865) 580-2943",
      "emailAddress": "mariemclaughlin@cincyr.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "mariemclaughlin@cincyr.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Ceprene Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LatishaSharp",
      "twitter": "https://twitter.com/LetaBaxter",
      "linkedin": "https://linkedin.com/in/SextonShannon"
    },
    "guarantor": {
      "fullName": "Clarissa Holcomb",
      "relationship": "Other",
      "phoneNumber": "+234 (927) 501-2434",
      "email": "clarissaholcomb@ceprene.com"
    }
  },
  {
    "id": "6708e8839513a5ffce9afb98",
    "organization": "Rodeology",
    "userName": "MeredithFowler",
    "email": "meredithfowler@rodeology.com",
    "phoneNumber": "+234 (998) 489-3813",
    "date": "2022-06-17T12:51:38-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Hughes Huber",
      "phoneNumber": "+234 (850) 554-2400",
      "emailAddress": "hugheshuber@rodeology.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "hugheshuber@rodeology.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Signity Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ThelmaMcfarland",
      "twitter": "https://twitter.com/DorthyLang",
      "linkedin": "https://linkedin.com/in/BryantDaniels"
    },
    "guarantor": {
      "fullName": "Fields Vance",
      "relationship": "Friend",
      "phoneNumber": "+234 (874) 403-2099",
      "email": "fieldsvance@signity.com"
    }
  },
  {
    "id": "6708e883cde6468ed19251ce",
    "organization": "Nipaz",
    "userName": "CarpenterGood",
    "email": "carpentergood@nipaz.com",
    "phoneNumber": "+234 (961) 459-3777",
    "date": "2023-01-09T04:55:00-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Georgina Lindsey",
      "phoneNumber": "+234 (948) 401-3405",
      "emailAddress": "georginalindsey@nipaz.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "georginalindsey@nipaz.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Golistic Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AguilarWinters",
      "twitter": "https://twitter.com/CantrellWeber",
      "linkedin": "https://linkedin.com/in/WatersBall"
    },
    "guarantor": {
      "fullName": "Rosie Burnett",
      "relationship": "Family",
      "phoneNumber": "+234 (963) 424-3134",
      "email": "rosieburnett@golistic.com"
    }
  },
  {
    "id": "6708e8832c36241851354ab4",
    "organization": "Zaj",
    "userName": "JewellDavis",
    "email": "jewelldavis@zaj.com",
    "phoneNumber": "+234 (972) 434-2084",
    "date": "2021-04-07T09:44:40-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Estella Campbell",
      "phoneNumber": "+234 (993) 562-2225",
      "emailAddress": "estellacampbell@zaj.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "estellacampbell@zaj.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Comtract Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/IrwinBurgess",
      "twitter": "https://twitter.com/AmparoFisher",
      "linkedin": "https://linkedin.com/in/JudithPittman"
    },
    "guarantor": {
      "fullName": "Peterson Stewart",
      "relationship": "Family",
      "phoneNumber": "+234 (942) 569-3418",
      "email": "petersonstewart@comtract.com"
    }
  },
  {
    "id": "6708e883b86f2a455e3fd84d",
    "organization": "Mantrix",
    "userName": "RoblesForbes",
    "email": "roblesforbes@mantrix.com",
    "phoneNumber": "+234 (988) 586-2615",
    "date": "2023-11-06T01:16:06-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Irma Benton",
      "phoneNumber": "+234 (872) 576-3833",
      "emailAddress": "irmabenton@mantrix.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "irmabenton@mantrix.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Ginkogene Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PatrickChan",
      "twitter": "https://twitter.com/MirandaBonner",
      "linkedin": "https://linkedin.com/in/AndreaMitchell"
    },
    "guarantor": {
      "fullName": "Keisha Carr",
      "relationship": "Friend",
      "phoneNumber": "+234 (895) 581-3622",
      "email": "keishacarr@ginkogene.com"
    }
  },
  {
    "id": "6708e883feddc3afb53f499e",
    "organization": "Corepan",
    "userName": "PayneVelasquez",
    "email": "paynevelasquez@corepan.com",
    "phoneNumber": "+234 (895) 565-3772",
    "date": "2021-03-28T04:22:16-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Celeste Spears",
      "phoneNumber": "+234 (968) 472-2536",
      "emailAddress": "celestespears@corepan.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "celestespears@corepan.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Cipromox Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MarionReeves",
      "twitter": "https://twitter.com/BlackwellAcevedo",
      "linkedin": "https://linkedin.com/in/LuisaLewis"
    },
    "guarantor": {
      "fullName": "Ernestine Jordan",
      "relationship": "Family",
      "phoneNumber": "+234 (808) 409-3411",
      "email": "ernestinejordan@cipromox.com"
    }
  },
  {
    "id": "6708e883114a5c0316d68f4b",
    "organization": "Rocklogic",
    "userName": "BarrPage",
    "email": "barrpage@rocklogic.com",
    "phoneNumber": "+234 (897) 410-2505",
    "date": "2024-03-19T08:29:44-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Nettie Gentry",
      "phoneNumber": "+234 (960) 406-2103",
      "emailAddress": "nettiegentry@rocklogic.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "nettiegentry@rocklogic.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Metroz Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/OlsenNoel",
      "twitter": "https://twitter.com/BobbiCharles",
      "linkedin": "https://linkedin.com/in/GuthrieEllison"
    },
    "guarantor": {
      "fullName": "Gray Maldonado",
      "relationship": "Friend",
      "phoneNumber": "+234 (804) 489-2489",
      "email": "graymaldonado@metroz.com"
    }
  },
  {
    "id": "6708e88399c3b7f4b3b5600b",
    "organization": "Vicon",
    "userName": "ChristensenHall",
    "email": "christensenhall@vicon.com",
    "phoneNumber": "+234 (878) 466-3755",
    "date": "2022-04-12T01:46:12-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "James Lynn",
      "phoneNumber": "+234 (864) 592-3102",
      "emailAddress": "jameslynn@vicon.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "jameslynn@vicon.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Cormoran Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MerrittMcpherson",
      "twitter": "https://twitter.com/MosleyPetty",
      "linkedin": "https://linkedin.com/in/SandovalRice"
    },
    "guarantor": {
      "fullName": "Gina Tucker",
      "relationship": "Colleague",
      "phoneNumber": "+234 (906) 406-2317",
      "email": "ginatucker@cormoran.com"
    }
  },
  {
    "id": "6708e883658cabcd59d1497c",
    "organization": "Isoternia",
    "userName": "DeanNguyen",
    "email": "deannguyen@isoternia.com",
    "phoneNumber": "+234 (823) 491-2778",
    "date": "2022-04-22T12:00:05-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Susie Quinn",
      "phoneNumber": "+234 (965) 487-3450",
      "emailAddress": "susiequinn@isoternia.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "susiequinn@isoternia.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Xyqag Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/OconnorChen",
      "twitter": "https://twitter.com/GenevieveShaffer",
      "linkedin": "https://linkedin.com/in/GarrisonFoster"
    },
    "guarantor": {
      "fullName": "John Olson",
      "relationship": "Friend",
      "phoneNumber": "+234 (879) 588-3241",
      "email": "johnolson@xyqag.com"
    }
  },
  {
    "id": "6708e883f69d5e255c1a6e65",
    "organization": "Cognicode",
    "userName": "PaulaMcdowell",
    "email": "paulamcdowell@cognicode.com",
    "phoneNumber": "+234 (885) 487-2244",
    "date": "2024-04-24T02:22:59-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Rebekah Mcgowan",
      "phoneNumber": "+234 (862) 495-2302",
      "emailAddress": "rebekahmcgowan@cognicode.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "rebekahmcgowan@cognicode.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Gology Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EsterCote",
      "twitter": "https://twitter.com/YvetteCarroll",
      "linkedin": "https://linkedin.com/in/RyanPratt"
    },
    "guarantor": {
      "fullName": "Blanchard Haney",
      "relationship": "Other",
      "phoneNumber": "+234 (865) 445-3832",
      "email": "blanchardhaney@gology.com"
    }
  },
  {
    "id": "6708e883aaed0996ec576145",
    "organization": "Accidency",
    "userName": "BranchArmstrong",
    "email": "brancharmstrong@accidency.com",
    "phoneNumber": "+234 (879) 464-2113",
    "date": "2024-01-07T05:26:00-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Cervantes Watts",
      "phoneNumber": "+234 (971) 510-2324",
      "emailAddress": "cervanteswatts@accidency.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "cervanteswatts@accidency.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Netplode Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/PeckOrtega",
      "twitter": "https://twitter.com/CurtisRoman",
      "linkedin": "https://linkedin.com/in/ParrishOlsen"
    },
    "guarantor": {
      "fullName": "Bridgette Pitts",
      "relationship": "Other",
      "phoneNumber": "+234 (805) 554-3958",
      "email": "bridgettepitts@netplode.com"
    }
  },
  {
    "id": "6708e883a2126b7f7a7498e9",
    "organization": "Renovize",
    "userName": "AlexisChurch",
    "email": "alexischurch@renovize.com",
    "phoneNumber": "+234 (840) 460-3834",
    "date": "2020-12-20T11:40:04-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Aline Browning",
      "phoneNumber": "+234 (904) 451-3879",
      "emailAddress": "alinebrowning@renovize.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "alinebrowning@renovize.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Stucco Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AlvaradoGarcia",
      "twitter": "https://twitter.com/GuyBuckner",
      "linkedin": "https://linkedin.com/in/ElbaGould"
    },
    "guarantor": {
      "fullName": "Craig Sawyer",
      "relationship": "Colleague",
      "phoneNumber": "+234 (879) 523-3193",
      "email": "craigsawyer@stucco.com"
    }
  },
  {
    "id": "6708e8837e38ea139147cfc5",
    "organization": "Zorromop",
    "userName": "JohnstonSears",
    "email": "johnstonsears@zorromop.com",
    "phoneNumber": "+234 (809) 521-3479",
    "date": "2023-02-19T09:39:18-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Rojas William",
      "phoneNumber": "+234 (827) 561-2735",
      "emailAddress": "rojaswilliam@zorromop.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "rojaswilliam@zorromop.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Aquacine Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CelinaFrench",
      "twitter": "https://twitter.com/GarnerMccarthy",
      "linkedin": "https://linkedin.com/in/PattiKelly"
    },
    "guarantor": {
      "fullName": "Etta Oneal",
      "relationship": "Family",
      "phoneNumber": "+234 (948) 597-3203",
      "email": "ettaoneal@aquacine.com"
    }
  },
  {
    "id": "6708e883f5a641d95646db08",
    "organization": "Trasola",
    "userName": "CainMcleod",
    "email": "cainmcleod@trasola.com",
    "phoneNumber": "+234 (850) 583-3254",
    "date": "2021-04-25T02:16:30-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "May Sheppard",
      "phoneNumber": "+234 (915) 415-3960",
      "emailAddress": "maysheppard@trasola.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "maysheppard@trasola.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Comstruct Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HoltTodd",
      "twitter": "https://twitter.com/ButlerPowers",
      "linkedin": "https://linkedin.com/in/ElnoraFranklin"
    },
    "guarantor": {
      "fullName": "Vance Tanner",
      "relationship": "Colleague",
      "phoneNumber": "+234 (910) 534-2927",
      "email": "vancetanner@comstruct.com"
    }
  },
  {
    "id": "6708e883419bacc5835b7739",
    "organization": "Cytrak",
    "userName": "BoyerWilliams",
    "email": "boyerwilliams@cytrak.com",
    "phoneNumber": "+234 (910) 540-3431",
    "date": "2020-11-06T12:46:02-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Megan Gallagher",
      "phoneNumber": "+234 (815) 472-2617",
      "emailAddress": "megangallagher@cytrak.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "megangallagher@cytrak.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Exiand Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/EileenPetersen",
      "twitter": "https://twitter.com/DillardPate",
      "linkedin": "https://linkedin.com/in/OneillValenzuela"
    },
    "guarantor": {
      "fullName": "Moore Rivas",
      "relationship": "Family",
      "phoneNumber": "+234 (976) 482-3727",
      "email": "moorerivas@exiand.com"
    }
  },
  {
    "id": "6708e8833f2d77a7b78e2c32",
    "organization": "Makingway",
    "userName": "MinervaBrown",
    "email": "minervabrown@makingway.com",
    "phoneNumber": "+234 (982) 567-3918",
    "date": "2022-09-15T05:43:49-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Diana Cooley",
      "phoneNumber": "+234 (813) 492-2194",
      "emailAddress": "dianacooley@makingway.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "dianacooley@makingway.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Endicil Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CarolineThornton",
      "twitter": "https://twitter.com/CoteHutchinson",
      "linkedin": "https://linkedin.com/in/AileenPotter"
    },
    "guarantor": {
      "fullName": "Agnes Clark",
      "relationship": "Colleague",
      "phoneNumber": "+234 (831) 528-2961",
      "email": "agnesclark@endicil.com"
    }
  },
  {
    "id": "6708e883ebaf16e39203cb0b",
    "organization": "Sultraxin",
    "userName": "DonnaDavid",
    "email": "donnadavid@sultraxin.com",
    "phoneNumber": "+234 (990) 563-3779",
    "date": "2021-01-22T04:46:49-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Ana Peters",
      "phoneNumber": "+234 (839) 418-2318",
      "emailAddress": "anapeters@sultraxin.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "anapeters@sultraxin.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Buzzness Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AbigailLeonard",
      "twitter": "https://twitter.com/MilesCox",
      "linkedin": "https://linkedin.com/in/TeriGoodman"
    },
    "guarantor": {
      "fullName": "Madden Estes",
      "relationship": "Other",
      "phoneNumber": "+234 (937) 566-3974",
      "email": "maddenestes@buzzness.com"
    }
  },
  {
    "id": "6708e883643dc537a15836ff",
    "organization": "Earthpure",
    "userName": "CarolinaWiggins",
    "email": "carolinawiggins@earthpure.com",
    "phoneNumber": "+234 (878) 524-2175",
    "date": "2020-06-02T02:26:28-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Berg Simon",
      "phoneNumber": "+234 (843) 561-2749",
      "emailAddress": "bergsimon@earthpure.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "bergsimon@earthpure.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Vetron Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CharlesCross",
      "twitter": "https://twitter.com/CookeRosario",
      "linkedin": "https://linkedin.com/in/WebsterColon"
    },
    "guarantor": {
      "fullName": "Bell Castaneda",
      "relationship": "Friend",
      "phoneNumber": "+234 (947) 403-2138",
      "email": "bellcastaneda@vetron.com"
    }
  },
  {
    "id": "6708e883625750ebb11329ef",
    "organization": "Malathion",
    "userName": "LucasCook",
    "email": "lucascook@malathion.com",
    "phoneNumber": "+234 (975) 573-2981",
    "date": "2023-05-26T12:58:28-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Camille Raymond",
      "phoneNumber": "+234 (979) 559-2232",
      "emailAddress": "camilleraymond@malathion.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "camilleraymond@malathion.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Valpreal Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KatieVincent",
      "twitter": "https://twitter.com/EuniceDuke",
      "linkedin": "https://linkedin.com/in/CareySteele"
    },
    "guarantor": {
      "fullName": "Hallie Conrad",
      "relationship": "Other",
      "phoneNumber": "+234 (962) 600-3989",
      "email": "hallieconrad@valpreal.com"
    }
  },
  {
    "id": "6708e883ebd1347e5bc9f081",
    "organization": "Anixang",
    "userName": "MarcieVelazquez",
    "email": "marcievelazquez@anixang.com",
    "phoneNumber": "+234 (967) 426-3629",
    "date": "2020-10-13T12:32:46-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Sally Potts",
      "phoneNumber": "+234 (924) 526-3443",
      "emailAddress": "sallypotts@anixang.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "sallypotts@anixang.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Aquafire Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BlankenshipReilly",
      "twitter": "https://twitter.com/TownsendTalley",
      "linkedin": "https://linkedin.com/in/VirginiaPickett"
    },
    "guarantor": {
      "fullName": "Parker Sweet",
      "relationship": "Friend",
      "phoneNumber": "+234 (864) 505-2068",
      "email": "parkersweet@aquafire.com"
    }
  },
  {
    "id": "6708e883b9dcd754e7ceed34",
    "organization": "Centree",
    "userName": "NadineWarren",
    "email": "nadinewarren@centree.com",
    "phoneNumber": "+234 (879) 521-3818",
    "date": "2023-07-18T06:29:40-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Beverly Nielsen",
      "phoneNumber": "+234 (962) 482-3381",
      "emailAddress": "beverlynielsen@centree.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "beverlynielsen@centree.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Geeketron Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RobertBowen",
      "twitter": "https://twitter.com/RushWaller",
      "linkedin": "https://linkedin.com/in/ShanaHarmon"
    },
    "guarantor": {
      "fullName": "Trisha Harrell",
      "relationship": "Colleague",
      "phoneNumber": "+234 (801) 522-3751",
      "email": "trishaharrell@geeketron.com"
    }
  },
  {
    "id": "6708e883c0743c0547ce69f0",
    "organization": "Sybixtex",
    "userName": "WilmaRandall",
    "email": "wilmarandall@sybixtex.com",
    "phoneNumber": "+234 (813) 461-3172",
    "date": "2024-01-19T05:26:08-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Wendy Daniel",
      "phoneNumber": "+234 (809) 431-3352",
      "emailAddress": "wendydaniel@sybixtex.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "wendydaniel@sybixtex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Lunchpod Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/FreemanShaw",
      "twitter": "https://twitter.com/AvaPearson",
      "linkedin": "https://linkedin.com/in/TaraMcdaniel"
    },
    "guarantor": {
      "fullName": "Christine Mills",
      "relationship": "Other",
      "phoneNumber": "+234 (814) 427-2934",
      "email": "christinemills@lunchpod.com"
    }
  },
  {
    "id": "6708e883703d79e62d0e4264",
    "organization": "Geeky",
    "userName": "ShariLawrence",
    "email": "sharilawrence@geeky.com",
    "phoneNumber": "+234 (881) 528-2653",
    "date": "2021-01-11T02:28:16-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Bernadette Fox",
      "phoneNumber": "+234 (929) 456-3562",
      "emailAddress": "bernadettefox@geeky.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "bernadettefox@geeky.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Techmania Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/AltheaWatkins",
      "twitter": "https://twitter.com/SloanConner",
      "linkedin": "https://linkedin.com/in/RuthBrady"
    },
    "guarantor": {
      "fullName": "Angelina Becker",
      "relationship": "Other",
      "phoneNumber": "+234 (842) 562-2377",
      "email": "angelinabecker@techmania.com"
    }
  },
  {
    "id": "6708e8837412b224548e8a21",
    "organization": "Exoswitch",
    "userName": "TanyaWilliamson",
    "email": "tanyawilliamson@exoswitch.com",
    "phoneNumber": "+234 (853) 449-2524",
    "date": "2020-08-15T03:56:36-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Charmaine Joseph",
      "phoneNumber": "+234 (894) 405-2796",
      "emailAddress": "charmainejoseph@exoswitch.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "charmainejoseph@exoswitch.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Techade Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DollieHopper",
      "twitter": "https://twitter.com/EnglandHarrison",
      "linkedin": "https://linkedin.com/in/NewmanHendrix"
    },
    "guarantor": {
      "fullName": "Josie Stevens",
      "relationship": "Colleague",
      "phoneNumber": "+234 (949) 506-3055",
      "email": "josiestevens@techade.com"
    }
  },
  {
    "id": "6708e88369bf048fa066ef3c",
    "organization": "Ramjob",
    "userName": "BarnettKirby",
    "email": "barnettkirby@ramjob.com",
    "phoneNumber": "+234 (955) 425-3161",
    "date": "2022-08-09T12:36:00-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Stevenson Holt",
      "phoneNumber": "+234 (892) 423-2653",
      "emailAddress": "stevensonholt@ramjob.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "stevensonholt@ramjob.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Paragonia Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MeyersGross",
      "twitter": "https://twitter.com/ObrienRodriguez",
      "linkedin": "https://linkedin.com/in/BaldwinPreston"
    },
    "guarantor": {
      "fullName": "Becker Crosby",
      "relationship": "Family",
      "phoneNumber": "+234 (987) 447-2886",
      "email": "beckercrosby@paragonia.com"
    }
  },
  {
    "id": "6708e88383695113332ffb35",
    "organization": "Memora",
    "userName": "ClaytonVelez",
    "email": "claytonvelez@memora.com",
    "phoneNumber": "+234 (871) 567-2988",
    "date": "2021-03-21T02:24:31-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Nguyen Walker",
      "phoneNumber": "+234 (929) 440-2825",
      "emailAddress": "nguyenwalker@memora.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "nguyenwalker@memora.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Elpro Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ReynoldsLucas",
      "twitter": "https://twitter.com/PearlGaines",
      "linkedin": "https://linkedin.com/in/LambertAcosta"
    },
    "guarantor": {
      "fullName": "House Patel",
      "relationship": "Colleague",
      "phoneNumber": "+234 (939) 419-2409",
      "email": "housepatel@elpro.com"
    }
  },
  {
    "id": "6708e883322271271d18eaaa",
    "organization": "Dyno",
    "userName": "HolcombCantu",
    "email": "holcombcantu@dyno.com",
    "phoneNumber": "+234 (822) 559-3104",
    "date": "2023-06-07T09:37:04-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Haney Hawkins",
      "phoneNumber": "+234 (909) 488-3637",
      "emailAddress": "haneyhawkins@dyno.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "haneyhawkins@dyno.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Kongene Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RitaAyers",
      "twitter": "https://twitter.com/StarkWitt",
      "linkedin": "https://linkedin.com/in/KaseyRodgers"
    },
    "guarantor": {
      "fullName": "Delacruz Herrera",
      "relationship": "Colleague",
      "phoneNumber": "+234 (929) 467-3619",
      "email": "delacruzherrera@kongene.com"
    }
  },
  {
    "id": "6708e88393c54e3058c9ad40",
    "organization": "Accufarm",
    "userName": "JoleneRiggs",
    "email": "joleneriggs@accufarm.com",
    "phoneNumber": "+234 (952) 417-2403",
    "date": "2024-10-10T08:19:39-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Wendi Owens",
      "phoneNumber": "+234 (910) 496-2306",
      "emailAddress": "wendiowens@accufarm.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "wendiowens@accufarm.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Zosis Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/RosalieBond",
      "twitter": "https://twitter.com/SophieFernandez",
      "linkedin": "https://linkedin.com/in/MavisCase"
    },
    "guarantor": {
      "fullName": "Richard Lawson",
      "relationship": "Family",
      "phoneNumber": "+234 (971) 600-3863",
      "email": "richardlawson@zosis.com"
    }
  },
  {
    "id": "6708e883b2e3c17ded1de4c1",
    "organization": "Jimbies",
    "userName": "LornaRush",
    "email": "lornarush@jimbies.com",
    "phoneNumber": "+234 (947) 461-3787",
    "date": "2021-04-25T12:36:23-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Shannon Skinner",
      "phoneNumber": "+234 (849) 490-3024",
      "emailAddress": "shannonskinner@jimbies.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "shannonskinner@jimbies.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Isotronic Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/GoodBullock",
      "twitter": "https://twitter.com/BarlowStevenson",
      "linkedin": "https://linkedin.com/in/ColonNoble"
    },
    "guarantor": {
      "fullName": "Concetta Hobbs",
      "relationship": "Family",
      "phoneNumber": "+234 (833) 412-2877",
      "email": "concettahobbs@isotronic.com"
    }
  },
  {
    "id": "6708e8836fe5ba12974d7b37",
    "organization": "Webiotic",
    "userName": "LesaFranco",
    "email": "lesafranco@webiotic.com",
    "phoneNumber": "+234 (927) 488-2118",
    "date": "2022-07-12T06:17:15-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Lenore Wells",
      "phoneNumber": "+234 (926) 466-2204",
      "emailAddress": "lenorewells@webiotic.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "lenorewells@webiotic.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Digiprint Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DesireeYates",
      "twitter": "https://twitter.com/KayeGeorge",
      "linkedin": "https://linkedin.com/in/AddieOconnor"
    },
    "guarantor": {
      "fullName": "Potter Mejia",
      "relationship": "Other",
      "phoneNumber": "+234 (869) 422-3346",
      "email": "pottermejia@digiprint.com"
    }
  },
  {
    "id": "6708e883ec48c647a8305b3a",
    "organization": "Inventure",
    "userName": "GabrielaHead",
    "email": "gabrielahead@inventure.com",
    "phoneNumber": "+234 (877) 456-3558",
    "date": "2023-12-09T03:51:41-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Tabitha Norton",
      "phoneNumber": "+234 (911) 528-2694",
      "emailAddress": "tabithanorton@inventure.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "tabithanorton@inventure.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Scentric Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/YvonneLevy",
      "twitter": "https://twitter.com/AcevedoCaldwell",
      "linkedin": "https://linkedin.com/in/KrisGrimes"
    },
    "guarantor": {
      "fullName": "Bertie Calderon",
      "relationship": "Colleague",
      "phoneNumber": "+234 (867) 524-2948",
      "email": "bertiecalderon@scentric.com"
    }
  },
  {
    "id": "6708e8839fb81e979ec67f28",
    "organization": "Poochies",
    "userName": "LeannMercado",
    "email": "leannmercado@poochies.com",
    "phoneNumber": "+234 (809) 561-2453",
    "date": "2022-11-21T04:46:04-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Rivas Cervantes",
      "phoneNumber": "+234 (847) 514-2658",
      "emailAddress": "rivascervantes@poochies.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "rivascervantes@poochies.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Fossiel Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WinifredStanley",
      "twitter": "https://twitter.com/DeeHenderson",
      "linkedin": "https://linkedin.com/in/GlennTownsend"
    },
    "guarantor": {
      "fullName": "Annmarie Atkins",
      "relationship": "Colleague",
      "phoneNumber": "+234 (882) 420-3106",
      "email": "annmarieatkins@fossiel.com"
    }
  },
  {
    "id": "6708e883e2b7fcbf780db6b5",
    "organization": "Insource",
    "userName": "DebbieOsborne",
    "email": "debbieosborne@insource.com",
    "phoneNumber": "+234 (814) 568-3284",
    "date": "2021-08-19T10:05:17-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Glass Clarke",
      "phoneNumber": "+234 (971) 479-2527",
      "emailAddress": "glassclarke@insource.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "glassclarke@insource.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Poshome Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WilliamsonLane",
      "twitter": "https://twitter.com/LizzieBaird",
      "linkedin": "https://linkedin.com/in/ShawnaMorrow"
    },
    "guarantor": {
      "fullName": "Mullins Carey",
      "relationship": "Other",
      "phoneNumber": "+234 (981) 409-2659",
      "email": "mullinscarey@poshome.com"
    }
  },
  {
    "id": "6708e8833fed65cdc799f63b",
    "organization": "Isoplex",
    "userName": "JacobsonParks",
    "email": "jacobsonparks@isoplex.com",
    "phoneNumber": "+234 (829) 491-2153",
    "date": "2022-12-20T05:04:41-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Mclaughlin Hale",
      "phoneNumber": "+234 (974) 579-2802",
      "emailAddress": "mclaughlinhale@isoplex.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "mclaughlinhale@isoplex.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Endipin Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/ToniStrong",
      "twitter": "https://twitter.com/EdithHouse",
      "linkedin": "https://linkedin.com/in/MarleneDiaz"
    },
    "guarantor": {
      "fullName": "Floyd Kemp",
      "relationship": "Family",
      "phoneNumber": "+234 (879) 529-2706",
      "email": "floydkemp@endipin.com"
    }
  },
  {
    "id": "6708e88397ec2c4cd43f167a",
    "organization": "Fanfare",
    "userName": "JanaJarvis",
    "email": "janajarvis@fanfare.com",
    "phoneNumber": "+234 (924) 539-2427",
    "date": "2024-10-06T06:49:09-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Kendra Allison",
      "phoneNumber": "+234 (857) 534-3247",
      "emailAddress": "kendraallison@fanfare.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "kendraallison@fanfare.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Stelaecor Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FosterMartin",
      "twitter": "https://twitter.com/ChenMoore",
      "linkedin": "https://linkedin.com/in/LetitiaZimmerman"
    },
    "guarantor": {
      "fullName": "Kellie Kramer",
      "relationship": "Friend",
      "phoneNumber": "+234 (985) 422-2022",
      "email": "kelliekramer@stelaecor.com"
    }
  },
  {
    "id": "6708e883092da00e75457078",
    "organization": "Zytrax",
    "userName": "CathrynWeeks",
    "email": "cathrynweeks@zytrax.com",
    "phoneNumber": "+234 (974) 500-2854",
    "date": "2022-09-15T05:30:34-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Chelsea Frank",
      "phoneNumber": "+234 (850) 469-2135",
      "emailAddress": "chelseafrank@zytrax.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "chelseafrank@zytrax.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Bedder Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FlorenceBernard",
      "twitter": "https://twitter.com/HollieFerguson",
      "linkedin": "https://linkedin.com/in/SonjaBarry"
    },
    "guarantor": {
      "fullName": "Mcfarland Villarreal",
      "relationship": "Other",
      "phoneNumber": "+234 (832) 446-2945",
      "email": "mcfarlandvillarreal@bedder.com"
    }
  },
  {
    "id": "6708e8838a79616c7dbd2d66",
    "organization": "Firewax",
    "userName": "RoslynGuzman",
    "email": "roslynguzman@firewax.com",
    "phoneNumber": "+234 (946) 560-3495",
    "date": "2022-08-31T12:00:55-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Chaney Morse",
      "phoneNumber": "+234 (989) 504-2532",
      "emailAddress": "chaneymorse@firewax.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "chaneymorse@firewax.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Nimon Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LeannaHanson",
      "twitter": "https://twitter.com/CohenBowman",
      "linkedin": "https://linkedin.com/in/KnightCherry"
    },
    "guarantor": {
      "fullName": "Kristin Bass",
      "relationship": "Other",
      "phoneNumber": "+234 (832) 464-3689",
      "email": "kristinbass@nimon.com"
    }
  },
  {
    "id": "6708e883e89d5b3db2ae5bc9",
    "organization": "Ecstasia",
    "userName": "MillerMcbride",
    "email": "millermcbride@ecstasia.com",
    "phoneNumber": "+234 (879) 536-3759",
    "date": "2023-07-27T04:12:51-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Chris Soto",
      "phoneNumber": "+234 (897) 506-3805",
      "emailAddress": "chrissoto@ecstasia.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "chrissoto@ecstasia.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Exposa Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SheltonAustin",
      "twitter": "https://twitter.com/AimeeMckinney",
      "linkedin": "https://linkedin.com/in/HillLeach"
    },
    "guarantor": {
      "fullName": "Dina Wilkerson",
      "relationship": "Colleague",
      "phoneNumber": "+234 (875) 412-2717",
      "email": "dinawilkerson@exposa.com"
    }
  },
  {
    "id": "6708e883526daf9d84edb02a",
    "organization": "Ziore",
    "userName": "ElvaLuna",
    "email": "elvaluna@ziore.com",
    "phoneNumber": "+234 (916) 478-2688",
    "date": "2021-09-24T04:52:16-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Emma Aguilar",
      "phoneNumber": "+234 (819) 431-3294",
      "emailAddress": "emmaaguilar@ziore.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "emmaaguilar@ziore.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Callflex Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CorinneJennings",
      "twitter": "https://twitter.com/MaureenCarson",
      "linkedin": "https://linkedin.com/in/JordanDrake"
    },
    "guarantor": {
      "fullName": "Kayla Gibson",
      "relationship": "Other",
      "phoneNumber": "+234 (931) 442-3444",
      "email": "kaylagibson@callflex.com"
    }
  },
  {
    "id": "6708e883862c1bc6abbb9866",
    "organization": "Kiosk",
    "userName": "HewittSalas",
    "email": "hewittsalas@kiosk.com",
    "phoneNumber": "+234 (968) 501-2814",
    "date": "2023-03-21T09:07:01-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Pena Wolf",
      "phoneNumber": "+234 (978) 409-2674",
      "emailAddress": "penawolf@kiosk.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "penawolf@kiosk.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Noralex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/HoodDunn",
      "twitter": "https://twitter.com/MyrnaSaunders",
      "linkedin": "https://linkedin.com/in/OrtizBenson"
    },
    "guarantor": {
      "fullName": "Head Rojas",
      "relationship": "Family",
      "phoneNumber": "+234 (822) 464-2473",
      "email": "headrojas@noralex.com"
    }
  },
  {
    "id": "6708e883d60fd1cdb890c7fa",
    "organization": "Digial",
    "userName": "LatashaWilson",
    "email": "latashawilson@digial.com",
    "phoneNumber": "+234 (893) 473-2691",
    "date": "2021-12-27T10:48:37-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Lynda Fitzpatrick",
      "phoneNumber": "+234 (857) 519-3429",
      "emailAddress": "lyndafitzpatrick@digial.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "lyndafitzpatrick@digial.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Mobildata Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DonaBurns",
      "twitter": "https://twitter.com/VickyGreene",
      "linkedin": "https://linkedin.com/in/ConnieMiller"
    },
    "guarantor": {
      "fullName": "Cassie Robertson",
      "relationship": "Other",
      "phoneNumber": "+234 (865) 479-3957",
      "email": "cassierobertson@mobildata.com"
    }
  },
  {
    "id": "6708e883c11e405d067be15a",
    "organization": "Tetak",
    "userName": "SteinDurham",
    "email": "steindurham@tetak.com",
    "phoneNumber": "+234 (804) 422-2982",
    "date": "2021-03-29T05:50:50-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Juliana Mccray",
      "phoneNumber": "+234 (801) 458-2367",
      "emailAddress": "julianamccray@tetak.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "julianamccray@tetak.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Xth Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ScottKelley",
      "twitter": "https://twitter.com/FloresHernandez",
      "linkedin": "https://linkedin.com/in/StellaDavidson"
    },
    "guarantor": {
      "fullName": "Simpson Rivers",
      "relationship": "Other",
      "phoneNumber": "+234 (851) 541-2945",
      "email": "simpsonrivers@xth.com"
    }
  },
  {
    "id": "6708e883f558e387b63ff164",
    "organization": "Zytrex",
    "userName": "CoffeyBarnes",
    "email": "coffeybarnes@zytrex.com",
    "phoneNumber": "+234 (948) 494-3557",
    "date": "2024-08-26T02:46:31-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Francine Blankenship",
      "phoneNumber": "+234 (929) 509-2703",
      "emailAddress": "francineblankenship@zytrex.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "francineblankenship@zytrex.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Accruex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/TanishaTorres",
      "twitter": "https://twitter.com/ClayBerg",
      "linkedin": "https://linkedin.com/in/DiazAbbott"
    },
    "guarantor": {
      "fullName": "Amelia Nixon",
      "relationship": "Other",
      "phoneNumber": "+234 (930) 553-2504",
      "email": "amelianixon@accruex.com"
    }
  },
  {
    "id": "6708e883f72e929d553e5139",
    "organization": "Tasmania",
    "userName": "AishaBurks",
    "email": "aishaburks@tasmania.com",
    "phoneNumber": "+234 (805) 577-3611",
    "date": "2021-12-08T07:26:30-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Kristen Powell",
      "phoneNumber": "+234 (801) 517-2493",
      "emailAddress": "kristenpowell@tasmania.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "kristenpowell@tasmania.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Twiist Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LeanneWorkman",
      "twitter": "https://twitter.com/HeathGreer",
      "linkedin": "https://linkedin.com/in/LaraWeaver"
    },
    "guarantor": {
      "fullName": "Marian Contreras",
      "relationship": "Colleague",
      "phoneNumber": "+234 (892) 454-3029",
      "email": "mariancontreras@twiist.com"
    }
  },
  {
    "id": "6708e883a79d00e6714d4b30",
    "organization": "Evidends",
    "userName": "TravisTravis",
    "email": "travistravis@evidends.com",
    "phoneNumber": "+234 (850) 496-3328",
    "date": "2023-04-08T05:52:30-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Madelyn Walsh",
      "phoneNumber": "+234 (956) 427-2335",
      "emailAddress": "madelynwalsh@evidends.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "madelynwalsh@evidends.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Isostream Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MitziMcguire",
      "twitter": "https://twitter.com/YoungLevine",
      "linkedin": "https://linkedin.com/in/KaitlinWilkins"
    },
    "guarantor": {
      "fullName": "Deidre Meyers",
      "relationship": "Family",
      "phoneNumber": "+234 (855) 461-2432",
      "email": "deidremeyers@isostream.com"
    }
  },
  {
    "id": "6708e883d0e0faa43857a4c1",
    "organization": "Talkalot",
    "userName": "FriedaBoone",
    "email": "friedaboone@talkalot.com",
    "phoneNumber": "+234 (972) 474-2640",
    "date": "2022-07-16T12:31:16-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Benton Hurley",
      "phoneNumber": "+234 (813) 518-3421",
      "emailAddress": "bentonhurley@talkalot.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "bentonhurley@talkalot.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Ultrimax Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/FrenchDejesus",
      "twitter": "https://twitter.com/TrujilloAyala",
      "linkedin": "https://linkedin.com/in/LidiaRussell"
    },
    "guarantor": {
      "fullName": "Matilda Hopkins",
      "relationship": "Family",
      "phoneNumber": "+234 (929) 488-3859",
      "email": "matildahopkins@ultrimax.com"
    }
  },
  {
    "id": "6708e88312a6886fa84c7302",
    "organization": "Bezal",
    "userName": "ColetteHart",
    "email": "colettehart@bezal.com",
    "phoneNumber": "+234 (908) 573-3270",
    "date": "2021-04-15T08:00:46-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Ida Dunlap",
      "phoneNumber": "+234 (822) 484-2420",
      "emailAddress": "idadunlap@bezal.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "idadunlap@bezal.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Moreganic Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/RobbinsJoyner",
      "twitter": "https://twitter.com/HodgesMarquez",
      "linkedin": "https://linkedin.com/in/HensleyStone"
    },
    "guarantor": {
      "fullName": "Carmella Wyatt",
      "relationship": "Other",
      "phoneNumber": "+234 (847) 429-3190",
      "email": "carmellawyatt@moreganic.com"
    }
  },
  {
    "id": "6708e883819fce9d200b68aa",
    "organization": "Visualix",
    "userName": "EarlineCastillo",
    "email": "earlinecastillo@visualix.com",
    "phoneNumber": "+234 (933) 414-2875",
    "date": "2024-03-03T02:19:48-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Haley Gordon",
      "phoneNumber": "+234 (814) 465-3158",
      "emailAddress": "haleygordon@visualix.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "haleygordon@visualix.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Boilicon Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MoniqueHewitt",
      "twitter": "https://twitter.com/NikkiTate",
      "linkedin": "https://linkedin.com/in/CastroGutierrez"
    },
    "guarantor": {
      "fullName": "Sonya Nicholson",
      "relationship": "Friend",
      "phoneNumber": "+234 (974) 405-3228",
      "email": "sonyanicholson@boilicon.com"
    }
  },
  {
    "id": "6708e883648e3e42f050aa7c",
    "organization": "Lunchpad",
    "userName": "JewelHunter",
    "email": "jewelhunter@lunchpad.com",
    "phoneNumber": "+234 (961) 562-2747",
    "date": "2024-04-21T12:12:42-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Terrie Barton",
      "phoneNumber": "+234 (808) 524-3736",
      "emailAddress": "terriebarton@lunchpad.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "terriebarton@lunchpad.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Roughies Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EugeniaRoach",
      "twitter": "https://twitter.com/HullPierce",
      "linkedin": "https://linkedin.com/in/BriggsAnthony"
    },
    "guarantor": {
      "fullName": "Mendez Alston",
      "relationship": "Colleague",
      "phoneNumber": "+234 (872) 590-3117",
      "email": "mendezalston@roughies.com"
    }
  },
  {
    "id": "6708e883be544d1ab77a7dcc",
    "organization": "Idego",
    "userName": "GlennaTyler",
    "email": "glennatyler@idego.com",
    "phoneNumber": "+234 (850) 480-3347",
    "date": "2022-10-16T06:48:35-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Fischer Fuller",
      "phoneNumber": "+234 (851) 403-2423",
      "emailAddress": "fischerfuller@idego.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "fischerfuller@idego.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Barkarama Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/EvelynSexton",
      "twitter": "https://twitter.com/ShepherdHyde",
      "linkedin": "https://linkedin.com/in/JamiPerez"
    },
    "guarantor": {
      "fullName": "Willie Jefferson",
      "relationship": "Colleague",
      "phoneNumber": "+234 (930) 455-3784",
      "email": "williejefferson@barkarama.com"
    }
  },
  {
    "id": "6708e8830553b6fc85d311ce",
    "organization": "Buzzworks",
    "userName": "RaeCarrillo",
    "email": "raecarrillo@buzzworks.com",
    "phoneNumber": "+234 (996) 597-2745",
    "date": "2021-06-01T06:17:04-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Savage Davenport",
      "phoneNumber": "+234 (886) 484-2941",
      "emailAddress": "savagedavenport@buzzworks.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "savagedavenport@buzzworks.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Remotion Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CatalinaHicks",
      "twitter": "https://twitter.com/AdamsRamos",
      "linkedin": "https://linkedin.com/in/KristyGuthrie"
    },
    "guarantor": {
      "fullName": "Schultz Rutledge",
      "relationship": "Colleague",
      "phoneNumber": "+234 (998) 450-3251",
      "email": "schultzrutledge@remotion.com"
    }
  },
  {
    "id": "6708e883c15287beb2aedbcb",
    "organization": "Otherside",
    "userName": "GenevaFarrell",
    "email": "genevafarrell@otherside.com",
    "phoneNumber": "+234 (998) 443-2234",
    "date": "2020-10-20T05:56:13-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Buck Graham",
      "phoneNumber": "+234 (981) 454-2029",
      "emailAddress": "buckgraham@otherside.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "buckgraham@otherside.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Insuron Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WagnerLeblanc",
      "twitter": "https://twitter.com/CherryClayton",
      "linkedin": "https://linkedin.com/in/BowersGill"
    },
    "guarantor": {
      "fullName": "Carr Blackburn",
      "relationship": "Other",
      "phoneNumber": "+234 (885) 415-2663",
      "email": "carrblackburn@insuron.com"
    }
  },
  {
    "id": "6708e883ae3d070ce131150f",
    "organization": "Zoid",
    "userName": "KristineAlexander",
    "email": "kristinealexander@zoid.com",
    "phoneNumber": "+234 (997) 408-3347",
    "date": "2020-04-20T01:12:06-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Patton Joyce",
      "phoneNumber": "+234 (883) 541-3257",
      "emailAddress": "pattonjoyce@zoid.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "pattonjoyce@zoid.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Softmicro Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DouglasHarding",
      "twitter": "https://twitter.com/RhodaVazquez",
      "linkedin": "https://linkedin.com/in/PittsKirk"
    },
    "guarantor": {
      "fullName": "Sanders Justice",
      "relationship": "Colleague",
      "phoneNumber": "+234 (924) 515-2599",
      "email": "sandersjustice@softmicro.com"
    }
  },
  {
    "id": "6708e883df96f4c178c83041",
    "organization": "Radiantix",
    "userName": "MurphyLivingston",
    "email": "murphylivingston@radiantix.com",
    "phoneNumber": "+234 (846) 424-3733",
    "date": "2023-03-16T02:01:26-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Winnie Finch",
      "phoneNumber": "+234 (927) 598-2580",
      "emailAddress": "winniefinch@radiantix.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "winniefinch@radiantix.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Tropolis Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LuellaStephenson",
      "twitter": "https://twitter.com/JohnsonSerrano",
      "linkedin": "https://linkedin.com/in/TysonBarrera"
    },
    "guarantor": {
      "fullName": "Hart Weiss",
      "relationship": "Friend",
      "phoneNumber": "+234 (882) 484-3660",
      "email": "hartweiss@tropolis.com"
    }
  },
  {
    "id": "6708e8839daa0588c2e5db4f",
    "organization": "Verbus",
    "userName": "MorinLara",
    "email": "morinlara@verbus.com",
    "phoneNumber": "+234 (985) 533-3069",
    "date": "2024-07-18T06:11:59-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Hope Lowery",
      "phoneNumber": "+234 (981) 512-2443",
      "emailAddress": "hopelowery@verbus.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "hopelowery@verbus.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Conjurica Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/JodyWarner",
      "twitter": "https://twitter.com/MartinezHodges",
      "linkedin": "https://linkedin.com/in/RobertsSosa"
    },
    "guarantor": {
      "fullName": "Montoya Logan",
      "relationship": "Friend",
      "phoneNumber": "+234 (949) 549-2510",
      "email": "montoyalogan@conjurica.com"
    }
  },
  {
    "id": "6708e8831f8fb09afd5dc405",
    "organization": "Waretel",
    "userName": "DollyWhitfield",
    "email": "dollywhitfield@waretel.com",
    "phoneNumber": "+234 (872) 529-3383",
    "date": "2023-06-12T12:37:15-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Susana Santiago",
      "phoneNumber": "+234 (903) 537-3212",
      "emailAddress": "susanasantiago@waretel.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "susanasantiago@waretel.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Kog Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BrendaHudson",
      "twitter": "https://twitter.com/TammieSimpson",
      "linkedin": "https://linkedin.com/in/HattieRamsey"
    },
    "guarantor": {
      "fullName": "Marsha Santos",
      "relationship": "Colleague",
      "phoneNumber": "+234 (855) 505-3971",
      "email": "marshasantos@kog.com"
    }
  },
  {
    "id": "6708e8830b361147d58f4dd9",
    "organization": "Shepard",
    "userName": "DotsonCortez",
    "email": "dotsoncortez@shepard.com",
    "phoneNumber": "+234 (852) 474-2485",
    "date": "2023-02-08T07:00:15-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Pearson Glass",
      "phoneNumber": "+234 (891) 400-2393",
      "emailAddress": "pearsonglass@shepard.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "pearsonglass@shepard.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Skyplex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/KathrineBradshaw",
      "twitter": "https://twitter.com/SlaterHull",
      "linkedin": "https://linkedin.com/in/KeriCoffey"
    },
    "guarantor": {
      "fullName": "Tania Dillon",
      "relationship": "Family",
      "phoneNumber": "+234 (983) 409-2985",
      "email": "taniadillon@skyplex.com"
    }
  },
  {
    "id": "6708e883873e95dda10ffd6d",
    "organization": "Kaggle",
    "userName": "KatherynGlover",
    "email": "katherynglover@kaggle.com",
    "phoneNumber": "+234 (933) 456-3383",
    "date": "2020-04-09T11:15:35-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Sullivan Beasley",
      "phoneNumber": "+234 (869) 536-3313",
      "emailAddress": "sullivanbeasley@kaggle.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "sullivanbeasley@kaggle.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Deepends Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MccarthyBrock",
      "twitter": "https://twitter.com/MyraMurphy",
      "linkedin": "https://linkedin.com/in/RobinPeterson"
    },
    "guarantor": {
      "fullName": "Aurora Calhoun",
      "relationship": "Other",
      "phoneNumber": "+234 (804) 560-2257",
      "email": "auroracalhoun@deepends.com"
    }
  },
  {
    "id": "6708e88323fc88fa3dc2cf50",
    "organization": "Telequiet",
    "userName": "GildaBean",
    "email": "gildabean@telequiet.com",
    "phoneNumber": "+234 (917) 451-3601",
    "date": "2024-04-12T02:04:04-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Sheri Reynolds",
      "phoneNumber": "+234 (876) 417-2009",
      "emailAddress": "sherireynolds@telequiet.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "sherireynolds@telequiet.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Zizzle Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/MarcyBryan",
      "twitter": "https://twitter.com/EmiliaStokes",
      "linkedin": "https://linkedin.com/in/KentLowe"
    },
    "guarantor": {
      "fullName": "Hutchinson Gillespie",
      "relationship": "Friend",
      "phoneNumber": "+234 (907) 442-2102",
      "email": "hutchinsongillespie@zizzle.com"
    }
  },
  {
    "id": "6708e8837ed25635541bb8f2",
    "organization": "Qot",
    "userName": "RatliffValdez",
    "email": "ratliffvaldez@qot.com",
    "phoneNumber": "+234 (998) 544-2510",
    "date": "2020-10-30T03:02:08-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Cooley Moses",
      "phoneNumber": "+234 (862) 561-3289",
      "emailAddress": "cooleymoses@qot.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "cooleymoses@qot.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Portaline Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/FryWalter",
      "twitter": "https://twitter.com/WandaLangley",
      "linkedin": "https://linkedin.com/in/HuffmanHayes"
    },
    "guarantor": {
      "fullName": "Estrada Gregory",
      "relationship": "Friend",
      "phoneNumber": "+234 (885) 473-3259",
      "email": "estradagregory@portaline.com"
    }
  },
  {
    "id": "6708e8839648abc8c9cb6e18",
    "organization": "Zipak",
    "userName": "KariUnderwood",
    "email": "kariunderwood@zipak.com",
    "phoneNumber": "+234 (950) 406-2855",
    "date": "2020-06-06T05:11:28-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Bates Heath",
      "phoneNumber": "+234 (846) 559-2074",
      "emailAddress": "batesheath@zipak.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "batesheath@zipak.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Schoolio Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DianneEaton",
      "twitter": "https://twitter.com/JohannaMalone",
      "linkedin": "https://linkedin.com/in/LaneGiles"
    },
    "guarantor": {
      "fullName": "Dominguez Barr",
      "relationship": "Family",
      "phoneNumber": "+234 (817) 437-2041",
      "email": "dominguezbarr@schoolio.com"
    }
  },
  {
    "id": "6708e883fab32f838791847f",
    "organization": "Medmex",
    "userName": "AveryMcmillan",
    "email": "averymcmillan@medmex.com",
    "phoneNumber": "+234 (848) 598-3623",
    "date": "2023-11-28T07:38:01-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Sawyer Gonzales",
      "phoneNumber": "+234 (833) 574-3409",
      "emailAddress": "sawyergonzales@medmex.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "sawyergonzales@medmex.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Sultrax Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/VincentGuerra",
      "twitter": "https://twitter.com/HollowayPacheco",
      "linkedin": "https://linkedin.com/in/NoelleMay"
    },
    "guarantor": {
      "fullName": "Moss Fulton",
      "relationship": "Family",
      "phoneNumber": "+234 (819) 454-3472",
      "email": "mossfulton@sultrax.com"
    }
  },
  {
    "id": "6708e883e186686d0ef8e823",
    "organization": "Fleetmix",
    "userName": "EthelFlynn",
    "email": "ethelflynn@fleetmix.com",
    "phoneNumber": "+234 (911) 521-3565",
    "date": "2023-09-04T03:31:02-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Maggie Puckett",
      "phoneNumber": "+234 (843) 529-3584",
      "emailAddress": "maggiepuckett@fleetmix.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "maggiepuckett@fleetmix.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Injoy Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LeolaReid",
      "twitter": "https://twitter.com/MonaMcfadden",
      "linkedin": "https://linkedin.com/in/SerranoReese"
    },
    "guarantor": {
      "fullName": "Lynnette Buckley",
      "relationship": "Other",
      "phoneNumber": "+234 (967) 599-2142",
      "email": "lynnettebuckley@injoy.com"
    }
  },
  {
    "id": "6708e883e3630e876042710a",
    "organization": "Mondicil",
    "userName": "FranksKerr",
    "email": "frankskerr@mondicil.com",
    "phoneNumber": "+234 (960) 501-3305",
    "date": "2023-05-24T11:54:14-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Duran Lester",
      "phoneNumber": "+234 (952) 551-2483",
      "emailAddress": "duranlester@mondicil.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "duranlester@mondicil.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Greeker Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/OchoaClements",
      "twitter": "https://twitter.com/EvangelineMooney",
      "linkedin": "https://linkedin.com/in/GreenPrince"
    },
    "guarantor": {
      "fullName": "Campos Gamble",
      "relationship": "Other",
      "phoneNumber": "+234 (991) 589-2732",
      "email": "camposgamble@greeker.com"
    }
  },
  {
    "id": "6708e883dd3c16d5fa0b4a63",
    "organization": "Zyple",
    "userName": "GuzmanSnyder",
    "email": "guzmansnyder@zyple.com",
    "phoneNumber": "+234 (895) 520-2213",
    "date": "2022-11-15T01:44:50-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Cameron Pollard",
      "phoneNumber": "+234 (958) 567-3844",
      "emailAddress": "cameronpollard@zyple.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "cameronpollard@zyple.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Zillactic Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/SheppardPoole",
      "twitter": "https://twitter.com/CarleneStout",
      "linkedin": "https://linkedin.com/in/JanellHuff"
    },
    "guarantor": {
      "fullName": "Howell Rios",
      "relationship": "Other",
      "phoneNumber": "+234 (971) 544-3676",
      "email": "howellrios@zillactic.com"
    }
  },
  {
    "id": "6708e88333d914a55d29c9e5",
    "organization": "Pawnagra",
    "userName": "HelenNewton",
    "email": "helennewton@pawnagra.com",
    "phoneNumber": "+234 (894) 403-3153",
    "date": "2023-08-23T01:59:16-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Gretchen Garrett",
      "phoneNumber": "+234 (932) 561-2186",
      "emailAddress": "gretchengarrett@pawnagra.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "gretchengarrett@pawnagra.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Emtrac Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BurnettMcconnell",
      "twitter": "https://twitter.com/BiancaGuerrero",
      "linkedin": "https://linkedin.com/in/MableFitzgerald"
    },
    "guarantor": {
      "fullName": "Casandra Oliver",
      "relationship": "Family",
      "phoneNumber": "+234 (970) 463-2531",
      "email": "casandraoliver@emtrac.com"
    }
  },
  {
    "id": "6708e8837f5a93ca9c67f028",
    "organization": "Flyboyz",
    "userName": "RodriquezMartinez",
    "email": "rodriquezmartinez@flyboyz.com",
    "phoneNumber": "+234 (945) 414-3284",
    "date": "2024-09-04T02:48:16-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Sadie Golden",
      "phoneNumber": "+234 (918) 411-2669",
      "emailAddress": "sadiegolden@flyboyz.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "sadiegolden@flyboyz.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Bedlam Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LynnSummers",
      "twitter": "https://twitter.com/RowenaMcintyre",
      "linkedin": "https://linkedin.com/in/NashSalinas"
    },
    "guarantor": {
      "fullName": "Willa Moss",
      "relationship": "Family",
      "phoneNumber": "+234 (993) 507-2090",
      "email": "willamoss@bedlam.com"
    }
  },
  {
    "id": "6708e883584ab3b54b2970a2",
    "organization": "Fangold",
    "userName": "ErmaDouglas",
    "email": "ermadouglas@fangold.com",
    "phoneNumber": "+234 (891) 528-2125",
    "date": "2023-04-26T11:13:07-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Hazel Mayer",
      "phoneNumber": "+234 (932) 499-3838",
      "emailAddress": "hazelmayer@fangold.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "hazelmayer@fangold.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Xoggle Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/VictoriaWilkinson",
      "twitter": "https://twitter.com/KatharineWare",
      "linkedin": "https://linkedin.com/in/HerminiaMoran"
    },
    "guarantor": {
      "fullName": "Nona Hayden",
      "relationship": "Friend",
      "phoneNumber": "+234 (928) 498-2717",
      "email": "nonahayden@xoggle.com"
    }
  },
  {
    "id": "6708e88304d42cedcffb50bb",
    "organization": "Icology",
    "userName": "LaurenGarza",
    "email": "laurengarza@icology.com",
    "phoneNumber": "+234 (870) 519-2080",
    "date": "2022-08-14T11:31:41-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Jamie Mcintosh",
      "phoneNumber": "+234 (967) 557-3413",
      "emailAddress": "jamiemcintosh@icology.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "jamiemcintosh@icology.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Polarium Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/BaileyShepherd",
      "twitter": "https://twitter.com/DarleneKinney",
      "linkedin": "https://linkedin.com/in/StaffordCompton"
    },
    "guarantor": {
      "fullName": "Hester Santana",
      "relationship": "Other",
      "phoneNumber": "+234 (892) 454-3939",
      "email": "hestersantana@polarium.com"
    }
  },
  {
    "id": "6708e883fb9d267fb29d81f3",
    "organization": "Kraggle",
    "userName": "TrevinoGallegos",
    "email": "trevinogallegos@kraggle.com",
    "phoneNumber": "+234 (807) 501-2058",
    "date": "2020-04-28T04:24:49-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Jaclyn Alvarado",
      "phoneNumber": "+234 (935) 598-3995",
      "emailAddress": "jaclynalvarado@kraggle.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "jaclynalvarado@kraggle.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Utarian Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LoreneMassey",
      "twitter": "https://twitter.com/ErikaPalmer",
      "linkedin": "https://linkedin.com/in/MillsFletcher"
    },
    "guarantor": {
      "fullName": "Shelia Gray",
      "relationship": "Friend",
      "phoneNumber": "+234 (946) 496-3896",
      "email": "sheliagray@utarian.com"
    }
  },
  {
    "id": "6708e88369861864de335eb5",
    "organization": "Reversus",
    "userName": "TamekaMorales",
    "email": "tamekamorales@reversus.com",
    "phoneNumber": "+234 (874) 427-2833",
    "date": "2022-03-13T10:02:03-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Colleen Bennett",
      "phoneNumber": "+234 (824) 496-3322",
      "emailAddress": "colleenbennett@reversus.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "colleenbennett@reversus.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Roboid Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BarronSpence",
      "twitter": "https://twitter.com/DanielsChase",
      "linkedin": "https://linkedin.com/in/StaceyRivera"
    },
    "guarantor": {
      "fullName": "Antonia Fields",
      "relationship": "Family",
      "phoneNumber": "+234 (866) 597-2477",
      "email": "antoniafields@roboid.com"
    }
  },
  {
    "id": "6708e8833d6eb5a0b29ca83f",
    "organization": "Cinaster",
    "userName": "MayoAlbert",
    "email": "mayoalbert@cinaster.com",
    "phoneNumber": "+234 (882) 538-3574",
    "date": "2022-04-24T07:55:59-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Grimes Mccullough",
      "phoneNumber": "+234 (919) 545-3025",
      "emailAddress": "grimesmccullough@cinaster.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "grimesmccullough@cinaster.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Norsul Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/NewtonWall",
      "twitter": "https://twitter.com/AnneIngram",
      "linkedin": "https://linkedin.com/in/ReedHammond"
    },
    "guarantor": {
      "fullName": "Clare Frost",
      "relationship": "Colleague",
      "phoneNumber": "+234 (863) 560-2464",
      "email": "clarefrost@norsul.com"
    }
  },
  {
    "id": "6708e88323c2dc2ce59951e0",
    "organization": "Eplode",
    "userName": "HamiltonHebert",
    "email": "hamiltonhebert@eplode.com",
    "phoneNumber": "+234 (844) 406-3347",
    "date": "2020-08-12T07:27:22-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Jennifer Cruz",
      "phoneNumber": "+234 (875) 496-2678",
      "emailAddress": "jennifercruz@eplode.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "jennifercruz@eplode.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Tsunamia Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/AngelaBlake",
      "twitter": "https://twitter.com/SolomonMayo",
      "linkedin": "https://linkedin.com/in/BridgesMueller"
    },
    "guarantor": {
      "fullName": "Jensen Peck",
      "relationship": "Colleague",
      "phoneNumber": "+234 (865) 512-3758",
      "email": "jensenpeck@tsunamia.com"
    }
  },
  {
    "id": "6708e88330531585c2c78bd0",
    "organization": "Bostonic",
    "userName": "MaraNeal",
    "email": "maraneal@bostonic.com",
    "phoneNumber": "+234 (902) 492-2565",
    "date": "2020-02-10T06:27:05-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Janice Hinton",
      "phoneNumber": "+234 (996) 449-3536",
      "emailAddress": "janicehinton@bostonic.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "janicehinton@bostonic.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Primordia Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/FeleciaLopez",
      "twitter": "https://twitter.com/BlackburnLott",
      "linkedin": "https://linkedin.com/in/FinleyRichmond"
    },
    "guarantor": {
      "fullName": "Effie Perkins",
      "relationship": "Colleague",
      "phoneNumber": "+234 (875) 453-2604",
      "email": "effieperkins@primordia.com"
    }
  },
  {
    "id": "6708e883794110946cda8378",
    "organization": "Phormula",
    "userName": "LucindaBarlow",
    "email": "lucindabarlow@phormula.com",
    "phoneNumber": "+234 (853) 459-3068",
    "date": "2023-05-31T01:14:20-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Karla Curry",
      "phoneNumber": "+234 (888) 537-2901",
      "emailAddress": "karlacurry@phormula.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "karlacurry@phormula.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Satiance Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/FlemingHarper",
      "twitter": "https://twitter.com/NicholsonRhodes",
      "linkedin": "https://linkedin.com/in/GallagherRay"
    },
    "guarantor": {
      "fullName": "Drake Munoz",
      "relationship": "Other",
      "phoneNumber": "+234 (813) 510-3643",
      "email": "drakemunoz@satiance.com"
    }
  },
  {
    "id": "6708e88353cc351d436af363",
    "organization": "Zoxy",
    "userName": "FranNewman",
    "email": "frannewman@zoxy.com",
    "phoneNumber": "+234 (901) 598-3834",
    "date": "2021-10-21T04:37:15-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Rachel Byrd",
      "phoneNumber": "+234 (919) 461-3259",
      "emailAddress": "rachelbyrd@zoxy.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "rachelbyrd@zoxy.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Maximind Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/OllieGilliam",
      "twitter": "https://twitter.com/GracieAndrews",
      "linkedin": "https://linkedin.com/in/LelaWheeler"
    },
    "guarantor": {
      "fullName": "Lena Terrell",
      "relationship": "Other",
      "phoneNumber": "+234 (925) 585-3617",
      "email": "lenaterrell@maximind.com"
    }
  },
  {
    "id": "6708e88368231044c3d84efc",
    "organization": "Enervate",
    "userName": "BartonHendricks",
    "email": "bartonhendricks@enervate.com",
    "phoneNumber": "+234 (860) 438-3533",
    "date": "2020-10-23T03:36:47-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Anna Bishop",
      "phoneNumber": "+234 (836) 554-3580",
      "emailAddress": "annabishop@enervate.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "annabishop@enervate.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Maroptic Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LeeOrtiz",
      "twitter": "https://twitter.com/JuarezTillman",
      "linkedin": "https://linkedin.com/in/McdanielNavarro"
    },
    "guarantor": {
      "fullName": "Charity Stuart",
      "relationship": "Family",
      "phoneNumber": "+234 (844) 447-2660",
      "email": "charitystuart@maroptic.com"
    }
  },
  {
    "id": "6708e88316433eef623281ff",
    "organization": "Hatology",
    "userName": "WareBlanchard",
    "email": "wareblanchard@hatology.com",
    "phoneNumber": "+234 (975) 597-2964",
    "date": "2022-04-11T09:57:21-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Raquel Knowles",
      "phoneNumber": "+234 (939) 574-2590",
      "emailAddress": "raquelknowles@hatology.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "1 years",
      "officeEmail": "raquelknowles@hatology.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Prosure Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/BergerPadilla",
      "twitter": "https://twitter.com/GilmoreBoyle",
      "linkedin": "https://linkedin.com/in/PamelaWalton"
    },
    "guarantor": {
      "fullName": "Martina Beck",
      "relationship": "Family",
      "phoneNumber": "+234 (929) 488-2878",
      "email": "martinabeck@prosure.com"
    }
  },
  {
    "id": "6708e883ddd29e72194ad0e0",
    "organization": "Cyclonica",
    "userName": "CalhounHolden",
    "email": "calhounholden@cyclonica.com",
    "phoneNumber": "+234 (941) 414-2782",
    "date": "2021-08-07T01:49:25-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Harvey Harris",
      "phoneNumber": "+234 (853) 581-2770",
      "emailAddress": "harveyharris@cyclonica.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "harveyharris@cyclonica.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Limozen Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/DawnShepard",
      "twitter": "https://twitter.com/GeorgeDodson",
      "linkedin": "https://linkedin.com/in/HintonKaufman"
    },
    "guarantor": {
      "fullName": "Gonzalez Cunningham",
      "relationship": "Colleague",
      "phoneNumber": "+234 (980) 577-3438",
      "email": "gonzalezcunningham@limozen.com"
    }
  },
  {
    "id": "6708e883340772652ee724da",
    "organization": "Stockpost",
    "userName": "GreeneBarron",
    "email": "greenebarron@stockpost.com",
    "phoneNumber": "+234 (933) 551-2609",
    "date": "2020-12-26T11:06:06-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Salinas Foley",
      "phoneNumber": "+234 (921) 493-2763",
      "emailAddress": "salinasfoley@stockpost.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Education",
      "durationOfEmployment": "30 years",
      "officeEmail": "salinasfoley@stockpost.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Rodeocean Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WyattHoffman",
      "twitter": "https://twitter.com/MorseSnow",
      "linkedin": "https://linkedin.com/in/KnowlesJohns"
    },
    "guarantor": {
      "fullName": "Esperanza Best",
      "relationship": "Friend",
      "phoneNumber": "+234 (958) 583-2309",
      "email": "esperanzabest@rodeocean.com"
    }
  },
  {
    "id": "6708e8836ceb8e665d5d6a5c",
    "organization": "Digifad",
    "userName": "AnthonySanchez",
    "email": "anthonysanchez@digifad.com",
    "phoneNumber": "+234 (801) 574-2833",
    "date": "2020-06-28T11:15:56-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Melissa Rollins",
      "phoneNumber": "+234 (824) 456-2808",
      "emailAddress": "melissarollins@digifad.com",
      "bvn": 99999999999,
      "gender": "Non-binary",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "melissarollins@digifad.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Dognosis Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/PetersenEmerson",
      "twitter": "https://twitter.com/AyalaGoff",
      "linkedin": "https://linkedin.com/in/AnitaVargas"
    },
    "guarantor": {
      "fullName": "Flossie Marks",
      "relationship": "Family",
      "phoneNumber": "+234 (893) 470-3123",
      "email": "flossiemarks@dognosis.com"
    }
  },
  {
    "id": "6708e88331c29428d830deb8",
    "organization": "Columella",
    "userName": "SellersMann",
    "email": "sellersmann@columella.com",
    "phoneNumber": "+234 (830) 491-2492",
    "date": "2020-08-17T06:34:40-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Shawn Savage",
      "phoneNumber": "+234 (957) 552-3283",
      "emailAddress": "shawnsavage@columella.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "1 years",
      "officeEmail": "shawnsavage@columella.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Qimonk Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/McclureBentley",
      "twitter": "https://twitter.com/AlfordBartlett",
      "linkedin": "https://linkedin.com/in/MarvaParker"
    },
    "guarantor": {
      "fullName": "Cardenas Cochran",
      "relationship": "Other",
      "phoneNumber": "+234 (968) 587-2320",
      "email": "cardenascochran@qimonk.com"
    }
  },
  {
    "id": "6708e88329ec97d424ed3dd9",
    "organization": "Nurplex",
    "userName": "GeorgiaAvila",
    "email": "georgiaavila@nurplex.com",
    "phoneNumber": "+234 (837) 458-3333",
    "date": "2020-08-02T05:28:12-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Sherrie Jimenez",
      "phoneNumber": "+234 (947) 512-3225",
      "emailAddress": "sherriejimenez@nurplex.com",
      "bvn": 99999999999,
      "gender": "Prefer not to say",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "sherriejimenez@nurplex.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Straloy Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/McknightOdonnell",
      "twitter": "https://twitter.com/MercadoVaughn",
      "linkedin": "https://linkedin.com/in/DuffyKing"
    },
    "guarantor": {
      "fullName": "Joyce Russo",
      "relationship": "Colleague",
      "phoneNumber": "+234 (822) 458-2154",
      "email": "joycerusso@straloy.com"
    }
  },
  {
    "id": "6708e88375cbbf5c9a16b95a",
    "organization": "Sensate",
    "userName": "CarlyMorrison",
    "email": "carlymorrison@sensate.com",
    "phoneNumber": "+234 (965) 564-2931",
    "date": "2024-07-09T07:07:28-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Lina Vaughan",
      "phoneNumber": "+234 (990) 545-2993",
      "emailAddress": "linavaughan@sensate.com",
      "bvn": 10000000000,
      "gender": "Non-binary",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "linavaughan@sensate.com",
      "monthlyIncomeRange": "₦800,001 - ₦1,000,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Xylar Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MartinHaley",
      "twitter": "https://twitter.com/SimonCummings",
      "linkedin": "https://linkedin.com/in/GarciaSargent"
    },
    "guarantor": {
      "fullName": "Wolf Carlson",
      "relationship": "Friend",
      "phoneNumber": "+234 (983) 426-2209",
      "email": "wolfcarlson@xylar.com"
    }
  },
  {
    "id": "6708e88379d7f01530ef7b8b",
    "organization": "Cinesanct",
    "userName": "MarylouGilmore",
    "email": "marylougilmore@cinesanct.com",
    "phoneNumber": "+234 (986) 459-2666",
    "date": "2022-01-13T06:13:08-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Ada Duran",
      "phoneNumber": "+234 (922) 411-2468",
      "emailAddress": "adaduran@cinesanct.com",
      "bvn": 99999999999,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "adaduran@cinesanct.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Imant Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/CourtneyChapman",
      "twitter": "https://twitter.com/MarissaHoward",
      "linkedin": "https://linkedin.com/in/HolderFigueroa"
    },
    "guarantor": {
      "fullName": "Gentry Ballard",
      "relationship": "Colleague",
      "phoneNumber": "+234 (945) 426-3600",
      "email": "gentryballard@imant.com"
    }
  },
  {
    "id": "6708e8830cbcc8a8a97f8528",
    "organization": "Coash",
    "userName": "AlyceLancaster",
    "email": "alycelancaster@coash.com",
    "phoneNumber": "+234 (875) 478-3400",
    "date": "2021-09-06T08:17:23-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Fitzgerald Moon",
      "phoneNumber": "+234 (989) 458-2356",
      "emailAddress": "fitzgeraldmoon@coash.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "fitzgeraldmoon@coash.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Techtrix Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/LessieDean",
      "twitter": "https://twitter.com/FrancesEvans",
      "linkedin": "https://linkedin.com/in/McintoshVinson"
    },
    "guarantor": {
      "fullName": "Kelley Odom",
      "relationship": "Friend",
      "phoneNumber": "+234 (849) 405-2202",
      "email": "kelleyodom@techtrix.com"
    }
  },
  {
    "id": "6708e8835ce3afe59dce2571",
    "organization": "Comveyer",
    "userName": "AmaliaHuffman",
    "email": "amaliahuffman@comveyer.com",
    "phoneNumber": "+234 (987) 582-3085",
    "date": "2022-03-15T03:48:02-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Alice Molina",
      "phoneNumber": "+234 (946) 414-2064",
      "emailAddress": "alicemolina@comveyer.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "alicemolina@comveyer.com",
      "monthlyIncomeRange": "₦600,001 - ₦800,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Futurize Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/WigginsJensen",
      "twitter": "https://twitter.com/JosephPrice",
      "linkedin": "https://linkedin.com/in/JodieWong"
    },
    "guarantor": {
      "fullName": "Jane Dalton",
      "relationship": "Colleague",
      "phoneNumber": "+234 (991) 490-2823",
      "email": "janedalton@futurize.com"
    }
  },
  {
    "id": "6708e883150785afbd8c5ff9",
    "organization": "Providco",
    "userName": "JusticeMclean",
    "email": "justicemclean@providco.com",
    "phoneNumber": "+234 (947) 401-3872",
    "date": "2024-05-21T04:23:47-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Rivers Holloway",
      "phoneNumber": "+234 (823) 427-3786",
      "emailAddress": "riversholloway@providco.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Apartment"
    },
    "educationEmployment": {
      "levelOfEducation": "Master",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "30 years",
      "officeEmail": "riversholloway@providco.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Terragen Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/MarisaDay",
      "twitter": "https://twitter.com/KatelynRandolph",
      "linkedin": "https://linkedin.com/in/KarinCraig"
    },
    "guarantor": {
      "fullName": "Martha Deleon",
      "relationship": "Colleague",
      "phoneNumber": "+234 (804) 550-2160",
      "email": "marthadeleon@terragen.com"
    }
  },
  {
    "id": "6708e8838145cfb7631f17f2",
    "organization": "Gynko",
    "userName": "DellaNelson",
    "email": "dellanelson@gynko.com",
    "phoneNumber": "+234 (961) 549-2467",
    "date": "2022-11-02T12:33:15-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Medina Strickland",
      "phoneNumber": "+234 (976) 566-3975",
      "emailAddress": "medinastrickland@gynko.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Finance",
      "durationOfEmployment": "1 years",
      "officeEmail": "medinastrickland@gynko.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Grainspot Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/ShereeGrant",
      "twitter": "https://twitter.com/GayCabrera",
      "linkedin": "https://linkedin.com/in/MaxineMccall"
    },
    "guarantor": {
      "fullName": "Kidd Dickerson",
      "relationship": "Colleague",
      "phoneNumber": "+234 (992) 420-3924",
      "email": "kidddickerson@grainspot.com"
    }
  },
  {
    "id": "6708e883c70d8df43ad6d8bf",
    "organization": "Glasstep",
    "userName": "MadelineWhitley",
    "email": "madelinewhitley@glasstep.com",
    "phoneNumber": "+234 (823) 590-2436",
    "date": "2024-06-13T09:01:20-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Maryanne Taylor",
      "phoneNumber": "+234 (800) 528-2479",
      "emailAddress": "maryannetaylor@glasstep.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Divorced",
      "children": 0,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Employed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "maryannetaylor@glasstep.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦150,000"
    },
    "bankDetails": {
      "bankName": "Viagrand Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/StaciHancock",
      "twitter": "https://twitter.com/MccrayLandry",
      "linkedin": "https://linkedin.com/in/SilviaClay"
    },
    "guarantor": {
      "fullName": "Juanita Mccarty",
      "relationship": "Family",
      "phoneNumber": "+234 (875) 419-3209",
      "email": "juanitamccarty@viagrand.com"
    }
  },
  {
    "id": "6708e88381724f7bdd5a10e9",
    "organization": "Eschoir",
    "userName": "BriannaSanders",
    "email": "briannasanders@eschoir.com",
    "phoneNumber": "+234 (812) 432-3818",
    "date": "2020-03-26T11:26:22-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Roman Mcclure",
      "phoneNumber": "+234 (900) 525-3325",
      "emailAddress": "romanmcclure@eschoir.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 0,
      "typeOfResidence": "Dormitory"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "romanmcclure@eschoir.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Snorus Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LangBurton",
      "twitter": "https://twitter.com/SharpTran",
      "linkedin": "https://linkedin.com/in/MariaSchwartz"
    },
    "guarantor": {
      "fullName": "Murray Christensen",
      "relationship": "Family",
      "phoneNumber": "+234 (993) 515-3302",
      "email": "murraychristensen@snorus.com"
    }
  },
  {
    "id": "6708e883d27010905cc18616",
    "organization": "Zilidium",
    "userName": "SelmaSingleton",
    "email": "selmasingleton@zilidium.com",
    "phoneNumber": "+234 (804) 459-3473",
    "date": "2024-01-04T12:27:32-01:00",
    "status": "Blacklisted",
    "personalInformation": {
      "fullName": "Orr Hatfield",
      "phoneNumber": "+234 (975) 404-2580",
      "emailAddress": "orrhatfield@zilidium.com",
      "bvn": 10000000000,
      "gender": "Prefer not to say",
      "maritalStatus": "Single",
      "children": 0,
      "typeOfResidence": "Condo"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "30 years",
      "officeEmail": "orrhatfield@zilidium.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Frenex Bank",
      "accountBalance": "₦10000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/SallieDickson",
      "twitter": "https://twitter.com/SimsFrancis",
      "linkedin": "https://linkedin.com/in/MarcellaJohnson"
    },
    "guarantor": {
      "fullName": "Elliott Dixon",
      "relationship": "Family",
      "phoneNumber": "+234 (940) 425-2006",
      "email": "elliottdixon@frenex.com"
    }
  },
  {
    "id": "6708e883c27ae67aeec82893",
    "organization": "Locazone",
    "userName": "RollinsDoyle",
    "email": "rollinsdoyle@locazone.com",
    "phoneNumber": "+234 (834) 463-2443",
    "date": "2021-07-14T05:59:00-01:00",
    "status": "Inactive",
    "personalInformation": {
      "fullName": "Billie Gates",
      "phoneNumber": "+234 (972) 581-3103",
      "emailAddress": "billiegates@locazone.com",
      "bvn": 99999999999,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "High School",
      "employmentStatus": "Unemployed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "1 years",
      "officeEmail": "billiegates@locazone.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Jasper Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 9999999999
    },
    "socials": {
      "facebook": "https://facebook.com/LoriRiddle",
      "twitter": "https://twitter.com/JeannetteStanton",
      "linkedin": "https://linkedin.com/in/CochranHensley"
    },
    "guarantor": {
      "fullName": "Alyssa Mendoza",
      "relationship": "Family",
      "phoneNumber": "+234 (814) 590-3360",
      "email": "alyssamendoza@jasper.com"
    }
  },
  {
    "id": "6708e883b1148ba89d54811b",
    "organization": "Magneato",
    "userName": "ElaineTrevino",
    "email": "elainetrevino@magneato.com",
    "phoneNumber": "+234 (859) 482-2842",
    "date": "2020-07-03T01:50:14-01:00",
    "status": "Active",
    "personalInformation": {
      "fullName": "Leach Bolton",
      "phoneNumber": "+234 (953) 455-3841",
      "emailAddress": "leachbolton@magneato.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Widowed",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "PhD",
      "employmentStatus": "Self-employed",
      "sectorOfEmployment": "Technology",
      "durationOfEmployment": "30 years",
      "officeEmail": "leachbolton@magneato.com",
      "monthlyIncomeRange": "₦200,001 - ₦400,000",
      "loanRepayment": "₦50,000"
    },
    "bankDetails": {
      "bankName": "Quordate Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/WileySalazar",
      "twitter": "https://twitter.com/TaylorHerring",
      "linkedin": "https://linkedin.com/in/HensonHowe"
    },
    "guarantor": {
      "fullName": "Josephine Delacruz",
      "relationship": "Other",
      "phoneNumber": "+234 (888) 508-3908",
      "email": "josephinedelacruz@quordate.com"
    }
  },
  {
    "id": "6708e883b46acc158ac8a829",
    "organization": "Katakana",
    "userName": "ShermanLyons",
    "email": "shermanlyons@katakana.com",
    "phoneNumber": "+234 (952) 598-2063",
    "date": "2021-07-25T04:45:27-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Snider Bates",
      "phoneNumber": "+234 (825) 580-3422",
      "emailAddress": "sniderbates@katakana.com",
      "bvn": 10000000000,
      "gender": "Male",
      "maritalStatus": "Divorced",
      "children": 5,
      "typeOfResidence": "House"
    },
    "educationEmployment": {
      "levelOfEducation": "Bachelor",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Retail",
      "durationOfEmployment": "1 years",
      "officeEmail": "sniderbates@katakana.com",
      "monthlyIncomeRange": "₦400,001 - ₦600,000",
      "loanRepayment": "₦100,000"
    },
    "bankDetails": {
      "bankName": "Kegular Bank",
      "accountBalance": "₦1000000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/TaylorBrewer",
      "twitter": "https://twitter.com/ElviaGonzalez",
      "linkedin": "https://linkedin.com/in/PruittStark"
    },
    "guarantor": {
      "fullName": "Nina Little",
      "relationship": "Family",
      "phoneNumber": "+234 (997) 410-2098",
      "email": "ninalittle@kegular.com"
    }
  },
  {
    "id": "6708e8833d933388e7659ac9",
    "organization": "Eternis",
    "userName": "AllisonAshley",
    "email": "allisonashley@eternis.com",
    "phoneNumber": "+234 (970) 486-2264",
    "date": "2021-08-23T03:37:28-01:00",
    "status": "Pending",
    "personalInformation": {
      "fullName": "Joan Roy",
      "phoneNumber": "+234 (881) 454-2614",
      "emailAddress": "joanroy@eternis.com",
      "bvn": 10000000000,
      "gender": "Female",
      "maritalStatus": "Married",
      "children": 0,
      "typeOfResidence": "Shared"
    },
    "educationEmployment": {
      "levelOfEducation": "Associate",
      "employmentStatus": "Student",
      "sectorOfEmployment": "Healthcare",
      "durationOfEmployment": "30 years",
      "officeEmail": "joanroy@eternis.com",
      "monthlyIncomeRange": "₦100,000 - ₦200,000",
      "loanRepayment": "₦200,000"
    },
    "bankDetails": {
      "bankName": "Crustatia Bank",
      "accountBalance": "₦10000",
      "accountNumber": 1000000000
    },
    "socials": {
      "facebook": "https://facebook.com/DudleyEnglish",
      "twitter": "https://twitter.com/MyersSims",
      "linkedin": "https://linkedin.com/in/GallegosKane"
    },
    "guarantor": {
      "fullName": "Laura Hughes",
      "relationship": "Friend",
      "phoneNumber": "+234 (932) 446-3722",
      "email": "laurahughes@crustatia.com"
    }
  }
]

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "organization",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>organization</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("organization") as string;
      return <div className={styles.cellContent}>{value}</div>;
    },
  },
  {
    accessorKey: "userName",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Username</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("userName") as string;
      return <div className={styles.cellContent}>{value}</div>;
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Email</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("email") as string;
      return <div className={styles.cellContent}>{value}</div>;
    },
  },
  {
    accessorKey: "phoneNumber",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Phone number</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("phoneNumber") as string;
      return <div className={styles.cellContent}>{value}</div>;
    },
  },
  {
    accessorKey: "date",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Date joined</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("date") as string;
      const parsedDate = parseISO(value);
      const formattedDate = format(parsedDate, "MMMM dd, yyyy hh:mm a");
      return <div className={styles.dateCell}>{formattedDate}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Status</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("status") as Status;
      const statusClass = styles[value.toLowerCase()];
      return (
        <div className={styles.statusCell}>
          <div className={`${styles.statusPill} ${statusClass}`}>{value}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}></span>
      </div>
    ),
    cell: ({ row }) => {
      const user = row.original;
      return <ColumnDropdownMenu user={user} />;
    },
  },
];
