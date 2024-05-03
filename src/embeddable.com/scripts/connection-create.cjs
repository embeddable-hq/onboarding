const apiKey = '...';
const connectionName = 'my-db'; 
/**
 * see db-specific examples @ https://trevorio.notion.site/Connections-API-ff4af10f7eaf4288b6952fde04e6e933
 */
const dbType = 'postgres'; // or bigquery, etc.
const credentials = {
    database: '...',
    host: '...',
    user: '...',
    password: '...'
}

async function run() {
    const resp = await fetch(`https://api.embeddable.com/api/v1/connections`, {
        method: 'POST', // POST = CREATE
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}` /* keep your API Key secure */
        },
        body: JSON.stringify({
    		name: `${connectionName}`,
    		type: dbType, 
    		credentials: credentials
        })
    });

    console.log(`${resp.status} ${resp.statusText}`);
    const json = await resp.json();
    console.log(json);
}

run();