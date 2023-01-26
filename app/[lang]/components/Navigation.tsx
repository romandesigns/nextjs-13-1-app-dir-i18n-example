import Link from "next/link";
import React from "react";

interface NavProps {
	lang: string;
	dicctionary: {
		nav: {
			home: string;
			about: string;
			contact: string;
		};
	};
}
const Navigation = ({ lang, dicctionary }: NavProps) => {
	return (
		<nav>
			<Link style={{ marginRight: "10px" }} href={`/${lang}`}>
				{dicctionary.nav.home}
			</Link>
			<Link style={{ marginRight: "10px" }} href={`/${lang}/about`}>
				{dicctionary.nav.about}
			</Link>
			<Link style={{ marginRight: "10px" }} href={`/${lang}/contact`}>
				{dicctionary.nav.contact}
			</Link>
		</nav>
	);
};

export default Navigation;
