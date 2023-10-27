import { LendingDatum } from '@/types/lending';

export default function useLendingData() {
  const data: LendingDatum[] = [
    {
      label: 'Strategy 1',
      amount: 2500,
      color: '#855CF8',
    },
    {
      label: 'Strategy 2',
      amount: 625,
      color: '#E289F2',
    },
    {
      label: 'Strategy 3',
      amount: 625,
      color: '#7879F1',
    },
    {
      label: 'Strategy 4',
      amount: 1250,
      color: '#B085FF',
    },
  ];

  return data;
}
