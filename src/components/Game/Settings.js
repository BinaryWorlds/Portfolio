import React, { useState, useEffect } from 'react';
import * as S from './Settings.style';
import RangeSlider from '../RangeSlider/RangeSlider';

import {
  newGame,
  startSymulate,
  stopSymulate,
  updateBallSize,
  g,
} from '../../assets/jawbreaker/jawbreaker';

function Settings({
  isActive,
  isPl,
  setPositions,
  gameMode,
  gameSize,
  getParams,
}) {
  const [ballSize, setBallSize] = useState(g.ballSize);
  const [rows, setRows] = useState(g.rowsInit);
  const [columns, setColumns] = useState(g.columnsInit);
  const [colors, setColors] = useState(g.colorsInit);

  const calcMaxBallSize = () => {
    if (!columns || !rows) return 0;
    const { clientWidth, clientHeight } = document.documentElement;

    const spaceColumn = clientWidth / columns;
    const spaceRows = (clientHeight - g.scoreHeight) / rows;

    let maxSize = spaceColumn < spaceRows ? spaceColumn : spaceRows;
    maxSize -= Math.floor(maxSize * 0.15);

    if (maxSize > 60) return 60;
    return Math.floor(maxSize);
  };

  const calcMaxRows = () => {
    const { clientHeight } = document.documentElement;
    const margin = Math.floor(ballSize * 0.15);
    const ballSpace = ballSize + margin;
    const maxRows = (clientHeight - margin - g.scoreHeight) / ballSpace;

    return Math.floor(maxRows);
  };

  const calcMaxColumns = () => {
    const { clientWidth } = document.documentElement;
    const margin = Math.floor(ballSize * 0.15);
    const ballSpace = ballSize + margin;
    const maxColumns = (clientWidth - margin) / ballSpace;

    return Math.floor(maxColumns);
  };

  const fillScreen = () => {
    const r = calcMaxRows();
    const c = calcMaxColumns();
    setRows(r);
    setColumns(c);
  };

  const resetSettings = () => {
    const [r, c, k, s] = getParams(gameSize);
    setRows(r);
    setColumns(c);
    setColors(k);
    setBallSize(s);
  };

  const checkIsDifferent = (r, c, k) =>
    r !== g.rowsInit || c !== g.columnsInit || k !== g.colorsInit;

  useEffect(() => {
    const check = checkIsDifferent(rows, columns, colors);
    if (!check) return;

    stopSymulate();
    newGame(rows, columns, colors, ballSize);
    if (!gameMode) startSymulate();
    setPositions();
  }, [rows, columns, colors]);

  useEffect(() => {
    updateBallSize(ballSize);
    setPositions();
  }, [ballSize]);

  return (
    <S.Settings isActive={isActive}>
      <RangeSlider
        name={isPl ? 'Rozmiar: ' : 'Size: '}
        value={ballSize}
        setValue={setBallSize}
        min={30}
        max={calcMaxBallSize()}
      />
      <S.Button onClick={fillScreen}>{isPl ? 'Wypełnij' : 'Fill'}</S.Button>
      <RangeSlider
        name={isPl ? 'Rzędy: ' : 'Rows: '}
        value={rows}
        setValue={setRows}
        min={8}
        max={calcMaxRows()}
      />
      <RangeSlider
        name={isPl ? 'Kolumny: ' : 'Columns: '}
        value={columns}
        setValue={setColumns}
        min={8}
        max={calcMaxColumns()}
      />
      <RangeSlider
        name={isPl ? 'Kolory: ' : 'Colors: '}
        value={colors}
        setValue={setColors}
        min={1}
        max={5}
      />
      <S.Button onClick={resetSettings}>Reset</S.Button>
    </S.Settings>
  );
}

export default Settings;
