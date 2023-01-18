import Prismic from '@prismicio/client'

// configurando o nosso prismic
export function getPrismicClient(req?: unknown){
    const prismic = Prismic.client('https://iraquian.cdn.prismic.io/api/v2', {
        req,
    })
    return prismic;
}