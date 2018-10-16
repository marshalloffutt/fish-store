// Filter fish that are "on sale"

// Add fish to "Basket"

// Load Fish
$.get('../db/fishes.json')
.done((data) => {
    console.log(data);
})
.fail((error) => {
    console.log({error});
});