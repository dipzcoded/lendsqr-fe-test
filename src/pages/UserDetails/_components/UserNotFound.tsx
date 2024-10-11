import styles from './UserNotFound.module.scss'; // Import the SCSS module

export default function UserNotFound() {
  return (
    <div className={styles.container}>
      <span>User not found</span>
    </div>
  );
}
