import React from 'react';

// 変更処理を呼び出し側に持つ方法で実装。
// このボタンコンポーネントへは、クリック時に呼び出すコールバックだけを渡している。
// この方法で実装するなら、わざわざコンポーネントを分ける必要がない。

export const RandomButton = (props: {
  onClick: () => void;
  background?: string;
  color?: string;
}) => {
  // let style = {};

  // if (props.background != null) {
  //   style = { background: props.background, ...style };
  // }
  // if (props.color != null) {
  //   style = { color: props.color, ...style };
  // }

  return (
    <button
      className="random-button"
      onClick={() => props.onClick()}
      // style={style}
    >
      無作為選択
    </button>
  );
};
