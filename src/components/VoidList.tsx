import clipBoard from '../assets/Clipboard.svg';

import styles from './VoidList.module.css';

export function VoidList() {
    return (
        <div className={styles.voidList} >
            <img src={clipBoard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </ div>
    )
}