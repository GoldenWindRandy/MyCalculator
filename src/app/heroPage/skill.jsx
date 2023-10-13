"use client";
import style from "./heroPage.module.css";

import { useState } from "react";

const Skill = ({ skills }) => {
	const [skillName, setSkillName] = useState("");
	const [skillCost, setSkillCost] = useState("");
	const [skillCold, setSkillCold] = useState("");
	const [skillDesc, setSkillDesc] = useState("");

	const setSkill = (name, cost, cold, desc) => {
		setSkillName(name);
		setSkillCost(cost);
		setSkillCold(cold);
		setSkillDesc(desc);
	};
	return (
		<div
			style={{
				marginLeft: "32px",
				padding: "16px",
				border: "1px solid #e1e1e1"
			}}
		>
			{/* <h2>技能介绍</h2> */}
			<h2 style={{ color: "#ecc369" }}>技能介绍</h2>
			<ul
				style={{
					display: "flex",
					marginTop: "16px"
				}}
			>
				{skills.map((skill) => {
					if (!skill.name) {
						return null;
					}
					return (
						<li
							className={style.pointer}
							style={{
								listStyle: "none",
								borderRadius: "50%",
								width: "64px",
								height: "64px",
								margin: "auto 16px",
								boxSizing: "border-box",
							}}
							key={skill.name}
							onClick={(e) => {
								const li = e.target.closest("li");
								const ul = li.parentNode;
								const ulArr = Array.from(ul.children);
								ulArr.forEach((sibling) => {
									sibling.style.border = "";
								});
								li.style.border = "4px solid red";
								setSkill(
									skill.name,
									skill.cost,
									skill.cold,
									skill.desc
								);
							}}
						>
							<img
								style={{
									width: "100%",
									height: "100%",
									border: "50%",
								}}
								alt={skill.name}
								src={skill.src}
							></img>
						</li>
					);
				})}
			</ul>
			<div
				style={{
					marginTop: "32px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<b>{skillName}</b>
				<span>{skillCost}</span>
				<span>{skillCold}</span>
			</div>
			<div style={{
				maxWidth: "400px",
				marginTop: "32px"
			}}>{skillDesc}</div>
		</div>
	);
};

export default Skill;
