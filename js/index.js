// 柱状图1模块
(function(){
  var myChart = echarts.init(document.querySelector(".bar .chart"));
    myChart.showLoading()
  $.get("/data/bar.json",function(ret){
    myChart.hideLoading()
  var option = {
      title: {
        text: '2020年主要流动资产的构成情况（单位：亿元）',
        textStyle:{
            color :"#1950c4",
            fontSize:14
        }
      },
      tooltip: {},
      grid:{
        left:"0%",
        right:"0%",
        bottom:"0%",
        top:"24%",
        containLabel:true
      },
      legend: {
        data: ['资产']
      },
      xAxis: {
        data: ['货币资金', '存货', '应收账款', '固定资产'],
        axisLine: {
          lineStyle: {
            width: 2,
            color:'#e3e0e0'
          }
        },
        axisLabel: {
          fontSize: 12
        }
      },
      yAxis: {
          show: true,
          axisLine: {
              lineStyle: {
                width: 0.5,
                color:'#e3e0e0'
              }
            },
            axisLabel: {
              fontSize: 14
            }
      },
      series: [
        {
          type: 'bar',
          data: ret
         
      }
      ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    })
})();

// 折线图定制
(function() {
  
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));
  myChart.showLoading()


  $.get("/data/line.json",function(ret){
    myChart.hideLoading()
           var data =ret;


           var option = {
             // 通过这个color修改两条线的颜色
             color: ["#00f2f1", "#ed3f35"],
             tooltip: {
               trigger: "axis"
             },
             legend: {
               // 如果series 对象有name 值，则 legend可以不用写data
               // 修改图例组件 文字颜色
               textStyle: {
                 color: "#4c9bfd"
               },
               // 这个10% 必须加引号
               right: "10%"
             },
             grid: {
               top: "5%",
               left: "8%",
               right: "8%",
               bottom: "8%",
               show: true, // 显示边框
               borderColor: "#012f4a", // 边框颜色
               containLabel: true // 包含刻度文字在内
             },
         
             xAxis: {
               type: "category",
               boundaryGap: false,
               data: [
                 "2018年",
                 "2019年",
                 "2020年"
               ],
               axisTick: {
                 show: false // 去除刻度线
               },
               axisLabel: {
                 color: "#4c9bfd" // 文本颜色
               },
               axisLine: {
                 show: false // 去除轴线
               }
             },
             yAxis: {
               type: "value",
               axisTick: {
                 show: false // 去除刻度线
               },
               axisLabel: {
                 color: "#4c9bfd" // 文本颜色
               },
               axisLine: {
                 show: false // 去除轴线
               },
               splitLine: {
                 lineStyle: {
                   color: "#012f4a" // 分割线颜色
                 }
               }
             },
             series: [
               {
               
                 type: "line",
                 // true 可以让我们的折线显示带有弧度
               /*   smooth: true, */
                 data: data[0]
               }
               
             ]
           };
         
           // 3. 把配置给实例对象
           myChart.setOption(option);
           // 4. 让图表跟随屏幕自动的去适应
           window.addEventListener("resize", function() {
             myChart.resize();
           });

           // 5.点击切换效果
           $(".line  .line-a").on("click", "a", function() {
            
             // 点击 a 之后 根据当前a的索引号 找到对应的相关对象
             
             var obj = $(this).index();
             option.series[0].data = data[obj];
           
             // 需要重新渲染
             myChart.setOption(option);
           });


  })



})();


// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  myChart.showLoading();
  
  $.get("/data/line2.json",function(ret){
myChart.hideLoading();
    option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['原材料', '消耗性生物资产', '库存商品'],
        textStyle: {
  
          color:["red","blue","yellow"]
        }
      },
      grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        },
        top:"8%",
        right:"5%"
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017', '2018', '2019', '2020'],
        axisLine:{
          lineStyle: {
            width: 2,
            color:'#e3e0e0'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            width: 0.5,
            color:'#e3e0e0'
          }
        },
      },
      series: [
        {
          name: '消耗性生物资产',
          type: 'line',
          stack: 'Total',
          color:"red",
          data: ret[0]
        },
        {
          name: '原材料',
          type: 'line',
          stack: 'Total',
          color:"blue",
          data: ret[1]
        },
        {
          name: '库存商品',
          type: 'line',
          stack: 'Total',
          color:"yellow",
          data: ret[2]
        },
       
    
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })

})();
// 右一饼图
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie3 .chart"));
  myChart.showLoading();
  
  $.get("/data/pie3.json",function(ret){
myChart.hideLoading();
    option = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: '营收数据',
          type: 'pie',
          radius: '50%',
          data: ret,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              fontSize:16,
              shadowColor: 'rgba(0, 0, 0, 1)'
            }
          }
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })
})();
// 折线图 
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  myChart.showLoading();
  $.get("/data/line1.json",function(ret){
       myChart.hideLoading();


    option = {
      color:["red","blue","yellow"],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['2018', '2019', '2020'],
        textStyle: {
  
          color:["red","blue","yellow"]
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        },
        top:"0%",
        right:"5%"
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top:"20%",
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine:{
            lineStyle: {
              width: 2,
              color:'#e3e0e0'
            }
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            interval: 1,
            length: 15
          },
          data: ['现金比率', '到期债务本息偿付比率', '核心利润获现率', '收入现金比率']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine:{
            lineStyle: {
              width: 0.5,
              color:'#e3e0e0'
            }
          }
        }
      ],
      series: [
        {
          name: '2018',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data:ret[0]
        },
        {
          name: '2019',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: ret[1]
        },
        {
          name: '2020',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data:ret[2]
        }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })


})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar1  .chart"));
  myChart.showLoading();
  // 2. 指定配置项和数据
$.get("/data/bar1.json",function(ret){
myChart.hideLoading();

  option = {
    color:["red","green","yellow","pink","blue","#748ede","#ea7ccc","#aad5e6","#fc8452","#9a60b4"],
    tooltip: {
      trigger: 'axis',
     
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      textStyle: {
  
        color:["red","blue","yellow"]
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLine:{
        lineStyle: {
          width: 2,
          color:'#e3e0e0'
        }
      },
    },
    yAxis: {
      type: 'category',
      data: ['光明乳业', '伊利集团'],
      axisLine:{
        lineStyle: {
          width: 1,
          color:'#e3e0e0'
        }
      },
    },
    series: [
      {
        name: '流动比率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: ret[0]
      },
      {
        name: '速动比率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: ret[1]
      },
      {
        name: '资产负债率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data:ret[2]
      },
      {
        name: '权益乘数',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: ret[3]
      },
      {
        name: '存货周转率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: ret[4]
      },
       {
        name: '总资产周转率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data:ret[5]
      },
       {
        name: '销售净利率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: ret[6]
      },
       {
        name: '总资产报酬率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: ret[7]
      }, {
        name: '毛利率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: ret[8]
      },
       {
        name: '应收账款周转率',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: ret[9]
      }
    ]
  };
  
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 图表调用 resize这个方法
    myChart.resize();
  });
})


})();




(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  myChart.showLoading();

  $.get("/data/pie2.json",function(ret){
myChart.hideLoading();


    option = {
      color:["#ff915a","#a376b7","yellow"],
      legend: {
        top: 'bottom',
        textStyle: {
    
          color:["red","blue","yellow"]
        }
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [25, 100],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data:ret
        }
      ]
    };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
  })
  
  
  
})();

