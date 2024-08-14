import express from 'express';
import { Ingredient } from '../models/ingredientsModel.js';

const router = express.Router();

// Insert single ingredient
router.post('/', async (req, res) => {
    try {
        const { name, price, image } = req.body;

        if (!name || !price || !image) {
            return res.status(400).json({
                message: "Send all required fields: name, price, image",
            });
        }

        const newIngredient = { name, price, image };

        const ingredient = await Ingredient.create(newIngredient);
        return res.status(201).json(ingredient);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
});

// Insert may ingredients
router.post('/insertmany', async (req, res) => {
    try {
        const ingredients = req.body;

        if (!Array.isArray(ingredients) || ingredients.length === 0) {
            return res.status(400).json({
                message: "Send an array of ingredients with the required fields: name, price, and image.",
            });
        }

        for (let ingredient of ingredients) {
            if (!ingredient.name || !ingredient.price || !ingredient.image) {
                return res.status(400).json({
                    message: "Each ingredient must have name, price, and image fields.",
                });
            }
        }

        const insertedIngredients = await Ingredient.insertMany(ingredients);
        return res.status(201).json(insertedIngredients);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
});


// Get all ingredients
router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        return res.status(200).json({
            count: ingredients.length,
            data: ingredients,
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
});

// Get ingredient by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const ingredient = await Ingredient.findById(id);

        if (!ingredient) {
            return res.status(404).json({ message: "Ingredient not found" });
        }

        return res.status(200).json(ingredient);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
});

// Remove all ingredients
router.delete('/', async (req, res) => {
    try {

        // const { id } = req.params;
        const result = await Ingredient.deleteMany({});

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No ingredients found to delete' });
        }

        return res.status(200).send({ message: 'All ingredients deleted successfully!' });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

// Remove ingredient by id
router.delete('/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const result = await Ingredient.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Ingredient not fount' });
        }

        return res.status(200).send({ message: 'Ingredient deleted successfully!' });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

export default router;
