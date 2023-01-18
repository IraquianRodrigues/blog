import Link, {LinkProps} from "next/link"
import {ReactElement, cloneElement} from 'react'
import {useRouter} from 'next/router'

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps){
    const {asPath} = useRouter(); // se ele estiver na pagina blogo 

    // se a rota/pagina que estamos acessando for igual ao link que ele clicou, então ativamos o classname
    const className = asPath === rest.href ? activeClassName : ''; 

   return(
    <Link legacyBehavior {...rest}>
    {cloneElement(children, {
        className
    })}
    </Link>
   ) 
}