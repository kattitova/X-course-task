//async function getBooks(url) {
fetch("https://mocki.io/v1/b9f3b674-eda9-4c71-a673-f99f117b6203", {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}).then((response) => {
    return response.json();
}).then((data) => console.log(data));

//console.log(books);