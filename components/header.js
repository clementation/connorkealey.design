import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState} from 'react';
import{ motion } from 'framer-motion'
import clsx from 'clsx'

import styles from '../styles/header.module.css'

export default function Header(){

    const [currentPath, setCurrentPath] = useState( useRouter().asPath)

    const Navigation = () => {

        const NavItem = ({path, children}) => {
    
            const selected = path === currentPath ? true : false
    
            return(
                <div
                onClick = {() => {console.log(selected);setCurrentPath(path)}}>
                    <Link href={path}>
                        <motion.div
                        className={styles.navItem}
                        data-selected = {selected}
                        layout>
                            {children}
                        </motion.div>
                    </Link>
                </div>
            )
        }

        return(
            <motion.div
            layout
            className={styles.navigation}>
                <NavItem path='/about'> ABOUT </NavItem>
                <NavItem path='/'> PORTFOLIO</NavItem>
                <NavItem path='/inquiries'> INQUIRIES</NavItem>
            </motion.div>
        )
    }

    return(
        <>
            <div className={styles.headerName}>
                <div className={styles.headerNameConnor}> CONNOR </div>
                <div className={styles.headerNameKealey}> KEALEY </div>
            </div>
            <Navigation />
        </>
    )
}