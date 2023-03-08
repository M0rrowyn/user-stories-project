import React from "react";
import "./style.css";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import { MdClear } from "react-icons/md";
import FormInput from "../FormInput";
import FormTextarea from "../FormTextarea";

const ProductModal = (props) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"sm"}
      className="product-modal"
      onClose={() => props.setIsOpen(false)}
      open={props.isOpen}
    >
      <DialogTitle>
        <div className="product-modal-title">
          {props.title}
          <MdClear
            className="product-modal-clear-icon"
            onClick={() => props.setIsOpen(false)}
          />
        </div>
      </DialogTitle>
      <DialogContent className="product-modal-form">
        <form id="form" action="">
          <FormInput
            label="Category"
            type="text"
            value={props.product?.category}
          />
          <FormInput label="Name" type="text" value={props.product?.name} />
          <FormInput
            label="Quantity"
            type="number"
            value={props.product?.quantity}
          />
          <FormInput label="Price" type="text" value={props.product?.price} />
          <FormTextarea
            label="Description"
            value={props.product?.description}
            rows="4"
          />
        </form>
        <DialogActions>
          <Button variant="contained" onClick={() => props.setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            className="product-modal-submit-button"
            variant="contained"
            color="success"
          >
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
