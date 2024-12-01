import "./Dashboard.style.css";
import {
  CurrencyExchangeOutlined,
  CardMembership,
  MoneyOff,
  Share,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

interface CardProps {
  icon: React.ElementType;
  text: string;
  count: number;
}

const Card = ({ icon: Icon, text, count }: CardProps) => (
  <div className="card">
    <div className="card-header">
      <Icon />
      <div className="text">{text}</div>
    </div>
    <div className="card-count">
      <h1>{count}</h1>
    </div>
  </div>
);

export default function Dashboard() {
  const inventoryState = useSelector((state: any) => state.inventory);

  return (
    <div>
      <h1 className="heading">ParshuRam Society Fund</h1>
      <div className="card-container">
        <Card
          icon={CardMembership}
          text="Total Members"
          count={inventoryState.totalProducts}
        />
        <Card
          icon={CurrencyExchangeOutlined}
          text="Total Fund Value"
          count={inventoryState.storeValue}
        />
        <Card
          icon={MoneyOff}
          text="Total Loan Given"
          count={inventoryState.outOfStock}
        />
        <Card
          icon={Share}
          text="Total Shared"
          count={inventoryState.NoOfCategory}
        />
      </div>
    </div>
  );
}
