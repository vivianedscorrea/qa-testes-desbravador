// cypress/support/dateHelper.ts
export function getToday() {
  const today = new Date()
  return today.getDate()
}

export function getDaysLater(days: number) {
  const date = new Date()
  date.setDate(new Date().getDate() + days)
  return date.getDate()
}