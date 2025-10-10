export default function ResumePage() {
	return (
		<main className="text-white px-4 py-8 max-w-5xl mx-auto w-full">
			<h1 className="text-3xl font-bold mb-4 text-[#FF6B35]">Resume</h1>
			<div className="w-full aspect-[8.5/11] max-h-[85vh]">
				<iframe
					title="Nneoma Resume"
					src="https://docs.google.com/document/d/1aZ_HhSM3EiI37kJ_zudm4TCVrUcVwPFNWmo_oFeJfwA/preview"
					className="w-full h-[85vh] border border-[#222] rounded"
					allowFullScreen
				/>
			</div>
            <div className="flex justify-center mt-4">
                <a 
                    href="https://docs.google.com/document/d/1aZ_HhSM3EiI37kJ_zudm4TCVrUcVwPFNWmo_oFeJfwA/export?format=pdf" 
                    download="Nneoma_Resume.pdf"
                    className="bg-[#FF6B35] text-white px-6 py-2 rounded hover:bg-[#FF6B35]/80 transition"
                >
                    Download Resume
                </a>
            </div>
		</main>
	);
}
