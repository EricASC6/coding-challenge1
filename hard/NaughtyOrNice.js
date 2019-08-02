// Title: Naughty or Nice
// 	Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:
data = 	{
			January: {
					'1': 'Naughty','2': 'Naughty', '31': 'Nice'
			},
			February: {
					'1': 'Nice','2': 'Naughty', '28': 'Nice'
			},
			
			December: {
					'1': 'Nice','2': 'Nice', '31': 'Naughty'
			}
	}
// 	Your function should return "Naughty!" or "Nice!" depending on the total number of
// 	occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"

// Months
const months = ["January", "February", "December"];

// Array Naughty/Nice
const naughty = [];  

const nice = [];
//
function naughtyOrNice(data) {
    for (let month of months) {
        for (let i of [...Object.keys(data[month])]) {
            if (data[month][i] === "Naughty") {
                naughty.push("Naughty")
            } else if (data[month][i] === "Nice") {
                nice.push("Nice")
            }
        }
    }
    result = nice.length >= naughty.length ? true: false;
    return result 
}

console.log(naughtyOrNice(data));






