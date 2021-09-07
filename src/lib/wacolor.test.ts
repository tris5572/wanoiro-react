import * as wacolor from './wacolor';

test('WaColor init test', () => {
  const c = new wacolor.WaColor('萌葱色', 'もえぎいろ', '#006e54');
  expect(c.name).toBe('萌葱色');
  expect(c.yomi).toBe('もえぎいろ');
  expect(c.hex).toMatch(/#006e54/i); // 大文字小文字のいずれかでテスト

  // 不正なカラーコードを渡したときのテスト
  expect(() => {
    new wacolor.WaColor('未存在色', 'いろ', '#ZZZZZZ');
  }).toThrow();
  expect(() => {
    new wacolor.WaColor('未存在色', 'いろ', 'not-exist-value');
  }).toThrow();
});

test('Search color test', () => {
  expect(wacolor.WaColor.search('黄金')?.name).toBe('黄金');
  expect(wacolor.WaColor.search('小豆')?.name).toBe('小豆色');
  expect(wacolor.WaColor.search('さくら')?.name).toBe('桜色');
  expect(wacolor.WaColor.search('こだいむらさき')?.name).toBe('古代紫');
});
