import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {

    return (
        <>
            <Head>
                <title>All Ninjas | Ninja List</title>
            </Head>
            <div className="ninjas">
                <h1>All Ninjas</h1>
                {
                    ninjas.map(ninja => (
                        <div key={ninja.id}>
                            <a className={styles.single}>
                                <h3>{ninja.name}</h3>
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Ninjas;