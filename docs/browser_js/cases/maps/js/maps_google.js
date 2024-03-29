google.charts.load('current', {
    'packages': ['geochart'],
    // Note: Because markers require geocoding, you'll need a mapsApiKey.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawMarkersMap);

function drawMarkersMap() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'Population', 'Area'],
        ['Rome', 2761477, 1285.31],
        ['Milan', 1324110, 181.76],
        ['Naples', 959574, 117.27],
        ['Turin', 907563, 130.17],
        ['Palermo', 655875, 158.9],
        ['Genoa', 607906, 243.60],
        ['Bologna', 380181, 140.7],
        ['Florence', 371282, 102.41],
        ['Fiumicino', 67370, 213.44],
        ['Anzio', 52192, 43.43],
        ['Ciampino', 38262, 11]
    ]);

    var options = {
        region: 'IT',
        displayMode: 'markers',
        colorAxis: { colors: ['green', 'blue'] }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
};
