function Section3() {
    return (
        <div>
            <h1>Section 3</h1>
            {[...Array(20)].map((_, i) => (
                <p key={i}>Section 3 Content {i + 1}</p>
            ))}
        </div>
    );
}

export default Section3;