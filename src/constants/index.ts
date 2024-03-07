import { TrendingUp, Newspaper, BarChart } from 'lucide-react';

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'Crypto Taxes', label: 'Crypto Taxes' },
  { href: '/', key: 'Free Tools', label: 'Free Tools' },
  { href: '/', key: 'Resource Center', label: 'Resource Center' },
];


export const SENTIMENT_ITEMS = [
  { bg: 'bg-blue-700' },
  {  bg: 'bg-green-700' },
  { bg: 'bg-purple-700' },
 ];


// TABS SECTION
export const TABS = [
  {
    trigger: 'Overview',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    trigger: 'Fundamentals',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    trigger: 'New Insights',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    trigger: 'Sentiments',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    trigger: 'Team',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    trigger: 'Tokenomics',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
];

// Define a type for each progress data item
type ProgressDataItem = {
  action: string;
  value: number;
  color: string;
  percentage: string;
 };
 
 // Define the constants
 export const progressData: ProgressDataItem[] = [
  {
     action: 'Buy',
     value: 80,
     color: '#76FF7A',
     percentage: '76%',
  },
  {
     action: 'Hold',
     value: 8,
     color: '#C0C0C0',
     percentage: '8%',
  },
  {
     action: 'Sell',
     value: 16,
     color: 'red',
     percentage: '16%',
  },
 ];