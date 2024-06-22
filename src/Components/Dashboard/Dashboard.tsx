import "./Dashboard.style.css";
import {
  ShoppingCart as ShoppingCartIcon,
  RemoveShoppingCartOutlined,
  CurrencyExchangeOutlined,
  CategoryOutlined,
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
      <h1 className="heading">Inventory stats</h1>
      <div className="card-container">
        <Card
          icon={ShoppingCartIcon}
          text="Total Products"
          count={inventoryState.totalProducts}
        />
        <Card
          icon={CurrencyExchangeOutlined}
          text="Total Store Value"
          count={inventoryState.storeValue}
        />
        <Card
          icon={RemoveShoppingCartOutlined}
          text="Out of Stock"
          count={inventoryState.outOfStock}
        />
        <Card
          icon={CategoryOutlined}
          text="No of Category"
          count={inventoryState.NoOfCategory}
        />
      </div>
    </div>
  );
}
