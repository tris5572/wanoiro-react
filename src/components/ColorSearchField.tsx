import React, { useRef, useState } from 'react';
import { WaColor } from '../lib/wacolor';

const DEFAULT_KEY_COLOR = '#FFF';

export const ColorSearchField = (props: {
  setColor: React.Dispatch<React.SetStateAction<WaColor>>;
}) => {
  const [inputValue, setInputValue] = useState('');
  const [keyColor, setKeyColor] = useState(DEFAULT_KEY_COLOR);

  // テキストフィールドの参照。
  // useRef に null! で非nullアサーションを渡しているので、current がnull以外となり、使用時のチェックが不要。
  const inputRef = useRef<HTMLInputElement>(null!);

  // 渡された文字列を検索して、マッチしたらその色を表示する。
  const searchFieldKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    // エンターキーが押されたら検索を実施。
    if (key === 'Enter') {
      // 文字列を全選択する。（フォーカスは外れない）
      inputRef.current.select();

      const c = WaColor.search(inputValue);
      if (c != null) {
        // 該当する色が見つかったらその色を表示する。
        props.setColor(c);
      } else {
        // 該当する色が見付からなかったときは色を赤くする。
        setKeyColor('#F77');
      }
    } else {
      // エンターキー以外が押されたら、色を元に戻す黒に。（見付からなくて赤くなっていても戻す）
      setKeyColor(DEFAULT_KEY_COLOR);
    }
  };

  // フィールドの値が変わったときに呼び出され、入力値を保持する。
  const valueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const style = { backgroundColor: keyColor };

  return (
    <input
      type="text"
      className="search-field"
      onKeyDown={(e) => searchFieldKeyDown(e)}
      onChange={(e) => valueChanged(e)}
      style={style}
      ref={inputRef}
      id="search-field"
    ></input>
  );
};
