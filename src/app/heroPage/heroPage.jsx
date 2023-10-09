import hero_skill from "../../consts/hero_skill.json";
import Skill from "./skill";
import HeroInfo from "./heroInfo";
import EquipInfo from "./equipInfo";
import SelectEquip from "./selectEquip";
import style from "./heroPage.module.css";

export default function HeroPage({ name, onclick }) {
	const hero_info = hero_skill[name];

	return (
		<div style={{ width: "100%", height: "200%" }}>
			<div
				className={style.pointer}
				style={{
					position: "absolute",
					top: "3rem",
					left: "4rem",
					width: "4rem",
					height: "2rem",
					textAlign: "center",
					lineHeight: "2rem",
					backgroundColor: "#0066CC",
					color: "white",
					borderRadius: "1rem",
				}}
				onClick={onclick}
			>
				返回
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					height: "24rem",
				}}
			>
				<HeroInfo
					hero_info={hero_info}
					name={name}
				></HeroInfo>
				<Skill skills={hero_info.skills}></Skill>
			</div>
			<EquipInfo hero_info={hero_info}></EquipInfo>
			<SelectEquip></SelectEquip>
		</div>
	);
}
