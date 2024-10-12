// GeneralDetails.tsx
import React from 'react';
import { User } from "@/types/api.type";
import styles from './GeneralDetails.module.scss';

type Props = {
  userInfo: User
}

export default function GeneralDetails({ userInfo }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Personal Information
        </h3>
        <div className={styles.grid}>
          <InfoItem label="Full Name" value={userInfo?.personalInformation.fullName} />
          <InfoItem label="Phone Number" value={userInfo?.personalInformation.phoneNumber} />
          <InfoItem label="Email Address" value={userInfo?.email} />
          <InfoItem label="BVN" value={userInfo?.personalInformation.bvn} />
          <InfoItem label="Gender" value={userInfo?.personalInformation.gender} />
          <InfoItem label="Marital Status" value={userInfo?.personalInformation.maritalStatus} />
          <InfoItem label="Children" value={userInfo?.personalInformation.children} />
          <InfoItem label="Type of Residence" value={userInfo?.personalInformation.typeOfResidence} />
        </div>
      </div>

      <div className={`${styles.section} ${styles.borderTop}`}>
        <h3 className={styles.sectionTitle}>
          Education and Employment
        </h3>
        <div className={styles.grid}>
          <InfoItem label="Level of Education" value={userInfo?.educationEmployment.levelOfEducation} />
          <InfoItem label="Employment Status" value={userInfo?.educationEmployment.employmentStatus} />
          <InfoItem label="Sector of Employment" value={userInfo?.educationEmployment.sectorOfEmployment} />
          <InfoItem label="Duration of Employment" value={userInfo?.educationEmployment.durationOfEmployment} />
          <InfoItem label="Office Email" value={userInfo?.educationEmployment.officeEmail} />
          <InfoItem label="Monthly Income" value={userInfo?.educationEmployment.monthlyIncomeRange} />
          <InfoItem label="Loan Repayment" value={userInfo?.educationEmployment.loanRepayment} />
        </div>
      </div>

      <div className={`${styles.section} ${styles.borderTop}`}>
        <h3 className={styles.sectionTitle}>Socials</h3>
        <div className={styles.grid}>
          <InfoItem label="Twitter" value={`@${userInfo?.socials.twitter.replace("https://twitter.com/", '')}`} />
          <InfoItem label="Facebook" value={userInfo?.socials.facebook.replace('https://facebook.com/', '')} />
          <InfoItem label="LinkedIn" value={userInfo?.socials.linkedin.replace('https://linkedin.com/in/', '')} />
        </div>
      </div>

      <div className={`${styles.section} ${styles.borderTop}`}>
        <h3 className={styles.sectionTitle}>Guarantor</h3>
        <div className={styles.grid}>
          <InfoItem label="Full Name" value={userInfo?.guarantor.fullName} />
          <InfoItem label="Phone Number" value={userInfo?.guarantor.phoneNumber} />
          <InfoItem label="Email Address" value={userInfo?.guarantor.email} />
          <InfoItem label="Relationship" value={userInfo?.guarantor.relationship} />
        </div>
      </div>
    </div>
  );
}

const InfoItem: React.FC<{ label: string; value?: string | number }> = ({ label, value }) => (
  <div className={styles.infoItem}>
    <h4 className={styles.label}>{label}</h4>
    <h3 className={styles.value}>{value}</h3>
  </div>
);