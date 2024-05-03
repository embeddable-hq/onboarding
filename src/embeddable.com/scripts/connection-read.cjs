const apiKey = '...';
const connectionName = 'my-db'; 

async function run() {
    const resp = await fetch(`https://api.embeddable.com/api/v1/connections/${connectionName}`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}` /* keep your API Key secure */
        }
    });

    console.log(`${resp.status} ${resp.statusText}`);
    const json = await resp.json();
    console.log(json);
}

run();