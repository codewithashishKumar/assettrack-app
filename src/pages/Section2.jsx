function Section2() {
    return (
        <div>
            <h1>Section 2</h1>
            {[...Array(20)].map((_, i) => (
                <p key={i}>Section 2 Content {i + 1}</p>
            ))}
        </div>
    );
}

export default Section2;