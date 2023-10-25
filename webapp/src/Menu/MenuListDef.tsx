import { DrawFeatureDef } from "../DrawFeature/DrawFeature";

/**
 * メニュー画面用の、コンポーネントの定義上報
 */
export interface ComponentDef {
    // コンポーネント名（物理）
    [key: string]: {
        // コンポーネント名（論理）
        name: string,
        // コンポーネントのrender
        component: Function
    }
}

/**
 * メニュー画面に表示するコンポーネントの一覧
 */
export const menus: ComponentDef = Object.assign({},
    DrawFeatureDef,
)