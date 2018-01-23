var myChart1 = echarts.init(document.getElementById('chart1'));

option1 = {
    backgroundColor: '#2c343c',

    title: {
        text: '今日上传、下载量',
        left: 50,
        top: 20,
        textStyle: {
            color: '#fff'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'上传下载统计',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'今日上传'},
                {value:310, name:'今日下载'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)',
                         fontSize:16
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.6)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
	
	myChart1.setOption(option1);
	
	
	
	var myChart2 = echarts.init(document.getElementById('chart2'));
	
//	app.title = '多 X 轴示例';

var colors = ['#5793f3', '#d14a61', '#675bba'];

var dates=new Array();
var day1,s1;
for(var i=6;i>=0;i--){
	day1 = new Date();
	day1.setTime(day1.getTime()-24*60*60*1000*i);
	s1 = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();
	dates.push(s1);
}



option2 = {
    color: colors,

	title: {
        text: '近七天上传、下载总量',
//      subtext:'\n\n\n',
//      left: 50,
//      top: 20,
//      padding:[0,0,50,0],
        textStyle: {
            color: '#fff',
            height:50
        }
    },

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['下载总量', '上传总量'],
        textStyle:{
            		color:'#fff',
            		fontSize:16
        }
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '下载总量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: [dates[0],dates[1],dates[2],dates[3],dates[4],dates[5],dates[6]]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '上传总量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: [dates[0],dates[1],dates[2],dates[3],dates[4],dates[5],dates[6]]
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine:{
            	lineStyle:{
            		type:'solid',
            		color:'#1aa094'
            	}
            },
            axisLabel:{
            	textStyle:{
            		color:'#fff'
            	}
            }
        }
    ],
    series: [
        {
            name:'下载总量',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
        },
        {
            name:'上传总量',
            type:'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6]
        }
    ]
};
myChart2.setOption(option2);



var myChart3 = echarts.init(document.getElementById('chart3'));

var dataBJ = [
    [34,96,65,76,83,41,29]
    
];



var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option3 = {
    backgroundColor: '#2c343c',
    title: {
        text: '各类型视频总下载量',
//      left: 'center',
		left: 50,
//      top: 20,
        textStyle: {
            color: '#eee'
        }
    },
    tooltip: {},
    legend: {
        bottom: 5,
        data: ['下载总量'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    radar: {
        indicator: [
            {name: '类型', max: 100},
            {name: '类型', max: 100},
            {name: '类型', max: 100},
            {name: '类型', max: 100},
            {name: '类型', max: 100},
            {name: '类型', max: 100}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)'
                    
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '下载总量',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#F9713C'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
      
    ]
};

myChart3.setOption(option3);