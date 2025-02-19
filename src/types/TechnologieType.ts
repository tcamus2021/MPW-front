export default interface TechnologieType {
	title: string;
	description: string;
	image: string;
	additionnalData?: Omit<
		TechnologieType,
		'description' | 'additionnalData'
	>[];
}
