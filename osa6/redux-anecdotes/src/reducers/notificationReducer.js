export const Notification = (id) => {
  return {
    type: 'NOTIFICATION',
    data: { id }
  }
}