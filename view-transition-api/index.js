console.log('%dconnected to html!', 'font-size: 20px; color: teal;');

function main() {
  const createMenu = () => {
    document.startViewTransition(() => {
      const menubar = document.querySelector('#menubar');
      const menus = ['menu1', 'menu2', 'menu3'];
      menubar.innerHTML = `${menus.map(menu => `<span style="padding: 5px; border: 5px; padding: 1px solid black"><a id="menubar-${menu}">${menu}</a></span>`).join('')}`;
      menus.forEach(menu => {
        const menuButton = document.querySelector(`#menubar-${menu}`);
        menuButton.addEventListener('click', () => {
          alert(`clicked ${menu}`);
        });
      });
    });
  };

  const removeMenu = () => {
    document.startViewTransition(() => {
      const menubar = document.querySelector('#menubar');
      menubar.innerHTML = '';
    });
  };

  const createContents = (event) => {
    document.startViewTransition(() => {
      const contentArea = document.querySelector('#content-area');
      contentArea.innerHTML = `
        <p>
          this is contents for view transition api.
        </p>
        `;
    });
  };

  const removeContents = () => {
    document.startViewTransition(() => {
      const contentArea = document.querySelector('#content-area');
      contentArea.innerHTML = '';
    });
  };

  const handleMenu = () => {
    const menuButton = document.querySelector('#handle-menu-btn');
    if (menuButton.textContent === 'create menu') {
      createMenu();
      menuButton.textContent = 'remove menu';
    } else {
      removeMenu();
      menuButton.textContent = 'create menu';
    }
  };

  const handleContents = () => {
    const contentsButton = document.querySelector('#handle-contents-btn');
    if (contentsButton.textContent === 'create contents') {
      createContents();
      contentsButton.textContent = 'remove contents';
    } else {
      removeContents();
      contentsButton.textContent = 'create contents';
    }
  }

  const menuButton = document.querySelector('#handle-menu-btn');
  const contentsButton = document.querySelector('#handle-contents-btn');

  menuButton.addEventListener('click', handleMenu);
  contentsButton.addEventListener('click', handleContents);
}

main();