import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { ProductProps } from '../Models/ProductProps';
import { useState } from 'react';

type TooltipPayload = ReadonlyArray<any>;

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
  tooltipPayload?: ReadonlyArray<TooltipPayload>;
};

type GeometrySector = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
};

type PieLabelProps = PieSectorData &
  GeometrySector & {
    tooltipPayload?: any;
  };

type PieChartProps = {
  products?: ProductProps[];
  onSectorClick?: (productId: number) => void;
};

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartTemplate : React.FC<PieChartProps> = ({ products, onSectorClick }) => {
  const [productCellId, setProductCellId] = useState<number | null>(null);

  return (
    <PieChart width={400} height={300}>
        <Pie
            data={products}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="productPrice"
        >
            {products?.map((item) => (
              <Cell
                key={`cell-${item.productId}`}
                fill={COLORS[item.productId % COLORS.length]}
                onClick={() => {
                  onSectorClick?.(item.productId);
                  setProductCellId((prev) => (prev === item.productId ? null : item.productId));
                }}
                cursor="pointer"
                scale={productCellId ? 120 : ""}
              />
            ))}
        </Pie>
    </PieChart>
  );
}

export default PieChartTemplate
