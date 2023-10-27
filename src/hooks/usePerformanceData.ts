import { PerformanceDatum } from '@/types/performance';

export default function usePerformanceData() {
  const data: PerformanceDatum[] = [
    {
      Strategy: 'Strategy 1',
      TVL: 100000,
      Volatility: 'Low',
      Collateral: 1000,
      PNL: 100.84,
    },
    {
      Strategy: 'Strategy 2',
      TVL: 12500,
      Volatility: 'Medium',
      Collateral: 1000,
      PNL: -84.23,
    },
    {
      Strategy: 'Strategy 3',
      TVL: 12500,
      Volatility: 'Medium',
      Collateral: 1000,
      PNL: 24.53,
    },
    {
      Strategy: 'Strategy 4',
      TVL: 25000,
      Volatility: 'High',
      Collateral: 1000,
      PNL: 100.84,
    },
  ];

  return data;
}
