import { i18n, Locale } from "../../i18n-config";
import Navigation from "./components/Navigation";
import { getDictionary } from "./../../get-dictionary";

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
	const dicctionary = await getDictionary(params.lang as Locale);
	return (
		<html lang={params.lang}>
			<body>
				<Navigation lang={params.lang} dicctionary={dicctionary} />
				{children}
			</body>
		</html>
	);
}
