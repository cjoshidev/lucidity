import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import Edit from "@mui/icons-material/Edit";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import Delete from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import "./Table.style.css";
import EditModal from "../EditModal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { UpdateInventoryState } from "../../../src/Actions/actions";

export type TInventoryData = {
  name: string;
  category: string;
  price: string;
  quantity: number;
  value: string;
};

export default function InventoryTable() {
  const [inventoryList, setInventoryList] = useState<TInventoryData[]>([]);
  const [currentItem, setCurrentItem] = useState<TInventoryData>(
    inventoryList[0]
  );
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const [disabledRows, setDisabledRows] = useState<boolean[]>(
    Array(inventoryList.length).fill(false)
  );

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const inventoryState = useSelector((state: any) => state.inventory);

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const response = await fetch(
          "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
        );
        const result: TInventoryData[] = await response.json();
        setInventoryList(result);
        setLoading(false);
      } catch (e) {
        console.error("Error while fetching data", e);
      }
    };
    fetchInventoryData();
  }, []);

  useEffect(() => {
    const totalValue = inventoryList.reduce((accumulator, currentItem) => {
      const value = parseFloat(currentItem.value.replace("$", ""));
      return accumulator + value;
    }, 0);

    const outofStockCount = inventoryList.reduce((accumulator, currentItem) => {
      if (currentItem.quantity === 0) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);

    const numberOfCategory = new Set(inventoryList.map((item) => item.category))
      .size;

    dispatch(
      UpdateInventoryState({
        totalProducts: inventoryList.length,
        storeValue: totalValue,
        outOfStock: outofStockCount,
        NoOfCategory: numberOfCategory,
      })
    );
  }, [dispatch, inventoryList]);

  const handleEditData = (index: number) => {
    setCurrentItem(inventoryList[index]);
    setCurrentItemIndex(index);
    setOpen(true);
  };

  const handleDeleteItem = (selectedItem: number) => {
    const updateList = inventoryList.filter(
      (_, index) => selectedItem !== index
    );
    setInventoryList(updateList);

    const currentValue = parseFloat(
      inventoryList[selectedItem].value.replace("$", "")
    );
    const isOutOfStock = inventoryList[selectedItem].quantity === 0 ? 1 : 0;
    const noOfCategories = new Set(updateList.map((item) => item.category))
      .size;

    dispatch(
      UpdateInventoryState({
        ...inventoryState,
        totalProducts: inventoryState.totalProducts - 1,
        storeValue: inventoryState.storeValue - currentValue,
        outOfStock: inventoryState.outOfStock - isOutOfStock,
        NoOfCategory: noOfCategories,
      })
    );
  };

  const handleDisableRow = (index: number) => {
    const newDisabledRows = [...disabledRows];
    newDisabledRows[index] = !newDisabledRows[index];
    setDisabledRows(newDisabledRows);
  };

  const handleUpdateInventoryList = (
    updatedItem: TInventoryData,
    index: number
  ) => {
    const updatedList = [...inventoryList];
    updatedList[index] = updatedItem;
    setInventoryList(updatedList);
  };

  return !loading ? (
    <>
      <Table className="inventory_table" aria-label="inventory_table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventoryList.map((item, index) => (
            <TableRow
              key={item.name}
              className={disabledRows[index] ? "disabledRow" : ""}
            >
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="right">{item.category}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{item.value}</TableCell>
              <TableCell align="center">
                <div className="actionItems">
                  <IconButton
                    onClick={() => handleEditData(index)}
                    disabled={
                      disabledRows[index] || inventoryState.usertype === "user"
                    }
                  >
                    <Edit
                      color={
                        disabledRows[index] ||
                        inventoryState.usertype === "user"
                          ? "disabled"
                          : "success"
                      }
                    />
                  </IconButton>
                  <IconButton disabled={inventoryState.usertype === "user"}>
                    <RemoveRedEye
                      color={
                        inventoryState.usertype === "user"
                          ? "disabled"
                          : "secondary"
                      }
                      onClick={() => handleDisableRow(index)}
                    />
                  </IconButton>

                  <IconButton
                    disabled={inventoryState.usertype === "user"}
                    onClick={() => handleDeleteItem(index)}
                  >
                    <Delete
                      color={
                        inventoryState.usertype === "user"
                          ? "disabled"
                          : "error"
                      }
                    />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditModal
        open={open}
        handleClose={() => setOpen(false)}
        data={currentItem}
        currentItemIndex={currentItemIndex}
        updateInventoryList={handleUpdateInventoryList}
      />
    </>
  ) : (
    <div className="loadingScreen">
      <h1>Content Loading Please Wait.......</h1>
    </div>
  );
}
