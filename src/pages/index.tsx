import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Image from 'next/image'
import techsImage from '../../public/images/techs.svg'
import { GetStaticProps } from 'next'
import {getPrismicClient} from '../services/prismic'
import Prismic from '@prismicio/client'
import {RichText} from 'prismic-dom'

type Content ={
  title: string,
  titleContent: string,
  linkAction: string,
  mobileTitle: string,
  mobileContent: string,
  mobileBanner: string,
  webTitle: string,
  webContent: string,
  webBanner: string
}

interface ContentProps {
  content: Content
}

export default function Home({content}: ContentProps){
  console.log(content)
  return (
   <>
   <Head>
    <title>Apaixonado por tecnologioa - Code Developer</title>
   </Head>
   <main className={styles.container}>
    <div className={styles.containerHeader}>
      <section className={styles.ctaText}>
        <h1>Levando você ao próximo nível!</h1>
        <span>Uma plataforma com curso que vão do zero até o profissional, na pratica, direto ao ponto aplicando oque usamos no mercado de trabalho. 👊 </span>
        <a>
          <button>
            COMEÇAR AGORA!
          </button>
        </a>     
      </section>
      
      <img src="images/banner-conteudos.png"
         alt="Conteúdos sujeito programador"
         />
    </div>

      <hr className={styles.divisor}/>

      <div className={styles.sectionContent}>
        <section>
          <h2>Aprenda a criar aplicativos para Android e iOS</h2>
          <span>você vai descobrir o jeito mais moderno de desenvolver aplicativos nativos para iOS e Android, Construindo aplicativos do zero até o profissional</span>
        </section>
          <img src="images/financasApp.png" alt='Conteúdo desenvolvimentos de apps'/>
      </div>

      <hr className={styles.divisor}/>

      <div className={styles.sectionContent}>
      <img src="images/webDev.png" alt='Conteúdo desenvolvimentos Web'/>
        <section>
          <h2>Aprenda a criar sistemas Web</h2>
          <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado de trabalho</span>
        </section>
      </div>

      <div className={styles.footerContent}>
        <Image  src={techsImage} alt="tecnologias"/>
        <h2>Mais de <span className={styles.alunos}>15mil</span> já levaram sua carreira ao proximo nível</h2>
        <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
        <a>
          <button>ACESSAR TURMA</button>
        </a>
      </div>

   </main>
   </>
  )
}

// gerando pagina estática / consumindo nossa prismic
export const getStaticProps: GetStaticProps = async () =>{
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  //console.log(response.results[0].data)

  // desconstruindo nosso objeto
  const {
    title, sub_title, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner
  } = response.results[0].data;

  // criando nossas propriedades
  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: RichText.asText(link_action),
    mobileTitle: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url
  }
 
  return{
    props:{
      content
    },
    revalidate: 60 * 2 // gerada a cada 2 minutos
  }
}