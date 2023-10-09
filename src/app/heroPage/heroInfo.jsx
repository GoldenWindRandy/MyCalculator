import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function HeroInfo({ hero_info, name }) {
	const chartRef = useRef(null);
	useEffect(() => {
		const myChart = echarts.init(chartRef.current);

		myChart.setOption({
			radar: {
				indicator: [
					{ name: "生存能力", max: 100 },
					{ name: "攻击伤害", max: 100 },
					{ name: "技能效果", max: 100 },
					{ name: "上手难度", max: 100 },
				],
				name: {
					textStyle: {
						color: "black", // 设置雷达图中坐标轴标签的颜色
					},
				},
			},
			series: [
				{
					name: "Budget vs spending",
					type: "radar",
					data: [
						{
							value: hero_info.fiveD,
							name: "Allocated Budget",
						},
					],
				},
			],
		});

		return () => {
			myChart.dispose(); // 在组件卸载时销毁图表实例
		};
	}, []);

	return (
		<div
			style={{
				width: "50%",
				padding: "16px",
				border: "1px solid #e1e1e1",
			}}
		>
			<div
				style={{
					display: "flex",
				}}
			>
				<img
					style={{
						width: "64px",
						height: "64px",
					}}
					src={`//game.gtimg.cn/images/yxzj/img201606/heroimg/${hero_info.ename}/${hero_info.ename}-smallskin-1.jpg`}
					alt={`${name}`}
				></img>
				<div
					style={{
						marginLeft: "32px",
					}}
				>
					<h2
						style={{
							color: "#f3c258",
						}}
					>
						{hero_info.title}
					</h2>
					<div>{name}</div>
				</div>

				<div
					ref={chartRef}
					style={{
						width: "350px",
						height: "256px",
					}}
				></div>
			</div>
		</div>
	);
}
