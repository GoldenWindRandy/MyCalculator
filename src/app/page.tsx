
// "use client";
// import styles from "./page.module.css";
// import HeroIcon from "./heroIcon/heroIcon";
// import HeroPage from "./heroPage/heroPage";
// import hero_skill from "../consts/hero_skill.json";
// import { useState } from "react";

// export default function Home() {
// 	const heroNames = Object.keys(hero_skill);
// 	const [inIconPage, setInIconPage] = useState(true);
// 	const [currName, setCurrName] = useState("");
// 	const [searchKeyword, setSearchKeyword] = useState("");
// 	var flag = false;

// 	// 添加一个 showSearch 状态，用来控制搜索框的显示
// 	const [showSearch, setShowSearch] = useState(true);

// 	const handleClick = (value: boolean) => {
// 		setInIconPage(value);
// 		// 根据 value 参数来设置 showSearch 的值
// 		setShowSearch(value);
// 	};

// 	const filteredHeroes = heroNames.filter((name) =>
// 		name.toLowerCase().includes(searchKeyword.toLowerCase())
// 	);

// 	const ele = filteredHeroes.map((name) => {
// 		const heroInfo = (hero_skill as any)[name];
// 		const ename = heroInfo.ename;
// 		return (
// 			<HeroIcon
// 				onclick={() => {
// 					handleClick(false);
// 					setCurrName(name);
// 				}}
// 				ename={ename}
// 				name={name}
// 			></HeroIcon>
// 		);
// 	});
// 	return (
// 		<div className={styles.main_out}>
// 			<div className={styles.container}>
// 				{/* 根据 showSearch 的值来决定是否显示搜索框 */}
// 				{showSearch && (
// 					<div className={styles.search_bar}>
// 						<div className={styles.CompreFilestyle}>
// 							<input
// 								type="text"
// 								value={searchKeyword}
// 								onChange={(e) => setSearchKeyword(e.target.value)}
// 								placeholder="搜索英雄..."
// 								className={styles.input_box}
// 							/>
// 						</div>
// 					</div>
// 				)}
// 				<div className={styles.hero_icons}>
// 					{inIconPage ? (
// 						ele
// 					) : (
// 						<HeroPage
// 							name={currName}
// 							onclick={() => {
// 								handleClick(true);
// 							}}
// 						></HeroPage>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

"use client";
import styles from "./page.module.css";
import HeroIcon from "./heroIcon/heroIcon";
import HeroPage from "./heroPage/heroPage";
import hero_skill from "../consts/hero_skill.json";
import { useState } from "react";

export default function Home() {
	const heroNames = Object.keys(hero_skill);
	const [inIconPage, setInIconPage] = useState(true);
	const [currName, setCurrName] = useState("");
	const [searchKeyword, setSearchKeyword] = useState("");
	var flag = false;

	// 添加一个 showSearch 状态，用来控制搜索框的显示
	const [showSearch, setShowSearch] = useState(true);

	const handleClick = (value: boolean) => {
		setInIconPage(value);
		// 根据 value 参数来设置 showSearch 的值
		setShowSearch(value);
	};

	const filteredHeroes = heroNames.filter((name) =>
		name.toLowerCase().includes(searchKeyword.toLowerCase())
	);

	const ele = filteredHeroes.map((name) => {
		const heroInfo = (hero_skill as any)[name];
		const ename = heroInfo.ename;
		return (
			<HeroIcon
				onclick={() => {
					handleClick(false);
					setCurrName(name);
				}}
				ename={ename}
				name={name}
			></HeroIcon>
		);
	});
	return (
		<div className={styles.main_out}>
			<div className={styles.container}>
				{/* 根据 showSearch 的值来决定是否显示搜索框 */}
				{showSearch && (
					<div className={styles.search_bar}>
						<div className={styles.CompreFilestyle}>
							<input
								type="text"
								value={searchKeyword}
								onChange={(e) => setSearchKeyword(e.target.value)}
								placeholder="搜索英雄..."
								className={styles.input_box}
							/>
						</div>
					</div>
				)}
				<div className={styles.hero_icons}>
					{inIconPage ? (
						ele
					) : (
						<HeroPage
							name={currName}
							onclick={() => {
								handleClick(true);
							}}
						></HeroPage>
					)}
				</div>
			</div>
		</div >
	);
}
