import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as UI from '@mui/material';
import * as Icon from '@mui/icons-material';
import { ComponentDef } from '../Menu/MenuListDef';
import { abstractProps } from '../Menu/Menu';

type Props = {
} & abstractProps

/**
 * 図形作図画面のコンポーネント
 * @param prop 
 * @returns 
 */
export default function DrawFeature(prop: Props) {
    return (
        <div>
            <div className='flex item-right'>
                <UI.IconButton onClick={() => prop.changeActiveComponent("")}>
                    <Icon.Close></Icon.Close>
                </UI.IconButton>
            </div>
            <div className='flex-row'>
                DrawFeature
            </div>
        </div>
    )
}

/**
 * メニュー画面から作図画面を起動するための定義
 */
export const DrawFeatureDef: ComponentDef = {
    "drawFeature": {
        name: "作図",
        component: DrawFeature
    }
}