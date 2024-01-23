// GET
fetch("https://jsonplaceholder.typicode.com/guide/")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

// POST
fetch("https://jsonplaceholder.typicode.com/guide/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: "value" }),
})
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));

// PUT
fetch("https://jsonplaceholder.typicode.com/guide/", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        id: 1,
        title: "새로운 제목",
        body: "새로운 내용",
        userId: 1,
    }),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

// DELETE
fetch("https://jsonplaceholder.typicode.com/guide/", {
    method: "DELETE",
})
    .then((response) => response.json())
    .then((data) => console.log("Deleted:", data))
    .catch((error) => console.error("Error:", error));
