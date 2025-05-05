fetch("assiets/data/menu.json")
    .then(response => response.json())
    .then(listItem => {
        const menuContainer = document.getElementById("menu");
        const ul_menu = document.createElement("ul");
        ul_menu.className = "menu-list";
        listItem.forEach(item => {
         const li_menu = document.createElement("li");
            const a_menu = document.createElement("a");
            li_menu.className = "menu-item";
            a_menu.className = "menu-link";
            a_menu.href = item.path;
            a_menu.textContent = item.name;
            li_menu.appendChild(a_menu)
            if (item.subMenu) {
                const ul_sub_menu = document.createElement("ul");
                ul_sub_menu.className = "subMenu-list";
                item.subMenu.forEach(subItem => {
                    const li_subMenu = document.createElement("li");
                    const a_subMenu = document.createElement("a");
                    li_subMenu.className = "menu-item-level-2";
                    a_subMenu.className = "menu-link-level-2";
                    a_subMenu.href = subItem.path;
                    a_subMenu.textContent = subItem.name;
                    li_subMenu.appendChild(a_subMenu);
                    ul_sub_menu.appendChild(li_subMenu);
                })
                li_menu.append(ul_sub_menu);
            }
            ul_menu.appendChild(li_menu);
            menuContainer.appendChild(ul_menu);
        });

    })
    .catch(error => console.error('Error loading JSON:', error));