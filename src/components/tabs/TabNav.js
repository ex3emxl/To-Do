export const TabNav = ({ tabs, selectedIndex, selectTab }) => {
    const itemClick = (event, index) => {
        event.preventDefault();
        selectTab(index);
    }

    return (
        <nav className="nav-tab">
            <ul>
                {
                    tabs.map((tab, index) => (
                        <li key={ index }
                            className={ selectedIndex === index ? 'active' : '' }
                        >
                            <a href="#"
                               onClick={ event => itemClick(event, index) }
                            >{ tab }</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};
