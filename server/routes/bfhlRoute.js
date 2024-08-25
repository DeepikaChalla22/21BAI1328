const express = require('express');
const router = express.Router();

function processData(data) {
    let numbers = [];
    let alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    return { numbers, alphabets, highestLowercase };
}

// POST /bfhl
router.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid input format. 'data' should be an array."
        });
    }

    const { numbers, alphabets, highestLowercase } = processData(data);

    res.status(200).json({
        is_success: true,
        user_id: "challa_deepika_sai_22082004",  
        email: "challadeepika2004@gmail.com",         
        roll_number: "21BAI1328",         
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

// GET /bfhl
router.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

module.exports = router;
