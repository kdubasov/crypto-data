import React, {useLayoutEffect, useState} from 'react';
import {ISparkline} from "../../../types/coins.ts";
import {Line, LineChart, YAxis} from "recharts";
import {EBsColors} from "../../../types/colors.ts";

interface ISmallGraph {
	data: ISparkline,
	width?: number,
	height?: number,
}

const SmallGraph: React.FC<ISmallGraph> = ({ data, width, height }) => {

	// data for graph
	const [graphData, setGraphData] = useState<{ value: number }[] | null>(null);

	// graph color
	const getGraphColor = (): undefined | EBsColors => {
		if (!graphData) return undefined;
		const lastBiggest = graphData[0].value <= graphData[graphData.length - 1].value;
		return lastBiggest ? EBsColors.GREEN : EBsColors.RED;
	}

	useLayoutEffect(() => {
		//set graph data
		if (data && data.price?.length) {
			setGraphData(data.price.map(elem => ({ value: elem })))
		}
	},[data]);

	if (!graphData) return 'Graph data not found!';

	return (
		<LineChart
			width={width || 200}
			height={height || 60}
			data={graphData}
		>
			<YAxis
				hide={true}
				//min and max graph values
				domain={['dataMin', 'dataMax']}
			/>
			<Line
				type="monotone"
				dataKey="value"
				stroke={getGraphColor()}
				strokeWidth={1.75}
				dot={false}
			/>
		</LineChart>
	);
};

export default SmallGraph;
