export enum EAction {
	COMMON = 'common', // main page
	CATALOG = 'catalog',
	ITS = 'its',
	STORE = 'store',
	STUDY = 'study',
	ANNOUNCE = 'announce',
	RECORD = 'record',
}

export interface ICreateTicketRequest {
	full_name: string
	phone: string
	email?: string
	action: EAction
	comment?: string
}
