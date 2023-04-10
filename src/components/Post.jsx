import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.Post}>
                    <img className={styles.Post} src="https://github.com/erison-santos.png" />
                    <div className={styles.authorInfo} >
                        <strong>Erison Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio às 08:13h' datetime="2023-04-09 18:37:30">Públicado há 1h</time>
            </header>
            <div className='{styles.content}'>
            <p> Fala galeraa 👋</p>

            <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p> 👉 <a href="">jane.design/doctorcare</a></p>

            <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}