import { styles } from 'ansi-colors'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Jason Hsu</span>
            </h1>
            <p className={headerStyles.description}>
                Glad you stopped by.
            </p>
        </div>
    )
}

export default Header