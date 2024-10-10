import express from "express";
import { createItem,
getItems,
updateItem,
deleteItem,
deleteAllItems
} from "..controllers/item.controller.js";

const router = express.Router();

router.post("/item", createItem);

router.get("/items", getItems);

router.put("item/:id", updateItem);

router.delete("item/:id", deleteItem);

router.delete("/items", deleteAllItems);

export default router;