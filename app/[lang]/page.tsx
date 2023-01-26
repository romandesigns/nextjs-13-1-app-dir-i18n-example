import Image from "next/image";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";
export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
	const dictionary = await getDictionary(lang);
	return (
		<div>
			<LocaleSwitcher />
			<Image src="/assets/vercel.svg" width={200} height={200} alt="Vercel SVG" priority />
			<p>Current locale: {lang}</p>
			<p>This text is rendered on the server: {dictionary["server-component"].welcome}</p>
			<Counter dictionary={dictionary.counter} />
		</div>
	);
}
