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
CreateNewGameNode(9571630408, "https://tr.rbxcdn.com/ad02ebb0502100d13d2702d87f671243/768/432/Image/Png", TypeOfIntegerFormat.Delimiters, CanNavigateUser.True, TypeOfTarget.Blank, TypeOfPage.Game);
CreateNewGameNode(183364845, "https://tr.rbxcdn.com/c54936c4c6a8cf4279d63c0abf7ee44b/768/432/Image/Png", TypeOfIntegerFormat.Delimiters, CanNavigateUser.True, TypeOfTarget.Blank, TypeOfPage.Game);
CreateNewGameNode(8737899170, "https://tr.rbxcdn.com/b4f3eb329b52b3eb90185b651867471b/768/432/Image/Png", TypeOfIntegerFormat.Delimiters, CanNavigateUser.True, TypeOfTarget.Blank, TypeOfPage.Game);
CreateNewGameNode(189707, "https://tr.rbxcdn.com/a540a426f3c58ee6d773a0b47304b445/768/432/Image/Png", TypeOfIntegerFormat.Delimiters, CanNavigateUser.True, TypeOfTarget.Blank, TypeOfPage.Game);
CreateNewGameNode(6447798030, "https://tr.rbxcdn.com/1dff6f1dcf27be6899afa2b6c1b7a789/768/432/Image/Png", TypeOfIntegerFormat.Delimiters, CanNavigateUser.True, TypeOfTarget.Blank, TypeOfPage.Game);
