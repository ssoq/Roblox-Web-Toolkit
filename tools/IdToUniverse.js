// Developed by Lewis / ssoq - 2024
// https://github.com/ssoq

async function GetUniverseId(gameId) {
    const url = `https://apis.roproxy.com/universes/v1/places/${gameId}/universe`;

    const maxRetries = 3;
    let retries = 0;

    while (retries < maxRetries) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                if (response.status === 429) {
                    const delay = Math.pow(2, retries) * 1000;
                    await new Promise(resolve => setTimeout(resolve, delay));
                    retries++;
                    continue;
                } else {
                    throw new Error(`Failed to fetch data. Status code: ${response.status}`);
                }
            }

            const jsonData = await response.json();
            const universeId = jsonData.universeId;
            return universeId;
        } catch (error) {
            retries++;
        }
    }

    throw new Error("Max retries reached. Unable to fetch data.");
}