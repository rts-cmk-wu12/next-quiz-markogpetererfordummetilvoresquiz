export default function FinishPage() {
    return (
        <main
            className="relative h-screen w-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('https://i.pinimg.com/originals/8e/8c/72/8e8c72a1459ad7332b14306bea1af865.gif')"
            }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-white text-center shadow-2xl max-w-lg mx-4">
                    <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-pulse">
                        Tillykke, du er en vinder!
                    </h1>
                    <p className="text-xl">
                        Du har fået <span className="font-bold text-green-300">?</span> rigtige ud af <span className="font-bold text-green-300">?</span> - flot klaret!
                    </p>
                </div>
            </div>
        </main>
    );
}
