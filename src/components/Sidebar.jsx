import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
             />

             <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/erison-santos.png" alt="" />

                <strong>Erison Santos</strong>
                <span>Web Developer</span>
             </div>

             <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
             </footer>
        </aside>
    )
}