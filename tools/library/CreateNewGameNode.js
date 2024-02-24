// Developed by Lewis / ssoq - 2024
// https://github.com/ssoq

async function CreateNewGameNode(id, coverUrl, intFormat, navigate, navType, pageType) 
{
    const container = document.createElement('div'); container.className = "game-node-container";
    const art = document.createElement('img'); art.className = "game-art";
    const name = document.createElement('h2'); name.className = "game-name";
    const active = document.createElement('p'); active.className = "game-active";
    const favourites = document.createElement('p'); favourites.className = "game-favourites";
    const visits = document.createElement('p'); visits.className = "game-visits";

    try {
        const response = await fetch(`https://games.roproxy.com/v1/games?universeIds=${GetUniverseId(id)}`);
        const data = await response.json();

        if (data.data && data.data[0]) {
            i = await data.data[0];
            name.textContent = i.name;
            active.textContent = FormatInteger(parseInt(i.playing), intFormat);
            favourites.textContent = FormatInteger(parseInt(i.favoritedCount), intFormat);
            visits.textContent = FormatInteger(parseInt(i.visits), intFormat);
        }
    } catch (error) {
        return error;
    }

    if (navigate === CanNavigateUser.True) container.addEventListener('click', () => { OpenRobloxWebPage(pageType, id, navType); });

    document.body.append(container)
    container.appendChild(art); art.src = await coverUrl;
    container.appendChild(name);
    container.appendChild(active);
    container.appendChild(favourites);
    container.appendChild(visits);

    return container;
}

CreateNewGameNode(3260590327, "https://tr.rbxcdn.com/a96d6e2ef1e82fea54546646a10c51ac/768/432/Image/Png", TypeOfIntegerFormat.Delimiters, CanNavigateUser.True, TypeOfTarget.Blank, TypeOfPage.Game)
