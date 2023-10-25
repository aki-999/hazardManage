import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as UI from '@mui/material';

import MapView from 'ol/Map';
import View from 'ol/View';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Control from 'ol/control/Control';

// 地図画面
export default function Map() {
  let divElement = (
    <div id="mapview" className='main'>
    </div>
  );

  // 初回だけ地図画面を初期化する
  useDidMount(createMap);

  return divElement;
}

/**
 * Openlayersの地図を作成する
 * @returns 
 */
function createMap() {
  console.log("create map");

  new MapView({
    target: 'mapview',

    view: new View({
      // center: fromLonLat([140.46, 36.37]),
      center: [0, 0],
      zoom: 5
    }),
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
      })
    ],
  });
}

// componentDidMountと同義
export const useDidMount = (func: Function) => React.useEffect(() => { return func(); }, []);
