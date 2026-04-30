export function validatePhone(phone: string): boolean {
	const tmpPhone = formatPhone(phone)
	if (tmpPhone.length !== 11) {
		return false
	}
	return true
}

export function formatPhone(phone: string): string {
	return phone
		.replaceAll('(', '')
		.replaceAll(')', '')
		.replaceAll('-', '')
		.replaceAll(' ', '')
		.replaceAll('+', '')
}
