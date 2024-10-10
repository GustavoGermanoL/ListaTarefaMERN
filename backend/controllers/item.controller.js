import Item from '../models/item.model.js';

//Create a new item
export const createItem = async (req, res) => {
    try {
        const { text } = req.body;
        const newItem = new Item({ text });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
};
// Get All Items
export const getItems = async (req, res) => {
    try {
        const items = await Item.find().sort({createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
};
//Update an item

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, isCompleted } = req.body;
        const updateItem = await Item.findByIdAndUpdate(
            {text, isCompleted},
            { new: true}
        );
        if(!updateItem) {
            return res.status(404).json({message: "Item not found. "});
        }
        res.json(updateItem);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
};
