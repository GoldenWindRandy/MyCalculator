import style from "./heroIcon.module.css"

export default function HeroIcon({ ename, name, onclick }) {

	return (
		<div
			onClick={onclick}
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "16px",
			}}
			className={style.icon}
		>
			<div
				style={{
					width: "100px",
					height: "100px",
					border: "2px solid black",
					borderColor: "#407e8b",
					borderRadius: "50%",
					margin: "16px",
					background: `url(//game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}-smallskin-1.jpg)`,
					backgroundSize: "cover",
				}}
			></div>
			<span>{name}</span>
		</div>
	);
}
