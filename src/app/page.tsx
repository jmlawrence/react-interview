'use client';

import Image from 'next/image';
import s from './page.module.scss';
import { Inter } from 'next/font/google';
import useLendingData from '@/hooks/useLendingData';
import usePerformanceData from '@/hooks/usePerformanceData';
import { useMemo } from 'react';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // HOOKS
  const lendingData = useLendingData();
  const performanceData = usePerformanceData();

  const percentages = useMemo(() => {
    let total = 0;

    lendingData.forEach((datum) => {
      total += datum.amount;
    });

    return lendingData.map((datum) => ({
      ...datum,
      percentage: (datum.amount / total) * 100,
    }));
  }, [lendingData]);

  console.log({
    lendingData,
    performanceData,
    percentages,
  });

  return (
    <div className={s.pageWrapper}>
      <div className={s.cardWrapper}>
        <div className={s.card}>
          <div className={s.header}>
            <div>Lending Allocations</div>
            <div>$5000 USDC</div>
          </div>
          <div className={s.body}>
            <div
              className={s.pieChart}
              style={{
                background: `conic-gradient(
                  blue ${percentages[0].percentage}deg,
                  red ${percentages[0].percentage}deg, 
                  red ${
                    percentages[0].percentage +
                    percentages[1].percentage
                  }deg 
                  green ${
                    percentages[0].percentage +
                    percentages[1].percentage
                  }deg, 
                  green ${
                    percentages[0].percentage +
                    percentages[1].percentage +
                    percentages[1].percentage
                  }deg 


                  yellow 360deg)`,
              }}
            ></div>
            <div className={s.legendRow}>
              {percentages.map(({ color, label }, idx) => (
                <div className={s.legendItem} key={idx}>
                  <div
                    className={s.legendColor}
                    style={{ background: color }}
                  ></div>
                  <div className={s.legendLabel}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.header}>
            <div>Strategy Performance</div>
          </div>
          <div className={s.body}>
            <table className={s.table}>
              <tr className={s.header}>
                <th className={s.headerItem}>Strategy</th>
                <th className={s.headerItem}>TVL</th>
                <th className={s.headerItem}>Volatility</th>
                <th className={s.headerItem}>Collateral</th>
                <th className={s.headerItem}>PNL</th>
              </tr>
              {performanceData.map((datum, idx) => (
                <tr key={idx} className={s.row}>
                  <td className={s.bodyItem}>
                    {datum.Strategy}
                  </td>
                  <td className={s.bodyItem}>
                    {datum.TVL}
                  </td>
                  <td className={s.bodyItem}>
                    {datum.Volatility}
                  </td>
                  <td className={s.bodyItem}>
                    {datum.Collateral}
                  </td>
                  <td
                    className={clsx(s.bodyItem, {
                      [s.positive]: datum.PNL > 0,
                      [s.negative]: datum.PNL < 0,
                    })}
                  >
                    {datum.PNL}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
