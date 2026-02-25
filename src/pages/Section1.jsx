function Section1() {
    return (
        <div>
            <h1>Section 1</h1>
            {[...Array(20)].map((_, i) => (
                <p key={i}>Section 1 Content {i + 1}</p>
            ))}
        </div>
    );
}

export default Section1;