import { API_URL } from '@/src/constants/env.constants'
import { ICreateApplicantRequest } from '@/src/interfaces/applicants.interface'

export const applicantsCreateApplicant = async (
	data: ICreateApplicantRequest,
): Promise<any | null> => {
	try {
		const res = await fetch(`${API_URL}/applicant`, {
			method: 'POST',
			body: JSON.stringify(data),
		})
		return res.ok
	} catch (error) {
		console.error
	}
}
