import Image from "next/image";

import StackLogo from "../components/StackLogo";
import react from "../assets/stacks/react.svg";
import nextjs from "../assets/stacks/next-js.svg";
import firebase from "../assets/stacks/firebase.svg";
import adobexd from "../assets/stacks/adobe-xd.svg";
import figma from "../assets/stacks/figma.svg";

import appdev from "../assets/animations/app-dev.svg";
import uiux from "../assets/animations/ui-ux.svg";

function StuffIDo() {
	return (
		<div
			className="px-12 pt-10 bg-gray-900 text-gray-100 font-poppins"
			id="stuff i do"
		>
			<h1 className="mt-10 font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-widest">
				STUFF I DO
			</h1>

			{/* WEB AND NATIVE APPS CONTENT */}
			<h1 className="mt-16 text-xl sm:text-2xl md:text-3xl text-center tracking-widest font-medium">
				📌 Web and Native Apps
			</h1>
			<div className="mt-10 flex flex-col items-center justify-center lg:flex-row lg:justify-around lg:px-20">
				<div className="px-10 lg:px-0">
					<Image src={appdev} width={500} height={500} quality={10} />
				</div>
				<div className="mt-10 lg:mt-0">
					<div className="flex space-x-5 sm:space-x-10 lg:space-x-20">
						<StackLogo logo={react} link="https://reactnative.dev" size={100} />
						<StackLogo logo={nextjs} link="https://nextjs.org" size={100} />
						<StackLogo
							logo={firebase}
							link="https://firebase.google.com"
							size={100}
						/>
					</div>

					<div className="mt-16 font-poppins font-light space-y-5 tracking-widest sm:text-lg">
						<p>⭐️ &nbsp; Native App Developement with React Native</p>
						<p>⭐️ &nbsp; Web Development with React</p>
						<p>⭐️ &nbsp; Next.js implementation with React</p>
						<p>⭐️ &nbsp; Firebase Authentication</p>
						<p>⭐️ &nbsp; Cloud Firestore</p>
					</div>
				</div>
			</div>

			{/* UI/UX DESIGNING CONTENT */}
			<h1 className="mt-20 text-xl sm:text-2xl md:text-3xl text-center tracking-widest font-medium">
				📌 UI/UX Designing
			</h1>
			<div className="mt-10 flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-around lg:px-20">
				<div className="px-10 lg:px-0">
					<Image src={uiux} width={500} height={500} quality={10} />
				</div>
				<div className="mt-10 lg:mt-0">
					<div className="flex space-x-10 lg:space-x-20 justify-center lg:justify-start px-10">
						<StackLogo
							logo={adobexd}
							link="https://www.adobe.com/in/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=CjwKCAjw3_KIBhA2EiwAaAAlipwyHsSl0Uzwhau-eiMRBIAvnwtxckkgfoNiDLbqx6ZC4HbbeWTuIxoCUVAQAvD_BwE:G:s&s_kwcid=AL!3085!3!526748867462!e!!g!!adobe%20xd!1641846448!65452677551"
							size={100}
						/>
						<StackLogo logo={figma} link="https://www.figma.com/" size={100} />
					</div>

					<div className="mt-16 font-poppins font-light space-y-5 tracking-widest sm:text-lg">
						<p>⭐️ &nbsp; Designing responsive UI/UX</p>
						<p>
							⭐️ &nbsp; Translating requirements into polished, high-level
							designs
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StuffIDo;
