//Measure the window size dependet on different parameters
let w = window;
let doc = document;
let el = doc.documentElement;
let body = doc.getElementsByTagName('body')[0];
let width = w.innerWidth || el.clientWidth || body.clientWidth;
let height = w.innerHeight || el.clientHeight || body.clientHeight;
let centered;

let tooltip = d3.select('body').append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0);

let svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

svg.append('rect')      //Handle used to zoom out of the map if anyone clicks outside of the counties
  .attrs({
    'class': 'background',
    'width': width,
    'height': height
  })
  .on('click', clicked);
  
let g = svg.append('g');

let projection = d3.geoAlbersUsa(); //From the official D3-GEO api which centers on USA Data
let path = d3.geoPath()       //Generates a path for each element of the counties
  .projection(projection);

let zoomSettings = {
  duration: 1000,     //Larger number means slower zoom
  ease: d3.easeCubicOut,
  zoomLevel: 5        //Higher number the closer is the zoom
};

function clicked(d) {
  let x, y, zoomLevel;
  console.log('Click: ', d);

  if (d && centered !== d) {
    let centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    zoomLevel = zoomSettings.zoomLevel;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    zoomLevel = 1;
    centered = null;
  }

  g.transition()
    .duration(zoomSettings.duration)
    .ease(zoomSettings.ease)
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + zoomLevel + ')translate(' + -x + ',' + -y + ')');
}

d3.json('data/final.json', function(error, data) {
  if (error) {
    return console.error(error);
  }

  let counties = topojson.feature(data, data.objects.counties).features;
  console.log("Data: ", data, "Counties: ", counties);

  let meanDensity = d3.mean(counties, function(d) {
    return d.properties.density;
  });

  let scaleDensity = d3.scaleQuantize()
    .domain([0, meanDensity])
    .range([0, 0.2, 0.4, 0.6, 0.8, 1]);

  let color = d3.scaleSequential(d3.interpolateReds);    //Creates different stages of red based on density

  g.append('g')
    .attr('class', 'county')
    .selectAll('path')
    .data(counties)
    .enter()
    .append('path')
    .attrs({
      'd': path,
      'class': 'county',
      'stroke': 'grey',
      'stroke-width': 0.3,
      'cursor': 'pointer',
      'fill': function(d) {         //Colors the counties based on denisty
        let countyDensity = d.properties.density;
        let density = countyDensity ? countyDensity : 0;    //Means if data is missing turn it to default 0
        return color(scaleDensity(density));
      }
    })
    .on('click', clicked)
    .on('mouseover', function(d) {
      tooltip.transition()
        .duration(200)
        .style('opacity', .9);
      tooltip.html(d.properties.county + '<br />' + d.properties.density)
        .styles({
          'left': (d3.event.pageX) + 'px',
          'top': (d3.event.pageY) + 'px'
        })
    })
    .on('mouseout', function(d) {
      tooltip.transition()
        .duration(300)
        .style('opacity', 0);
    });

    let legendContainerSettings = {     //Object for the Legend which dynamically adjusts
      x: width * 0.03,    //3% of the width
      y: height * 0.82,    //82% of the height
      width: 350,
      height: 90,
      roundX: 10,
      roundY: 10
    }

    let legendContainer = svg.append('rect')
      .attrs({
        'x': legendContainerSettings.x,
        'y': legendContainerSettings.y,
        'rx': legendContainerSettings.roundX,
        'ry': legendContainerSettings.roundY,
        'width': legendContainerSettings.width,
        'height': legendContainerSettings.height,
        'id': 'legend-container'
      });

      let legendBoxSettings = {
        width: 50,
        height: 15,
        y: legendContainerSettings.y + 55
      };

      //6 Different shades of red
      let legendData = [0, 0.2, 0.4, 0.6, 0.8, 1];
      let legend = svg.selectAll('g.legend')
        .data(legendData)
        .enter().append('g')
        .attr('class', 'legend');

      //Add a rect for each color
      legend.append('rect')
        .attrs({
          'x': function(d, i) {
            return legendContainerSettings.x + legendBoxSettings.width * i + 20;
          },
          'y': legendBoxSettings.y,
          'width': legendBoxSettings.width,
          'height': legendBoxSettings.height
        })
        .styles({
          'fill': function(d, i) { return color(d); },
          'opacity': 1
        });

      //Add format function for adjust the data into appropriate format
      const formatDecimal = d3.format('.1f');

      //Returns the population density of current color scale
      function getPopDensity(rangeValue) {
        return formatDecimal(scaleDensity.invertExtent(rangeValue)[1]);
      }

      let legendLabels = [
        '<=' + getPopDensity(0),
        '>' + getPopDensity(0),
        '>' + getPopDensity(0.2),
        '>' + getPopDensity(0.4),
        '>' + getPopDensity(0.8),
        '>' + getPopDensity(1)
      ];

      legend.append('text')
        .attrs({
          'x': function(d, i) {
            return legendContainerSettings.x + legendBoxSettings.width * i + 30;
          },
          'y': legendContainerSettings.y + 52
        })
        .style('font-size', 12)
        .text(function(d, i) { return legendLabels[i]; });

      legend.append('text')
        .attrs({
          'x': legendContainerSettings.x + 13,
          'y': legendContainerSettings.y + 29,
          'id': 'mapTitle'
        })
        .styles({
          'font-weight': 'bold'
        })
        .text('Population Density by County (pop/square mile)')
});
