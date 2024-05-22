import styles from "../Main/styles.module.css";

const Main = () => {
	const handleLogout = () => {
		
		
	};

	return (
		<div className={styles.main_container}>
		<nav className={styles.navbar}>
			<button className={styles.white_btn} onClick={handleLogout}>
				Logout
			</button>
		</nav>
		</div>
	);
};

export default Main;
