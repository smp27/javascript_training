export const result = 35

const test = 1
export default test

export const data = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

function printData() {
    const num1 = undefined
    console.log(typeof(num1))
    
    if (typeof(num1) === 'number') {
        console.log('Data is Number')
    } else if(typeof(num1) === 'string') {
        console.log('Data is String')
    } else if (typeof(num1) === 'object') {
        console.log('Data is Object')
    } else if (typeof(num1) === 'boolean') {
        console.log('Data is Boolean')
    } else {
        console.log('Invalid Data type')
    }
    
    switch (typeof(num1)) {
        case 'number':  
            console.log('Data is Number')
            break;
        case 'string':  
            console.log('Data is String')
            break;
        case 'object':  
            console.log('Data is Object')
            break;
        case 'boolean':  
            console.log('Data is Boolean')
            break;
        case 'default':  
            console.log('Invalid Data type')
    }

}

/**
 * installing nodejs
 * running javascript code on server side
 */

/**
 * comparion operators
 * 
 *  > greater than
 *  < less than
 *  >= greater than or equals to
 *  <= less than or equals to
 *  == equal to
 *  === equal to with data type check
 * 
 */

/**
 * conditional statements
 * 
 * if
 * if-else
 * else-if ladder / nested else-if
 * switch case
 */

// printData()

