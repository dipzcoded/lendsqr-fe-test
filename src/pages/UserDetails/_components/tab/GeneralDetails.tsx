import { User } from "@/types/api.type";

type Props = {
  userInfo:User
}

export default function GeneralDetails({userInfo}:Props) {
  return (
    <div className="flex flex-col gap-10 font-worksans divide-y-[1px] divide-[#213F7D] divide-opacity-[10%]">
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-[#213F7D] text-base ">
          Personal Information
        </h3>
        <div className="grid grid-cols-auto-fit-minmax gap-8 sm:gap-8">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              full Name
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.personalInformation.fullName}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Phone Number
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.personalInformation.phoneNumber}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Email Address
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.email}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Bvn
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.personalInformation.bvn}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Gender
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.personalInformation.gender}</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Marital status
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.personalInformation.maritalStatus}</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Children
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.personalInformation.children}</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Type of residence
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.personalInformation.typeOfResidence}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-3 sm:py-4">
        <h3 className="font-medium text-[#213F7D] text-base ">
          Education and Employment
        </h3>
        <div className="grid grid-cols-auto-fit-minmax-2 gap-8 sm:gap-6">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              level of education
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.educationEmployment.levelOfEducation}</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              employment status
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.educationEmployment.employmentStatus}</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              sector of employment
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.educationEmployment.sectorOfEmployment}</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Duration of employment
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.educationEmployment.durationOfEmployment}</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              office email
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.educationEmployment.officeEmail}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Monthly income
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
             {userInfo?.educationEmployment.monthlyIncomeRange}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              loan repayment
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.educationEmployment.loanRepayment}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-3 sm:py-4">
        <h3 className="font-medium text-[#213F7D] text-base ">Socials</h3>
        <div className="grid grid-cols-auto-fit-minmax gap-8 sm:gap-4">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Twitter
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
            @{userInfo?.socials.twitter.replace("https://twitter.com/",'')}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Facebook
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.socials.facebook.replace('https://facebook.com/','')}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Linkedin
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.socials.linkedin.replace('https://linkedin.com/in/','')}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-3 sm:py-4">
        <h3 className="font-medium text-[#213F7D] text-base ">Guarantor</h3>
        <div className="grid grid-cols-auto-fit-minmax gap-8 sm:gap-4">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              full Name
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.guarantor.fullName}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Phone Number
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
              {userInfo?.guarantor.phoneNumber}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Email Address
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">
             {userInfo?.guarantor.email}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-normal text-sm text-[#545F7D] uppercase">
              Relationship
            </h4>
            <h3 className="font-medium text-base text-[#545F7D]">{userInfo?.guarantor.relationship}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
