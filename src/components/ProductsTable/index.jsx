import React, { useState } from "react";
import "./style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowsIcon from "../../assets/images/admin-table/arrows.svg";
import PencilIcon from "../../assets/images/admin-table/pencil.svg";
import TrashCanIcon from "../../assets/images/admin-table/trash-can.svg";
import ConfirmNotification from "../../components/ConfirmNotification";

function createData(id, category, name, quantity, price) {
  return { id, category, name, quantity, price };
}

const rows = [
  createData(0, "PC", "Lenovo Y50-70", 5, "25,000.00"),
  createData(1, "Clothes", "Nike M Nk Df Acd21", 22, "4,000.00"),
  createData(2, "Plumbing", "CERSANIT MITO 17", 1337, "5,000.00"),
];

const ProductsTable = () => {
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);

  const SortButton = (
    <button className="products-table-sort-button">
      <img src={ArrowsIcon} alt="Arrows"></img>
    </button>
  );

  return (
    <div className="products-table-container">
      <h2 className="products-table-title">Products</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="product-table-cell-wrapper">
                  <span>ID</span>
                  {SortButton}
                </div>
              </TableCell>
              <TableCell>
                <div className="product-table-cell-wrapper">
                  <span>Category</span>
                  {SortButton}
                </div>
              </TableCell>
              <TableCell>
                <div className="product-table-cell-wrapper">
                  <span>Name</span>
                  {SortButton}
                </div>
              </TableCell>
              <TableCell>
                <div className="product-table-cell-wrapper">
                  <span>Quantity</span>
                  {SortButton}
                </div>
              </TableCell>
              <TableCell>
                <div className="product-table-cell-wrapper">
                  <span>Price (₴)</span>
                  {SortButton}
                </div>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <button className="product-table-cell-button">
                    <img src={PencilIcon} alt="Pencil"></img>
                  </button>
                  <button
                    className="product-table-cell-button"
                    onClick={() => setisDeleteModalOpen(true)}
                  >
                    <img src={TrashCanIcon} alt="Trashcan"></img>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmNotification
        isOpen={isDeleteModalOpen}
        setIsOpen={setisDeleteModalOpen}
      />
    </div>
  );
};

export default ProductsTable;
