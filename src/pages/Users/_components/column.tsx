import { ColumnDef } from "@tanstack/react-table";
import { parseISO, format } from "date-fns";
import ColumnDropdownMenu from "./ColumnDropdownMenu";

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
    id: "6708e8832a8f2129866e0d3e",
    organization: "Kegular",
    userName: "ChristianSims",
    email: "christiansims@kegular.com",
    phoneNumber: "+234 (970) 538-2384",
    date: "2022-04-13T01:46:49-01:00",
    status: "Inactive",
    personalInformation: {
      fullName: "Cherry Kane",
      phoneNumber: "+234 (902) 543-3600",
      emailAddress: "cherrykane@kegular.com",
      bvn: 99999999999,
      gender: "Female",
      maritalStatus: "Married",
      children: 5,
      typeOfResidence: "Apartment",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Student",
      sectorOfEmployment: "Retail",
      durationOfEmployment: "1 years",
      officeEmail: "cherrykane@kegular.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦150,000",
    },
    bankDetails: {
      bankName: "Eternis Bank",
      accountBalance: "₦1000000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/GoodwinHughes",
      twitter: "https://twitter.com/VangOneill",
      linkedin: "https://linkedin.com/in/CombsLove",
    },
    guarantor: {
      fullName: "Cash Kennedy",
      relationship: "Friend",
      phoneNumber: "+234 (955) 422-2916",
      email: "cashkennedy@eternis.com",
    },
  },
  {
    id: "6708e883b0dc0219119af347",
    organization: "Crustatia",
    userName: "LeonaCantrell",
    email: "leonacantrell@crustatia.com",
    phoneNumber: "+234 (875) 566-3826",
    date: "2020-05-14T06:50:14-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Harper Bryant",
      phoneNumber: "+234 (903) 418-3609",
      emailAddress: "harperbryant@crustatia.com",
      bvn: 10000000000,
      gender: "Non-binary",
      maritalStatus: "Divorced",
      children: 0,
      typeOfResidence: "Condo",
    },
    educationEmployment: {
      levelOfEducation: "High School",
      employmentStatus: "Student",
      sectorOfEmployment: "Retail",
      durationOfEmployment: "30 years",
      officeEmail: "harperbryant@crustatia.com",
      monthlyIncomeRange: "₦400,001 - ₦600,000",
      loanRepayment: "₦100,000",
    },
    bankDetails: {
      bankName: "Magnina Bank",
      accountBalance: "₦1000000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/AbbyGilbert",
      twitter: "https://twitter.com/FranklinWolfe",
      linkedin: "https://linkedin.com/in/SpenceWagner",
    },
    guarantor: {
      fullName: "Dunlap Parrish",
      relationship: "Friend",
      phoneNumber: "+234 (971) 487-2830",
      email: "dunlapparrish@magnina.com",
    },
  },
  {
    id: "6708e8831de6d61aada8eade",
    organization: "Valreda",
    userName: "CynthiaHoover",
    email: "cynthiahoover@valreda.com",
    phoneNumber: "+234 (976) 435-3353",
    date: "2024-03-27T09:26:58-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Annabelle Bush",
      phoneNumber: "+234 (984) 437-2691",
      emailAddress: "annabellebush@valreda.com",
      bvn: 10000000000,
      gender: "Non-binary",
      maritalStatus: "Divorced",
      children: 0,
      typeOfResidence: "Shared",
    },
    educationEmployment: {
      levelOfEducation: "Bachelor",
      employmentStatus: "Self-employed",
      sectorOfEmployment: "Technology",
      durationOfEmployment: "30 years",
      officeEmail: "annabellebush@valreda.com",
      monthlyIncomeRange: "₦100,000 - ₦200,000",
      loanRepayment: "₦150,000",
    },
    bankDetails: {
      bankName: "Danja Bank",
      accountBalance: "₦10000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/LydiaBird",
      twitter: "https://twitter.com/FoxPace",
      linkedin: "https://linkedin.com/in/LadonnaBruce",
    },
    guarantor: {
      fullName: "Mccall Rowe",
      relationship: "Friend",
      phoneNumber: "+234 (868) 477-2214",
      email: "mccallrowe@danja.com",
    },
  },
  {
    id: "6708e883f2c4c3d37ee31273",
    organization: "Futuris",
    userName: "NorrisStafford",
    email: "norrisstafford@futuris.com",
    phoneNumber: "+234 (940) 522-3731",
    date: "2020-01-15T02:52:54-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Moon Juarez",
      phoneNumber: "+234 (941) 571-3238",
      emailAddress: "moonjuarez@futuris.com",
      bvn: 10000000000,
      gender: "Female",
      maritalStatus: "Widowed",
      children: 0,
      typeOfResidence: "Apartment",
    },
    educationEmployment: {
      levelOfEducation: "Master",
      employmentStatus: "Employed",
      sectorOfEmployment: "Finance",
      durationOfEmployment: "1 years",
      officeEmail: "moonjuarez@futuris.com",
      monthlyIncomeRange: "₦800,001 - ₦1,000,000",
      loanRepayment: "₦150,000",
    },
    bankDetails: {
      bankName: "Zenthall Bank",
      accountBalance: "₦1000000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/EvansCobb",
      twitter: "https://twitter.com/MayCarney",
      linkedin: "https://linkedin.com/in/TishaCastro",
    },
    guarantor: {
      fullName: "June Morgan",
      relationship: "Colleague",
      phoneNumber: "+234 (832) 542-2411",
      email: "junemorgan@zenthall.com",
    },
  },
  {
    id: "6708e88361f1c4a8cee8d01b",
    organization: "Ecrater",
    userName: "PatelWatson",
    email: "patelwatson@ecrater.com",
    phoneNumber: "+234 (828) 441-2849",
    date: "2020-06-04T10:03:35-01:00",
    status: "Inactive",
    personalInformation: {
      fullName: "Adrienne Dawson",
      phoneNumber: "+234 (982) 478-3645",
      emailAddress: "adriennedawson@ecrater.com",
      bvn: 10000000000,
      gender: "Female",
      maritalStatus: "Single",
      children: 0,
      typeOfResidence: "Apartment",
    },
    educationEmployment: {
      levelOfEducation: "PhD",
      employmentStatus: "Employed",
      sectorOfEmployment: "Education",
      durationOfEmployment: "30 years",
      officeEmail: "adriennedawson@ecrater.com",
      monthlyIncomeRange: "₦800,001 - ₦1,000,000",
      loanRepayment: "₦50,000",
    },
    bankDetails: {
      bankName: "Recognia Bank",
      accountBalance: "₦10000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/JohnnieCollins",
      twitter: "https://twitter.com/IsabelWooten",
      linkedin: "https://linkedin.com/in/LorettaGriffith",
    },
    guarantor: {
      fullName: "Maricela Schmidt",
      relationship: "Colleague",
      phoneNumber: "+234 (966) 581-3706",
      email: "maricelaschmidt@recognia.com",
    },
  },
  {
    id: "6708e883cfb6260b09c383ff",
    organization: "Zolar",
    userName: "FannieLee",
    email: "fannielee@zolar.com",
    phoneNumber: "+234 (935) 436-2695",
    date: "2021-08-03T05:17:27-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Violet Lindsay",
      phoneNumber: "+234 (975) 418-3729",
      emailAddress: "violetlindsay@zolar.com",
      bvn: 99999999999,
      gender: "Non-binary",
      maritalStatus: "Married",
      children: 5,
      typeOfResidence: "House",
    },
    educationEmployment: {
      levelOfEducation: "PhD",
      employmentStatus: "Student",
      sectorOfEmployment: "Education",
      durationOfEmployment: "1 years",
      officeEmail: "violetlindsay@zolar.com",
      monthlyIncomeRange: "₦100,000 - ₦200,000",
      loanRepayment: "₦100,000",
    },
    bankDetails: {
      bankName: "Gronk Bank",
      accountBalance: "₦10000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/MaiBooker",
      twitter: "https://twitter.com/HolmesBlair",
      linkedin: "https://linkedin.com/in/JillianBright",
    },
    guarantor: {
      fullName: "Lucy Mathews",
      relationship: "Family",
      phoneNumber: "+234 (964) 587-3303",
      email: "lucymathews@gronk.com",
    },
  },
  {
    id: "6708e88355d72b9eb892b3ad",
    organization: "Netagy",
    userName: "LeticiaBerger",
    email: "leticiaberger@netagy.com",
    phoneNumber: "+234 (851) 584-2353",
    date: "2020-07-21T11:27:06-01:00",
    status: "Blacklisted",
    personalInformation: {
      fullName: "Horn Jenkins",
      phoneNumber: "+234 (860) 501-2897",
      emailAddress: "hornjenkins@netagy.com",
      bvn: 99999999999,
      gender: "Prefer not to say",
      maritalStatus: "Married",
      children: 5,
      typeOfResidence: "Shared",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Unemployed",
      sectorOfEmployment: "Finance",
      durationOfEmployment: "1 years",
      officeEmail: "hornjenkins@netagy.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦200,000",
    },
    bankDetails: {
      bankName: "Acruex Bank",
      accountBalance: "₦1000000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/RamirezBuchanan",
      twitter: "https://twitter.com/HamptonCarver",
      linkedin: "https://linkedin.com/in/JoyceAlvarez",
    },
    guarantor: {
      fullName: "Welch Christian",
      relationship: "Friend",
      phoneNumber: "+234 (970) 486-2915",
      email: "welchchristian@acruex.com",
    },
  },
  {
    id: "6708e8836c5e0bd00f5dd23a",
    organization: "Besto",
    userName: "PaceMccormick",
    email: "pacemccormick@besto.com",
    phoneNumber: "+234 (837) 465-3639",
    date: "2023-09-11T01:01:52-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Anderson Dennis",
      phoneNumber: "+234 (971) 425-3365",
      emailAddress: "andersondennis@besto.com",
      bvn: 99999999999,
      gender: "Non-binary",
      maritalStatus: "Married",
      children: 5,
      typeOfResidence: "Condo",
    },
    educationEmployment: {
      levelOfEducation: "High School",
      employmentStatus: "Employed",
      sectorOfEmployment: "Finance",
      durationOfEmployment: "30 years",
      officeEmail: "andersondennis@besto.com",
      monthlyIncomeRange: "₦200,001 - ₦400,000",
      loanRepayment: "₦100,000",
    },
    bankDetails: {
      bankName: "Fortean Bank",
      accountBalance: "₦10000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/LesterBowers",
      twitter: "https://twitter.com/CaseFrye",
      linkedin: "https://linkedin.com/in/NitaMendez",
    },
    guarantor: {
      fullName: "Langley Holman",
      relationship: "Friend",
      phoneNumber: "+234 (915) 508-3014",
      email: "langleyholman@fortean.com",
    },
  },
  {
    id: "6708e8833dfea64d58216010",
    organization: "Equitox",
    userName: "KellerBattle",
    email: "kellerbattle@equitox.com",
    phoneNumber: "+234 (934) 551-3345",
    date: "2022-08-17T05:41:00-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Jimmie Meadows",
      phoneNumber: "+234 (914) 542-3129",
      emailAddress: "jimmiemeadows@equitox.com",
      bvn: 99999999999,
      gender: "Male",
      maritalStatus: "Widowed",
      children: 5,
      typeOfResidence: "Apartment",
    },
    educationEmployment: {
      levelOfEducation: "Bachelor",
      employmentStatus: "Student",
      sectorOfEmployment: "Education",
      durationOfEmployment: "1 years",
      officeEmail: "jimmiemeadows@equitox.com",
      monthlyIncomeRange: "₦100,000 - ₦200,000",
      loanRepayment: "₦50,000",
    },
    bankDetails: {
      bankName: "Temorak Bank",
      accountBalance: "₦1000000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/CassandraSampson",
      twitter: "https://twitter.com/DeannaEdwards",
      linkedin: "https://linkedin.com/in/GayCombs",
    },
    guarantor: {
      fullName: "Banks Elliott",
      relationship: "Colleague",
      phoneNumber: "+234 (966) 533-2205",
      email: "bankselliott@temorak.com",
    },
  },
  {
    id: "6708e8830ae3016808530fe5",
    organization: "Quilk",
    userName: "TonyaMiddleton",
    email: "tonyamiddleton@quilk.com",
    phoneNumber: "+234 (950) 529-3188",
    date: "2023-01-10T12:05:03-01:00",
    status: "Pending",
    personalInformation: {
      fullName: "Leonor Freeman",
      phoneNumber: "+234 (948) 598-2817",
      emailAddress: "leonorfreeman@quilk.com",
      bvn: 99999999999,
      gender: "Female",
      maritalStatus: "Widowed",
      children: 0,
      typeOfResidence: "Shared",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Unemployed",
      sectorOfEmployment: "Technology",
      durationOfEmployment: "1 years",
      officeEmail: "leonorfreeman@quilk.com",
      monthlyIncomeRange: "₦200,001 - ₦400,000",
      loanRepayment: "₦200,000",
    },
    bankDetails: {
      bankName: "Avenetro Bank",
      accountBalance: "₦10000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/EllisonCraft",
      twitter: "https://twitter.com/LeonardJones",
      linkedin: "https://linkedin.com/in/BenjaminYoung",
    },
    guarantor: {
      fullName: "Eliza Avery",
      relationship: "Other",
      phoneNumber: "+234 (909) 536-3155",
      email: "elizaavery@avenetro.com",
    },
  },
  {
    id: "6708e883d7393b0589441876",
    organization: "Repetwire",
    userName: "OdessaBarrett",
    email: "odessabarrett@repetwire.com",
    phoneNumber: "+234 (806) 401-3486",
    date: "2024-08-16T04:34:01-01:00",
    status: "Pending",
    personalInformation: {
      fullName: "Wilkins Keller",
      phoneNumber: "+234 (811) 594-2477",
      emailAddress: "wilkinskeller@repetwire.com",
      bvn: 99999999999,
      gender: "Prefer not to say",
      maritalStatus: "Divorced",
      children: 5,
      typeOfResidence: "House",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Employed",
      sectorOfEmployment: "Retail",
      durationOfEmployment: "30 years",
      officeEmail: "wilkinskeller@repetwire.com",
      monthlyIncomeRange: "₦800,001 - ₦1,000,000",
      loanRepayment: "₦150,000",
    },
    bankDetails: {
      bankName: "Applica Bank",
      accountBalance: "₦10000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/KathieBurris",
      twitter: "https://twitter.com/JocelynHenson",
      linkedin: "https://linkedin.com/in/GambleCooper",
    },
    guarantor: {
      fullName: "Humphrey Floyd",
      relationship: "Friend",
      phoneNumber: "+234 (846) 586-3804",
      email: "humphreyfloyd@applica.com",
    },
  },
  {
    id: "6708e883583b2f618e9240aa",
    organization: "Bullzone",
    userName: "FlowersRobbins",
    email: "flowersrobbins@bullzone.com",
    phoneNumber: "+234 (828) 477-3272",
    date: "2024-03-15T03:47:25-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Juana Richards",
      phoneNumber: "+234 (960) 458-2957",
      emailAddress: "juanarichards@bullzone.com",
      bvn: 99999999999,
      gender: "Non-binary",
      maritalStatus: "Widowed",
      children: 5,
      typeOfResidence: "Dormitory",
    },
    educationEmployment: {
      levelOfEducation: "High School",
      employmentStatus: "Unemployed",
      sectorOfEmployment: "Healthcare",
      durationOfEmployment: "30 years",
      officeEmail: "juanarichards@bullzone.com",
      monthlyIncomeRange: "₦400,001 - ₦600,000",
      loanRepayment: "₦100,000",
    },
    bankDetails: {
      bankName: "Keengen Bank",
      accountBalance: "₦10000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/DeannJacobson",
      twitter: "https://twitter.com/HarrisonCooke",
      linkedin: "https://linkedin.com/in/KnoxTrujillo",
    },
    guarantor: {
      fullName: "Greta Foreman",
      relationship: "Family",
      phoneNumber: "+234 (884) 466-3316",
      email: "gretaforeman@keengen.com",
    },
  },
  {
    id: "6708e88338c1c10b70230587",
    organization: "Irack",
    userName: "RiggsRich",
    email: "riggsrich@irack.com",
    phoneNumber: "+234 (859) 492-2378",
    date: "2022-11-07T02:30:31-01:00",
    status: "Blacklisted",
    personalInformation: {
      fullName: "Bernadine Woodward",
      phoneNumber: "+234 (816) 470-3516",
      emailAddress: "bernadinewoodward@irack.com",
      bvn: 99999999999,
      gender: "Non-binary",
      maritalStatus: "Widowed",
      children: 5,
      typeOfResidence: "Dormitory",
    },
    educationEmployment: {
      levelOfEducation: "Master",
      employmentStatus: "Unemployed",
      sectorOfEmployment: "Finance",
      durationOfEmployment: "30 years",
      officeEmail: "bernadinewoodward@irack.com",
      monthlyIncomeRange: "₦200,001 - ₦400,000",
      loanRepayment: "₦100,000",
    },
    bankDetails: {
      bankName: "Mitroc Bank",
      accountBalance: "₦10000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/CaseyLloyd",
      twitter: "https://twitter.com/WebbCallahan",
      linkedin: "https://linkedin.com/in/MarshMullins",
    },
    guarantor: {
      fullName: "Vega Buck",
      relationship: "Colleague",
      phoneNumber: "+234 (890) 582-3198",
      email: "vegabuck@mitroc.com",
    },
  },
  {
    id: "6708e883aa89e0cce0286d52",
    organization: "Exosis",
    userName: "MackGoodwin",
    email: "mackgoodwin@exosis.com",
    phoneNumber: "+234 (841) 423-3458",
    date: "2022-11-09T04:53:11-01:00",
    status: "Blacklisted",
    personalInformation: {
      fullName: "Renee Garrison",
      phoneNumber: "+234 (979) 551-2532",
      emailAddress: "reneegarrison@exosis.com",
      bvn: 10000000000,
      gender: "Prefer not to say",
      maritalStatus: "Divorced",
      children: 0,
      typeOfResidence: "Shared",
    },
    educationEmployment: {
      levelOfEducation: "High School",
      employmentStatus: "Unemployed",
      sectorOfEmployment: "Education",
      durationOfEmployment: "30 years",
      officeEmail: "reneegarrison@exosis.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦100,000",
    },
    bankDetails: {
      bankName: "Geekwagon Bank",
      accountBalance: "₦1000000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/HelgaWhitaker",
      twitter: "https://twitter.com/StephensonMckay",
      linkedin: "https://linkedin.com/in/JosefinaMcknight",
    },
    guarantor: {
      fullName: "Lorraine Wallace",
      relationship: "Friend",
      phoneNumber: "+234 (821) 408-2572",
      email: "lorrainewallace@geekwagon.com",
    },
  },
  {
    id: "6708e8830e5ffe5cc8a3a08d",
    organization: "Bicol",
    userName: "OpheliaCleveland",
    email: "opheliacleveland@bicol.com",
    phoneNumber: "+234 (905) 453-2634",
    date: "2023-03-19T06:58:40-01:00",
    status: "Blacklisted",
    personalInformation: {
      fullName: "Neva Murray",
      phoneNumber: "+234 (859) 427-3264",
      emailAddress: "nevamurray@bicol.com",
      bvn: 99999999999,
      gender: "Non-binary",
      maritalStatus: "Single",
      children: 0,
      typeOfResidence: "Shared",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Self-employed",
      sectorOfEmployment: "Technology",
      durationOfEmployment: "1 years",
      officeEmail: "nevamurray@bicol.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦150,000",
    },
    bankDetails: {
      bankName: "Enersave Bank",
      accountBalance: "₦10000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/CandiceCampos",
      twitter: "https://twitter.com/GillespieBranch",
      linkedin: "https://linkedin.com/in/LillyRichard",
    },
    guarantor: {
      fullName: "Sosa Thomas",
      relationship: "Other",
      phoneNumber: "+234 (821) 565-2536",
      email: "sosathomas@enersave.com",
    },
  },
  {
    id: "6708e8835f59a1fb5c8478b3",
    organization: "Snacktion",
    userName: "SchroederSlater",
    email: "schroederslater@snacktion.com",
    phoneNumber: "+234 (946) 566-2815",
    date: "2023-11-20T01:34:56-01:00",
    status: "Blacklisted",
    personalInformation: {
      fullName: "Woodard Cain",
      phoneNumber: "+234 (846) 424-2079",
      emailAddress: "woodardcain@snacktion.com",
      bvn: 99999999999,
      gender: "Female",
      maritalStatus: "Single",
      children: 0,
      typeOfResidence: "Dormitory",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Unemployed",
      sectorOfEmployment: "Healthcare",
      durationOfEmployment: "1 years",
      officeEmail: "woodardcain@snacktion.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦200,000",
    },
    bankDetails: {
      bankName: "Kineticut Bank",
      accountBalance: "₦10000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/CareyBritt",
      twitter: "https://twitter.com/LourdesAguirre",
      linkedin: "https://linkedin.com/in/GilliamAllen",
    },
    guarantor: {
      fullName: "Whitfield Galloway",
      relationship: "Colleague",
      phoneNumber: "+234 (853) 497-2756",
      email: "whitfieldgalloway@kineticut.com",
    },
  },
  {
    id: "6708e8833c6439336f790cf1",
    organization: "Combogene",
    userName: "EliseBell",
    email: "elisebell@combogene.com",
    phoneNumber: "+234 (897) 586-3746",
    date: "2021-09-17T04:59:20-01:00",
    status: "Pending",
    personalInformation: {
      fullName: "Amie Mack",
      phoneNumber: "+234 (931) 484-3163",
      emailAddress: "amiemack@combogene.com",
      bvn: 10000000000,
      gender: "Male",
      maritalStatus: "Single",
      children: 5,
      typeOfResidence: "Dormitory",
    },
    educationEmployment: {
      levelOfEducation: "PhD",
      employmentStatus: "Student",
      sectorOfEmployment: "Finance",
      durationOfEmployment: "1 years",
      officeEmail: "amiemack@combogene.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦50,000",
    },
    bankDetails: {
      bankName: "Zounds Bank",
      accountBalance: "₦10000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/AtkinsMerritt",
      twitter: "https://twitter.com/PowellGomez",
      linkedin: "https://linkedin.com/in/RachaelBridges",
    },
    guarantor: {
      fullName: "Doyle Welch",
      relationship: "Colleague",
      phoneNumber: "+234 (811) 572-3528",
      email: "doylewelch@zounds.com",
    },
  },
  {
    id: "6708e88354f89ad80a786a5c",
    organization: "Letpro",
    userName: "LouKent",
    email: "loukent@letpro.com",
    phoneNumber: "+234 (874) 569-2989",
    date: "2021-04-21T12:26:35-01:00",
    status: "Inactive",
    personalInformation: {
      fullName: "Claudia Knight",
      phoneNumber: "+234 (888) 575-3778",
      emailAddress: "claudiaknight@letpro.com",
      bvn: 10000000000,
      gender: "Female",
      maritalStatus: "Married",
      children: 5,
      typeOfResidence: "Apartment",
    },
    educationEmployment: {
      levelOfEducation: "PhD",
      employmentStatus: "Student",
      sectorOfEmployment: "Healthcare",
      durationOfEmployment: "30 years",
      officeEmail: "claudiaknight@letpro.com",
      monthlyIncomeRange: "₦200,001 - ₦400,000",
      loanRepayment: "₦150,000",
    },
    bankDetails: {
      bankName: "Viagreat Bank",
      accountBalance: "₦10000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/AlvarezHolland",
      twitter: "https://twitter.com/FordObrien",
      linkedin: "https://linkedin.com/in/LiliaSpencer",
    },
    guarantor: {
      fullName: "Thompson Norman",
      relationship: "Family",
      phoneNumber: "+234 (811) 426-3231",
      email: "thompsonnorman@viagreat.com",
    },
  },
];

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "organization",
    header: () => (
      <div>
        <span className="text-[#545F7D] text-sm font-semibold font-worksans uppercase">
          organization
        </span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("organization") as string;

      return (
        <div className="text-sm font-normal font-worksans text-[#545F7D]">
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "userName",
    header: () => (
      <div>
        <span className="text-[#545F7D] text-sm font-semibold font-worksans uppercase">
          Username
        </span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("userName") as string;
      return (
        <div className="text-sm font-normal font-worksans text-[#545F7D]">
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <div>
        <span className="text-[#545F7D] text-sm font-semibold font-worksans uppercase">
          Email
        </span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("email") as string;
      return (
        <div className="text-sm font-normal font-worksans text-[#545F7D]">
          {value}
        </div>
      );
    },
  },

  {
    accessorKey: "phoneNumber",
    header: () => (
      <div>
        <span className="text-[#545F7D] text-sm font-semibold font-worksans uppercase">
          Phone number
        </span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("phoneNumber") as string;
      return (
        <div className="text-sm font-normal font-worksans text-[#545F7D]">
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => (
      <div>
        <span className="text-[#545F7D] text-sm font-semibold font-worksans uppercase">
          Date joined
        </span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("date") as string;
      // Parse the ISO string into a Date object
      const parsedDate = parseISO(value);

      // Format the date into the desired format
      const formattedDate = format(parsedDate, "MMMM dd, yyyy hh:mm a");

      return (
        <div className="text-sm font-normal text-[#1F2937]">
          {formattedDate}
        </div>
      );
    },
  },

  {
    accessorKey: "status",
    header: () => (
      <div>
        <span className="text-[#545F7D] text-sm font-semibold font-worksans uppercase">
          Status
        </span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("status") as string;


      if (value === Status.ACTIVE) {
        return (
          <div className="flex justify-start">
             <div className="font-normal text-sm flex items-center justify-center rounded-full px-6 py-2.5 font-worksans text-[#39CD62] bg-opacity-[6%] bg-[#39CD62]">
            {value}
          </div>
          </div>
         
        );
      } else if (value === Status.INACTIVE) {
        return (
          <div className="flex justify-start">
 <div className="font-normal text-sm flex items-center justify-center rounded-full px-5 py-2.5 font-worksans text-[#545F7D] bg-opacity-[6%] bg-[#545F7D]">
            {value}
          </div>
          </div>
         
        );
      } else if (value === Status.BLACKLISTED) {
        return (
          <div className="flex justify-start">
              <div className="font-normal text-sm flex items-center justify-center rounded-full px-5 py-2.5 font-worksans text-[#E4033B] bg-opacity-[10%] bg-[#E4033B]">
            {value}
          </div>
          </div>
        
        );
      } else {
        return (
          <div className="flex justify-start">
 <div className="font-normal text-sm flex items-center justify-center rounded-full px-5 py-2.5 font-worksans  text-[#E9B200] bg-opacity-[10%] bg-[#E9B200]">
            {value}
          </div>
          </div>
         
        );
      }
    },
  },

  {
    accessorKey: "action",
    header: () => (
      <div>
        <span className="text-[#545F7D] text-sm font-semibold font-worksans uppercase">
          
        </span>
      </div>
    ),
    cell: ({ row }) => {
      const user = row.original;
      return <ColumnDropdownMenu user={user} />;
    },
  },
];
