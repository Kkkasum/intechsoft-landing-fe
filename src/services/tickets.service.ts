import { API_URL } from '@/src/constants/env.constants'
import { ICreateTicketRequest } from '@/src/interfaces/ticket.interface'

export const ticketsCreateTicket = async (
	data: ICreateTicketRequest,
): Promise<any | null> => {
	try {
		const res = await fetch(`${API_URL}/ticket`, {
			method: 'POST',
			body: JSON.stringify(data),
		})
		return res.ok
	} catch (error) {
		console.error
	}
}
