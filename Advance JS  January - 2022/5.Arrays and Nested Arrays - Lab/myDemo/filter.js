let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
} console.log(filterItems(fruits, 'ap'));
// ['apple', 'grapes']

