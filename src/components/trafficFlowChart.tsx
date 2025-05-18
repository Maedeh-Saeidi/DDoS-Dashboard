import React, { useState } from 'react';
import { useGetChart } from '@/hooks/useGetChart';
import { RawDataItem, ChartDataItem } from '@/types';
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts';

export default function TrafficFlowChart() {
  const [analysisType, setAnalysisType] = useState<'volume' | 'packet'>('volume');
  const [timeRange, setTimeRange] = useState<'1hour' | '1day' | '1week'>('1hour');

  const { data, isFetching } = useGetChart();
  const rawData: RawDataItem[] = data?.data || [];

  const dataKey = analysisType === 'volume' ? 'lrl' : 'pps';
  const strokeColor = analysisType === 'volume' ? '#8884d8' : '#82ca9d';
  const fillColor = analysisType === 'volume' ? '#8884d8' : '#82ca9d';

  const chartData: ChartDataItem[] = rawData
    .filter((_, i) => i % 100 === 0)
    .map((item) => ({
      time: item.t,
      lrl: item.lrl,
      pps: Number(item.pps),
    }));

  const formatXAxis = (timeStr: string) => {
    const date = new Date(timeStr);
    switch (timeRange) {
      case '1hour':
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      case '1day':
        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ', ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      case '1week':
        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      default:
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };

  return (
    <div className="min-w-[50%] min-h-[50vh] h-[50vh] bg-[#0F172A] flex flex-col p-6">
      <div className="flex flex-row justify-between items-center mb-4">
        <div className="font-semibold text-2xl">Traffic Flow Chart</div>
        <div className="flex items-center space-x-4">
          <div className="flex rounded-md overflow-hidden border border-gray-600">
            {(['1hour', '1day', '1week'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-sm font-medium focus:outline-none ${
                  timeRange === range
                    ? 'bg-[#3A4053] text-white'
                    : 'bg-[#091028] text-gray-300 hover:bg-gray-600'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <select
            className="bg-gray-700 text-white rounded px-3 py-1"
            value={analysisType}
            onChange={(e) => setAnalysisType(e.target.value as 'volume' | 'packet')}
          >
            <option value="volume">Analysis based on volume</option>
            <option value="packet">Analysis based on packet</option>
          </select>
        </div>
      </div>

      {isFetching ? (
        <div className="flex justify-center items-center h-full text-sm text-gray-400">
          Loading chart data...
        </div>
      ) : (
        <div style={{ width: '100%', flexGrow: 1, height: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              syncId="anyId"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                tickFormatter={formatXAxis}
                minTickGap={20}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(label) => new Date(label).toLocaleString()}
                formatter={(value: number) => value.toLocaleString()}
              />
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={strokeColor}
                fill={fillColor}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}