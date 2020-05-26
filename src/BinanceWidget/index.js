import React from 'react';
import { ReactComponent as StarSVG } from './images/star.svg';
import { ReactComponent as LoupeSVG } from './images/loupe.svg';
import { ReactComponent as ArrowSVG } from './images/arrow.svg';
import { ReactComponent as ArrowsSVG } from './images/arrows.svg';

import './styles.css';

export default function BinanceWidget() {
  return (
    <div className="binance-widget">
      <div className="title">Market</div>

      <div className="currencies">
        <a href="/">
          <StarSVG width={16} color="#76808F"/>
        </a>
        <a href="/" className="currencies__item">Margin</a>
        <a href="/" className="currencies__item">BNB</a>
        <a href="/" className="currencies__item">BTC</a>
        <a href="/" className="currencies__item currencies__item--icon">
          ALTS
          <ArrowSVG className="arrow-icon" width={20} fill="#76808F"/>
        </a>
        <a href="/" className="currencies__item currencies__item--icon">
          USD
          <ArrowSVG className="arrow-icon" width={20} fill="#76808F"/>
        </a>
      </div>

      <div className="search-bar">
        <LoupeSVG className="loupe-icon" width={20} color="#76808F"/>
        <input type="text" placeholder="Search" className="search-bar__field"/>

        <input type="radio" name="change" className="search-bar__radio"/>
        <label htmlFor="change" className="search-bar__label">Change</label>
        <input type="radio" name="volume" className="search-bar__radio"/>
        <label htmlFor="change" className="search-bar__label">Volume</label>
      </div>

      <table className="markets">
        <tr className="markets__head">
          <th>
            Pair
            <ArrowsSVG className="arrows-icon" width={20} fill="#76808F"/>
          </th>
          <th>
            Last Price
            <ArrowsSVG className="arrows-icon" width={20} fill="#76808F"/>
          </th>
          <th>
            Change
            <ArrowsSVG className="arrows-icon" width={20} fill="#76808F"/>
          </th>
        </tr>
        <tr className="markets__row">
          <td className="pair">
            <StarSVG width={14} color="#F0B90B" className="favorite"/>
            <span>ADA/BTC</span>
          </td>
          <td className="last-price">
            0.000000067
          </td>
          <td className="change--negative">
            -0.64%
          </td>
        </tr>
        <tr className="markets__row">
          <td className="pair">
            <StarSVG width={14} color="#76808F" className="favorite"/>
            <span>ADA/BTC</span>
          </td>
          <td className="last-price">
            0.000000067
          </td>
          <td className="change">
            0.64%
          </td>
        </tr>
      </table>
    </div>
  );
};
