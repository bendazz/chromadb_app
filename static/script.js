fetch("/documents")
    .then(response => response.json())
    .then(documents => {
        const list = document.getElementById("documents");
        documents.forEach(doc => {
            const item = document.createElement("li");
            item.textContent = `${doc.id}: ${doc.document}`;
            list.appendChild(item);
        });
    });

document.getElementById("search-form").addEventListener("submit", event => {
    event.preventDefault();
    const query = document.getElementById("query").value;
    fetch(`/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(results => {
            const list = document.getElementById("results");
            list.innerHTML = "";
            results.forEach(doc => {
                const item = document.createElement("li");
                item.textContent = `${doc.id} (distance ${doc.distance.toFixed(3)}): ${doc.document}`;
                list.appendChild(item);
            });
        });
});
