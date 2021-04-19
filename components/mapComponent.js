import React, { useRef, useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker, Popup, ZoomControl } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import dynamic from 'next/dynamic';

const zoomDefault = 1;

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  maxZoom: 5,
  minZoom: 0
});


export default function mapComponent(props) {

  const [zoom, setZoom] = useState(zoomDefault);
  const [lonLat, setLonLat] = useState([props.lon, props.lat]);
  const [lonLatMarker, setLonLatMarker] = useState([props.lon, props.lat]);
  const [selectedGood, setSelectedGood] = useState({});
  console.log('goods', props.digitalGoods);
  // useEffect(() => {
  // 	setZoom(zoomDefault);
  // 	setLonLat([props.lon, props.lat]);
  // 	setLonLatMarker([props.lon, props.lat]);
  // }, [props.lon, props.lat]);
  const InfoComponent = dynamic(() => import('../components/infoComponent'));
  return (
    <div className='map'>
    <Map
      style="mapbox://styles/rolikasi/ckn67a95j022m17mcqog82g05"
      center={lonLat}
      zoom={[zoom]}
      containerStyle={{ width: '100%', height: '100%' }}
      movingMethod='jumpTo'
      logoPosition='bottom-right'
      onMoveEnd={(map) => {
        setZoom(map.getZoom());
        setLonLat([map.getCenter().lng, map.getCenter().lat]);
        console.log(map.getCenter().lng, map.getCenter().lat)
      }
      }
      onStyleLoad={(map, loadEvent) => {

        var layers = map.getStyle().layers;
        // Find the index of the first symbol layer in the map style
        var firstSymbolId;
        for (var i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
          }
        }
        //add layer for each good with map
        props.digitalGoods.map(good => {
          map.addLayer({
            id: good.name + '-develop',
            source: {
              type: 'vector',
              url: 'mapbox://rolikasi.2kn4jvyh',
            },
            'source-layer': 'ne_10m_admin_0_countries-dxlasx',
            type: 'fill',
            paint: {
              // 'fill-color': '#db3d44', // this is the color you want your tileset to have (red)
              'fill-pattern': 'hardware-15', //this helps us distinguish individual countries a bit better by giving them an outline
            },
          }, firstSymbolId)
          map.setLayoutProperty(good.name + '-develop', 'visibility', 'none');

          map.setFilter(
            good.name + '-develop',
            ['in', 'ADM0_A3_IS'].concat(Object.keys(good.locations.developmentCountries)),
          ); // This line lets us filter by country codes.

          map.addLayer({
            id: good.name + '-deploy',
            source: {
              type: 'vector',
              url: 'mapbox://rolikasi.2kn4jvyh',
            },
            'source-layer': 'ne_10m_admin_0_countries-dxlasx',
            type: 'fill',
            paint: {
              // 'fill-color': '#db3d44', // this is the color you want your tileset to have (red)
              'fill-color': '#db3d44', //this helps us distinguish individual countries a bit better by giving them an outline
              'fill-opacity': 0.2,
            },
          }, firstSymbolId)
          map.setLayoutProperty(good.name + '-deploy', 'visibility', 'none');

          map.setFilter(
            good.name + '-deploy',
            ['in', 'ADM0_A3_IS'].concat(Object.keys(good.locations.deploymentCountries)),
          ); // This line lets us filter by country codes.
        });

        // map.addLayer({
        //   // adding a layer containing the tileset with country boundaries
        //   id: 'Venture Fund', //this is the name of our layer, which we will need later
        //   source: {
        //     type: 'vector',
        //     url: 'mapbox://rolikasi.2kn4jvyh',
        //   },
        //   'source-layer': 'ne_10m_admin_0_countries-dxlasx',
        //   type: 'fill',
        //   paint: {
        //     // 'fill-color': '#db3d44', // this is the color you want your tileset to have (red)
        //     'fill-color': '#1CABE2', //this helps us distinguish individual countries a bit better by giving them an outline
        //     'fill-opacity': 0.2,
        //   },
        // }, firstSymbolId)
        // map.setLayoutProperty('Venture Fund', 'visibility', 'none');

        // map.setFilter(
        //   'Venture Fund',
        //   ['in', 'ADM0_A3_IS'].concat(Object.keys(props.fundCountries)),
        // ); // This line lets us filter by country codes.


        // // Ref: https://dev.to/wuz/building-a-country-highlighting-tool-with-mapbox-2kbh
        // map.addLayer({
        //   // adding a layer containing the tileset with country boundaries
        //   id: 'Giga Countries', //this is the name of our layer, which we will need later
        //   source: {
        //     type: 'vector',
        //     url: 'mapbox://rolikasi.2kn4jvyh',
        //   },
        //   'source-layer': 'ne_10m_admin_0_countries-dxlasx',
        //   type: 'fill',
        //   paint: {
        //     // 'fill-color': '#db3d44', // this is the color you want your tileset to have (red)
        //     // 'fill-outline-color': '#F2F2F2', //this helps us distinguish individual countries a bit better by giving them an outline
        //     "fill-pattern": "dot-11",
        //   },
        // }, firstSymbolId)
        // map.setLayoutProperty('Giga Countries', 'visibility', 'visible');

        // map.setFilter(
        //   'Giga Countries',
        //   ['in', 'ADM0_A3_IS'].concat(Object.keys(props.gigaCountries)),
        // ); // This line lets us filter by country codes.

        // map.addLayer({
        //   // adding a layer containing the tileset with country boundaries
        //   id: 'ProCo Countries', //this is the name of our layer, which we will need later
        //   source: {
        //     type: 'vector',
        //     url: 'mapbox://rolikasi.2kn4jvyh',
        //   },
        //   'source-layer': 'ne_10m_admin_0_countries-dxlasx',
        //   type: 'fill',
        //   paint: {
        //     'fill-color': 'yellow', //this helps us distinguish individual countries a bit better by giving them an outline
        //     'fill-opacity': 0.2,
        //   },
        // }, firstSymbolId)
        // map.setLayoutProperty('ProCo Countries', 'visibility', 'visible');

        // map.setFilter(
        //   'ProCo Countries',
        //   ['in', 'ADM0_A3_IS'].concat(Object.entries(props.procoCountries).filter(s => s[1].connectivity == "TRUE").map(d => d[0])),
        // ); // This line lets us filter by country codes.

        map.addLayer({
          // adding a layer containing the tileset with country boundaries
          id: 'DPG Pathfinders', //this is the name of our layer, which we will need later
          source: {
            type: 'vector',
            url: 'mapbox://rolikasi.2kn4jvyh',
          },
          'source-layer': 'ne_10m_admin_0_countries-dxlasx',
          type: 'fill',
          paint: {
            "fill-pattern": "rectangle-blue-6",
            "fill-opacity": 0.5,
          },
        }, firstSymbolId)
        map.setLayoutProperty('DPG Pathfinders', 'visibility', 'visible');

        map.setFilter(
          'DPG Pathfinders',
          ['in', 'ADM0_A3_IS'].concat(Object.keys(props.pathfinderCountries)),
        ); // This line lets us filter by country codes.

        map.addLayer({
          // adding a layer containing the tileset with country boundaries
          id: 'countries', //this is the name of our layer, which we will need later
          source: {
            type: 'vector',
            url: 'mapbox://rolikasi.2kn4jvyh',
          },
          'source-layer': 'ne_10m_admin_0_countries-dxlasx',
          type: 'fill',
          paint: {
            'fill-color': 'white', //this helps us distinguish individual countries a bit better by giving them an outline
            'fill-opacity': 0,
          },
        }, firstSymbolId)

        map.setFilter(
          'countries',
          ['in', 'ADM0_A3_IS'].concat(Object.keys(props.countries)),
        ); // This line lets us filter by country codes.


        map.on('click', 'countries', function (mapElement) {
          const countryCode = mapElement.features[0].properties.ADM0_A3_IS; // Grab the country code from the map properties.
          console.log('deployments in country', props.digitalGoods.filter(good => Object.keys(good.locations.deploymentCountries).includes(countryCode)))
          console.log('deployments in country', props.digitalGoods.filter(good => Object.keys(good.locations.developmentCountries).includes(countryCode)))
          let deployments = props.digitalGoods.filter(good => Object.keys(good.locations.deploymentCountries).includes(countryCode));
          let developments = props.digitalGoods.filter(good => Object.keys(good.locations.developmentCountries).includes(countryCode));
          let countryName = '';
          let deployHtml = '';
          let developHtml = '';
          let pathHtml = '';
          if (deployments.length > 0){
            deployHtml += "<ul><b>Goods deployed</b>";
            deployments.map(d => {deployHtml += "<li>"+ d.name + "</li>"});
            deployHtml += "</ul>";

          }

          if (developments.length > 0){
            developHtml += "<ul><b>Goods developed</b>";
            developments.map(d => {developHtml += "<li>"+ d.name + "</li>"});
            developHtml += "</ul>";

          }

          console.log()

          if (props.countries[countryCode].pathfinder) {
            countryName = props.countries[countryCode].pathfinder.country;
            pathHtml = "✅&nbsp;&nbsp;DPG Pathfinder Country<br/>";
            pathHtml += "<ul>";
            pathHtml += "<li><b>Status:</b> " + props.countries[countryCode].pathfinder.status + "</li>";
            if (props.countries[countryCode].pathfinder.sector) {
              pathHtml += "<li><b>Sector:</b> " + props.countries[countryCode].pathfinder.sector + "</li>";
            }
            if (props.countries[countryCode].pathfinder.comments) {
              pathHtml += "<li><b>Comments:</b> " + props.countries[countryCode].pathfinder.comments + "</li>";
            }
            pathHtml += "</ul>";
          }

          var html = `<h3>${countryName}</h3>
    				${pathHtml};
            ${deployHtml};
            ${developHtml}`;

          new mapboxgl.Popup() //Create a new popup
            .setLngLat(mapElement.lngLat) // Set where we want it to appear (where we clicked)
            .setHTML(html) // Add the HTML we just made to the popup
            .addTo(map); // Add the popup to the map

        });

        // enumerate ids of the layers
        var toggleableLayerIds = ['DPG Pathfinders'];
        var prevLayer = '';
        props.digitalGoods.map(good => {
          let layers = document.getElementById('dg-menu');
          console.log('good map')
          let li = document.createElement('option');
          li.textContent = good.name;
          li.onclick = function (e) {
            console.log('clicked ', e)
            console.log('prev', prevLayer)
            var clickedGood = this.textContent;
            setSelectedGood(good);
            
            e.preventDefault();
            e.stopPropagation();
            if (prevLayer) {
              map.setLayoutProperty(prevLayer +'-develop', 'visibility', 'none');
              map.setLayoutProperty(prevLayer +'-deploy', 'visibility', 'none');
            }
            prevLayer = this.textContent;

            map.setLayoutProperty(clickedGood +'-develop', 'visibility', 'visible');
            map.setLayoutProperty(clickedGood +'-deploy', 'visibility', 'visible');
            
          }
          layers.appendChild(li);
        })

        // set up the corresponding toggle button for each layer
        for (var i = 0; i < toggleableLayerIds.length; i++) {
          var id = toggleableLayerIds[i];

          var link = document.createElement('a');
          link.href = '#';
          link.className = 'active';
          link.textContent = id;

          link.onclick = function (e) {
            var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

            // toggle layer visibility by changing the layout object's visibility property
            if (visibility === 'visible') {
              map.setLayoutProperty(clickedLayer, 'visibility', 'none');
              this.className = '';
            } else {
              this.className = 'active';
              map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
          };

          var layers = document.getElementById('menu');

          var li = document.createElement('li');
          li.appendChild(link);

          layers.appendChild(li);
        }

      }}
    >

      <ZoomControl />
    </Map>
    <InfoComponent selectedGood={selectedGood} />
    </div>
  );
}