export default function fetchData() {
    const data = fetch("https://catfact.ninja/fact")
        .then((resp) => {
            if (!resp.ok) {
                console.log(resp);
                throw new Error(resp.statusText);
            }
            return resp.json();
        })
        .catch((err) => alert("Oops, there is no country with that name"));
    return data;
}
