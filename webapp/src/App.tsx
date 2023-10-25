import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as UI from '@mui/material';
import Map from './Map/Map';
import * as Icon from '@mui/icons-material';

import './index.css';
import Menu from './Menu/Menu';

/**
 * 
 */
// export interface MenuState {
//   open: boolean;
//   activeComponent: string;
// }
// const initialState: MenuState = {
//   open: false,
//   activeComponent: ""
// }

/**
 * アプリ全体の状態
 */
export interface AppState {
  mode: "map" | "sub1" | "sub2";
  // メインパネルの開閉状態
  open?: boolean;
  // アクティブなコンポーネント
  activeComponent?: string;
};

function App(state: AppState) {
  const [mode, setMode] = React.useState<"map" | "sub1" | "sub2">(state.mode);
  const [open, changeOpen] = React.useState<boolean>(false);
  const [activeComponent, setActiveComponent] = React.useState<string>("");
  const changeActiveComponent = (nextMenu: string): void => {
    setActiveComponent(nextMenu);
  }

  const openMenu = () => {
    changeOpen(!open);
  }

  return (
    <div className="App main">
      <Menu open={open} activeComponent={activeComponent} changeActiveComponent={changeActiveComponent} closeMenu={openMenu}></Menu>
      <div className='main'>
        {getMainPanel(mode)}
      </div>
      <div className="fab" hidden={open === true}>
        <UI.Fab>
          <Icon.Menu onClick={openMenu}></Icon.Menu>
        </UI.Fab>
      </div>
      <div className='bottom-navigation'>
        <UI.BottomNavigation>
          <UI.BottomNavigationAction icon={<Icon.Map></Icon.Map>} onClick={() => { setMode("map") }} />
          <UI.BottomNavigationAction icon={<Icon.Pin></Icon.Pin>} onClick={() => { setMode("sub1") }} />
          <UI.BottomNavigationAction icon={<Icon.LocationOn></Icon.LocationOn>} onClick={() => { setMode("sub2") }} />
        </UI.BottomNavigation>
      </div>
    </div>
  );
}

function getMainPanel(mode: "map" | "sub1" | "sub2"): JSX.Element | null {
  switch (mode) {
    case "map":
      return <Map></Map>;
    case "sub1":
      return <div>sub1</div>;
    case "sub2":
      return <div>sub2</div>;
    default:
      return null;
  }
}

export default App;
