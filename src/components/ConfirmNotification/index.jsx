import React from "react";
import "./style.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";

const ConfirmNotification = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      className="confirm-notification-background"
      onClose={() => setIsOpen(false)}
      open={isOpen}
    >
      <DialogContent>
        <Typography className="confirm-notification-title" variant="h6">
          Are u sure you want to delete this product?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmNotification;
