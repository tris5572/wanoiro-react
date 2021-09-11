import React, { useCallback, useState } from 'react';
import './App.css';
// import * as wacolor from '../lib/wacolor';
import { WaColor } from '../lib/wacolor';
import { RandomButton } from './RandomButton';
import { ColorSearchField } from './ColorSearchField';

export function App() {
  const [color, setColor] = useState(WaColor.randomColor());

  // ランダムな色を選択する。無作為選択ボタン押下時に実行される。
  // 一応 useCallback を使ってみてはいるけど、恐らく大した効果はない。
  const updateRandomColor = useCallback(() => {
    // 前回と異なる色が出るまで引く。
    let c;
    do {
      c = WaColor.randomColor();
    } while (c.isEqual(color));
    setColor(c);
  }, [color]);

  // 文字色とボタン等の背景色。背景色は使用していないが、一応設定。
  let textColor = '#000A';
  let backColor = '#FFFA';
  // 明るさによって文字の色を変える。
  if (color.luminance() < 0.2) {
    const buf = textColor;
    textColor = backColor;
    backColor = buf;
  }

  const viewStyle = {
    backgroundColor: color.hex,
  };

  return (
    <div className="App" style={viewStyle}>
      <div className="view" style={{ color: textColor }}>
        <div className="color-yomi">{color.yomi}</div>
        <div className="color-name">{color.name}</div>
        <div className="color-code-box">
          <p>{color.cssRgb()}</p>
          <p>{color.cssHsl()}</p>
        </div>
        <RandomButton
          onClick={updateRandomColor}
          // background={textColor}
          // color={backColor}
        ></RandomButton>
        <ColorSearchField setColor={setColor}></ColorSearchField>
      </div>
    </div>
  );
}
