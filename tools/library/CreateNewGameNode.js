// Developed by Lewis / ssoq - 2024
// https://github.com/ssoq

async function CreateNewGameNode(id, coverUrl, intFormat, navigate, navType, pageType) {
    try {
        const universeId = await GetUniverseId(id);
        console.log('Universe ID:', universeId);

        const response = await fetch(`https://games.roproxy.com/v1/games?universeIds=${universeId}`);
        const data = await response.json();

        if (data.data && data.data[0]) {
            const i = data.data[0];

            const container = document.createElement('div');
            container.className = "game-node-container";

            const art = document.createElement('img');
            art.className = "game-art";
            art.src = coverUrl;

            const name = document.createElement('h2');
            name.className = "game-name";
            name.textContent = i.name;

            const active = document.createElement('p');
            active.className = "game-active";
            active.textContent = FormatInteger(parseInt(i.playing), intFormat);

            const favourites = document.createElement('p');
            favourites.className = "game-favourites";
            favourites.textContent = FormatInteger(parseInt(i.favoritedCount), intFormat);

            const visits = document.createElement('p');
            visits.className = "game-visits";
            visits.textContent = FormatInteger(parseInt(i.visits), intFormat);

            container.appendChild(art);
            container.appendChild(name);
            container.appendChild(active);
            container.appendChild(favourites);
            container.appendChild(visits);

            if (navigate === CanNavigateUser.True) {
                container.addEventListener('click', () => { OpenRobloxWebPage(pageType, id, navType); });
            }

            document.body.append(container);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

CreateNewGameNode(3260590327, "https://tr.rbxcdn.com/a96d6e2ef1e82fea54546646a10c51ac/768/432/Image/Png", TypeOfIntegerFormat.Delimiters, CanNavigateUser.True, TypeOfTarget.Blank, TypeOfPage.Game);
