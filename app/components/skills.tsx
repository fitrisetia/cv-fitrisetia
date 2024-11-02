export default function Skills() {
    const skills = ['JavaScript', 'React', 'Next.js', 'Node.js', 'CSS', 'HTML'];

    return (
        <div className="container mx-auto p-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-white text-center mb-8">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="glass-card bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-300 ease-out shadow-md"
                    >
                        <span className="text-xl font-semibold text-white">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}