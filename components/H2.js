function H2({ children, classes }) {
    return (
        <h2 className={`text-center uppercase text-3xl ${classes}`}>{children}</h2>
    );
}

export default H2;