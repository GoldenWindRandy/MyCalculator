import item from "../../consts/item.json";
import itemDetail from "../../consts/equip_detail.json";
import { useState, useRef } from "react";
import style from "./heroPage.module.css";

const equips = {};
item.forEach((equip) => {
	const type = equip.item_type;
	if (!equips[type]) {
		equips[type] = [];
	}
	equips[type].push(equip);
});

const SelectEquip = () => {
	const [equipType, setEquipType] = useState(1);
	const [selectEquips, setSelecrEquips] = useState(new Array(6).fill(false));
	const [curEquip, setCurEquip] = useState({});
	const [power, setPower] = useState(0);

	const handleSetType = (i) => {
		if (i === 5) i = 6;
		setEquipType(i + 1);
	};

	const handleSelectEquip = (equip) => {
		const selected = JSON.parse(JSON.stringify(selectEquips));
		for (let index = 0; index < selected.length; index++) {
			if (!selected[index]) {
				selected[index] = equip;
				break;
			}
		}
		calcPower(selected);
		setSelecrEquips(selected);
	};

	const handleUnSelectEquip = (equip, i) => {
		const selected = JSON.parse(JSON.stringify(selectEquips));
		let index = 0;
		let shouldRemove = false;
		for (; index < selected.length; index++) {
			if (selected[index].item_id === equip.item_id && i === index) {
				shouldRemove = true;
				break;
			}
		}
		if (shouldRemove) {
			selected[index] = false;
		}
		calcPower(selected);
		setSelecrEquips(selected);
	};

	const calcPower = (selected) => {
		let curPower = 0;
		selected.forEach((equip) => {
			if (equip) {
				const detail = itemDetail[equip.item_name];
				if (detail) {
					detail.info.attribute.forEach((info) => {
						let value = info.value;
						if (info.attribute === "health") {
							value /= 60;
						}
						if (info.attribute === "mana") {
							value /= 10;
						}
						if (info.attribute === "armor") {
							value /= 6;
						}
						if (info.unit === "point") {
							curPower += parseInt(value) || 0;
						} else if (info.unit === "percent") {
							curPower *= (parseInt(value) + 100) / 100 || 1;
							curPower += (parseInt(value) || 0) / 2;
						}
					});
				} else {
					curPower += equip.total_price / 100;
				}
			}
		});
		setPower(parseInt(curPower.toFixed(0)));
	};

	const handleShowEquipInfo = (equip) => {
		if (equip) setCurEquip(equip);
		else setCurEquip({});
	};

	return (
		<div
			style={{
				height: "400px",
				display: "flex",
				marginTop: "96px",
				padding: "16px",
				border: "1px solid #e1e1e1",
			}}
		>
			<div
				style={{
					flex: 1,
					display: "flex",
				}}
			>
				<div
					style={{
						width: "78px",
						height: "100%",
						border: "1px solid #e1e1e1",
					}}
				>
					<ul>
						{["攻击", "法术", "防御", "移动", "打野", "辅助"].map(
							(type, i) => {
								return (
									<li
										style={{
											listStyle: "none",
											height: "40px",
											textAlign: "center",
											lineHeight: "40px",
											boxSizing: "border-box",
											userSelect: "none",
										}}
										key={type}
										className={style.pointer}
										onClick={(e) => {
											handleSetType(i);
											const li = e.target.closest("li");
											const ul = li.parentNode;
											const ulArr = Array.from(
												ul.children
											);
											ulArr.forEach((sibling) => {
												sibling.style.border = "";
											});
											li.style.border = "1px solid red";
										}}
									>
										{type}
									</li>
								);
							}
						)}
					</ul>
				</div>
				<div
					style={{
						flex: 1,
						padding: "16px",
						overflow: "scroll",
						overflowX: "hidden",
						display: "flex",
						flexWrap: "wrap",
					}}
				>
					{equips[equipType].map((equip) => {
						return (
							<div
								style={{
									width: "64px",
									height: "96px",
									margin: "16px",
								}}
								key={equip.item_id}
								className={style.pointer}
								onClick={() => {
									handleSelectEquip(equip);
								}}
							>
								<img
									style={{
										width: "64px",
										height: "64px",
									}}
									src={`//game.gtimg.cn/images/yxzj/img201606/itemimg/${equip.item_id}.jpg`}
								></img>
								<span>{equip.item_name}</span>
							</div>
						);
					})}
				</div>
			</div>
			<div
				style={{
					flex: 1,
					padding: "16px",
				}}
			>
				<div>
					<div>左键查看装备信息，右键取消选中</div>
					<ul
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "16px",
						}}
					>
						{selectEquips.map((equip, i) => {
							return (
								<li
									key={equip.item_name + i || "equip" + i}
									style={{
										listStyle: "none",
									}}
									onContextMenu={(e) => {
										e.preventDefault();
										handleUnSelectEquip(equip, i);
									}}
									onClick={(e) => {
										const li = e.target.closest("li");
										const ul = li.parentNode;
										const ulArr = Array.from(ul.children);
										ulArr.forEach((sibling) => {
											sibling.style.border = "";
										});
										li.style.borderBottom = "4px solid red";
										handleShowEquipInfo(equip);
									}}
								>
									{equip.item_id ? (
										<img
											style={{
												width: "64px",
												height: "64px",
											}}
											src={`//game.gtimg.cn/images/yxzj/img201606/itemimg/${equip.item_id}.jpg`}
										></img>
									) : (
										<div
											style={{
												width: "64px",
												height: "64px",
												backgroundColor: "#999",
											}}
										></div>
									)}

									<div style={{ height: "32px" }}>
										{equip.item_name || ""}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<div
					style={{
						marginTop: "16px",
						padding: "16px",
					}}
				>
					<div
						style={{
							border: "1px solid #e1e1e1",
							padding: "16px",
						}}
					>
						<h3 style={{ color: "#23ff28" }}>
							{curEquip.item_name}
						</h3>
						<h4 style={{ color: "#da951c" }}>
							{curEquip.total_price}
						</h4>
						<div
							style={{ color: "#369ff9" }}
							dangerouslySetInnerHTML={{
								__html: curEquip.des1,
							}}
						/>
						<div
							style={{ color: "#369ff9" }}
							dangerouslySetInnerHTML={{
								__html: curEquip.des2 || "",
							}}
						/>
					</div>
					<div
						style={{
							marginTop: "24px",
						}}
					>
						DPS：{power}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectEquip;
