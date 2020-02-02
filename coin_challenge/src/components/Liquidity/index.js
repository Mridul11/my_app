import React,{ Component } from 'react'

import CanvasJSReact  from '../../canvasjs.react' ;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Liquidity extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
    }
    
    renderData = (data) => {
        return data ? data.map(val => ({
            "name" : val.name,
            "x": Math.floor(val.quote.USD.market_cap),
            "y" :val.quote.USD.volume_24h,
            "price_change": val.quote.USD.percent_change_24h
            }) ) : [] 
    }

	render() {
        console.log(this.props.chartData.data)
        console.log(
            this.renderData(this.props.chartData.data ? this.props.chartData.data.slice(100) : [])
        )
        const options = {
            height: 500,
			theme: "light2",
			animationEnabled: true,
			title: {
				text: "CoinMarket App"
			},
			axisX: {
				title: "Market Cap"
			},
			axisY: {
				title: "Volume",
			},
			
			data: [{
                height: 1000, 
				type: "scatter",
				markerType: "cross",
				showInLegend: false,
				toolTipContent: "<span style=\"color:#4F81BC \">{name}</span><br>Markt Cap: {x}<br> Volume: {y}% <br> price change {price_change} ",
				dataPoints: 
                    this.renderData(this.props.chartData.data ? this.props.chartData.data : [])
			},
			]
		}
		return (
		<div className="ui container">
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Liquidity ;