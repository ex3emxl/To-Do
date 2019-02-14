import { Navigation } from './navigation';
import './header.scss';

export const Header = () => (
    <header className="header">
        <p>LOGO</p>
        <Navigation list={ ['Home', 'Tasklist'] }/>
    </header>
);
