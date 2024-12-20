import styles from '../styles/listaProdutos.module.css';

export default function ListaProdutos({ lista }) {
    return (
        <>
            <ul className={styles.blocoLista}>
                {lista.map(produto => (
                    <li key={produto.id} className={styles.productItem}>
                        <div id='titulo'>
                            <h2>{produto.title}</h2>
                        </div>
                        <p>{produto.description}</p>
                        <p>{produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={180} />
                    </li>
                ))}
            </ul>
        </>
    );
}
