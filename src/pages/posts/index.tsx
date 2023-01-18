import styles from './styles.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import thumbImg from '../../../public/images/thumb.png'
import {FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight} from 'react-icons/fi'

export default function Posts(){
    return(
        <>
        <Head>
         <title>Blog | Code Developer</title>
        </Head>  
        <main className={styles.container}>
            <div className={styles.posts}>
              <Link legacyBehavior href='/'>
                <a>
                  <Image src={thumbImg} 
                  alt="post titulo 1"
                  width={720}
                  height={410}
                  quality={100}
                  />
                  <strong>Criando o meu primeiro aplicativo</strong>
                  <time> 17/01/2023</time>
                  <p>Hoje vamos criar uma aplicação rápido e facil de uma lista de tarefas, para você organizar o seus estudos e tarefas do dia a dia</p>             
                </a>
              </Link>

              <div className={styles.buttonNavigate}>
                <div>
                  <button>
                    <FiChevronLeft size={25} color="#fff"/>
                  </button>
                  <button>
                    <FiChevronsLeft size={25} color="#fff"/>
                  </button>
                </div>
               
                <div>
                  <button>
                    <FiChevronRight size={25} color="#fff"/>
                  </button>
                  <button>
                    <FiChevronsRight size={25} color="#fff"/>
                  </button>
                </div>
             
              </div>
            </div>
        </main>
        </>
    )
}