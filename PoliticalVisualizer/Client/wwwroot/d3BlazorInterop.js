window.d3Blazor = {
    test: function () {
        var map = d3.choropleth()
            .geofile('https://d3-geomap.github.io/d3-geomap/topojson/countries/USA.json')
            .projection(d3.geoAlbersUsa)
            .column('2012')
            .unitId('fips')
            .scale(1000)
            .legend(true);

        d3.csv('https://d3-geomap.github.io/data/venture-capital.csv').then(data => {
            map.draw(d3.select('#map').datum(data));
        });
        //map.draw(d3.select('#map'));
    }
};