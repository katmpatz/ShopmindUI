window.onload = function() {
  var popCanvas = document.getElementById("popChart");
  Chart.defaults.global.defaultFontFamily = "Century Gothic";
  Chart.defaults.global.defaultFontSize = 11.5;
 var popData = {
 datasets: [
 { label: 'meal (vegetables) and prepared meal (stock) (6.48%)',
data: [
{
x: 35.4112, y: 16.6428,r:16.2
}
 ],
backgroundColor: "#c2d1f0",
hoverBackgroundColor: "#cccccc",

},{ label: 'baby care and breakfast (6.5%)',
data: [
{
x: 19.8823, y: 9.1304,r:16.25
}
 ],
backgroundColor: "#ffcccc",
hoverBackgroundColor: "#cccccc"
},{ label: 'beverages (7.05%)',
data: [
{
x: 15.0944, y: 6.6546,r:17.63
}
 ],
backgroundColor: "#e6e6e6",
hoverBackgroundColor: "#cccccc"
},{ label: 'Confectionary (7.54%)',
data: [
{
x: 20.9420, y: 11.6957,r:18.85
}
 ],
backgroundColor: "#ffe0b3",
hoverBackgroundColor: "#cccccc"
},{ label: 'house cleaning and toast (stock) (7.56%)',
data: [
{
x: 43.0121, y: 19.4156,r:18.9
}
 ],
backgroundColor: "#ff99e6",
hoverBackgroundColor: "#cccccc"
},{ label: 'toast and Confectionary (stock) (7.59%)',
data: [
{
x: 34.3831, y: 17.2277,r:18.98
}
 ],
backgroundColor: "#85a3e0",
hoverBackgroundColor: "#cccccc"
},{ label: 'Confectionary (8.59%)',
data: [
{
x: 11.5617, y: 6.7102,r:21.48
}
 ],
backgroundColor: "#ff8080",
hoverBackgroundColor: "#cccccc"
},{ label: 'toast and prepared meal (8.72%)',
data: [
{
x: 17.7075, y: 7.6694,r:21.8
}
 ],
backgroundColor: "#bfbfbf",
hoverBackgroundColor: "#cccccc"
},{ label: 'meal (pasta) and meal (vegetables) (9.19%)',
data: [
{
x: 12.3460, y: 6.5432,r:22.98
}
 ],
backgroundColor: "#ffc266",
hoverBackgroundColor: "#cccccc"
},{ label: 'house cleaning and personal care (9.75%)',
data: [
{
x: 18.1850, y: 6.7716,r:24.38
}
 ],
backgroundColor: "#ff4d94",
hoverBackgroundColor: "#cccccc"
},{ label: 'meal (vegetables) and meal (meat) (10.42%)',
data: [
{
x: 12.3695, y: 5.7620,r:26.05
}
 ],
backgroundColor: "#4775d1",
hoverBackgroundColor: "#cccccc"
}, ]
};
var chartOptions = {
 legend: {
 display: true,
  position: 'bottom', labels: { boxWidth: 20, boxborder:0, fontColor: 'black' }}, scales: { xAxes: [{ gridLines: { display: true, },
    scaleLabel: { display: true, labelString: "AVG basket value (euros)", fontColor: "grey"}  }], yAxes: [{  gridLines: {  }, scaleLabel: { display: true,  labelString: "AVG basket size (items)", fontColor: "grey" }  }] } };

  var bubbleChart = new Chart(popCanvas, {
        type: 'bubble',
        data: popData
            ,options: chartOptions
        });
    };
