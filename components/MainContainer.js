import NavLink from "./NavLink";
import Head from "next/head";

const MainContainer = ({children, title, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={['Next.js practice', keywords].join(', ')}></meta>
                <title>{title}</title>
            </Head>
            <nav className="navbar">
                <NavLink href="/" text="Main"/>
                <NavLink href="/about" text="About"/>
                <NavLink href="/users" text="Users"/>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`
                  .navbar {
                    background-color: #333;
                    padding: 20px;
                  }

                  .navbar__link {
                    color: #fff;
                    text-decoration: none;
                    margin: 0 10px;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;
