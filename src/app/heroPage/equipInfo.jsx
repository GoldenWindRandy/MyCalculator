import { color } from "echarts";
import item from "../../consts/item_dict.json";

const EquipInfo = ({ hero_info }) => {

	const handleEquipShow = (e, id, show = false) => {
		const equip_container = e.target.closest(".equip_container");
		const equip_info = equip_container.querySelector(`.equip-${id}`);
		if (show) {
			equip_info.style.opacity = 1;
			equip_info.style.top = "50%";
			equip_info.style.right = "100%";
		} else {
			equip_info.style.opacity = 0;
			equip_info.style.top = "-10000px";
			equip_info.style.right = "-10000px";
		}
	};

	return (
		<div
			style={{
				padding: "16px",
				marginTop: "96px",
				paddingLeft: "96px",
				border: "1px solid #e1e1e1"
			}}
		>
			{/* <div>推荐出装</div> */}
			<h3 style={{ color: "#ecc369" }}>推荐出装</h3>
			<div
				style={{
					display: "flex",
					marginTop: "48px",
				}}
			>
				{hero_info.equips.map((equipId) => {
					const equip = item[equipId];
					return (
						<div key={`equip:${equipId}`}>
							<div
								style={{
									margin: "auto 32px",
									position: "relative",
								}}
								onMouseEnter={(e) => {
									handleEquipShow(e, equipId, true);
								}}
								onMouseLeave={(e) => {
									handleEquipShow(e, equipId, false);
								}}
								className="equip_container"
							>
								<img
									style={{
										width: "4rem",
										height: "4rem",
										borderRadius: "50%",
									}}
									src={`//game.gtimg.cn/images/yxzj/img201606/itemimg/${equipId}.jpg`}
								/>
								<div
									className={`equip-${equipId}`}
									style={{
										width: "200px",
										position: "absolute",
										top: "-10000px",
										right: "-10000px",
										opacity: 0,
										backgroundColor: "rgba(0, 0, 0, 0.6)",
										padding: "16px",
									}}
								>
									<div
										style={{
											display: "flex",
											marginBottom: "16px"
										}}
									>
										<img
											style={{
												width: "4rem",
												height: "4rem",
												borderRadius: "50%",
											}}
											src={`//game.gtimg.cn/images/yxzj/img201606/itemimg/${equipId}.jpg`}
										/>
										<div style={{
											marginLeft: "16px"
										}}>
											<h3 style={{ color: "#23ff28" }}>
												{equip.item_name}
											</h3>
											<h4 style={{ color: "#da951c" }}>
												{equip.total_price}
											</h4>
										</div>
									</div>
									<div
										style={{ color: "#369ff9" }}
										dangerouslySetInnerHTML={{
											__html: equip.des1,
										}}
									/>
									<div
										style={{ color: "#369ff9" }}
										dangerouslySetInnerHTML={{
											__html: equip.des2 || "",
										}}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default EquipInfo;
