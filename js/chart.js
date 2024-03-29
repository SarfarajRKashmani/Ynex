var options = {
  series: [1624, 1267, 1153, 679],
  chart: {
    type: "donut",
    width:'100%',
  },
  dataLabels: {
    enabled: false
  },
  fill:{
    colors:['#845ADF','#23B7E5','#F5B848','#03CD94']
  },
  stroke: {
    width: 0,
  },
  legend: {
    position: "bottom",
    colors:['#ffffff'],
  }, 

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



// chart 2 


var options = {
    series: [{
    name: 'Sales',
    data: [310, 400, 280, 510, 420, 109, 100],
    
  }, {
    name: 'revenue',
    data: [110, 320, 450, 302, 340, 502, 401]
  }, {
    name: 'profit',
    data: [110, 320, 450, 732, 304, 520, 410],
    
  },],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'month',
    categories: ["jan", "feb", "mar", "apr", "may", "jun", "july",'aug','sep','oct','nov','dec']
  },
  yaxis: {
    categories: ["0", "200", "400", "600", "800", "1000"]
  },
  colors: ['#7B55CD', '#23B7E5', '#ffffff1a'],
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0,
      opacityTo: 0.2,
      stops: [0, 100, 100, 100]
    }
  },
  
  stroke: {
    width: [2, 2, 0],
    curve: 'smooth',
    dashArray: [0, 8, 5]
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();


// chart3 



var options = {
  series: [
  {
    name: 'Q1 Budget',
    group: 'budget',
    data: [44000, 55000, 41000, 67000, 22000, 43000]
  },
  {
    name: 'Q1 Actual',
    group: 'actual',
    data: [48000, 50000, 40000, 65000, 25000, 40000]
  },
],
  chart: {
  type: 'bar',
  height: 200,
  width:'100%',
  stacked: true,
},


stroke: {
  width: 0,
  colors: ['#fff']
},
dataLabels: {
  formatter: (val) => {
    return ;
  }
},
plotOptions: {
  bar: {
    borderRadius: 0,
    horizontal: false
  }
},
xaxis: {
  categories: [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
  ]
},
fill: {
  opacity: 1
},
colors: ['#7B55CD', '#ffffff'],
yaxis: {
  labels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  }
},
legend: {
  position: 'top',
  horizontalAlign: 'left'
}
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();


