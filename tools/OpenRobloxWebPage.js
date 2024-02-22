// Developed by Lewis / ssoq - 2024

const TypeOfPage =
{
    Game: "game",
    Group: "group",
    Profile: "profile"
};

const TypeOfTarget = 
{
    Blank: "_blank",
    Parent: "_parent"
};

function OpenRobloxWebPage(type, id, target)
{
    var url = "https://www.roblox.com/";

    switch (type)
    {
        case TypeOfPage.Game: url += `games/${id}`; break;
        case TypeOfPage.Group: url += `groups/${id}`; break;
        case TypeOfPage.Profile: url += `users/${id}/profile`; break;
    }

    window.open(url, target);
}
