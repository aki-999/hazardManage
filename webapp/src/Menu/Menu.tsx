import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as UI from '@mui/material';
import * as Icon from '@mui/icons-material';
import { menus } from './MenuListDef';

/**
 * サイドパネル上に表示するコンポーネントで共通のProps
 */
export type abstractProps = {
  changeActiveComponent: (nextMode: string) => void;
}

/**
 * メニュー画面のProps
 */
type Props = {
  open: boolean;
  activeComponent: string;
  closeMenu: () => void;
} & abstractProps;

/**
 * メニュー画面
 * サイドパネル上に、機能の一覧を表示するメニュー画面です
 * メニュー上で選択した機能に対応するコンポーネントをサイドパネルに表示します
 * @param props 
 * @returns 
 */
export default function Menu(props: Props) {
  if (props.open === false) {
    // パネルが閉じているときは表示しない
    return null;
  }

  return (
    <div className='side'>
      <div className='appBar'>
        <UI.AppBar color='primary' position='static'>
          <div className='flex item-center'>
            {/* メニューボタン押下時はメニュー画面を閉じる */}
            <UI.IconButton onClick={props.closeMenu}>
              <Icon.Menu></Icon.Menu>
            </UI.IconButton>
            <UI.Typography>{props.activeComponent === "" ? "メニュー" : menus[props.activeComponent].name}</UI.Typography>
          </div>
        </UI.AppBar>
      </div>
      {props.activeComponent === "" ? createMenuList(props) : callActiveComponent(props)}
    </div>
  )
}

/**
 * メニューに表示する機能一覧を作成します
 * 機能一覧の内容は MenuListDefの定義をもとにします
 * @param props 
 * @returns 
 */
function createMenuList(props: Props): JSX.Element {
  return (
    <UI.List>
      {
        Object.keys(menus).map((key: string) => {
          const elm = menus[key];
          return (
            // アクティブな機能の変更を通知する
            <UI.ListItemButton onClick={() => {
              props.changeActiveComponent(key);
            }}>
              <UI.ListItemText>{elm.name}</UI.ListItemText>
            </UI.ListItemButton>
          )
        })
      }
    </UI.List>
  )
}

/**
 * アクティブな機能のコンポーネントを呼び出します。
 * @param props 
 * @returns 
 */
function callActiveComponent(props: Props): JSX.Element {
  return menus[props.activeComponent].component(props);
}
