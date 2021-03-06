import Image from "next/image";

function StackLogo({ logo, link, size }) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<div className="flex p-3 sm:p-5 bg-white rounded-full items-center justify-center sm:hover:-translate-y-3 hover:shadow-white-xl transition sm:active:translate-y-3 active:bg-gray-600">
				<Image src={logo} width={size} height={size} />
			</div>
		</a>
	);
}

export default StackLogo;
