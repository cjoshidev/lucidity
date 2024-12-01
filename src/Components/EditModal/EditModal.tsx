import Close from "@mui/icons-material/Close";
import { TextField, Button, Typography, Modal, Box } from "@mui/material";
import { TInventoryData } from "../Table/Table";
import { useState, useEffect } from "react";
import "./EditModal.style.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

type TEditModal = {
  open: boolean;
  handleClose: () => void;
  data: TInventoryData;
  updateInventoryList: (updatedItem: TInventoryData, index: number) => void;
  currentItemIndex: number;
};

function EditModal({
  open,
  handleClose,
  data,
  updateInventoryList,
  currentItemIndex,
}: TEditModal) {
  // const [category, setCategory] = useState(data.category);
  // const [price, setPrice] = useState(parseFloat(data.price.replace("$", "")));
  // const [quantity, setQuantity] = useState(data.quantity);
  // const [value, setValue] = useState(parseFloat(data.value.replace("$", "")));

  // useEffect(() => {
  //   setCategory(data.category);
  //   setPrice(parseFloat(data.price.replace("$", "")));
  //   setQuantity(data.quantity);
  //   setValue(parseFloat(data.value.replace("$", "")));
  // }, [data]);

  // const handleOnSave = () => {
  //   const updatedItem = {
  //     ...data,
  //     category,
  //     price: `$${price}`,
  //     quantity,
  //     value: `$${value}`,
  //   };
  //   updateInventoryList(updatedItem, currentItemIndex);
  //   handleClose();
  // };

  return (
    <div>
      <p>Test</p>
      {/* <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="container">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Product
            </Typography>
            <Close style={{ cursor: "pointer" }} onClick={handleClose} />
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data?.name}
          </Typography>

          <div className="inputWrapper">
            <div className="inputlabel_container">
              <Typography>Category</Typography>
              <TextField
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="inputlabel_container">
              <Typography>Price</Typography>
              <TextField
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </div>

            <div className="inputlabel_container">
              <Typography>Quantity</Typography>
              <TextField
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseFloat(e.target.value))}
              />
            </div>
            <div className="inputlabel_container">
              <Typography>Value</Typography>
              <TextField
                type="number"
                placeholder="Value"
                value={value}
                onChange={(e) => setValue(parseFloat(e.target.value))}
              />
            </div>
            <div className="btnContainer">
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleOnSave}>
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Modal> */}
    </div>
  );
}

export default EditModal;
