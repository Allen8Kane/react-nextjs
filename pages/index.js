import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                    <a className="link">Main</a>
                </Link>
                <Link href="/users">
                    <a className="link">Users</a>
                </Link>
            </div>
            <h1>Main page</h1>
            <style jsx>
                {`
                  .navbar{
                    background: orange;
                    padding: 15px;
                  }
                  .link{
                    text-decoration: none;
                    margin: 3px;
                  }
                `}
            </style>
        </div>
    );
};

export default Index;