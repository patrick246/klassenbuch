export interface Notiz {
	id: string;
	date: Date;
	lehrer: string;
	schueler: string;
	text: string;
}

export function notizReviver(key, value) {
	const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
	if (typeof value === 'string' && dateFormat.test(value)) {
		return new Date(value);
	}
	return value;
}
