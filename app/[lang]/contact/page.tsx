import React from "react";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const dictionary = await getDictionary(lang);
	return <div>{dictionary.contact.sentence}</div>;
};

export default page;
