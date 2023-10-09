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

	const handleClick = (value: boolean) => {
		setInIconPage(value);
	};

	const ele = heroNames.map((name) => {
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
			<main className={styles.main}>
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
			</main>
		</div>
	);
}
